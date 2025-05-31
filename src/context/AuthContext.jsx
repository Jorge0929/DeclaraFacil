import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authServices.js'; 

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // Obtener estado inicial desde localStorage
    const initialToken = authService.getCurrentUserToken();
    const initialUser = authService.getStoredUser();

    // Inicializar estados
    const [user, setUser] = useState(initialUser);
    const [token, setToken] = useState(initialToken);
    // True si hay token, false si no
    const [isAuthenticated, setIsAuthenticated] = useState(!!initialToken); 
    // Si hay token, empezamos cargando para verificarlo
    const [isLoading, setIsLoading] = useState(!!initialToken); 
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    console.log(
        `%cAuthContext: Estado Inicial al Montar Provider%c
        Token: ${token}
        User: ${JSON.stringify(user)}
        IsAuthenticated: ${isAuthenticated}
        IsLoading: ${isLoading}`,
        'color: blue; font-weight: bold;', 'color: black;'
    );

    useEffect(() => {
        const verifyAuth = async () => {
            console.log('%cAuthContext useEffect: Iniciando verificación de token existente...', 'color: orange;');
            setIsLoading(true); // Asegurarse de que isLoading sea true al inicio de la verificación
            try {
                // Llamar a /api/auth/me
                const userData = await authService.verifyTokenAndGetUser(); 
                setUser(userData);
                setToken(authService.getCurrentUserToken());
                setIsAuthenticated(true);
                console.log('%cAuthContext useEffect: Token verificado EXITOSAMENTE.%c Usuario:', 'color: green;', 'color: black;', userData);
            } catch (err) {
                console.warn('%cAuthContext useEffect: Falló la verificación del token o no hay token válido.%c Limpiando sesión local.', 'color: red;', 'color: black;', err.message);
                authService.logout(); 
                setUser(null);
                setToken(null);
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
                console.log('%cAuthContext useEffect: Verificación finalizada.%c isLoading: false', 'color: orange;', 'color: black;');
            }
        };

        if (token) { 
            verifyAuth();
        } else {
            
            setIsLoading(false);
            setIsAuthenticated(false);
            console.log('%cAuthContext useEffect: No hay token inicial.%c isLoading: false, isAuthenticated: false', 'color: orange;', 'color: black;');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    const login = async (credentials) => {
        console.log('%cAuthContext login: Intentando iniciar sesión con:', 'color: blue;', credentials);
        setIsLoading(true);
        setError(null);
        try {
            const data = await authService.login(credentials);
            setUser(data.user);
            setToken(data.token);
            setIsAuthenticated(true);
            console.log('%cAuthContext login: Inicio de sesión EXITOSO.%c Usuario:', 'color: green;', 'color: black;', data.user, 'Token:', data.token);
            navigate('/dashboard');
            return data;
        } catch (err) {
            console.error('%cAuthContext login: ERROR en inicio de sesión.%c', 'color: red;', 'color: black;', err.message);
            setError(err.message);
            setUser(null);
            setToken(null);
            setIsAuthenticated(false);
            throw err;
        } finally {
            setIsLoading(false);
            console.log('%cAuthContext login: Proceso de login FINALIZADO.%c isLoading: false', 'color: blue;', 'color: black;');
        }
    };

    const register = async (userData) => {
        console.log('%cAuthContext register: Intentando registrar con:', 'color: blue;', userData);
        setIsLoading(true);
        setError(null);
        try {
            const data = await authService.register(userData);
            console.log('%cAuthContext register: Registro EXITOSO.%c Respuesta:', 'color: green;', 'color: black;', data);
            navigate('/login', { state: { message: data.message || '¡Registro exitoso! Por favor, inicia sesión.' } });
            return data;
        } catch (err) {
            console.error('%cAuthContext register: ERROR en registro.%c', 'color: red;', 'color: black;', err.message);
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
            console.log('%cAuthContext register: Proceso de registro FINALIZADO.%c isLoading: false', 'color: blue;', 'color: black;');
        }
    };

    const logout = () => {
        console.log('%cAuthContext logout: Ejecutando logout...', 'color: blue;');
        authService.logout();
        setUser(null);
        setToken(null);
        setIsAuthenticated(false);
        navigate('/login');
        console.log('%cAuthContext logout: Logout COMPLETADO.%c isAuthenticated: false', 'color: blue;', 'color: black;');
    };
    useEffect(() => {
        console.log('%cAuthContext State Change Monitor: isAuthenticated AHORA ES:%c ' + isAuthenticated, 'color: purple; font-weight: bold;', 'color: purple;');
    }, [isAuthenticated]);


    return (
        <AuthContext.Provider value={{ user, token, isAuthenticated, isLoading, error, login, register, logout, setError }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Importar el servicio
import * as authService from '../services/authServices.js'; 

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(authService.getStoredUser());
    const [token, setToken] = useState(authService.getCurrentUserToken());
    const [isAuthenticated, setIsAuthenticated] = useState(!!authService.getCurrentUserToken());
    //manejar estados de carga
    const [isLoading, setIsLoading] = useState(false);
    //manejar errores de autenticación
    const [error, setError] = useState(null);       
    const navigate = useNavigate();

    // verificar el token al cargar la app 
    useEffect(() => {
        const verifyAuth = async () => {
            setIsLoading(true);
            try {
                const userData = await authService.verifyTokenAndGetUser();
                setUser(userData);
                setToken(authService.getCurrentUserToken());
                setIsAuthenticated(true);
            } catch (err) {
                // Limpia localStorage si el token no es válido
                authService.logout(); 
                setUser(null);
                setToken(null);
                setIsAuthenticated(false);
            }
            setIsLoading(false);
        };

        if (token) { // Solo verificar si hay un token inicial
            verifyAuth();
        }
    }, []); // El array vacío asegura que se ejecute solo al montar

    const login = async (credentials) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await authService.login(credentials);
            setUser(data.user);
            setToken(data.token);
            setIsAuthenticated(true);
            // Redirige al dashboard después del login
            navigate('/dashboard'); 
            return data;
        } catch (err) {
            setError(err.message);
            setIsAuthenticated(false);
            // Relanza el error para que el componente lo maneje si es necesario
            throw err; 
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (userData) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await authService.register(userData);
            // Podrías redirigir a login o mostrar un mensaje de éxito
            navigate('/login', { state: { message: '¡Registro exitoso! Por favor, inicia sesión.' } });
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
        setToken(null);
        setIsAuthenticated(false);
        
        navigate('/login'); 
    };

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
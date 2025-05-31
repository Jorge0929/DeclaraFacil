import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { login, isLoading, error: authError, setError: setAuthError } = useAuth();
    const [clientError, setClientError] = useState('');
    const navigateForLocationState = useNavigate();

    const location = useLocation();
    const [successMessage, setSuccessMessage] = useState(location.state?.message || '');

    useEffect(() => {
        if (setAuthError) setAuthError(null);
        if (location.state?.message) {
            const { state } = { ...location };
            delete state?.message;
            navigateForLocationState(location.pathname, { state, replace: true });
        }
    }, [setAuthError, location, navigateForLocationState]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Login.jsx: handleSubmit INICIADO'); 
        setClientError('');
        if (setAuthError) setAuthError(null);
        setSuccessMessage('');

        if (!email || !password) {
            setClientError('Por favor, ingresa email y contraseña.');
            console.log('Login.jsx: Error - Campos obligatorios faltantes.');
            return
        }

        try {
            console.log('Login.jsx: Llamando a context.login con:', { email, password });
            await login({ email, password });
            console.log('Login.jsx: Llamada a context.login FINALIZADA');
        } catch (err) {
            console.error("Login.jsx: Error CAPTURADO en handleSubmit:", err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
                <h3 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h3>

                {successMessage && <p className="text-green-600 text-sm mb-4 text-center">{successMessage}</p>}
                {clientError && <p className="text-red-500 text-sm mb-4 text-center">{clientError}</p>}
                {authError && <p className="text-red-500 text-sm mb-4 text-center">{authError}</p>}

                <form onSubmit={handleSubmit}>
                    <InputField
                        label='Correo Electrónico' id="email" type="email"
                        placeholder="tuemail@example.com" value={email}
                        onChange={(e) => setEmail(e.target.value)} required disabled={isLoading}
                    />
                    <InputField
                        label={'Contraseña'} id="password" type="password"
                        placeholder="Contraseña" value={password}
                        onChange={(e) => setPassword(e.target.value)} required disabled={isLoading}
                    />
                    <div className="text-sm text-right mt-2">
                        <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    <div className="mt-6">
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                        </Button>
                    </div>
                    <div className="mt-6 text-center text-sm text-gray-600">
                        ¿No tienes cuenta?{' '}
                        <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Regístrate
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
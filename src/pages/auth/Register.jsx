// src/pages/auth/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Eliminé useNavigate ya que el contexto lo maneja
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    // const [error, setError] = useState(''); // Ya no es necesario para errores de API, usamos authError
    // const navigate = useNavigate(); // No es necesario aquí si el contexto maneja la navegación

    const { register, isLoading, error: authError, setError: setAuthError } = useAuth();
    const [clientError, setClientError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setClientError('');
        if (setAuthError) setAuthError(null);

        if (password !== confirmPassword) {
            setClientError('Las contraseñas no coinciden.');
            return;
        }
        if (!termsAccepted) {
            setClientError('Debes aceptar los términos y condiciones.');
            return;
        }
        if (!firstName || !lastName || !email || !password) {
            setClientError('Todos los campos son obligatorios.');
            return;
        }

        try {
            console.log('Register.jsx: Llamando a context.register con:', { nombre: `${firstName} ${lastName}`, email, password });
            await register({
                nombre: `${firstName} ${lastName}`,
                email,
                password
            });
            console.log('Register.jsx: Llamada a context.register FINALIZADA');
        } catch (err) {
            console.error("Register.jsx: Error CAPTURADO en handleSubmit:", err.message);
            // authError se actualizará automáticamente desde el contexto si el error provino de la API.
            // Si es un error diferente que quieres mostrar como clientError, puedes hacerlo:
            // if (!err.isApiError) { // Necesitarías una forma de marcar si el error es de API o no
            // setClientError(err.message);
            // }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
                <h3 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h3>

                {/* Mostrar errores del cliente Y del contexto */}
                {clientError && <p className="text-red-500 text-sm mb-4 text-center">{clientError}</p>}
                {authError && <p className="text-red-500 text-sm mb-4 text-center">{authError}</p>}

                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Nombre(s)" id="firstName" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Tu(s) nombre(s)" required
                        disabled={isLoading}
                    />
                    <InputField
                        label="Apellido(s)" id="lastName" value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Tu(s) apellido(s)" required
                        disabled={isLoading} 
                    />
                    <InputField
                        label={'Correo Electrónico'} id="email" type="email" value={email}
                        placeholder="tuemail@ejemplo.com"
                        onChange={(e) => setEmail(e.target.value)} required
                        disabled={isLoading}
                    />
                    <InputField
                        label={'Contraseña'} id="password" type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Crea una contraseña" required
                        disabled={isLoading} 
                    />
                    <InputField
                        label={'Confirmar Contraseña'} id="confirmPassword" type="password"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirma tu contraseña" required
                        disabled={isLoading} 
                    />
                    <div className="flex items-center mt-4">
                        <input
                            id="terms" name="terms" type="checkbox"
                            checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            required
                            disabled={isLoading} 
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                            Aceptar <Link to="/terms" className="text-indigo-600 hover:underline">Términos y Condiciones</Link>
                        </label>
                    </div>
                    <div className="mt-6">
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
                        </Button>
                    </div>
                    <div className="mt-6 text-center text-sm text-gray-600">
                        ¿Ya tienes cuenta?{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Inicia Sesión
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
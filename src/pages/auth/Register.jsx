import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  // Estados campo formulario
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState(''); 

  const navigate = useNavigate();

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); 

    
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return; 
    }

    if (!termsAccepted) {
      setError('Debes aceptar los términos y condiciones.');
      return; 
    }
    
    console.log('Datos para registrar (enviar al backend):');
    console.log({ firstName, lastName, email, password }); 
    alert('Registro simulado exitoso!');
    navigate('/login'); 
  };

  return (
    // Contenedor principal 
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h3>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <div className="mt-4 space-y-4">
            {/* Campo Nombre */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">Nombre(s)</label>
              <input
                type="text"
                placeholder="Tu(s) nombre(s)"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Campo Apellido */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">Apellido(s)</label>
              <input
                type="text"
                placeholder="Tu(s) apellido(s)"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Campo Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                placeholder="tuemail@ejemplo.com"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Campo Contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">Contraseña</label>
              <input
                type="password"
                placeholder="Crea una contraseña"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Campo Confirmar Contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                type="password"
                placeholder="Confirma tu contraseña"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Checkbox Términos */}
            <div className="flex items-center mt-4">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                required // El navegador puede requerir esto
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                Aceptar <Link to="/terms" className="text-indigo-600 hover:underline">Términos y Condiciones</Link> {/* Enlace simulado */}
              </label>
            </div>

            {/* Botón de Envío */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Crear Cuenta
              </button>
            </div>

            {/* Enlace a Login */}
            <div className="mt-6 text-center text-sm text-gray-600">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Inicia Sesión
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
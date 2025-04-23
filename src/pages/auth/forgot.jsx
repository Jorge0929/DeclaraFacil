import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    // Validación simple 
    if (!email) {
      setError('Por favor, ingresa tu correo electrónico.');
      return;
    }

    console.log('Solicitando recuperación para:', email);

    // Simulación para fron:
    setMessage('Si existe una cuenta asociada a este correo, recibirás un enlace para restablecer tu contraseña en breve.');
    setEmail(''); 

  };

  return (
    // Contenedor principal 
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

       {/* Header simple opcional o botón de volver */}
       <div className="w-full max-w-md px-8 pt-6 flex justify-start">
          <Link to="/login" className="text-gray-600 hover:text-gray-900">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
             </svg>
          </Link>
       </div>

      {/* Tarjeta del formulario */}
      <div className="px-8 pb-8 pt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Recuperar Contraseña</h3>

        {message && <p className="text-green-600 text-sm mb-4 text-center">{message}</p>}
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {/* Formulario */}
        {!message && ( // Oculta el formulario si ya se mostró el mensaje de éxito
          <form onSubmit={handleSubmit}>
            <div className="mt-4 space-y-4">
              {/* Campo Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Correo Electrónico
                </label>
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

              {/* Botón de Envío */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Enviar enlace de recuperación
                </button>
              </div>
            </div>
          </form>
        )}
         {/* Enlace opcional para volver a Login si ya envió el correo */}
         {message && (
           <div className="mt-6 text-center">
             <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Volver a Inicio de Sesión
             </Link>
           </div>
         )}
      </div>
    </div>
  );
}

export default ForgotPassword;
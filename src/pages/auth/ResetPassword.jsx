import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Efecto para leer el token de la URL cuando el componente se monta
  useEffect(() => {
    const resetToken = searchParams.get('token'); // Buscar parámetro 'token'
    if (resetToken) {
      setToken(resetToken);
      console.log("Token encontrado:", resetToken); //depuración
    } else {
      setError('Token de recuperación no encontrado o inválido. Por favor, solicita un nuevo enlace.');
    }
  }, [searchParams]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    // Validaciones
    if (!password || !confirmPassword) {
      setError('Por favor, completa ambos campos de contraseña.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    if (!token) {
        setError('No se encontró un token válido para restablecer la contraseña.');
        return;
    }

    setIsLoading(true); // Inicia estado de carga
    console.log('Intentando restablecer contraseña con token:', token);

    await new Promise(resolve => setTimeout(resolve, 1500)); // Simula espera de API
    setIsLoading(false);
    setMessage('¡Contraseña actualizada con éxito! Redirigiendo a inicio de sesión...');
    setTimeout(() => navigate('/login'), 2000); // Redirige a login

  };


  const showForm = token && !message;

  return (
    // Contenedor principal centrado
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <div className="w-full max-w-md px-8 pt-6 flex justify-center mb-4">

          <span className="font-bold text-xl text-indigo-600">ContApp</span>
       </div>

      <div className="px-8 py-6 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Restablecer Contraseña</h3>

        {/* Mensajes usuario */}
        {message && <p className="text-green-600 text-lg mb-4 text-center font-semibold">{message}</p>}
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {/* Formulario*/}
        {showForm && (
          <form onSubmit={handleSubmit}>
            <div className="mt-4 space-y-4">
              {/*Nueva Contraseña */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  placeholder="Introduce tu nueva contraseña"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/*Confirmar Nueva Contraseña */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                  Confirmar Nueva Contraseña
                </label>
                <input
                  type="password"
                  placeholder="Confirma tu nueva contraseña"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Botón de Envío */}
              <div className="mt-6">
                <button
                  type="submit"
                  className={`w-full px-6 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading} // Deshabilita mientras carga
                >
                  {isLoading ? 'Restableciendo...' : 'Restablecer Contraseña'}
                </button>
              </div>
            </div>
          </form>
        )}
         {/* Enlace para volver a login si hay error de token o después de éxito */}
         {!showForm && !isLoading && (
            <div className="mt-6 text-center">
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Ir a Inicio de Sesión
              </Link>
            </div>
          )}
      </div>
    </div>
  );
}

export default ResetPassword;
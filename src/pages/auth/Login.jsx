import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 

function Login() {
  // Estados para los inputs usando Hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  // Manejador del formulario
  const handleSubmit = async (event) => { 
    event.preventDefault();

    console.log('Datos para enviar al backend:');
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulación para fron:
    alert('Inicio de sesión simulado exitoso! Redirigiendo...');
    navigate('/dashboard'); 
  };

  return (
    // Contenedor principal
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md"> 
        <h3 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h3>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
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
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Enlace Olvidé Contraseña */}
            <div className="text-sm text-right mt-2">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Botón de Envío */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Iniciar Sesión
              </button>
            </div>

            {/* Enlace a Registro */}
            <div className="mt-6 text-center text-sm text-gray-600">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Regístrate
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
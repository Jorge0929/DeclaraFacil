import React from 'react';
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    // Contenedor principal
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Bienvenido a ContApp
      </h1>

      {/* Subtítulo */}
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Simplifica tu declaración de renta. Te guiamos paso a paso.
      </p>

      {/* Botón Registro*/}
      <div className="mb-4 w-full max-w-xs">
        <Link
          to="/register" 
          className="block w-full px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          Registrarse
        </Link>
      </div>

      {/* Enlace Iniciar Sesión */}
      <div className="w-full max-w-xs">
        <Link
          to="/login"
          className="text-base font-medium text-indigo-600 hover:text-indigo-500"
        >
          Iniciar Sesión
        </Link>
      </div>

    </div>
  );
}

export default Home;
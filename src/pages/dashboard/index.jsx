import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  // --- Simular Datos 
  const [userName, setUserName] = useState('Ana'); 
  const [declarationStatus, setDeclarationStatus] = useState('En preparación (Paso 2 de 5)');
  const [taxYear, setTaxYear] = useState(new Date().getFullYear() - 1);
  const [dueDate, setDueDate] = useState('30/09/2025');
  // -----------------------------------------------------------------------

  const handleContinueDeclaration = () => {
    navigate('/declaration'); 
  };

  const handleOpenChat = () => {
    //lógica modal o interfaz de chat
    alert('Abrir Chatbot (lógica pendiente)');
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Hola {userName}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Estado Declaración {taxYear}</h2>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Estado:</span> {declarationStatus}
          </p>
       
          <p className="text-gray-600 mb-4">
            <span className="font-medium">Fecha Límite:</span> {dueDate}
          </p>
          <button
            onClick={handleContinueDeclaration}
            className="w-full sm:w-auto px-6 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continuar Preparación
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Guía: Consultar Datos DIAN</h3>
          <Link
            to="/dian-guide" // Ruta a tu componente DianGuide.jsx
            className="block text-center w-full sm:w-auto px-5 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Consultar Guía
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
           <h3 className="text-lg font-semibold text-gray-700 mb-3">Asistente Virtual</h3>
           <button
             onClick={handleOpenChat}
             className="w-full sm:w-auto px-5 py-2 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
           >
             Abrir Chat
           </button>
        </div>

      </div>


    </div>
  );
}

export default Dashboard;
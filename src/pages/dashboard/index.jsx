// src/pages/dashboard/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// --- Importar Componentes Reutilizables ---
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card'; // Importa el nuevo Card
// --- Fin Importaciones ---


function Dashboard() {
  const navigate = useNavigate();
  // ... (estados simulados como antes) ...
  const [userName, setUserName] = useState('Ana');
  const [declarationStatus, setDeclarationStatus] = useState('En preparación (Paso 2 de 5)');
  const [taxYear, setTaxYear] = useState(new Date().getFullYear() - 1);
  const [dueDate, setDueDate] = useState('30/09/2025');

  const handleContinueDeclaration = () => navigate('/declaration');
  const handleOpenChat = () => alert('Abrir Chatbot (lógica pendiente)');

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Hola {userName}
      </h1>

      {/* Contenedor para las tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Tarjeta Principal: Estado Declaración (Usando Card) */}
        {/* Pasa la clase 'md:col-span-2' al Card para que ocupe más espacio */}
        <Card title={`Estado Declaración ${taxYear}`} className="md:col-span-2">
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Estado:</span> {declarationStatus}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-medium">Fecha Límite:</span> {dueDate}
          </p>
          {/* Usa el componente Button */}
          <Button onClick={handleContinueDeclaration} className="w-full sm:w-auto">
            Continuar Preparación
          </Button>
        </Card>

        {/* Tarjeta Acceso Rápido: Guía DIAN (Usando Card) */}
        <Card title="Guía: Consultar Datos DIAN" className="flex flex-col justify-between"> 
           <Button onClick={() => navigate('/dian-guide')} className="w-full" variant="success">Consultar Guía</Button> 
        </Card>

        {/* Tarjeta Acceso Rápido: Asistente Virtual (Usando Card) */}
        <Card title="Asistente Virtual" className="flex flex-col justify-between"> {/* Añadido flex */}
            {/* Usa el componente Button */}
           <Button onClick={handleOpenChat} className="w-full" variant="success"> {/* Asumiendo una variante 'success' o usa 'secondary' */}
             Abrir Chat
           </Button>
        </Card>

      </div>
    </div>
  );
}

export default Dashboard;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

function Dashboard() {
  const navigate = useNavigate();

  // --- Estados Simulados (como antes) ---
  const [userName, setUserName] = useState('Ana');
  const [declarationStatus, setDeclarationStatus] = useState('En preparación (Paso 2 de 5)');
  const [taxYear, setTaxYear] = useState(new Date().getFullYear() - 1);
  const [dueDate, setDueDate] = useState('30/09/2025');


  const handleContinueDeclaration = () => navigate('/declaration');

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Hola {userName}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Tarjeta Estado Declaración */}
        <Card title={`Estado Declaración ${taxYear}`} className="md:col-span-2">
          {/* ... contenido ... */}
          <Button onClick={handleContinueDeclaration} className="w-full sm:w-auto">
            Continuar Preparación
          </Button>
        </Card>

        {/* Tarjeta Guía DIAN */}
        <Card title="Guía: Consultar Datos DIAN" className="flex flex-col justify-between">
          <Link to="/dian-guide">
            <Button className="w-full" variant="secondary">Consultar Guía</Button>
          </Link>
        </Card>

        {/* Tarjeta Asistente Virtual */}
        <Card title="Asistente Virtual" className="flex flex-col justify-between">
           <Button onClick={() => navigate('/support')} className="w-full" variant="success">
             Abrir Chat
           </Button>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
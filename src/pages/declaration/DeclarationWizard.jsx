// src/pages/declaration/DeclarationWizard.jsx
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// Componente de indicador de progreso
const ProgressIndicator = ({ currentPath }) => {
    const steps = [
        '/declaration/personal-data',
        '/declaration/income',
        '/declaration/deductions',
        '/declaration/summary',
        '/declaration/instructions',
    ];
    const currentIndex = steps.findIndex(step => currentPath.includes(step));
    return <div className="mb-4 text-sm text-gray-500">Progreso: Paso {currentIndex >= 0 ? currentIndex + 1 : 1} de {steps.length}</div>;
}


function DeclarationWizard() {
  //ESTADO GLOBAL DEL FORMULARIO 
  const [declarationData, setDeclarationData] = useState({
    personalData: {},
    income: {},
    deductions: {},
  });

  // Para saber la ruta actual para el indicador
  const location = useLocation(); 

  //  actualizar los datos de un paso
  const updateStepData = (stepName, data) => {
    setDeclarationData(prevData => ({
      ...prevData,
      [stepName]: data,
    }));
    console.log("Datos actualizados:", stepName, data);
  };

  return (
    <div className="max-w-3xl mx-auto"> 
      <h1 className="text-2xl font-bold mb-2">Preparar Declaración de Renta</h1>
      <ProgressIndicator currentPath={location.pathname} />

      <Outlet context={{ updateStepData, declarationData }} />
    </div>
  );
}

export default DeclarationWizard;
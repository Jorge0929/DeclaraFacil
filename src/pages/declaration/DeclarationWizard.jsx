// src/pages/declaration/DeclarationWizard.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { createDeclaration } from '../../services/declarationService';
import {useNavigate } from 'react-router-dom'; 

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
    const [declarationData, setDeclarationData] = useState({
        personalData: {},
        income: {},
        deductions: {},
        summaryData: {}, // Para guardar el resumen calculado por el frontend si lo deseas
        añoFiscal: new Date().getFullYear() -1, // Ejemplo, o obtén esto de alguna parte
        // Puedes añadir un campo para el ID de la declaración si estás editando
        // _id: null,
    });

    //redirigir
    const navigate = useNavigate(); 

    // Estados para el proceso de envío de la declaración
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const updateStepData = (stepName, data) => {
        console.log(`DeclarationWizard: Actualizando datos para ${stepName}`, data);
        setDeclarationData(prevData => ({
            ...prevData,
            [stepName]: data,
        }));
    };

    // manejar el envio final
    const handleFinalSubmitDeclaration = async () => {
        console.log('DeclarationWizard: Intentando enviar declaración completa:', declarationData);
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const payload = {
                añoFiscal: declarationData.añoFiscal,
                datosPersonales: declarationData.personalData,
                ingresos: declarationData.income,
                deducciones: declarationData.deductions,
                resumenEstimado: declarationData.summaryData, 
            };

            // Llama al servicio
            const result = await createDeclaration(payload); 
            console.log('DeclarationWizard: Declaración guardada exitosamente!', result);
            // Redirigir al historial
            navigate('/history'); 

        } catch (err) {
            console.error('DeclarationWizard: Error al enviar la declaración:', err);
            setSubmitError(err.message || 'Ocurrió un error al guardar la declaración.');
            // El error se mostrará en el componente que lo necesite 
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-2">Preparar Declaración de Renta</h1>

            {/* Pasamos la nueva función y estados al contexto del Outlet */}
            <Outlet context={{
                updateStepData,
                declarationData,
                handleFinalSubmitDeclaration, 
                isSubmitting,                 
                submitError                 
            }} />
        </div>
    );
}

export default DeclarationWizard;

import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';

function Step3_Deductions() {
  const navigate = useNavigate();
  const { updateStepData, declarationData } = useOutletContext();

  const [deductionsData, setDeductionsData] = useState(declarationData.deductions || {
    aportesSalud: '',
    interesesVivienda: '',
    medicinaPrepagada: '',
    dependientes: '',
    donaciones: '',
    retencionesFuente: '',
  });

   const [errors, setErrors] = useState({});

   useEffect(() => {
    if (declarationData.deductions) {
      setDeductionsData(declarationData.deductions);
    }
  }, [declarationData.deductions]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, '');
    setDeductionsData(prev => ({ ...prev, [name]: numericValue }));
     if (errors[name]) {
      setErrors(prev => ({...prev, [name]: null}));
    }
  };

  const handleNextStep = () => {
    console.log('Datos Deducciones:', deductionsData);
    // Validación
    updateStepData('deductions', deductionsData);
    // Navegar al resumen
    navigate('/declaration/summary');
  };

  const handlePreviousStep = () => {
     updateStepData('deductions', deductionsData);
     navigate('/declaration/income'); 
  };

   const handleSaveAndExit = () => {
     updateStepData('deductions', deductionsData);
     console.log('Guardando deducciones y saliendo...');
     navigate('/dashboard');
  };


  return (
     <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">

       <div className="mb-6 border-b pb-4">
         <p className="text-sm font-medium text-indigo-600 mb-1">Paso 3 de N</p>
         <h2 className="text-2xl font-bold text-gray-800">Deducciones y Retenciones</h2>
       </div>

       <div className="mb-6 p-4 border border-yellow-300 bg-yellow-50 rounded-md">
            <p className="text-sm text-yellow-700">
                <span className="font-semibold">Importante:</span> Consulta tus certificados de retenciones, pagos de salud, créditos hipotecarios, donaciones y otros soportes para ingresar los valores correctos. Verifica también la información exógena de la DIAN.
            </p>
       </div>

      {/* Formulario */}
       <div className="space-y-4">
            <InputField label="Aportes Obligatorios a Salud" id="aportesSalud" name="aportesSalud" type="number"
              placeholder="0" value={deductionsData.aportesSalud} onChange={handleInputChange}/>
             <InputField label="Intereses Pagados por Crédito de Vivienda" id="interesesVivienda"
              name="interesesVivienda" type="number" placeholder="0" value={deductionsData.interesesVivienda}
              onChange={handleInputChange}/>
             <InputField label="Pagos por Medicina Prepagada" id="medicinaPrepagada" name="medicinaPrepagada"
              type="number" placeholder="0" value={deductionsData.medicinaPrepagada} onChange={handleInputChange}/>
            <InputField label="Deducción por Dependientes Económicos" id="dependientes" name="dependientes"
              type="number" placeholder="0" value={deductionsData.dependientes} onChange={handleInputChange} />
             <InputField label="Donaciones Realizadas" id="donaciones" name="donaciones" type="number"
              placeholder="0" value={deductionsData.donaciones} onChange={handleInputChange}/>
            <InputField label="Total Retenciones en la Fuente que te Practicaron" id="retencionesFuente"
              name="retencionesFuente" type="number" placeholder="0" value={deductionsData.retencionesFuente}
              onChange={handleInputChange} required />
        </div>

       {/* Botones de Navegación */}
       <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
        <Button onClick={handlePreviousStep} variant="secondary">
          Atrás
        </Button>
        <Button onClick={handleSaveAndExit} variant="secondary">
          Guardar y Salir
        </Button>
        <Button onClick={handleNextStep} variant="primary">
          Siguiente (Resumen)
        </Button>
      </div>
     </div>
  );
}

export default Step3_Deductions;
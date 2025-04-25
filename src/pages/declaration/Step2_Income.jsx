import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';

function Step2_Income() {
  const navigate = useNavigate();
  const { updateStepData, declarationData } = useOutletContext();

  // Estado local para los campos de este paso
  const [incomeData, setIncomeData] = useState(declarationData.income || {
    salarios: '',
    honorarios: '',
    rentasCapital: '',
    rentasNoLaborales: '',
    pensiones: '',
  });

  const [errors, setErrors] = useState({});

  // Cargar datos iniciales
  useEffect(() => {
    if (declarationData.income) {
      setIncomeData(declarationData.income);
    }
  }, [declarationData.income]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Permitir números para campos monetarios
    const numericValue = value.replace(/[^0-9]/g, '');
    setIncomeData(prev => ({ ...prev, [name]: numericValue }));
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: null}));
    }
  };

  const handleNextStep = () => {
    console.log('Datos Ingresos:', incomeData);
    updateStepData('income', incomeData);
    navigate('/declaration/deductions');
  };

  const handlePreviousStep = () => {
     // Guarda datos actuales antes de retroceder 
     updateStepData('income', incomeData);
     // Navegar al paso anterior
     navigate('/declaration/personal-data'); 
  };

  const handleSaveAndExit = () => {
    // Guardar antes de salir
     updateStepData('income', incomeData); 
     console.log('Guardando ingresos y saliendo...');
     navigate('/dashboard');
  };


  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
      {/* Indicar de Paso y Título */}
      <div className="mb-6 border-b pb-4">
        <p className="text-sm font-medium text-indigo-600 mb-1">Paso 2 de 5</p> {/* Ajusta N */}
        <h2 className="text-2xl font-bold text-gray-800">Ingresos</h2>
      </div>

       {/* Recuadro Destacado con Guía */}
       <div className="mb-6 p-4 border border-yellow-300 bg-yellow-50 rounded-md">
            <p className="text-sm text-yellow-700">
                <span className="font-semibold">Importante:</span> Verifica estos valores con tu 'Información Exógena' consultada en el portal DIAN y tus certificados de ingresos. Ingresa aquí los valores correctos según tu realidad económica.
            </p>
       </div>

      {/* Formulario */}
      <div className="space-y-4">
        <InputField
          label="Ingresos por Salarios, Prestaciones Sociales y Asimilados"
          id="salarios"
          name="salarios"
          type="number"
          placeholder="0"
          value={incomeData.salarios}
          onChange={handleInputChange}
          // required (depende de si siempre hay que poner 0)
        />
        <InputField
          label="Ingresos por Honorarios y Compensación de Servicios Personales"
          id="honorarios"
          name="honorarios"
          type="number"
          placeholder="0"
          value={incomeData.honorarios}
          onChange={handleInputChange}
        />
         <InputField
          label="Ingresos por Rentas de Capital (Intereses, Arrendamientos, etc.)"
          id="rentasCapital"
          name="rentasCapital"
          type="number"
          placeholder="0"
          value={incomeData.rentasCapital}
          onChange={handleInputChange}
        />
         <InputField
          label="Ingresos por Rentas No Laborales (Dividendos, Otros)"
          id="rentasNoLaborales"
          name="rentasNoLaborales"
          type="number"
          placeholder="0"
          value={incomeData.rentasNoLaborales}
          onChange={handleInputChange}
        />
         <InputField
          label="Ingresos por Pensiones (Jubilación, Invalidez, Sobrevivientes)"
          id="pensiones"
          name="pensiones"
          type="number"
          placeholder="0"
          value={incomeData.pensiones}
          onChange={handleInputChange}
        />
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
          Siguiente
        </Button>
      </div>
    </div>
  );
}

export default Step2_Income;
import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../components/ui/Button';

function DeclarationSummary() {
  const navigate = useNavigate();
  const { declarationData, updateStepData } = useOutletContext(); 

  const [summary, setSummary] = useState({
    rentaLiquidaCedular: null, 
    impuestoACargo: null,      
    saldoAPagar: null,       
    saldoAFavor: null          
  });
  const [isCalculating, setIsCalculating] = useState(true);

  //  Efecto para calcular el resumen cuando los datos estén listos ---
  useEffect(() => {
    setIsCalculating(true);
    console.log('Calculando resumen con datos:', declarationData);

    // Simulación del cálculo:
    const timer = setTimeout(() => {
       const simulatedIncome = parseFloat(declarationData.income?.salarios || 0) + parseFloat(declarationData.income?.honorarios || 0);
       const simulatedDeductions = parseFloat(declarationData.deductions?.aportesSalud || 0) + parseFloat(declarationData.deductions?.interesesVivienda || 0);
       const simulatedRetenciones = parseFloat(declarationData.deductions?.retencionesFuente || 0);
       const baseGravable = Math.max(0, simulatedIncome - simulatedDeductions);
       const impuestoCalculado = baseGravable * 0.19; 
       const saldoFinal = impuestoCalculado - simulatedRetenciones;

      setSummary({
        rentaLiquidaCedular: `\$ ${baseGravable.toLocaleString('es-CO')}`, 
        impuestoACargo: `\$ ${impuestoCalculado.toLocaleString('es-CO')}`, 
        saldoAPagar: saldoFinal > 0 ? `\$ ${saldoFinal.toLocaleString('es-CO')}` : '$ 0', 
        saldoAFavor: saldoFinal < 0 ? `\$ ${Math.abs(saldoFinal).toLocaleString('es-CO')}` : '$ 0' 
      });
      setIsCalculating(false);
    }, 1500);

    return () => clearTimeout(timer); 
  }, [declarationData]); // Se recalcula si los datos cambian


  const handlePreviousStep = () => {

    navigate('/declaration/deductions'); 
  };

   const handleSaveDraft = () => {
     console.log('Guardando borrador completo:', declarationData, 'Resumen:', summary);
     alert('Borrador guardado (simulado).');
   };

   const handleGoToInstructions = () => {
        // Navega a la pantalla de instrucciones
      navigate('/declaration/instructions'); 
   };


  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
      {/* Indicador de Paso y Título */}
      <div className="mb-6 border-b pb-4">
        <p className="text-sm font-medium text-indigo-600 mb-1">Resumen Final</p>
        <h2 className="text-2xl font-bold text-gray-800">Resumen de tu Borrador</h2>
      </div>

      {isCalculating ? (
         <div className="text-center py-10">
             <p className="text-gray-500">Calculando tu resumen...</p>
         </div>
      ) : (
         <>
           {/* Sección de Resultados del Cálculo */}
           <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-md border">
             <h3 className="text-lg font-semibold text-gray-700 mb-2">Resultado (Estimado)</h3>
             <p><span className="font-medium">Renta Líquida Cedular (Base):</span> {summary.rentaLiquidaCedular ?? 'N/A'}</p>
             <p><span className="font-medium">Impuesto a Cargo:</span> {summary.impuestoACargo ?? 'N/A'}</p>
             <p className="font-bold text-xl mt-2">
               {summary.saldoAPagar && summary.saldoAPagar !== '$ 0'
                 ? `Saldo a Pagar: ${summary.saldoAPagar}`
                 : summary.saldoAFavor && summary.saldoAFavor !== '$ 0'
                 ? `Saldo a Favor: ${summary.saldoAFavor}`
                 : 'Sin saldo a pagar ni a favor'}
             </p>
             <p className="text-xs text-gray-500 mt-2">Este es un cálculo estimado basado en la información proporcionada. La liquidación final la realiza la DIAN.</p>
           </div>

           {/* Placeholder para Previsualización del Borrador */}
           <div className="mb-6 p-4 border border-dashed border-gray-400 text-center text-gray-500 bg-gray-50 rounded">
             [Placeholder: Aquí se podría mostrar una previsualización simplificada del Formulario 210]
           </div>

         </>
      )}


      {/* Botones de Navegación */}
       <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3">
         <Button onClick={handlePreviousStep} variant="secondary" disabled={isCalculating}>
           Atrás
         </Button>
         <Button onClick={handleSaveDraft} variant="secondary" disabled={isCalculating}>
           Guardar Borrador
         </Button>
         <Button onClick={handleGoToInstructions} variant="primary" disabled={isCalculating}>
           Ver Instrucciones para Presentar en DIAN
         </Button>
      </div>
    </div>
  );
}

export default DeclarationSummary;
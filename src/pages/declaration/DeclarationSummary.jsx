import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../components/ui/Button';

function DeclarationSummary() {
    const navigate = useNavigate();
    
    // OBTENEMOS LAS NUEVAS PROPS DEL CONTEXTO DEL OUTLET
    const {
        declarationData,handleFinalSubmitDeclaration,isSubmitting,submitError } = useOutletContext();

    const [summary, setSummary] = useState({
        rentaLiquidaCedular: null,
        impuestoACargo: null,
        saldoAPagar: null,
        saldoAFavor: null
    });
    const [isCalculating, setIsCalculating] = useState(true);

    useEffect(() => {
        setIsCalculating(true);
        console.log('Calculando resumen con datos:', declarationData);

        const timer = setTimeout(() => {
            const simulatedIncome = parseFloat(declarationData.income?.salarios || 0) + parseFloat(declarationData.income?.honorarios || 0);
            const simulatedDeductions = parseFloat(declarationData.deductions?.aportesSalud || 0) + parseFloat(declarationData.deductions?.interesesVivienda || 0);
            const simulatedRetenciones = parseFloat(declarationData.deductions?.retencionesFuente || 0);
            const baseGravable = Math.max(0, simulatedIncome - simulatedDeductions);
            const impuestoCalculado = baseGravable * 0.19;
            const saldoFinal = impuestoCalculado - simulatedRetenciones;

            const newSummary = { // Guardar el resumen en el estado del Wizard
                rentaLiquidaCedular: `$ ${baseGravable.toLocaleString('es-CO')}`,
                impuestoACargo: `$ ${impuestoCalculado.toLocaleString('es-CO')}`,
                saldoAPagar: saldoFinal > 0 ? `$ ${saldoFinal.toLocaleString('es-CO')}` : '$ 0',
                saldoAFavor: saldoFinal < 0 ? `$ ${Math.abs(saldoFinal).toLocaleString('es-CO')}` : '$ 0'
            };
            setSummary(newSummary);
            setIsCalculating(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [declarationData]);


    const handlePreviousStep = () => {
        navigate('/declaration/deductions');
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
            <div className="mb-6 border-b pb-4">
                <p className="text-sm font-medium text-indigo-600 mb-1">Resumen Final</p>
                <h2 className="text-2xl font-bold text-gray-800">Resumen de tu Borrador</h2>
            </div>

            {/* Mostrar error de envío si existe */}
            {submitError && <p className="text-red-500 text-sm mb-4 text-center">{submitError}</p>}

            {isCalculating ? (
                <div className="text-center py-10">
                    <p className="text-gray-500">Calculando tu resumen...</p>
                </div>
            ) : (
                <>
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
                    <div className="mb-6 p-4 border border-dashed border-gray-400 text-center text-gray-500 bg-gray-50 rounded">
                        [Placeholder: Aquí se podría mostrar una previsualización simplificada del Formulario 210]
                    </div>
                </>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3">
                <Button
                    onClick={handlePreviousStep}
                    variant="secondary"
                    disabled={isCalculating || isSubmitting} 
                >
                    Atrás
                </Button>
                {/* Este botón ahora llamará a la función del Wizard para enviar al backend */}
                <Button
                    onClick={handleFinalSubmitDeclaration} // ¡USA LA FUNCIÓN DEL WIZARD!
                    variant="primary"
                    disabled={isCalculating || isSubmitting}
                >
                    {isSubmitting ? 'Guardando Borrador...' : 'Finalizar y Guardar Borrador'}
                </Button>
                {/* Botón separado para ir a instrucciones */}
                <Button
                    onClick={() => navigate('/declaration/instructions')}
                    variant="secondary" 
                    disabled={isSubmitting} 
                >
                    Ver Instrucciones DIAN
                </Button>
            </div>
        </div>
    );
}

export default DeclarationSummary;
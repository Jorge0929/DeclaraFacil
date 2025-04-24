import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

function DeclarationInstructions() {
  const navigate = useNavigate();

  const instructions = [
    "Ingresa al portal oficial DIAN Muisca con tu usuario o Firma Electrónica.",
    "Busca la opción 'Diligenciar y Presentar Formulario 210' para el año gravable correspondiente.",
    "Diligencia el formulario oficial. Utiliza los valores del 'Borrador ContApp' que preparaste como guía para cada casilla.",
    "Verifica cuidadosamente toda la información ingresada en el formulario de la DIAN antes de continuar.",
    "Una vez verificado, procede a 'Firmar' la declaración usando tu Firma Electrónica.",
    "Después de firmar, selecciona la opción 'Presentar'.",
    "Descarga y guarda de forma segura el certificado oficial de la declaración presentada que genera la DIAN.",
    "Si tu declaración generó un 'Saldo a Pagar', genera el recibo oficial de pago (Formulario 490) en el portal DIAN.",
    "Realiza el pago a través de los medios electrónicos ofrecidos por la DIAN o imprimiendo el recibo para pagar en bancos autorizados antes de la fecha límite."
  ];

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
        Cómo Presentar tu Declaración en el Portal DIAN
      </h1>

      <p className="text-base text-gray-600 mb-6 leading-relaxed">
        ¡Excelente! Has completado la preparación de tu borrador con ContApp. Ahora, sigue estos pasos finales para presentar tu declaración oficial directamente en la plataforma Muisca de la DIAN:
      </p>

      {/* Lista Numerada de Instrucciones */}
      <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8 pl-4">
        {instructions.map((step, index) => (
          <li key={index} className="mb-1">{step}</li>
        ))}
      </ol>

       {/* Sección Recursos  */}
       <div className="mb-8 p-4 border border-blue-200 bg-blue-50 rounded-md">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Recursos Útiles</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
                <li><a href="https://www.dian.gov.co/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Portal DIAN</a></li>
                <li><a href="[Enlace específico a ayuda DIAN si existe]" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Guías Oficiales DIAN (Ejemplo)</a></li>
            </ul>
       </div>


      {/* Botón Final */}
      <div className="text-center mt-8 pt-6 border-t">
        <Button onClick={handleGoToDashboard} variant="primary">
          Entendido / Volver al Dashboard
        </Button>
      </div>

    </div>
  );
}

export default DeclarationInstructions;
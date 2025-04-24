import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import PaymentModal from '../../components/billing/PaymentModal';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

function Plans() {
  const navigate = useNavigate();

  // Simulación del plan actual del usuario 
  const [currentPlan, setCurrentPlan] = useState('free'); 

  const freePlanFeatures = [
    "Cálculo declaración básica",
    "Guía paso a paso",
    "Asistente Chatbot (Respuestas básicas)",
    "Soporte Comunitario",
  ];

  const premiumPlanFeatures = [
    "Todo lo del plan Gratuito",
    "Validaciones Avanzadas IA",
    "Soporte Prioritario (Chat/Email)",
    "Almacenamiento Seguro de Documentos",
    "Reportes Personalizados",
  ];

  const premiumPrice = "$100.000 COP / Mes"; 
  
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleUpgradeClick = () => {
    console.log('Abriendo modal de pago');
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Nuestros Planes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        {/* Tarjeta Plan Gratuito */}
        <Card title="Gratuito" className={`flex flex-col ${currentPlan === 'free' ? 'border-2 border-indigo-500' : ''}`}> {/* Resalta si es el plan actual */}
          <div className="flex-grow mb-6">
            {currentPlan === 'free' && (
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded mb-4">
                Tu Plan Actual
              </span>
            )}
            <p className="text-gray-500 mb-4">Ideal para empezar y declaraciones sencillas.</p>
            <ul className="space-y-2">
              {freePlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {currentPlan === 'free' && (
            <Button className="w-full mt-auto" disabled={true} variant="secondary">
              Plan Actual
            </Button>
          )}
           {currentPlan !== 'free' && (
              <div className="mt-auto"></div>
           )}
        </Card>

        {/* Tarjeta Plan Premium */}
        <Card title="Premium" className={`flex flex-col ${currentPlan === 'premium' ? 'border-2 border-indigo-500' : ''}`}>
           <div className="flex-grow mb-6">
             {currentPlan === 'premium' && (
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded mb-4">
                Tu Plan Actual
              </span>
             )}
            <p className="text-2xl font-semibold text-gray-800 mb-4">{premiumPrice}</p>
            <p className="text-gray-500 mb-4">Funciones avanzadas y soporte prioritario.</p>
            <ul className="space-y-2">
              {premiumPlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
           </div>
           {currentPlan !== 'premium' ? (
              <Button onClick={handleUpgradeClick} className="w-full mt-auto" variant="primary">
                Actualizar a Premium
              </Button>
           ) : (
             <Button className="w-full mt-auto" disabled={true} variant="secondary">
                Ya eres Premium
             </Button>
           )}
        </Card>
      </div>
      <PaymentModal isOpen={isPaymentModalOpen} onClose={handleClosePaymentModal} planName="Premium"       
        planPrice={premiumPrice}/>
    </div>
  );
}

export default Plans;
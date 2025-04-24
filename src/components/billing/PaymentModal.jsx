import React, { useState, useEffect } from 'react';
import Button from '../ui/Button'; 
import InputField from '../ui/InputField'; 

function PaymentModal({ isOpen, onClose, planName = "Premium", planPrice = "$XX.XXX COP / Mes" }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card'); 
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Estados simulados para el formulario de tarjeta
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  // Limpiar estado cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setSelectedPaymentMethod('card');
      setCardNumber('');
      setExpiryDate('');
      setCvc('');
      setMessage('');
      setError('');
      setIsLoading(false);
    }
  }, [isOpen]);

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    setError(''); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);

    console.log('Procesando pago para:', planName);
    console.log('Método seleccionado:', selectedPaymentMethod);
    if (selectedPaymentMethod === 'card') {
      console.log('** Datos Tarjeta (Simulado - NO ENVIAR ASÍ) **');
      
    }

    // Simulación simple
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Simular éxito
    setMessage(`¡Suscripción a ${planName} exitosa!`);
    // cerrar el modal después de un tiempo
    setTimeout(() => {
        onClose();
    }, 3000);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4" onClick={onClose}>
      {/* Contenedor del Modal */}
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Confirmar Suscripción</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-6 space-y-4">
          {/* Mensajes de estado */}
          {message && <p className="text-green-600 text-center font-semibold">{message}</p>}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Mostrar detalles del plan y formulario solo si no hay mensaje de éxito */}
          {!message && (
            <>
              <p className="text-center text-gray-700">
                Estás a punto de suscribirte al plan: <span className="font-semibold">{planName}</span> ({planPrice}).
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Selección Método de Pago */}
                <fieldset>
                  <legend className="text-lg font-medium text-gray-900 mb-2">Método de Pago</legend>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md has-[:checked]:border-indigo-500 has-[:checked]:ring-1 has-[:checked]:ring-indigo-500 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={selectedPaymentMethod === 'card'}
                        onChange={handlePaymentMethodChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <span>Tarjeta</span>
                    </label>
                    <label className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md has-[:checked]:border-indigo-500 has-[:checked]:ring-1 has-[:checked]:ring-indigo-500 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="pse"
                        checked={selectedPaymentMethod === 'pse'}
                        onChange={handlePaymentMethodChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <span>PSE</span>
                    </label>
                  </div>
                </fieldset>

                {/* Formulario Tarjeta */}
                {selectedPaymentMethod === 'card' && (
                  <div className="space-y-3 p-4 border border-gray-200 rounded-md">
                    <p className="text-sm text-red-600 font-semibold">** Área de Tarjeta Simulada - Usar Integración Segura (Stripe/PayU/etc) en producción **</p>
                     <InputField label="Número de Tarjeta (Simulado)" id="cardNumber" type="text" placeholder="**** **** **** ****" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} />
                     <div className="grid grid-cols-2 gap-4">
                       <InputField label="Fecha Exp (MM/AA)" id="expiryDate" type="text" placeholder="MM/AA" value={expiryDate} onChange={(e)=>setExpiryDate(e.target.value)} />
                       <InputField label="CVC (Simulado)" id="cvc" type="text" placeholder="123" value={cvc} onChange={(e)=>setCvc(e.target.value)} />
                     </div>
                  </div>
                )}

                 {/* Indicador PSE (Condicional) */}
                 {selectedPaymentMethod === 'pse' && (
                   <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
                     <p className="text-sm text-gray-700">Serás redirigido a la plataforma de PSE para completar tu pago de forma segura.</p>
                   </div>
                 )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                  variant="primary"
                >
                  {isLoading ? 'Procesando...' : `Pagar y Suscribirse a ${planName}`}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
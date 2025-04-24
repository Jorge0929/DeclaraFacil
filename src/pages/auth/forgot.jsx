import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Importar componentes
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button'; 


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    if (!email) {
      setError('Por favor, ingresa tu correo electrónico.');
      return;
    }
    setIsLoading(true);
    console.log('Solicitando recuperación para:', email);

    await new Promise(resolve => setTimeout(resolve, 1000)); 
    setMessage('Si existe una cuenta asociada a este correo, recibirás un enlace para restablecer tu contraseña en breve.');
    setEmail('');
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <div className="w-full max-w-md px-8 pt-6 flex justify-start">
          <Link to="/login" className="text-gray-600 hover:text-gray-900" title="Volver a Login">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </Link>
       </div>
      <div className="px-8 pb-8 pt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Recuperar Contraseña</h3>

        {message && <p className="text-green-600 text-sm mb-4 text-center">{message}</p>}
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {!message && (
          <form onSubmit={handleSubmit}>
            {/* Campo correo Electronico */}
            <InputField label="Correo Electrónico" id="email" type="email" placeholder="tuemail@ejemplo.com"
              value={email} onChange={(e) => setEmail(e.target.value)} required
              error={error && !email ? 'Campo requerido' : null} disabled={isLoading}
            />

            <div className="mt-6">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar enlace de recuperación'}
              </Button>
            </div>
          </form>
        )}
         {message && (
           <div className="mt-6 text-center">
             <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Volver a Inicio de Sesión
             </Link>
           </div>
         )}
      </div>
    </div>
  );
}

export default ForgotPassword;
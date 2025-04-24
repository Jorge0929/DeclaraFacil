import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// iMPORTAR Componentes
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';

function Register() {
  // Estados campo formulario
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); 

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return; 
    }
    if (!termsAccepted) {
      setError('Debes aceptar los términos y condiciones.');
      return; 
    }
    console.log({ firstName, lastName, email, password }); 
    alert('Registro simulado exitoso!');
    navigate('/login'); 
  };

  return (
    // Contenedor principal 
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h3>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
              {/* Campo Nombre */}
              <InputField label="Nombre(s)"  id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} 
              placeholder="Tu(s) nombre(s)" required/>

            {/* Campo Apellido */}
              <InputField label="Apellido(s)" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}
                placeholder="Tu(s) apellido(s)" required/>

            {/* Campo Email */}
              <InputField label={'Correo Electrónico'} id="email" type="email" value={email} placeholder="tuemail@ejemplo.com"
              onChange={(e) => setEmail(e.target.value)} required/>

            {/* Campo Contraseña */}
              <InputField label={'Contraseña'} id="password" type="password" value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder="Crea una contraseña" required/>

            {/* Campo Confirmar Contraseña */}
            <InputField label={'Confirmar Contraseña'} id="confirmPassword" type="password" value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Crea una contraseña" required/>

            {/* Checkbox Términos */}
            <div className="flex items-center mt-4">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                required // El navegador puede requerir esto
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                Aceptar <Link to="/terms" className="text-indigo-600 hover:underline">Términos y Condiciones</Link> {/* Enlace simulado */}
              </label>
            </div>

            {/* Botón crear cuenta */}
            <div className="mt-6">
              <Button type="submit" className="w-full">
                Crear Cuenta
              </Button>
            </div>

            {/* Enlace a Login */}
            <div className="mt-6 text-center text-sm text-gray-600">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Inicia Sesión
              </Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
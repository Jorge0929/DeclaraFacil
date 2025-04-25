import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
//Importar componentes
import InputField from '../../components/ui/InputField'; 
import Button from '../../components/ui/Button'; 

function Login() {
  // Estados para los inputs usando Hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  // Manejador del formulario
  const handleSubmit = async (event) => { 
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulación para fron:
    alert('Inicio de sesión simulado exitoso! Redirigiendo...');
    navigate('/dashboard'); 
  };

  return (
    // Contenedor principal
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md"> 
        <h3 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h3>
        <form onSubmit={handleSubmit}>
            {/* Campo Email */}
              <InputField label='Correo Electronico' id="email" type="email" placeholder="tuemail@ejemplo.com" value={email} 
                onChange={(e) => setEmail(e.target.value)} required
              />

            {/* Campo Contraseña */}
              <InputField label={'Contraseña'} id="password" type="password" placeholder="Contraseña" value={password}
                onChange={(e) => setPassword(e.target.value)} required />

            {/* Enlace Olvidé Contraseña */}
            <div className="text-sm text-right mt-2">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Botón de Envío */}
            <div className="mt-6">
              <Button type="submit" className="w-full "> 
                Iniciar Sesión
              </Button>
            </div>

            {/* Enlace a Registro */}
            <div className="mt-6 text-center text-sm text-gray-600">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Regístrate
              </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
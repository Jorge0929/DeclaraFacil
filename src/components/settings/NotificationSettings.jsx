import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

// Componente Checkbox simple 
const Checkbox = ({ id, label, checked, onChange }) => (
  <div className="flex items-center">
    <input
      id={id}
      name={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
    <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
      {label}
    </label>
  </div>
);


function NotificationSettings() {
  // --- Estado simulado 
  const [prefs, setPrefs] = useState({
    declaracionUpdates: true,
    promociones: false,
    newsletter: true,
  });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Cargar preferencias al montar 
  useEffect(() => {
    // Lógica para cargar preferencias 
    console.log('Cargando preferencias...');
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setPrefs(prevPrefs => ({
      ...prevPrefs,
      [name]: checked,
    }));
    setMessage(''); 
  };

  const handleSaveChanges = async (e) => {
     e.preventDefault();
     setIsLoading(true);
     setMessage('');
     console.log('Guardando preferencias:', prefs);
     
     // Simulación
     await new Promise(resolve => setTimeout(resolve, 1000));
     setMessage('Preferencias guardadas con éxito (simulado).');
     setIsLoading(false);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-700">Preferencias de Notificación</h3>
      {message && <p className="text-green-600 text-sm mb-4">{message}</p>}
      <form onSubmit={handleSaveChanges} className="space-y-4">
        <Checkbox
          id="declaracionUpdates"
          label="Recibir actualizaciones sobre mi declaración y fechas importantes por correo."
          checked={prefs.declaracionUpdates}
          onChange={handleCheckboxChange}
        />
         <Checkbox
          id="promociones"
          label="Recibir correos sobre promociones y nuevos servicios de ContApp."
          checked={prefs.promociones}
          onChange={handleCheckboxChange}
        />
         <Checkbox
          id="newsletter"
          label="Suscribirme al boletín informativo con consejos fiscales."
          checked={prefs.newsletter}
          onChange={handleCheckboxChange}
        />

        <div className="pt-4">
           <Button type="submit" variant="primary" disabled={isLoading}>
             {isLoading ? 'Guardando...' : 'Guardar Preferencias'}
           </Button>
        </div>
      </form>
    </div>
  );
}
export default NotificationSettings;
// src/components/settings/HelpSettings.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link

function HelpSettings() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-700">Ayuda y Soporte</h3>

      <div className="space-y-3">
        <p className="text-gray-600">Encuentra respuestas o contáctanos:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <Link to="/faq" className="text-indigo-600 hover:text-indigo-500 hover:underline">
                Preguntas Frecuentes (FAQ)
              </Link>
            </li>
            <li>
               {/* Asume que /support es la ruta de tu ChatPage o donde esté el chatbot/contacto */}
              <Link to="/support" className="text-indigo-600 hover:text-indigo-500 hover:underline">
                Abrir Asistente Virtual / Contactar Soporte
              </Link>
            </li>
             <li>
               {/* Podrías añadir un enlace a Términos y Condiciones */}
               <Link to="/terms" className="text-indigo-600 hover:text-indigo-500 hover:underline">
                Términos y Condiciones
               </Link>
             </li>
              <li>
               {/* Podrías añadir un enlace a Política de Privacidad */}
               <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500 hover:underline">
                 Política de Privacidad
               </Link>
             </li>
        </ul>
        {/* Podrías añadir un email o teléfono de contacto si aplica */}
        {/* <p className="mt-6 text-sm text-gray-500">O contáctanos en: soporte@contapp.ejemplo</p> */}
      </div>
    </div>
  );
}
export default HelpSettings;
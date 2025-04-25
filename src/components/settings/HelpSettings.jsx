import React from 'react';
import { Link } from 'react-router-dom'; 

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
              <Link to="/support" className="text-indigo-600 hover:text-indigo-500 hover:underline">
                Abrir Asistente Virtual / Contactar Soporte
              </Link>
            </li>
             <li>
               {/* enlace a Términos y Condiciones */}
               <Link to="/terms" className="text-indigo-600 hover:text-indigo-500 hover:underline">
                Términos y Condiciones
               </Link>
             </li>
              <li>
               {/* enlace a Política de Privacidad */}
               <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500 hover:underline">
                 Política de Privacidad
               </Link>
             </li>
        </ul>
      </div>
    </div>
  );
}
export default HelpSettings;
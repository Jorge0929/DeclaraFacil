import React from 'react';

function SecuritySettings() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-700">Seguridad de la Cuenta</h3>

      {/* Sección 2FA */}
      <div className="mb-6 p-4 border rounded-md">
          <h4 className="text-lg font-medium text-gray-800 mb-2">Autenticación de Dos Factores (2FA)</h4>
          <p className="text-gray-600 text-sm mb-3">Añade una capa extra de seguridad a tu cuenta.</p>
      </div>

       {/* Sección Sesiones Activas */}
       <div className="p-4 border rounded-md">
          <h4 className="text-lg font-medium text-gray-800 mb-2">Sesiones Activas</h4>
          <p className="text-gray-600 text-sm mb-3">Aquí podrías ver dónde has iniciado sesión y cerrar sesiones remotas.</p>
      </div>

    </div>
  );
}
export default SecuritySettings;
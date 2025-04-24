import React, { useState } from 'react';

// componentes de las sub-secciones
import ProfileSettings from '../../components/settings/ProfileSettings';
import SecuritySettings from '../../components/settings/SecuritySettings';
import NotificationSettings from '../../components/settings/NotificationSettings';
import HelpSettings from '../../components/settings/HelpSettings';

function Settings() {
  // Estado para saber qué pestaña/sección está activa
  const [activeTab, setActiveTab] = useState('profile'); 

  // F renderizar el contenido de la pestaña activa
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'help':
        return <HelpSettings />;
      default:
        return <ProfileSettings />; 
    }
  };

  const getButtonClass = (tabName) => {
    const baseStyle = "w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150";
    const activeStyle = "bg-indigo-100 text-indigo-700 font-semibold";
    const inactiveStyle = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";
    return `${baseStyle} ${activeTab === tabName ? activeStyle : inactiveStyle}`;
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
      {/* Título Principal */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Configuración
      </h1>

      {/* Contenedor Menú Interno y Contenido */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">

        {/* Menú Interno */}
        <nav className="md:w-1/4 lg:w-1/5 flex-shrink-0">
          <ul className="space-y-1">
            <li>
              <button onClick={() => setActiveTab('profile')} className={getButtonClass('profile')}>
                Mi Perfil
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('security')} className={getButtonClass('security')}>
                Seguridad
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('notifications')} className={getButtonClass('notifications')}>
                Notificaciones
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('help')} className={getButtonClass('help')}>
                Ayuda y Soporte
              </button>
            </li>
          </ul>
        </nav>

        {/* Área de Contenido Principal  */}
        <div className="flex-grow md:w-3/4 lg:w-4/5 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
          {renderActiveTabContent()}
        </div>

      </div>
    </div>
  );
}

export default Settings;
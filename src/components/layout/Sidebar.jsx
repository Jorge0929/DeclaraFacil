import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiHome, FiFileText,FiBookOpen, FiMessageSquare, FiLayers, FiSettings, FiLogOut, FiMenu, FiEdit, FiClock  } from 'react-icons/fi'; // Importa FiMenu

// Recibe isOpen Y toggleSidebar como props
function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate();
  const baseLinkStyle = `flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md text-sm font-medium transition-colors duration-150 ${isOpen ? '' : 'justify-center'}`;
  const activeLinkStyle = "bg-indigo-100 text-indigo-700 font-semibold";

  const handleLogout = () => { navigate('/login'); };

  const navigationLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <FiHome className="w-5 h-5" /> },
    { name: 'Declaración Actual', path: '/declaration', icon: <FiEdit  className="w-5 h-5" /> },
    { name: 'Historial', path: '/history', icon: <FiClock  className="w-5 h-5" /> },
    { name: 'Guía DIAN', path: '/dian-guide', icon: <FiBookOpen  className="w-5 h-5" /> },
    { name: 'Chatbot', path: '/support', icon: <FiMessageSquare className="w-5 h-5" /> },
    { name: 'Planes', path: '/plans', icon: <FiLayers className="w-5 h-5" /> },
    { name: 'Configuración', path: '/settings', icon: <FiSettings className="w-5 h-5" /> },
  ];

  return (
    <aside className={`bg-white border-r border-gray-200 h-screen overflow-y-auto sticky top-0 transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-20'}`}>
      <div>
        {/* Header de la Sidebar */}
        <div className={`flex items-center p-4 ${isOpen ? 'justify-between' : 'justify-center'}`}>
          {/* Logo */}
          <span className={`font-bold text-xl text-indigo-600 ${isOpen ? 'inline-block' : 'hidden'}`}>
            ContApp
          </span>
          {/* Botón Hamburguesa */}
          <button
            onClick={toggleSidebar} // 
            className="p-1 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-label="Toggle sidebar"
           >
             <FiMenu className="h-6 w-6" />
           </button>
        </div>


        {/* Navegación Principal */}
        <nav className="mt-2 px-2 space-y-1"> 
          {navigationLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) =>
                `${baseLinkStyle} ${isActive ? activeLinkStyle : ''}`
              }
              title={item.name}
            >
              <span className={`inline-block flex-shrink-0 ${isOpen ? 'mr-3' : ''}`}>{item.icon}</span>
              <span className={`${isOpen ? 'inline' : 'hidden'}`}>{item.name}</span>
            </NavLink>
          ))}

           {/* Botón de Cerrar Sesión */}
           <button
             onClick={handleLogout}
             className={`${baseLinkStyle} w-full text-left mt-8`}
             title="Cerrar Sesión"
           >
             <span className={`inline-block flex-shrink-0 ${isOpen ? 'mr-1' : ''}`}>
                <FiLogOut className="w-5 h-5" />
             </span>
             <span className={`${isOpen ? 'inline' : 'hidden'}`}>Cerrar Sesión</span>
           </button>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const baseLinkStyle = "flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md text-sm font-medium transition-colors duration-150";
  const activeLinkStyle = "bg-indigo-100 text-indigo-700 font-semibold";

  const handleLogout = () => {
    console.log('Cerrando sesión...');

    navigate('/login');
  };

  const navigationLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Declaración Actual', path: '/declaration' }, 
    { name: 'Historial', path: '/history' },
    { name: 'Guía DIAN', path: '/dian-guide' },
    { name: 'Chatbot', path: '/support' }, 
    { name: 'Planes', path: '/plans' },
    { name: 'Configuración', path: '/settings' },
  ];

  return (
    // Contenedor de la Sidebar
    <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 h-screen overflow-y-auto sticky top-0">
      <div className="p-4">

        <nav className="mt-5 space-y-1">
          {navigationLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}

              end={item.path === '/dashboard'}
              className={({ isActive }) =>
                `${baseLinkStyle} ${isActive ? activeLinkStyle : ''}`
              }
            >

              {item.name}
            </NavLink>
          ))}


           <button
             onClick={handleLogout}
             className={`${baseLinkStyle} w-full text-left mt-8`} // Añade margen superior
           >

             Cerrar Sesión
           </button>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
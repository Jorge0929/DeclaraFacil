import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiUser } from 'react-icons/fi'; // Asumiendo react-icons

// Ya NO recibe toggleSidebar como prop
function Navbar() {
  const userName = "Ana Perez"; // Placeholder

  return (
    <nav className="bg-white shadow-sm h-16 flex-shrink-0">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Sección Izquierda: Ahora podría estar vacía o tener otros elementos si quisieras */}
          <div className="flex items-center">
             {/* El logo se movió conceptualmente a la Sidebar en tu última imagen,
                 así que dejamos esto vacío o ponemos algo más si es necesario.
                 Si quieres mantener el logo aquí TAMBIÉN, puedes hacerlo. */}
          </div>

          {/* Iconos y Perfil (Derecha) - sin cambios */}
          <div className="flex items-center">
            <button className="ml-4 p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Ver notificaciones</span>
              <FiBell className="h-6 w-6" />
            </button>
            <div className="ml-3 relative">
              <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Abrir menú de usuario</span>
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                  <FiUser className="h-full w-full text-gray-400 p-1"/>
                </span>
                 <span className="hidden md:block ml-2 text-sm text-gray-700">{userName}</span>
              </button>
              {/* Lógica menú desplegable */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
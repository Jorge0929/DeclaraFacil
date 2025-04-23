import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const userName = "Ana Perez";

  return (
    <nav className="bg-white shadow-sm h-16 flex-shrink-0"> 
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex-shrink-0 flex items-center">
            <Link to="/dashboard" className="font-bold text-xl text-indigo-600">
              ContApp
            </Link>
          </div>

          <div className="flex items-center">
            <button className="ml-4 p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Ver notificaciones</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341A6.002 6.002 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <div className="ml-3 relative">
              <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Abrir menú de usuario</span>

                <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                  <svg className="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                   </svg>
                </span>
                 <span className="hidden md:block ml-2 text-sm text-gray-700">{userName}</span> {/* Muestra nombre en pantallas medianas+ */}
              </button>
        
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiUser, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext'; 

function Navbar() {
    const { isAuthenticated, user, logout } = useAuth();
    return (
        <nav className="bg-white shadow-sm h-16 flex-shrink-0">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        {isAuthenticated && (
                            <Link to="/dashboard" className="font-bold text-indigo-600">ContApp Dashboard</Link>
                        )}
                    </div>

                    <div className="flex items-center">
                        {isAuthenticated ? (
                            <>
                                <button className="ml-4 p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="sr-only">Ver notificaciones</span>
                                    <FiBell className="h-6 w-6" />
                                </button>
                                <div className="ml-3 relative">
                                    <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span className="sr-only">Abrir menú de usuario</span>
                                        <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                                            <FiUser className="h-full w-full text-gray-400 p-1" />
                                        </span>
                                        {user && <span className="hidden md:block ml-2 text-sm text-gray-700">{user.nombre}</span>}
                                    </button>
                                </div>
                                <button
                                    // Llamar a la función logout del contexto
                                    onClick={logout} 
                                    className="ml-4 p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
                                    title="Cerrar Sesión"
                                >
                                    <FiLogOut className="h-6 w-6 md:mr-1" />
                                    <span className="hidden md:inline text-sm">Salir</span>
                                </button>
                            </>
                        ) : (
                            <div className="space-x-4">
                                <Link to="/login" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Iniciar Sesión
                                </Link>
                                <Link
                                    to="/register"
                                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Registrarse
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
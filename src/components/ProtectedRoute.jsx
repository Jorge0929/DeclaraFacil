import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    console.log('ProtectedRoute: isLoading:', isLoading, 'isAuthenticated:', isAuthenticated, 'Path:', location.pathname);

    if (isLoading) {
        if (!isAuthenticated) {
             console.log('ProtectedRoute: Mostrando "Cargando autenticación..."');
             return <div>Cargando autenticación...</div>;
        }
    }

    if (!isAuthenticated) {
        console.log('ProtectedRoute: No autenticado, redirigiendo a /login. Intentaba acceder a:', location.pathname);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    console.log('ProtectedRoute: Autenticado, renderizando Outlet para:', location.pathname);
    return <Outlet />;
};

export default ProtectedRoute;
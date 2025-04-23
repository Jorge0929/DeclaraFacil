// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navbar from '../components/layout/Navbar'; 
import Sidebar from '../components/layout/Sidebar';
function MainLayout() {

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100"> 

      <Sidebar />

      {/* Contenedor para Navbar y Contenido Principal */}
      <div className="flex-1 flex flex-col overflow-hidden">

        <Navbar />

        {/* Área de Contenido Principal */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default MainLayout;
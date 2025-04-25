import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar'; 

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar*/}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Contenedor Principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar*/}
        <Navbar />

        {/* Área de Contenido Principal */}
        <main className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 py-6 pr-6 pl-6 transition-all duration-300 ease-in-out ${
           isSidebarOpen ? 'md:ml-12' : 'md:ml-' 
         }`}
         >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
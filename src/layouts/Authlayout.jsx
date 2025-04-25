import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
     
      <Outlet />

    </div>
  );
}

export default AuthLayout;
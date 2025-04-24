import React from 'react';

function Card({ children, title = null, className = '' }) {
  return (
    // Contenedor tarjeta 
    <div className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 ${className}`}>
      {title && (
        <h2 className="text-xl font-semibold text-gray-700 mb-4"> 
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

export default Card;

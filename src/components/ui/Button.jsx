import React from 'react';
function Button({ children, onClick, type = 'button', variant = 'primary', className = '', ...props }) {

  const baseStyle = "px-4 py-2 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out";
  const variants = {
    primary: "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500",
    danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
  };
  const combinedClassName = `${baseStyle} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedClassName} {...props}> {children} </button>
  );
}

export default Button;
import React from 'react';

function InputField({ label, id, name, type = 'text', value, onChange, placeholder, required = false, error = null, className = '', ...props }) {
  const baseInputStyle = "w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500";
  const errorInputStyle = "border-red-500 focus:ring-red-500 focus:border-red-500";

  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input type={type} id={id} name={name || id} value={value} onChange={onChange} placeholder={placeholder} required={required} className={`${baseInputStyle} ${error ? errorInputStyle : ''}`} {...props}/>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

export default InputField;
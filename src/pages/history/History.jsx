import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

function History() {
  // guardar el historial de declaraciones
  const [declarations, setDeclarations] = useState([]);
  //  manejar la carga
  const [isLoading, setIsLoading] = useState(true);
  //  manejar errores
  const [error, setError] = useState(null);

  // Simulación de carga de datos aomponente
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    console.log("Cargando historial...");

    // Simulación con datos 
    const timer = setTimeout(() => {
      const exampleData = [
        { id: '1', year: 2023, datePrepared: '2024-04-15', result: '$ 150.000 (A Pagar)', statusContApp: 'Instrucciones Vistas' },
        { id: '2', year: 2022, datePrepared: '2023-05-20', result: '$ 80.000 (A Favor)', statusContApp: 'Borrador Guardado' },
        { id: '3', year: 2021, datePrepared: '2022-06-10', result: '$ 0 (Sin Saldo)', statusContApp: 'Borrador Guardado' },
      ];
      setDeclarations(exampleData);
      setIsLoading(false);
    }, 1200); 

    // Limpia el timer 
    return () => clearTimeout(timer);

  }, []); 

  let content;

  if (isLoading) {
    content = <p className="text-center text-gray-500 py-10">Cargando historial...</p>;
  } else if (error) {
    content = <p className="text-center text-red-500 py-10">{error}</p>;
  } else if (declarations.length === 0) {
    content = <p className="text-center text-gray-500 py-10">Aún no has preparado ninguna declaración con ContApp.</p>;
  } else {
    // Si hay datos, renderiza la tabla
    content = (
      <div className="overflow-x-auto shadow border-b border-gray-200 sm:rounded-lg"> {/* Añade sombra y bordes redondeados */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Año Fiscal</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Preparación</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resultado (ContApp)</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado (ContApp)</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {declarations.map((dec) => (
              <tr key={dec.id} className="hover:bg-gray-50"> 
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dec.year}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dec.datePrepared}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dec.result}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                     dec.statusContApp === 'Instrucciones Vistas' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                   }`}>
                     {dec.statusContApp}
                   </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => alert(`Implementar vista de detalle para año ${dec.year}`)}
                    className="text-indigo-600 hover:text-indigo-900 hover:underline focus:outline-none"
                  >
                    Ver Resumen
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    // Contenedor principal para el contenido de la página
     <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
        Historial de Declaraciones Preparadas
      </h1>
      {/* Renderiza el contenido */}
      {content}
    </div>
  );
}

export default History;
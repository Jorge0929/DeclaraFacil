import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { getUserDeclarations } from '../../services/declarationService';
import Button from '../../components/ui/Button';

function History() {
    const [declarations, setDeclarations] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Empezar en true para mostrar carga inicial
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDeclarations = async () => {
            setIsLoading(true);
            setError(null);
            console.log("History.jsx: Intentando cargar historial...");
            try {
              // Llama al servicio
                const data = await getUserDeclarations(); 
                console.log("History.jsx: Datos recibidos del servicio:", data);
                setDeclarations(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("History.jsx: Error al cargar historial:", err);
                setError(err.message || 'Error al cargar el historial de declaraciones.');
                // Limpiar en caso de error
                setDeclarations([]); 
            } finally {
                setIsLoading(false);
            }
        };

        fetchDeclarations();
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
      <div className="overflow-x-auto shadow border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Año Fiscal</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última Modificación</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resultado (Estimado)</th> {/* Ajustado */}
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Acciones</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {declarations.map((dec) => {
                        // CONSOLE.LOG PARA VER QUÉ CONTIENE 'dec'
                        console.log("Datos de la declaración individual (dec) para mapear:", dec);
                        return (
                            <tr key={dec._id} className="hover:bg-gray-50"> {/* USA dec._id */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dec.añoFiscal}</td> {/* USA dec.añoFiscal */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {/* USA dec.updatedAt y formatéalo */}
                                    {dec.updatedAt ? new Date(dec.updatedAt).toLocaleDateString('es-CO', {
                                        year: 'numeric', month: 'long', day: 'numeric',
                                        // Opcional: añadir hora si quieres
                                        // hour: '2-digit', minute: '2-digit'
                                    }) : 'N/A'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {/* Decide qué mostrar para "Resultado". Puede ser de dec.resumenEstimado si existe */}
                                    {/* Ejemplo: Muestra saldo a pagar o a favor si existen en el resumen */}
                                    {dec.resumenEstimado?.saldoAPagar && dec.resumenEstimado.saldoAPagar !== '$ 0' ? `Pagar: ${dec.resumenEstimado.saldoAPagar}` :
                                     dec.resumenEstimado?.saldoAFavor && dec.resumenEstimado.saldoAFavor !== '$ 0' ? `Favor: ${dec.resumenEstimado.saldoAFavor}` :
                                     'N/D'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    {/* USA dec.estado */}
                                    {dec.estado && (
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            dec.estado === 'finalizado_en_app' ? 'bg-green-100 text-green-800' :
                                            dec.estado === 'presentado_dian' ? 'bg-blue-100 text-blue-800' : 
                                            'bg-yellow-100 text-yellow-800' // Para 'en_progreso'
                                        }`}>
                                            {/* Formatear para mejor visualización */}
                                            {dec.estado.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Button
                                        variant="secondary" // O el estilo que prefieras
                                        // Actualiza esta navegación cuando implementes la edición
                                        onClick={() => navigate(`/declaration/${dec._id}`)} 
                                        className="text-xs"
                                    >
                                        Ver / Continuar
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
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
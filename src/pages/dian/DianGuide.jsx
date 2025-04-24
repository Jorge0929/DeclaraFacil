import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from '../../components/ui/Button'; 
function DianGuide() {
  const navigate = useNavigate();

  const handleUnderstood = () => {
    // Navega al dashboard o a la página deseada
    navigate('/dashboard'); 
  };

  // Contenido de los pasos (reemplazar con instrucciones reales y precisas)
  const steps = [
    "Ingresa al portal oficial de la DIAN Muisca usando tu método de autenticación (usuario registrado o Firma Electrónica). Puedes acceder desde [Enlace Real a DIAN - opcional].",
    "Dentro del portal, busca la sección o menú relacionado con 'Consultas' o 'Servicios al Ciudadano'. Localiza la opción específica 'Consultar Información Exógena' o 'Información Reportada por Terceros'.",
    "Selecciona el año gravable que necesitas consultar (ej. 2023) y haz clic en 'Consultar' o 'Generar Reporte'. El sistema puede generar un archivo descargable (usualmente Excel) o mostrar la información en pantalla.",
    // Ejemplo de cómo incluir el placeholder de imagen
    "Busca en el reporte descargado o en pantalla las secciones clave que te pediremos en ContApp, como ingresos, retenciones, etc. Puede verse similar a esto:",
    // Placeholder para la imagen guía
    <div key="image-placeholder" className="my-4 p-4 border border-dashed border-gray-400 text-center text-gray-500 bg-gray-50 rounded">
      [Placeholder: Imagen Guía - Captura genérica del portal DIAN mostrando dónde buscar]
    </div>,
    "Anota o ten a mano los valores relevantes que encuentres para ingresarlos en ContApp cuando te los solicitemos en los pasos correspondientes de la preparación."
  ];


  return (
    // Contenedor principal para el contenido de la página
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">

      {/* Título de la Página */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Guía: Consultar Información en Portal DIAN
      </h1>

      {/* Párrafo Introductorio */}
      <p className="text-base text-gray-600 mb-6">
        Para asegurar la precisión de tu declaración, es importante verificar ciertos datos directamente en la fuente oficial. ContApp no se conecta directamente por tu seguridad. Sigue estos pasos para consultar tu información en el portal Muisca de la DIAN:
        {/* Reemplaza el lorem ipsum con tu texto introductorio real */}
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. */}
      </p>

      {/* Lista Numerada de Pasos */}
      <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8">
        {steps.map((step, index) => (
          // Renderiza el placeholder de imagen directamente si es un elemento JSX
          React.isValidElement(step)
            ? step
            : <li key={index}>{step}</li>
        ))}
      </ol>

      {/* Botón de Acción */}
      <div className="text-center">
        <Button
          onClick={handleUnderstood}
          variant="primary" // Usa la variante primaria o la que prefieras
        >
          Entendido
        </Button>
      </div>

    </div>
  );
}

export default DianGuide;
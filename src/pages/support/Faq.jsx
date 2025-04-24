import React from 'react';
import { Link } from 'react-router-dom';

function Faq() {
  // --- Datos de ejemplo
  const faqData = [
    {
      id: 1,
      question: '¿Necesito ser contador para usar ContApp?',
      answer: 'No, ContApp está diseñado tanto para personas sin conocimientos contables como para contadores. Nuestra guía paso a paso te ayuda en el proceso. Los contadores también encuentran herramientas útiles para gestionar clientes (en planes futuros).',
    },
    {
      id: 2,
      question: '¿ContApp presenta mi declaración automáticamente ante la DIAN?',
      answer: 'No directamente. ContApp te guía expertamente en la preparación y cálculo de tu declaración, generando un borrador preciso. Luego, te proporciona instrucciones claras para que tú mismo presentes la declaración de forma segura usando el portal Muisca de la DIAN y tu Firma Electrónica.',
    },
    {
      id: 3,
      question: '¿Qué información necesito tener a mano?',
      answer: 'Necesitarás tus documentos de identidad, certificados de ingresos y retenciones, soportes de deducciones (salud, educación, etc.), información sobre tu patrimonio (propiedades, vehículos, inversiones) y deudas. Te recomendamos también consultar tu información exógena directamente en el portal DIAN (te guiaremos cómo hacerlo).',
    },
    {
        id: 4,
        question: '¿Es seguro ingresar mi información en ContApp?',
        answer: 'La seguridad es nuestra prioridad. Usamos medidas de seguridad estándar de la industria para proteger tu información dentro de nuestra plataforma. Sin embargo, no almacenamos ni manejamos tus credenciales de acceso a la DIAN.'
    },
  ];
  return (
    // Contenedor principal 
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto"> {/* Limita el ancho para mejor lectura */}

      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
        Preguntas Frecuentes (FAQ)
      </h1>

      <div className="space-y-6"> 
        {faqData.map((item) => (
          <div key={item.id}>
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">
              {item.question}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

       {/* Sección adicional de contacto */}
       <div className="mt-8 pt-6 border-t">
            <p className="text-center text-gray-600">
                ¿No encontraste tu respuesta?{' '}
                <Link to="/support" className="text-indigo-600 hover:underline font-medium">
                    Contacta con nuestro asistente virtual
                </Link>
                .
            </p>
       </div>

    </div>
  );
}

export default Faq;
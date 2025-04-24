import React from 'react';
import { Link } from 'react-router-dom'; 

function SecurityPolicy() {

  return (
    // Contenedor principal 
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto"> {/* Limita el ancho */}

      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
        Política de Seguridad (Ejemplo)
      </h1>

      {/* Contenedor del texto. */}
      <div className="prose prose-indigo max-w-none lg:prose-lg text-gray-700">

        <p className="text-sm text-gray-500 mb-6">Última actualización: 23 de Abril de 2025 (Ejemplo)</p>

        <h2 className="mt-6 mb-2 font-semibold text-lg">1. Nuestro Compromiso</h2>
        <p className="mb-3 leading-relaxed">En ContApp ([Nombre Empresa Ficticia]), la seguridad de su información es nuestra máxima prioridad. Implementamos medidas técnicas y organizativas razonables para proteger sus datos personales y financieros contra el acceso no autorizado, la alteración, la divulgación o la destrucción.</p>

        <h2 className="mt-6 mb-2 font-semibold text-lg">2. Seguridad de la Cuenta del Usuario</h2>
        <p className="mb-3 leading-relaxed">Usted juega un papel crucial en la seguridad de su cuenta. Le recomendamos:</p>
        <ul className="list-disc list-inside mb-3 space-y-1">
            <li>Utilizar una contraseña fuerte y única para ContApp.</li>
            <li>No compartir sus credenciales de acceso con nadie.</li>
            <li>Cerrar sesión al finalizar el uso de la aplicación, especialmente en dispositivos compartidos o públicos.</li>
            <li>Mantener actualizado su sistema operativo y navegador web.</li>
            {/* <li>Habilitar la Autenticación de Dos Factores para una capa adicional de seguridad.</li> */}
        </ul>
        <p className="mb-3 leading-relaxed">Notifíquenos inmediatamente si sospecha de cualquier acceso no autorizado a su cuenta.</p>

        <h2 className="mt-6 mb-2 font-semibold text-lg">3. Protección de Datos</h2>
        <p className="mb-3 leading-relaxed">La información que usted ingresa en ContApp es tratada con confidencialidad. Implementamos prácticas como:</p>
        <ul className="list-disc list-inside mb-3 space-y-1">
            <li>Cifrado de datos sensibles en tránsito (usando HTTPS/TLS) y en reposo (a nivel de base de datos, si aplica).</li>
            <li>Controles de acceso estrictos para nuestro personal, asegurando que solo el personal autorizado y con necesidad de conocer acceda a su información para fines de soporte o mantenimiento.</li>
            <li>Prácticas de desarrollo seguro para minimizar vulnerabilidades en nuestro código.</li>
            <li>Cumplimiento con nuestra [Enlace a Política de Privacidad - Placeholder], que detalla cómo recopilamos, usamos y protegemos sus datos personales.</li>
        </ul>

        <h2 className="mt-6 mb-2 font-semibold text-lg">4. Seguridad de la Infraestructura</h2>
        <p className="mb-3 leading-relaxed">Nuestra plataforma se aloja en proveedores de servicios en la nube [Ej: AWS, Google Cloud, Azure - mencionar genéricamente si aplica] que cumplen con altos estándares de seguridad física y lógica. Utilizamos firewalls, sistemas de monitoreo y otras herramientas para proteger nuestra infraestructura contra amenazas externas.</p>

        <h2 className="mt-6 mb-2 font-semibold text-lg">5. Interacción con la DIAN</h2>
        <p className="mb-3 leading-relaxed">Como se establece en nuestros Términos y Condiciones, ContApp actúa como una herramienta de preparación y guía. **No almacenamos sus credenciales de acceso al portal Muisca de la DIAN.** Le guiamos para que usted interactúe directamente con el portal oficial de la DIAN de forma segura para consultar información y presentar su declaración final.</p>

        <h2 className="mt-6 mb-2 font-semibold text-lg">6. Seguridad en Pagos (Si Aplica)</h2>
        <p className="mb-3 leading-relaxed">Los pagos de suscripciones Premium se procesan a través de pasarelas de pago de terceros reconocidas que cumplen con los estándares de seguridad de la industria de tarjetas de pago (PCI DSS). No almacenamos los detalles completos de su tarjeta de crédito en nuestros servidores.</p>

        <h2 className="mt-6 mb-2 font-semibold text-lg">7. Reporte de Vulnerabilidades</h2>
        <p className="mb-3 leading-relaxed">Si cree haber encontrado una vulnerabilidad de seguridad en nuestro Servicio, le agradecemos que nos lo comunique de manera responsable a través de [Correo Electrónico de Seguridad Placeholder] para que podamos investigarla y corregirla.</p>

        <h2 className="mt-6 mb-2 font-semibold text-lg">8. Actualizaciones</h2>
        <p className="mb-3 leading-relaxed">El panorama de la seguridad cambia constantemente. Nos comprometemos a revisar y actualizar nuestras prácticas y esta política periódicamente para adaptarnos a nuevas amenazas y tecnologías.</p>

        <h2 className="mt-6 mb-2 font-semibold text-lg">9. Contacto</h2>
        <p className="mb-3 leading-relaxed">Si tiene preguntas sobre nuestra Política de Seguridad, contáctenos en: [Correo Electrónico de Soporte/Seguridad Placeholder].</p>

      </div>

      {/* Botón opcional para volver */}
      <div className="mt-8 pt-6 border-t text-center">
           <Link to="/settings" className="text-indigo-600 hover:underline font-medium">
               Volver a configuración
           </Link>
      </div>

    </div>
  );
}

export default SecurityPolicy;
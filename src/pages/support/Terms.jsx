import React from 'react';
import { Link } from 'react-router-dom'; 

function Terms() {
  const placeholderText = `
    Bienvenido a ContApp

    Estos Términos y Condiciones ("Términos") rigen el uso de la aplicación web y móvil ContApp (el "Servicio"), operada por [Nombre de tu Empresa Ficticia o Tu Nombre] ("Nosotros", "Nos"). Al acceder o utilizar el Servicio, usted ("Usuario") acepta estar sujeto a estos Términos. Si no está de acuerdo con alguna parte de los términos, no podrá acceder al Servicio.   

    1. Aceptación de los Términos

    Al crear una cuenta o utilizar el Servicio de cualquier forma, usted confirma que ha leído, entendido y aceptado estos Términos en su totalidad. Nos reservamos el derecho de modificar estos Términos en cualquier momento, notificándole los cambios significativos. El uso continuado del Servicio después de dichas modificaciones constituirá su aceptación de los nuevos Términos.

    2. Descripción del Servicio

    ContApp es una herramienta diseñada para asistir a personas naturales y pequeños empresarios en Colombia con la preparación, cálculo y comprensión de su declaración de renta. El Servicio incluye:   

    Una interfaz guiada (asistente o "wizard") para ingresar información fiscal relevante.
    Un motor de cálculo basado en la normativa fiscal colombiana general vigente al momento del cálculo.
    Un asistente virtual (chatbot) para responder preguntas generales sobre el uso de la plataforma y conceptos fiscales básicos.   
    Generación de un borrador no oficial de la declaración basado en la información proporcionada por el Usuario.
    Guías e instrucciones sobre cómo utilizar las herramientas oficiales del portal de la Dirección de Impuestos y Aduanas Nacionales (DIAN) para consultar información (como la exógena) y para presentar la declaración final.   
    (Opcional, si aplica) Servicios Premium con funcionalidades adicionales como validaciones avanzadas o soporte extendido, sujetos a pago.   
    IMPORTANTE: ContApp NO es un asesor fiscal, tributario o legal. El Servicio NO constituye asesoramiento profesional. La información y cálculos proporcionados son para fines informativos y de preparación, basados exclusivamente en los datos ingresados por el Usuario. ContApp NO se conecta directamente a los sistemas de la DIAN para enviar declaraciones ni para descargar información automáticamente en nombre del usuario [referencia: lógica redefinida]. La responsabilidad final de la veracidad de la información, la correcta presentación y el pago de los impuestos recae enteramente en el Usuario. ContApp no garantiza que la declaración preparada sea aceptada por la DIAN sin revisiones.

    3. Cuentas de Usuario

    Para acceder a ciertas funciones, deberá crear una cuenta proporcionando información veraz y completa.
    Usted es responsable de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran bajo su cuenta.   
    Notifíquenos inmediatamente sobre cualquier uso no autorizado de su cuenta.
    Usted es el único responsable de la exactitud y veracidad de la información que ingresa en la plataforma.
    4. Uso Aceptable

    Usted se compromete a no utilizar el Servicio para fines ilegales o no autorizados. Se prohíbe: (a) intentar realizar ingeniería inversa, descompilar o extraer el código fuente del Servicio; (b) usar el Servicio para infringir leyes o regulaciones; (c) ingresar información falsa o engañosa; (d) interferir con las medidas de seguridad del Servicio.

    5. Servicios Premium y Pagos (Si Aplica)

    Algunas funcionalidades pueden requerir una suscripción paga ("Servicios Premium").
    Las tarifas se indicarán claramente antes de la suscripción. Los pagos se procesarán a través de pasarelas de pago de terceros  (ej. Tarjeta de Crédito/Débito, PSE).   
    Las suscripciones pueden ser recurrentes (mensuales/anuales). Los términos de cancelación y reembolso (si los hubiera) se especificarán en la sección de pago.
    Nos reservamos el derecho de cambiar las tarifas, previa notificación.
    6. Propiedad Intelectual

    El Servicio y todo su contenido original (excluyendo los datos proporcionados por los usuarios), características y funcionalidades son y seguirán siendo propiedad exclusiva de [Nombre Empresa Ficticia/Tu Nombre] y sus licenciantes.

    7. Exclusión de Garantías y Limitación de Responsabilidad

    El Servicio se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD", sin garantías de ningún tipo, expresas o implícitas.
    No garantizamos que el Servicio sea ininterrumpido, seguro, libre de errores, o que los cálculos sean siempre 100% precisos o aplicables a su situación fiscal particular (dada la complejidad y cambios normativos).   
    Usted utiliza el Servicio bajo su propio riesgo. No somos responsables por errores en su declaración final, sanciones impuestas por la DIAN, o cualquier pérdida financiera resultante del uso (o mal uso) del Servicio. Nuestra responsabilidad máxima se limitará al monto pagado por usted por los Servicios Premium (si aplica) en los últimos [X] meses.
    8. Privacidad

    La recopilación y uso de su información personal se rige por nuestra [Enlace a la Política de Privacidad - Placeholder]. Al usar el Servicio, usted acepta dichas prácticas.

    9. Modificaciones a los Términos

    Podemos modificar estos Términos ocasionalmente. Le notificaremos los cambios importantes. Es su responsabilidad revisar los Términos periódicamente.

    10. Ley Aplicable y Jurisdicción

    Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República de Colombia, sin dar efecto a ningún principio de conflicto de leyes. Cualquier disputa será resuelta en los tribunales competentes de [Ciudad, ej. Barranquilla], Colombia.   

    11. Contacto

    Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en: contapp@bussines.com.
    `;
    return (
        // Contenedor principal
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto"> {/* Limita el ancho */}

            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
                Términos y Condiciones de Servicio (Ejemplo)
            </h1>

            {/* Contenedor del texto legal. */}
            <div className="prose prose-indigo max-w-none lg:prose-lg text-gray-700"> {/* 'prose' es opcional pero útil */}

                <p className="text-sm text-gray-500 mb-6">Última actualización: 23 de Abril de 2025 (Ejemplo)</p>

                <p>Estos Términos y Condiciones ("Términos") rigen el uso de la aplicación web y móvil ContApp (el "Servicio"), operada por [Nombre Empresa Ficticia] ("Nosotros", "Nos"). Al acceder o utilizar el Servicio, usted ("Usuario") acepta estar sujeto a estos Términos. Si no está de acuerdo con alguna parte de los términos, no podrá acceder al Servicio.</p>

                <h2 className="mt-6 mb-2 font-semibold text-lg">1. Aceptación de los Términos</h2>
                <p className="mb-3">Al crear una cuenta o utilizar el Servicio de cualquier forma, usted confirma que ha leído, entendido y aceptado estos Términos en su totalidad. Nos reservamos el derecho de modificar estos Términos en cualquier momento, notificándole los cambios significativos. El uso continuado del Servicio después de dichas modificaciones constituirá su aceptación de los nuevos Términos.</p>

                <h2 className="mt-6 mb-2 font-semibold text-lg">2. Descripción del Servicio</h2>
                <p className="mb-3">ContApp es una herramienta diseñada para asistir a personas naturales y pequeños empresarios en Colombia con la preparación, cálculo y comprensión de su declaración de renta. El Servicio incluye una interfaz guiada, un motor de cálculo, un asistente virtual (chatbot), generación de un borrador no oficial y guías sobre cómo utilizar las herramientas oficiales del portal de la DIAN. Los Servicios Premium (sujetos a pago) pueden ofrecer funcionalidades adicionales.</p>
                <p className="mb-3 text-red-700 font-semibold">IMPORTANTE: ContApp NO es un asesor fiscal, tributario o legal y NO constituye asesoramiento profesional. La información y cálculos son para fines informativos basados en los datos del Usuario. ContApp NO presenta declaraciones ante la DIAN. La responsabilidad final de la veracidad, presentación y pago recae enteramente en el Usuario.</p>

                <h2 className="mt-6 mb-2 font-semibold text-lg">3. Cuentas de Usuario</h2>
                <p className="mb-3">Usted es responsable de mantener la confidencialidad de su contraseña, de la veracidad de la información proporcionada y de todas las actividades de su cuenta. Notifíquenos inmediatamente sobre cualquier uso no autorizado.</p>

                <h2 className="mt-6 mb-2 font-semibold text-lg">4. Uso Aceptable</h2>
                <p className="mb-3">Se prohíbe usar el Servicio para fines ilegales, realizar ingeniería inversa, ingresar información falsa o interferir con la seguridad del Servicio.</p>

                <h2 className="mt-6 mb-2 font-semibold text-lg">5. Servicios Premium y Pagos (Si Aplica)</h2>
                <p className="mb-3">Algunas funciones requieren suscripción paga. Las tarifas y términos de pago, cancelación y reembolso (si los hay) se especificarán claramente. Los pagos se procesan a través de terceros (Tarjeta, PSE [cite: 50]). Nos reservamos el derecho de cambiar las tarifas con notificación previa.</p>

                <h2 className="mt-6 mb-2 font-semibold text-lg">6. Propiedad Intelectual</h2>
                <p className="mb-3">El Servicio y su contenido original (excluyendo datos del usuario) son propiedad de [Nombre Empresa Ficticia].</p>

                <h2 className="mt-6 mb-2 font-semibold text-lg">7. Exclusión de Garantías y Limitación de Responsabilidad</h2>
                <p className="mb-3">El Servicio se proporciona "TAL CUAL", sin garantías. No garantizamos exactitud total, disponibilidad ininterrumpida o ausencia de errores. Usted usa el Servicio bajo su propio riesgo. No somos responsables por errores en su declaración final ante la DIAN, sanciones o pérdidas financieras. Nuestra responsabilidad máxima se limita al monto pagado por Servicios Premium en los últimos [X] meses (si aplica).</p>

                <h2 className="mt-6 mb-2 font-semibold text-lg">8. Privacidad</h2>
                <p className="mb-3">El uso de su información personal se rige por nuestra [Enlace a Política de Privacidad - Placeholder]. Al usar el Servicio, acepta dichas prácticas.</p>

                <h2 className="mt-6 mb-2 font-semibold text-lg">9. Modificaciones a los Términos</h2>
                <p className="mb-3">Podemos modificar estos Términos ocasionalmente, notificándole los cambios importantes.</p>

                <h2 className="mt-6 mb-2 font-semibold text-lg">10. Ley Aplicable y Jurisdicción</h2>
                <p className="mb-3">Estos Términos se rigen por las leyes de Colombia. Cualquier disputa se resolverá en los tribunales de [Ciudad, ej. Barranquilla], Colombia.</p>

                <h2 className="mt-6 mb-2 font-semibold text-lg">11. Contacto</h2>
                <p className="mb-3">Si tiene preguntas, contáctenos en: [Correo Electrónico de Soporte Placeholder].</p>

            </div>
            <div className="mt-8 pt-6 border-t text-center">
                <Link to="/settings" className="text-indigo-600 hover:underline font-medium">
                    Volver a configuración
                </Link>
            </div>

        </div>
    );
}
export default Terms;
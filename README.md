# ContApp (Frontend)

## Descripción del Proyecto

ContApp es una aplicación web diseñada para **simplificar la preparación y comprensión de la declaración de renta para personas naturales en Colombia**. Actúa como un asistente inteligente que guía al usuario paso a paso a través del proceso de recopilación de información fiscal, realiza cálculos estimados y genera un borrador organizado.

El objetivo principal es facilitar el cumplimiento tributario, reduciendo errores y estrés, y **proporcionando instrucciones claras para que el usuario interactúe de forma segura y eficiente con las herramientas oficiales del portal DIAN Muisca** para la consulta de datos y la presentación final.

Este repositorio contiene el código fuente de la **fase frontend** del proyecto, desarrollada como parte de la asignatura de Desarrollo Web.

## Estado del Proyecto

* **Fase Actual:** Desarrollo del Frontend.
* **Funcionalidad:** Implementación de la interfaz de usuario, navegación, manejo de estado básico en el cliente y estructura general de la aplicación. La lógica de negocio principal (cálculos fiscales complejos, conexión a backend) está simulada o pendiente de implementación en el backend.

## Características Implementadas 

* **Flujo de Autenticación Completo (UI):** Landing Page, Registro, Login, Olvido/Reseteo de Contraseña.
* **Layout Principal:** Estructura reutilizable (`MainLayout`) con Navbar superior y Sidebar lateral **desplegable**.
* **Dashboard:** Panel principal con saludo, tarjeta de estado de declaración (placeholder), y accesos rápidos a Guía DIAN y Asistente Virtual (Chatbot).
* **Wizard de Declaración (UI Inicial):** Implementación de los primeros pasos (Datos Personales, Ingresos, Deducciones) con navegación y recuadros de guía.
* **Páginas Informativas/Funcionales:**
    * Guía para Consulta en Portal DIAN.
    * Comparativa de Planes de Suscripción (Gratuito/Premium).
    * Historial de Declaraciones Preparadas (con datos simulados).
    * Página de Configuración con menú interno (Perfil, Seguridad, Notificaciones, Ayuda - con contenido básico).
    * Páginas estáticas (FAQ, Términos, Política Seguridad - con estructura y texto de ejemplo).
* **Asistente Virtual (Chatbot):** Interfaz de chat implementada (modal o página completa, según elección final) con manejo básico de mensajes (simulado).
* **Componentes Reutilizables:** Creación de componentes para UI (`Button`, `InputField`, `Card`, `Navbar`, `Sidebar`, `Layouts`).
* **Diseño Responsivo:** Estructura básica y uso de utilidades de Tailwind CSS para adaptabilidad a diferentes pantallas.

## Tech Stack (Frontend)

* **Framework/Librería:** React.js (v18+)
* **Entorno/Build Tool:** Vite.js
* **Lenguaje:** JavaScript (con JSX)
* **Estilos:** Tailwind CSS v3
* **Enrutamiento:** React Router DOM v6
* **Gestor de Paquetes:** npm
* **Iconos:** React Icons (recomendado)

## Cómo Empezar (Desarrollo Local)

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://minhaskamal.github.io/DownGit/](https://minhaskamal.github.io/DownGit/)
    cd contapp-frontend
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible generalmente en `http://localhost:5173` (o el puerto que indique Vite).

## Scripts Disponibles

En el `package.json`, encontrarás los scripts estándar de Vite:

* `npm run dev`: Inicia el servidor de desarrollo con HMR.
* `npm run build`: Compila la aplicación para producción en la carpeta `dist/`.
* `npm run lint`: Ejecuta ESLint para revisar el código (si está configurado).
* `npm run preview`: Sirve localmente la build de producción desde `dist/`.

## Despliegue

Este proyecto está diseñado para ser desplegado fácilmente en plataformas como [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/), que se integran con repositorios Git.

## Trabajo Futuro

* Desarrollo del Backend (Node.js/Express).
* Implementación de Base de Datos.
* Creación de API REST para conectar Frontend y Backend.
* Lógica de autenticación segura en el Backend.
* Implementación de cálculos fiscales precisos y actualizados.
* Desarrollo de la lógica del Chatbot (NLP/IA).
* Persistencia de datos y estado del usuario.
* Integración con pasarela de pagos.

Instrucciones:

Copia todo el texto anterior.
Abre el archivo README.md en la raíz de tu proyecto.
Borra el contenido actual que te genera Vite.
Pega el nuevo contenido que te he proporcionado.
Personaliza:
Reemplaza [Tu Nombre Completo] por tu nombre.
Ajusta la fecha si es necesario.
Reemplaza https://minhaskamal.github.io/DownGit/ por la URL real cuando lo tengas en GitHub/GitLab.
Revisa la lista de "Características Implementadas" y ajústala si has hecho algo más o algo menos de lo que generamos.
Añade cualquier otra sección que consideres relevante para tu profesor o para alguien que vea el proyecto.
Guarda el archivo README.md.
Ahora tendrás un README mucho más descriptivo y útil para tu proyecto ContApp.



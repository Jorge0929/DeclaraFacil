# ContApp (Frontend)

## Descripción del Proyecto

ContApp es una aplicación web diseñada para **simplificar la preparación y comprensión de la declaración de renta para personas naturales en Colombia**. Actúa como un asistente inteligente que guía al usuario paso a paso a través del proceso de recopilación de información fiscal, realiza cálculos estimados y genera un borrador organizado.

El objetivo principal es facilitar el cumplimiento tributario, reduciendo errores y estrés, y **proporcionando instrucciones claras para que el usuario interactúe de forma segura y eficiente con las herramientas oficiales del portal DIAN Muisca** para la consulta de datos y la presentación final.

Este repositorio contiene el código fuente de la **fase frontend** del proyecto, desarrollada como parte de la asignatura de Desarrollo Web.

## Estado del Proyecto

* **Fase Actual:** Desarrollo del Frontend.
* **Funcionalidad:** Implementación de la interfaz de usuario, navegación, manejo de estado básico en el cliente y estructura general de la aplicación. La lógica de negocio principal (cálculos fiscales complejos, conexión a backend) está simulada o pendiente de implementación en el backend.

## Características Implementadas (Frontend)

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

## Estructura del Proyecto (Simplificada)

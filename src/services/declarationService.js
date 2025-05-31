//obtener el token 
import { getCurrentUserToken } from './authServices.js'; 

const API_DECLARATIONS_URL = `${import.meta.env.VITE_API_BASE_URL}/declarations`;

// Helper para obtener los headers de autenticación
const getAuthHeaders = () => {
    const token = getCurrentUserToken();
    if (!token) {
        console.error("declarationService: No se encontró token para la petición autenticada.");
    }
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
};

//Crear un nuevo borrador de declaración
export const createDeclaration = async (declarationData) => {
    console.log('declarationService: Creando declaración con datos:', declarationData);
    try {
        const response = await fetch(API_DECLARATIONS_URL, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(declarationData),
        });

        const data = await response.json();
        if (!response.ok) {
            console.error('declarationService: Error al crear declaración - Respuesta no OK', data);
            throw new Error(data.message || 'Error al guardar el borrador de la declaración.');
        }
        console.log('declarationService: Declaración creada exitosamente', data);
        return data;
    } catch (error) {
        console.error('declarationService: Catch - Error en createDeclaration:', error);
        // Relanzar para que el componente/contexto lo maneje
        throw error; 
    }
};

//Obtener todas las declaraciones del usuario
export const getUserDeclarations = async () => {
    console.log('declarationService: Obteniendo declaraciones del usuario...');
    try {
        const response = await fetch(API_DECLARATIONS_URL, {
            method: 'GET',
            headers: getAuthHeaders(),
        });

        const data = await response.json();
        if (!response.ok) {
            console.error('declarationService: Error al obtener declaraciones - Respuesta no OK', data);
            throw new Error(data.message || 'Error al obtener el historial de declaraciones.');
        }
        console.log('declarationService: Declaraciones obtenidas exitosamente', data);
        return data; // Debería devolver un array de declaraciones
    } catch (error) {
        console.error('declarationService: Catch - Error en getUserDeclarations:', error);
        throw error;
    }
};

//Obtener un borrador de declaración específico 
export const getDeclarationById = async (idDeclaracion) => {
    console.log('declarationService: Obteniendo declaración por ID:', idDeclaracion);
    try {
        const response = await fetch(`${API_DECLARATIONS_URL}/${idDeclaracion}`, {
            method: 'GET',
            headers: getAuthHeaders(),
        });

        const data = await response.json();
        if (!response.ok) {
            console.error('declarationService: Error al obtener declaración por ID - Respuesta no OK', data);
            throw new Error(data.message || 'Error al obtener los detalles de la declaración.');
        }
        console.log('declarationService: Declaración por ID obtenida exitosamente', data);
        return data;
    } catch (error) {
        console.error('declarationService: Catch - Error en getDeclarationById:', error);
        throw error;
    }
};

// Actualizar un borrador
export const updateDeclaration = async (idDeclaracion, declarationData) => {
    console.log('declarationService: Actualizando declaración ID:', idDeclaracion, 'con datos:', declarationData);
    try {
        const response = await fetch(`${API_DECLARATIONS_URL}/${idDeclaracion}`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(declarationData),
        });

        const data = await response.json();
        if (!response.ok) {
            console.error('declarationService: Error al actualizar declaración - Respuesta no OK', data);
            throw new Error(data.message || 'Error al actualizar el borrador de la declaración.');
        }
        console.log('declarationService: Declaración actualizada exitosamente', data);
        return data;
    } catch (error) {
        console.error('declarationService: Catch - Error en updateDeclaration:', error);
        throw error;
    }
};
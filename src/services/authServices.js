// src/services/authService.js

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/auth`;

// Función para registrar un nuevo usuario
export const register = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json(); // Intenta parsear JSON siempre

    if (!response.ok) {
        // Si el backend envía un objeto con 'message' o 'errors'
        throw new Error(data.message || 'Error en el registro. Inténtalo de nuevo.');
    }
    return data; // Devuelve los datos de éxito (ej: { message: '...', user: {...} })
};

// Función para iniciar sesión
export const login = async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Credenciales inválidas. Inténtalo de nuevo.');
    }

    // Si el login es exitoso y el backend devuelve un token y datos del usuario
    if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user)); // Guardamos el usuario también
    }
    return data; // Devuelve { token, user, message }
};

// Función para cerrar sesión
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Aquí podrías añadir una llamada a un endpoint de logout en el backend si lo implementas
};

// Función para obtener el token actual del localStorage
export const getCurrentUserToken = () => {
    return localStorage.getItem('token');
};

// Función para obtener los datos del usuario guardados en localStorage
export const getStoredUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

// (Opcional pero recomendado) Función para verificar el token con el backend
export const verifyTokenAndGetUser = async () => {
    const token = getCurrentUserToken();
    if (!token) return Promise.reject('No token found');

    const response = await fetch(`${API_BASE_URL}/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    if (!response.ok) {
        logout(); // Si el token no es válido, cerramos sesión
        throw new Error(data.message || 'Sesión inválida o expirada.');
    }
    localStorage.setItem('user', JSON.stringify(data)); // Actualiza con datos frescos
    return data; // Devuelve los datos del usuario
};
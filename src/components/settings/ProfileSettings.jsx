import React, { useState } 
    from 'react';
import InputField from '../ui/InputField';
import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext'; 

function ProfileSettings() {
    const { user, isLoading: authIsLoading } = useAuth(); 

    // Estados para el formulario de cambio de contraseña
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [isPasswordLoading, setIsPasswordLoading] = useState(false);

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setPasswordError('');
        setPasswordMessage('');

        if (!currentPassword || !newPassword || !confirmNewPassword) {
            setPasswordError('Por favor, completa todos los campos de contraseña.');
            return;
        }
        if (newPassword !== confirmNewPassword) {
            setPasswordError('Las nuevas contraseñas no coinciden.');
            return;
        }
        if (newPassword.length < 8) {
            setPasswordError('La nueva contraseña debe tener al menos 8 caracteres.');
            return;
        }

        setIsPasswordLoading(true);
        console.log('Intentando cambiar contraseña...');
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulación
        setPasswordMessage('Contraseña actualizada con éxito');
        setCurrentPassword(''); setNewPassword(''); setConfirmNewPassword('');
        setIsPasswordLoading(false);
    };

    // Si aún está cargando el usuario del contexto, mostrar un placeholder
    if (authIsLoading && !user) {
        return <div>Cargando perfil...</div>; 
    }

    if (!user) {
        return <div>No se pudo cargar la información del perfil.</div>;
    }

    return (
        <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-700">Mi Perfil</h3>

            {/* Sección Información Básica */}
            <div className="mb-8 p-4 border rounded-md bg-gray-50">
                <p className="mb-2">
                    <span className="font-medium text-gray-600">Nombre:</span> {user.nombre}
                </p>
                <p>
                    <span className="font-medium text-gray-600">Correo Electrónico:</span> {user.email}
                </p>
            </div>

            {/* Sección Cambio de Contraseña */}
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Cambiar Contraseña</h4>
            {passwordMessage && <p className="text-green-600 text-sm mb-4">{passwordMessage}</p>}
            {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}
            <form onSubmit={handleChangePassword} className="space-y-4">
                <InputField label="Contraseña Actual" id="currentPassword" type="password" value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)} required disabled={isPasswordLoading} />
                <InputField label="Nueva Contraseña" id="newPassword" type="password" value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)} required disabled={isPasswordLoading} />
                <InputField label="Confirmar Nueva Contraseña" id="confirmNewPassword" type="password"
                    value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} required
                    disabled={isPasswordLoading} />
                <Button type="submit" variant="primary" disabled={isPasswordLoading}>
                    {isPasswordLoading ? 'Actualizando...' : 'Actualizar Contraseña'}
                </Button>
            </form>
        </div>
    );
}
export default ProfileSettings;
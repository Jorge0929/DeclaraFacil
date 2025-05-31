import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom'; // Importa useOutletContext
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';

function Step1_PersonalData() {
    const navigate = useNavigate();
    const { updateStepData, declarationData } = useOutletContext();

    const [formData, setFormData] = useState({
        documentType: 'CC', documentNumber: '', fullName: '', address: '', city: '', department: '', phoneNumber: '', email: '',
    });

    const [errors, setErrors] = useState({}); 
    // Efecto para cargar datos iniciales
    useEffect(() => {
        console.log('Step1: Cargando datos iniciales para Paso 1 desde declarationData.personalData:', declarationData?.personalData);
        if (declarationData?.personalData && Object.keys(declarationData.personalData).length > 0) {
            setFormData(declarationData.personalData);
        }

    }, [declarationData?.personalData]); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleNextStep = () => {
        // Validaciones básicas 
        if (!formData.documentNumber || !formData.fullName || !formData.email) {
            alert('Por favor, completa al menos número de documento, nombre completo y email.');
            return;
        }
        console.log('Step1: Guardando datos del Paso 1:', formData);
        updateStepData('personalData', formData); 
        navigate('/declaration/income'); 
    };

    const handleSaveAndExit = () => {
        console.log('Step1: Guardando datos del Paso 1 y saliendo:', formData);
        updateStepData('personalData', formData); 
        navigate('/dashboard');
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
            <div className="mb-6 border-b pb-4">
                <p className="text-sm font-medium text-indigo-600 mb-1">Paso 1 de 5</p>
                <h2 className="text-2xl font-bold text-gray-800">Tus Datos Personales</h2>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
                        <select id="documentType" name="documentType" value={formData.documentType} onChange={handleInputChange}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required>
                            <option value="CC">Cédula de Ciudadanía</option>
                            <option value="CE">Cédula de Extranjería</option>
                            <option value="NIT">NIT</option>
                            <option value="PAS">Pasaporte</option>
                        </select>
                    </div>
                    <InputField
                        label="Número de Documento" id="documentNumber" name="documentNumber" type="text" placeholder="Tu número de documento"
                        value={formData.documentNumber} onChange={handleInputChange} required />
                </div>
                <InputField
                    label="Nombre Completo (Como aparece en el RUT)" id="fullName" name="fullName" placeholder="Nombre(s) y Apellido(s)"
                    value={formData.fullName} onChange={handleInputChange} required />
                <InputField
                    label="Dirección de Residencia" id="address" name="address" placeholder="Dirección completa" value={formData.address}
                    onChange={handleInputChange} required />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                        label="Ciudad" id="city" name="city" placeholder="Ciudad" value={formData.city} onChange={handleInputChange}
                        required />
                    <InputField
                        label="Departamento" id="department" name="department" placeholder="Departamento" value={formData.department}
                        onChange={handleInputChange} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Teléfono Celular" id="phoneNumber" name="phoneNumber" type="tel" placeholder="Tu número de celular"
                        value={formData.phoneNumber} onChange={handleInputChange} required />
                    <InputField
                        label="Correo Electrónico" id="email" name="email" type="email" placeholder="tuemail@ejemplo.com"
                        value={formData.email} onChange={handleInputChange} required />
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                <Button onClick={handleSaveAndExit} variant="secondary">
                    Guardar y Salir
                </Button>
                <Button onClick={handleNextStep} variant="primary">
                    Siguiente
                </Button>
            </div>
        </div>
    );
}

export default Step1_PersonalData;
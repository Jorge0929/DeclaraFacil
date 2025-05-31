import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext'; 

function Dashboard() {
    const navigate = useNavigate();
    const { user, isLoading: authIsLoading } = useAuth(); 

    // Estados simulados para la declaración 
    const [declarationStatus, setDeclarationStatus] = React.useState('En preparación (Paso 2 de 5)');
    const [taxYear, setTaxYear] = React.useState(new Date().getFullYear() - 1);
    const [dueDate, setDueDate] = React.useState('30/09/2025'); // Ejemplo

    const handleContinueDeclaration = () => navigate('/declaration');

    if (authIsLoading && !user) {
        return <div>Cargando dashboard...</div>; // O un spinner
    }

    return (
        <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                Hola {user ? user.nombre : 'Usuario'}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tarjeta Estado Declaración */}
                <Card title={`Estado Declaración ${taxYear}`} className="md:col-span-2">
                    {/* Contenido de la tarjeta de declaración... */}
                    <p className="text-gray-600 mb-1">Estado actual: <span className="font-medium">{declarationStatus}</span></p>
                    <p className="text-gray-600 mb-4">Fecha límite: <span className="font-medium">{dueDate}</span></p>
                    <Button onClick={handleContinueDeclaration} className="w-full sm:w-auto">
                        Continuar Preparación
                    </Button>
                </Card>

                {/* Tarjeta Guía DIAN */}
                <Card title="Guía: Consultar Datos DIAN" className="flex flex-col justify-between">
                    <p className="text-gray-600 mb-4 text-sm flex-grow">Aprende a consultar tu información exógena directamente en el portal de la DIAN.</p>
                    <Link to="/dian-guide" className="mt-auto">
                        <Button className="w-full" variant="secondary"> {/* Cambié variant para diferenciar */}
                            Consultar Guía
                        </Button>
                    </Link>
                </Card>

                {/* Tarjeta Asistente Virtual */}
                <Card title="Asistente Virtual" className="flex flex-col justify-between">
                    <p className="text-gray-600 mb-4 text-sm flex-grow">¿Tienes preguntas? Nuestro asistente virtual puede ayudarte.</p>
                    <Button onClick={() => navigate('/support')} className="w-full mt-auto" variant="secondary"> {/* Cambié variant */}
                        Abrir Chat
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default Dashboard;
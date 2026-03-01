import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo, faPoop, faCircle } from '@fortawesome/free-solid-svg-icons';

interface StatusServerProps {
    serverName: string;
    isOnline: boolean;
}

const StatusServer = ({ serverName, isOnline }: StatusServerProps) => {
    return (
        <div className={`flex items-center p-2 rounded-lg border-2 bg-slate-100 ${isOnline ? 'border-green-500' : 'border-red-500'}`}>
            
            {/* Icono del servidor */}
            <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full border border-slate-200 text-slate-400">
                <FontAwesomeIcon 
                    icon={isOnline ? faPoo : faPoop} 
                    className={`text-xl ${isOnline ? 'text-green-600' : 'text-red-600'}`} 
                />
                <span className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center bg-white rounded-full p-0.5">
                    <FontAwesomeIcon
                        icon={faCircle}
                        className={`text-[10px] ${isOnline ? 'text-green-500 animate-pulse'  : 'text-red-400'}`}
                    />
                </span>
            </div>

            {/* Información del Servidor */}
            <div className="ml-3 flex flex-col">
                <span className="text-sm font-bold text-slate-800">{serverName}</span>
                <span className={`text-xs font-medium ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
                    {isOnline ? 'Conectado' : 'Desconectado'}
                </span>
            </div>
        </div>
    );
};

export default StatusServer;
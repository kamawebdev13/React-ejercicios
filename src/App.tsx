import StatusServer from './componentes/StatusServer';
import './componentes/index.css';

const ListServer = [
  { id: 1, serverName: "Claude", isOnline: true },
  { id: 2, serverName: "ChatGPT", isOnline: false },
  { id: 3, serverName: "Gemini", isOnline: true },
  { id: 4, serverName: "Copilot", isOnline: false },
  { id: 5, serverName: "DeepSeek", isOnline: true },
  { id: 6, serverName: "MetaAi", isOnline: false },
];

function App() {
  return (
    <div className='min-h-screen bg-slate-50 container mx-auto p-8'>
      <h1 className="text-3xl font-bold text-center mb-8">Servidor Status</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ListServer.map((server) => (
          <StatusServer
            key={server.id}
            serverName={server.serverName}
            isOnline={server.isOnline}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
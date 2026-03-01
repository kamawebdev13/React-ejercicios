import StatusServer from './componentes/StatusServer';
import './componentes/StatusServer.css'


function App() {
  
  return (
    <div className='container mx-auto p-4'>
      <h1 className="text-3xl font-bold text-center mb-8">Portal de Noticias</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NewsList.map((noticia) => (
          <NewsPerfil 
            key={noticia.id}
            title={noticia.title}
            category={noticia.category}
            text={noticia.text}
            image={noticia.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App

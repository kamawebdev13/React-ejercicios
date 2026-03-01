import NewsPerfil from './componentes/NewsPerfil';
import './App.css'

const NewsList = [
  { id: 1, title: "Gran avance tecnológico", category: "Tecnologia", text: "Investigadores logran un hito en la computación cuántica.", image: "/images/news-1.jpg" },
  { id: 2, title: "Cumbre Mundial", category: "internacionales", text: "Líderes se reúnen para discutir el cambio climático.", image: "/images/news-2.jpg"},
  { id: 3, title: "Final de Liga", category: "Deportes", text: "El equipo local se corona campeón tras un partido intenso.", image: "/images/news-3.jpg"},
  { id: 4, title: "Nueva Ruta Espacial", category: "Espacio", text: "Inician misiones comerciales a la órbita baja.", image: "/images/news-4.jpg"},
  { id: 5, title: "Festival de Cine", category: "entretenimiento", text: "Se premian las mejores producciones del año.", image: "/images/news-5.jpg"},
  { id: 6, title: "Terror en bloque residencial", category: "Sucesos", text: "Vecinos del Lolamento aterrorizados por incendio en bloques.", image: "/images/news-6.jpg"},
  { id: 7, title: "Descubrimiento Médico", category: "Medicina", text: "Nueva terapia génica muestra resultados prometedores.", image: "/images/news-7.jpg"},
  { id: 8, title: "Crisis Energética", category: "Internacionales", text: "Nuevas medidas para el ahorro de energía en invierno.", image: "/images/news-8.jpg"},
  { id: 9, title: "Temporada de Fresas", category: "Gastronomia", text: "Tarta de fresas para celebrar llegada de la primavera.", image: "/images/news-9.jpg"},
  { id: 10, title: "Inauguración Museo", category: "Sucesos", text: "Abre sus puertas el nuevo museo de arte moderno.", image: "/images/news-10.jpg" },

]

function App() {
  
  return (
    <div className='container mx-auto p-4'>
      <h1 className="text-3xl font-bold text-center mb-8">Portal de Noticias El Melon 🍈 </h1>
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

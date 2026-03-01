
interface NewsPerfilProps {
    title: string;
    category: string;
    text: string;
    image: string;
}

const NewsPerfil = (props: NewsPerfilProps) => {

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl ">
            <img
                src={props.image}
                alt={props.title}
                className='w-full h-48 object-cover'
            />
            <div className='p-4'>
                <span className='text-xs font-semibold text-blue-600 uppercase tracking-wider'>
                    {props.category}
                </span>
                <h2 className='text-xl font-bold mt-2 mb-2 text-gray-800'>
                    {props.title}
                </h2>
                <p className='text-gray-600 text-sm leading-relaxed'>
                    {props.text}
                </p>

                <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between cursor-pointer group"
                >
                    <span className="text-blue-600 font-bold text-sm hover:text-blue-800">
                        Leer noticia completa
                    </span>

                    {/* Flecha manual con CSS para asegurar que se vea */}
                    <span className="text-blue-600 font-bold transform group-hover:translate-x-1 transition-transform">
                        &rarr;
                    </span>
                </a>



            </div>

        </div>
    );

};

export default NewsPerfil;
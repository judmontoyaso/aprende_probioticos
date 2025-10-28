'use client';

import Link from 'next/link';

interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  category: string;
  duration: string;
  color: string;
}

const videos: Video[] = [
  {
    id: "que-son-probioticos",
    title: "¿Qué son los Probióticos?",
    description: "Descubre qué son los probióticos y cómo benefician tu salud intestinal",
    videoUrl: "/videos/que-son-probioticos - Made with Clipchamp (6).mp4",
    category: "Fundamentos",
    duration: "0:45",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "tipos-probioticos",
    title: "Tipos de Probióticos",
    description: "Conoce los diferentes tipos de probióticos y sus aplicaciones específicas",
    videoUrl: "/videos/tiposprobioticos.mp4",
    category: "Educación",
    duration: "1:00",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "intestino-cerebro",
    title: "Eje Intestino-Cerebro",
    description: "Entiende la fascinante conexión entre tu intestino y tu cerebro",
    videoUrl: "/videos/intestino cerebro - Made with Clipchamp.mp4",
    category: "Ciencia",
    duration: "1:15",
    color: "from-green-500 to-teal-500"
  },
  {
    id: "probioticos-salud",
    title: "Probióticos y Salud",
    description: "Los beneficios de los probióticos para tu salud general",
    videoUrl: "/videos/probioticos ‐ Hecho con Clipchamp.mp4",
    category: "Salud",
    duration: "0:50",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "probioticos-avanzado",
    title: "Probióticos Avanzado",
    description: "Profundiza en la ciencia detrás de los probióticos",
    videoUrl: "/videos/Probioticos 2 - Made with Clipchamp (4).mp4",
    category: "Avanzado",
    duration: "1:20",
    color: "from-indigo-500 to-purple-500"
  },
];

export default function VideosSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center bg-[#c4faa4] text-[#163660] px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Videos Educativos
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Aprende con Videos Cortos
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contenido visual breve y educativo sobre probióticos
          </p>
        </div>

        {/* Videos Grid - Estilo Reel */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-[#48a537]/50 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
                
                {/* Video Container */}
                <div className="relative aspect-[9/16] bg-black">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className={`inline-block bg-gradient-to-r ${video.color} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
                      {video.category}
                    </span>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {video.duration}
                    </span>
                  </div>

                  {/* Info Overlay - Aparece al hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-xs line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            Más contenido educativo en nuestro blog
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#48a537] to-[#5cb844] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-[#48a537]/50 transform hover:scale-105 transition-all duration-300"
          >
            Ver Artículos del Blog
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

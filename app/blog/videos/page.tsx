import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Videos Educativos sobre Probióticos | Probióticos Para Todos",
  description: "Descubre nuestra colección de videos educativos sobre probióticos, salud intestinal, tipos de probióticos y su conexión con el cerebro.",
  keywords: "videos probióticos, educación salud intestinal, videos microbiota, probióticos explicados",
  openGraph: {
    title: "Videos Educativos sobre Probióticos",
    description: "Aprende sobre probióticos con nuestros videos educativos breves y fáciles de entender.",
    type: "website",
    url: "https://www.probioticos.info/blog/videos",
  },
  alternates: {
    canonical: "https://www.probioticos.info/blog/videos",
  },
};

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
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
    thumbnail: "/images/probioticos-general.png",
    videoUrl: "/videos/que-son-probioticos - Made with Clipchamp (6).mp4",
    category: "Fundamentos",
    duration: "0:45",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "tipos-probioticos",
    title: "Tipos de Probióticos",
    description: "Conoce los diferentes tipos de probióticos y sus aplicaciones específicas",
    thumbnail: "/images/tipos-probioticos.png",
    videoUrl: "/videos/tiposprobioticos.mp4",
    category: "Educación",
    duration: "1:00",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "intestino-cerebro",
    title: "Eje Intestino-Cerebro",
    description: "Entiende la fascinante conexión entre tu intestino y tu cerebro",
    thumbnail: "/images/eje-intestino-cerebro.png",
    videoUrl: "/videos/intestino cerebro - Made with Clipchamp.mp4",
    category: "Ciencia",
    duration: "1:15",
    color: "from-green-500 to-teal-500"
  },
  {
    id: "probioticos-salud",
    title: "Probióticos y Salud",
    description: "Los beneficios de los probióticos para tu salud general",
    thumbnail: "/images/probioticos-salud.png",
    videoUrl: "/videos/probioticos ‐ Hecho con Clipchamp.mp4",
    category: "Salud",
    duration: "0:50",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "probioticos-avanzado",
    title: "Probióticos Avanzado",
    description: "Profundiza en la ciencia detrás de los probióticos",
    thumbnail: "/images/probioticos-ciencia.png",
    videoUrl: "/videos/Probioticos 2 - Made with Clipchamp (4).mp4",
    category: "Avanzado",
    duration: "1:20",
    color: "from-indigo-500 to-purple-500"
  },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#163660] via-[#275b9e] to-[#4071b4] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center bg-[#c4faa4] text-[#163660] px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Videos Educativos
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Aprende con Videos
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Contenido visual breve y educativo sobre probióticos y salud intestinal
          </p>
        </div>
      </div>

      {/* Videos Grid - Estilo Reel */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-[#48a537]/50 animate-fadeInUp"
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
                  poster={video.thumbnail}
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
                <div className="absolute top-4 left-4">
                  <span className={`inline-block bg-gradient-to-r ${video.color} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg`}>
                    {video.category}
                  </span>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {video.duration}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative p-6 bg-gradient-to-b from-gray-800 to-gray-900">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c4faa4] transition-colors duration-300">
                  {video.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {video.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-[#48a537] to-[#5cb844] text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-[#48a537]/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Ver Video
                  </button>
                  
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transform hover:scale-105 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#163660] via-[#275b9e] to-[#4071b4] py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Quieres aprender más?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explora nuestros artículos detallados sobre probióticos y salud intestinal
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center bg-[#48a537] hover:bg-[#5cb844] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-[#48a537]/50 transform hover:scale-105 transition-all duration-300"
            >
              Ver Artículos
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300"
            >
              Ir al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

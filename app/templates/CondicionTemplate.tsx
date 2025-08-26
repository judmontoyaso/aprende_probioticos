import Image from 'next/image';
import Link from 'next/link';
import AdBanner from '../components/AdBanner';
// import SEOSchema from '../components/SEOSchema';

interface CondicionTemplateProps {
  titulo: string;
  descripcion: string;
  imagenPrincipal: {
    src: string;
    alt: string;
  };
  fechaPublicacion: string;
  introduccion: string;
  seccionesContenido: {
    titulo: string;
    contenido: React.ReactNode;
  }[];
  cepasRecomendadas: {
    nombre: string;
    descripcion: string;
  }[];
  estudiosRelevantes: {
    titulo: string;
    autores: string;
    año: string;
    publicacion: string;
    url?: string;
    resumen: string;
  }[];
  faq: {
    pregunta: string;
    respuesta: string;
  }[];
  recomendacionesDoctor?: string;
}

export default function CondicionTemplate({
  titulo,
  descripcion,
  imagenPrincipal,
  fechaPublicacion,
  introduccion,
  seccionesContenido,
  cepasRecomendadas,
  estudiosRelevantes,
  faq,
  recomendacionesDoctor
}: CondicionTemplateProps) {
  // Schema.org estructurado (desactivado temporalmente para depurar)
  // <SEOSchema type="both" data={{ article: articleData, faq: faqData }} />
  /*
  const articleData = {
    title: titulo,
    description: descripcion,
    publishDate: fechaPublicacion,
    author: "Probióticos Para Todos",
    image: `https://www.probioticosparatodos.com${imagenPrincipal.src}`,
    url: `https://www.probioticosparatodos.com/condiciones/${titulo.toLowerCase().replace(/\s+/g, '-')}`
  };

  // Datos estructurados para el esquema FAQ
  const faqData = faq.map(item => ({
    question: item.pregunta,
    answer: item.respuesta
  }));
  */

  return (
    <>
  {/* Schema.org estructurado (temporalmente desactivado para depurar) */}
  {/** <SEOSchema type="both" data={{ article: articleData, faq: faqData }} /> **/}
      
      {/* Header */}
      <header className="bg-green-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{titulo}</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            {descripcion}
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            {/* Imagen de cabecera */}
            <div className="mb-8">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px]">
                <Image 
                  src={imagenPrincipal.src} 
                  alt={imagenPrincipal.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="rounded-lg shadow-md object-contain"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
            
            {/* Introducción */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="prose prose-green max-w-none">
                <div dangerouslySetInnerHTML={{ __html: introduccion }} />
              </div>
            </section>
            
            {/* Secciones de contenido */}
            {seccionesContenido.map((seccion, index) => (
              <section key={index} className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">{seccion.titulo}</h2>
                <div className="prose prose-green max-w-none">
                  {seccion.contenido}
                </div>
              </section>
            ))}
            
            {/* Cepas recomendadas */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Cepas probióticas recomendadas</h2>
              <div className="space-y-6">
                {cepasRecomendadas.map((cepa, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h3 className="text-xl font-semibold mb-2 text-green-700">{cepa.nombre}</h3>
                    <p className="text-gray-700">{cepa.descripcion}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Estudios científicos */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Evidencia científica</h2>
              <div className="space-y-6">
                {estudiosRelevantes.map((estudio, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">{estudio.titulo}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {estudio.autores} ({estudio.año}). <em>{estudio.publicacion}</em>.
                      {estudio.url && (
                        <a 
                          href={estudio.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="ml-2 text-green-600 hover:text-green-700"
                        >
                          Ver estudio
                        </a>
                      )}
                    </p>
                    <p className="text-gray-700">{estudio.resumen}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Recomendaciones del doctor */}
            {recomendacionesDoctor && (
              <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 mr-4">
                    <Image 
                      src="/icons/doctor.png" 
                      alt="Icono de doctor" 
                      width={48} 
                      height={48} 
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Recomendación del especialista</h2>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <p className="text-gray-700 italic">&ldquo;{recomendacionesDoctor}&rdquo;</p>
                </div>
              </section>
            )}
            
            {/* FAQ */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Preguntas frecuentes</h2>
              <div className="space-y-6">
                {faq.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-2 text-green-600">{item.pregunta}</h3>
                    <p className="text-gray-700">{item.respuesta}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="sticky top-6">
              <AdBanner position="sidebar" className="mb-6" />
              
              <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Contenido relacionado</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/que-son" className="text-green-600 hover:text-green-700 transition-colors">
                      ¿Qué son los probióticos?
                    </Link>
                  </li>
                  <li>
                    <Link href="/beneficios" className="text-green-600 hover:text-green-700 transition-colors">
                      Beneficios de los probióticos
                    </Link>
                  </li>
                  <li>
                    <Link href="/como-elegir" className="text-green-600 hover:text-green-700 transition-colors">
                      Cómo elegir el probiótico adecuado
                    </Link>
                  </li>
                  <li>
                    <Link href="/referencias" className="text-green-600 hover:text-green-700 transition-colors">
                      Referencias científicas
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Otras condiciones</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/condiciones/digestiva" className="text-green-600 hover:text-green-700 transition-colors">
                      Salud digestiva
                    </Link>
                  </li>
                  <li>
                    <Link href="/condiciones/inmune" className="text-green-600 hover:text-green-700 transition-colors">
                      Sistema inmunitario
                    </Link>
                  </li>
                  <li>
                    <Link href="/condiciones/cerebro-intestino" className="text-green-600 hover:text-green-700 transition-colors">
                      Eje cerebro-intestino
                    </Link>
                  </li>
                  <li>
                    <Link href="/condiciones/dermatologica" className="text-green-600 hover:text-green-700 transition-colors">
                      Salud de la piel
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Ad */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" />
      </div>
    </>
  );
} 
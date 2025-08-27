'use client';

import Image from 'next/image';
import Link from 'next/link';
// import AdBanner from '../components/AdBanner';
// import SEOSchema from '../components/SEOSchema';

interface TipoProbioticosTemplateProps {
  titulo: string;
  descripcion: string;
  imagenPrincipal: {
    src: string;
    alt: string;
  };
  fechaPublicacion: string;
  introduccion: string;
  caracteristicas: {
    titulo: string;
    descripcion: string;
  }[];
  beneficios: {
    titulo: string;
    descripcion: string;
  }[];
  cepasPopulares: {
    nombre: string;
    descripcion: string;
    beneficios: string[];
    condiciones?: string[];
  }[];
  alimentosNaturales?: {
    nombre: string;
    descripcion: string;
    imagen?: {
      src: string;
      alt: string;
    };
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
  seccionesContenido?: {
    titulo: string;
    contenido: React.ReactNode;
  }[];
}

export default function TipoProbioticosTemplate({
  titulo,
  descripcion,
  imagenPrincipal,
  // fechaPublicacion, // comentado temporalmente
  introduccion,
  caracteristicas,
  beneficios,
  cepasPopulares,
  alimentosNaturales,
  estudiosRelevantes,
  faq,
  seccionesContenido
}: TipoProbioticosTemplateProps) {
  // Datos estructurados para el esquema de artículo
  /*
  const articleData = {
    title: titulo,
    description: descripcion,
    publishDate: fechaPublicacion,
    author: "Probióticos Para Todos",
    image: `https://www.probioticosparatodos.com${imagenPrincipal.src}`,
    url: `https://www.probioticosparatodos.com/tipos/${titulo.toLowerCase().replace(/\s+/g, '-')}`
  };

  // Datos estructurados para el esquema FAQ
  const faqData = faq.map(item => ({
    question: item.pregunta,
    answer: item.respuesta
  }));
  */

  return (
    <>
  {/* Schema.org estructurado - article (desactivado temporalmente para depurar) */}
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
            
            {/* Características */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Características principales</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {caracteristicas.map((caracteristica, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h3 className="text-lg font-semibold mb-2 text-green-700">{caracteristica.titulo}</h3>
                    <p className="text-gray-700">{caracteristica.descripcion}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Beneficios */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Beneficios para la salud</h2>
              <div className="space-y-6">
                {beneficios.map((beneficio, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-2 text-green-600">{beneficio.titulo}</h3>
                    <p className="text-gray-700 mb-4">{beneficio.descripcion}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Cepas populares */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Cepas populares</h2>
              <div className="space-y-8">
                {cepasPopulares.map((cepa, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold mb-3 text-green-700">{cepa.nombre}</h3>
                    <p className="text-gray-700 mb-4">{cepa.descripcion}</p>
                    
                    <h4 className="font-semibold mb-2 text-gray-700">Beneficios específicos:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                      {cepa.beneficios.map((beneficio, idx) => (
                        <li key={idx}>{beneficio}</li>
                      ))}
                    </ul>
                    
                    {cepa.condiciones && cepa.condiciones.length > 0 && (
                      <>
                        <h4 className="font-semibold mb-2 text-gray-700">Condiciones para las que se estudia:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {cepa.condiciones.map((condicion, idx) => (
                            <li key={idx}>{condicion}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>
            
            {/* Alimentos naturales */}
            {alimentosNaturales && alimentosNaturales.length > 0 && (
              <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Fuentes naturales</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {alimentosNaturales.map((alimento, index) => (
                    <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-100">
                      {alimento.imagen && (
                        <div className="mb-3">
                          <div className="relative w-full h-48">
                            <Image 
                              src={alimento.imagen.src} 
                              alt={alimento.imagen.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, 300px"
                              className="rounded-lg object-cover"
                            />
                          </div>
                        </div>
                      )}
                      <h3 className="text-lg font-semibold mb-2 text-green-700">{alimento.nombre}</h3>
                      <p className="text-gray-700">{alimento.descripcion}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {/* Secciones de contenido adicionales */}
            {seccionesContenido && seccionesContenido.map((seccion, index) => (
              <section key={index} className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">{seccion.titulo}</h2>
                <div className="prose prose-green max-w-none">
                  {seccion.contenido}
                </div>
              </section>
            ))}
            
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
              {/* <AdBanner position="sidebar" className="mb-6" /> */}
              
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Otros tipos de probióticos</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/tipos/lactobacillus" className="text-green-600 hover:text-green-700 transition-colors">
                      Lactobacillus
                    </Link>
                  </li>
                  <li>
                    <Link href="/tipos/bifidobacterium" className="text-green-600 hover:text-green-700 transition-colors">
                      Bifidobacterium
                    </Link>
                  </li>
                  <li>
                    <Link href="/tipos/saccharomyces" className="text-green-600 hover:text-green-700 transition-colors">
                      Saccharomyces
                    </Link>
                  </li>
                  <li>
                    <Link href="/tipos/bacillus" className="text-green-600 hover:text-green-700 transition-colors">
                      Bacillus
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Ad (desactivado temporalmente) */}
      {/**
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" />
      </div>
      **/}
    </>
  );
} 
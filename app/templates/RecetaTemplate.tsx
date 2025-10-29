import Link from 'next/link';
import SafeImage from '../components/SafeImage';
// import AdBanner from '../components/AdBanner';

import { RecetaData } from '../recetas/data';

interface RecetaTemplateProps {
  receta: RecetaData;
}

export default function RecetaTemplate({ receta }: RecetaTemplateProps) {
  const {
    titulo,
    descripcion,
    imagenPrincipal,
    tiempoPreparacion,
    dificultad,
    porciones,
    introduccion,
    ingredientes,
    materialesRequeridos,
    instrucciones,
    consejos,
    beneficios,
    probioticosPresentes,
    variaciones,
    faq,
  } = receta;

  // Función para obtener color según dificultad
  const getDifficultyColor = () => {
    switch(dificultad) {
      case 'Fácil': return 'bg-green-100 text-green-800';
      case 'Media': return 'bg-yellow-100 text-yellow-800';
      case 'Difícil': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50">
  {/* Schema.org estructurado (temporalmente desactivado para depurar) */}
{/* <SEOSchema type="both" data={{ article: recipeData, faq: faqData }} /> */} 
      
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
                <SafeImage 
                  src={imagenPrincipal.src} 
                  alt={imagenPrincipal.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="rounded-lg shadow-md object-cover"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
            
            {/* Info de receta */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-gray-500 text-sm">Tiempo</span>
                  <span className="font-medium text-gray-800">{tiempoPreparacion}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-gray-500 text-sm">Dificultad</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
                    {dificultad}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-gray-500 text-sm">Porciones</span>
                  <span className="font-medium text-gray-800">{porciones}</span>
                </div>
              </div>
            </div>
            
            {/* Introducción */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="prose prose-green max-w-none">
                <div dangerouslySetInnerHTML={{ __html: introduccion }} />
              </div>
            </section>
            
            {/* Ingredientes */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Ingredientes</h2>
              <ul className="space-y-3">
                {ingredientes.map((ingrediente, index) => (
                  <li key={`ingrediente-${index}-${ingrediente.nombre.substring(0, 10)}`} className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-3"></span>
                    <div>
                      <span className="font-medium">{ingrediente.cantidad}</span> {ingrediente.nombre}
                      {ingrediente.nota && (
                        <span className="text-sm text-gray-500 ml-2">({ingrediente.nota})</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            
            {/* Materiales requeridos */}
            {materialesRequeridos && materialesRequeridos.length > 0 && (
              <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Materiales necesarios</h2>
                <ul className="space-y-3">
                  {materialesRequeridos.map((material, index) => (
                    <li key={`material-${index}-${material.substring(0, 10)}`} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-blue-500 mr-3"></span>
                      <div>{material}</div>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            
            {/* Instrucciones */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Preparación</h2>
              <div className="space-y-8">
                {instrucciones.map((instruccion, index) => (
                  <div key={`instruccion-${index}-${instruccion.paso.substring(0, 15).replace(/\s+/g, '-')}`} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg mb-2 text-gray-800">{instruccion.paso}</h3>
                      <p className="text-gray-700 mb-4">{instruccion.descripcion}</p>
                      
                      {instruccion.imagen && (
                        <div className="relative w-full max-w-md mx-auto aspect-square mt-3 mb-4">
                          <SafeImage 
                            src={instruccion.imagen.src} 
                            alt={instruccion.imagen.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            className="rounded-lg object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Consejos */}
            {consejos && consejos.length > 0 && (
              <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Consejos útiles</h2>
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <ul className="space-y-3">
                    {consejos.map((consejo, index) => (
                      <li key={`consejo-${index}-${consejo.substring(0, 15).replace(/\s+/g, '-')}`} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <p className="text-gray-700">{consejo}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
            
            {/* Variaciones */}
            {variaciones && variaciones.length > 0 && (
              <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Variaciones</h2>
                <div className="space-y-4">
                  {variaciones.map((variacion, index) => (
                    <div key={`variacion-${index}-${variacion.titulo.substring(0, 15).replace(/\s+/g, '-')}`} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h3 className="text-lg font-semibold mb-2 text-blue-700">{variacion.titulo}</h3>
                      <p className="text-gray-700">{variacion.descripcion}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {/* Probióticos presentes */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Probióticos presentes</h2>
              <div className="space-y-4">
                {probioticosPresentes.map((probiotico, index) => (
                  <div key={`probiotico-${index}-${probiotico.nombre.substring(0, 15).replace(/\s+/g, '-')}`}>
                    <h3 className="text-xl font-semibold mb-2 text-green-600">{probiotico.nombre}</h3>
                    <p className="text-gray-700">{probiotico.descripcion}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Beneficios */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Beneficios para la salud</h2>
              <div className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <div key={`beneficio-${index}-${beneficio.titulo.substring(0, 15).replace(/\s+/g, '-')}`}>
                    <h3 className="text-xl font-semibold mb-2 text-green-600">{beneficio.titulo}</h3>
                    <p className="text-gray-700">{beneficio.descripcion}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* FAQ */}
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Preguntas frecuentes</h2>
              <div className="space-y-6">
                {faq.map((item, index) => (
                  <div key={`faq-${index}-${item.pregunta.substring(0, 20).replace(/\s+/g, '-').replace(/[¿?]/g, '')}`}>
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Artículos relacionados</h3>
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
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Más recetas</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/recetas/yogur-casero" className="text-green-600 hover:text-green-700 transition-colors">
                      Yogur casero
                    </Link>
                  </li>
                  <li>
                    <Link href="/recetas/kefir-de-leche" className="text-green-600 hover:text-green-700 transition-colors">
                      Kéfir de leche
                    </Link>
                  </li>
                  <li>
                    <Link href="/recetas/kefir-de-agua" className="text-green-600 hover:text-green-700 transition-colors">
                      Kéfir de agua
                    </Link>
                  </li>
                  <li>
                    <Link href="/recetas/chucrut-casero" className="text-green-600 hover:text-green-700 transition-colors">
                      Chucrut casero
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
    {/* <AdBanner position="bottom" /> */}
      </div>
    </div>
  );
}

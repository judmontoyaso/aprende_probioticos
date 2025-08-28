import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre Nosotros | Probióticos Para Todos',
  description: 'Conoce la misión de Probióticos Para Todos: proporcionar información educativa y científica sobre probióticos y salud intestinal.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function SobreNosotros() {
  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Sobre Nosotros</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            Nuestra misión es proporcionar información educativa y científica sobre probióticos.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Disclaimer prominente */}
          <div className="mb-8 bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-blue-800">Importante</h3>
                <p className="text-blue-700 text-sm mt-1">
                  Somos un sitio web educativo. No somos profesionales médicos ni proporcionamos consejos médicos. 
                  Toda la información es solo para fines educativos.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
              <p className="text-gray-700 mb-4">
                Probióticos Para Todos nació con el objetivo de democratizar el acceso a información científica 
                sobre probióticos y salud intestinal. Creemos que todos merecen entender cómo funciona su microbiota 
                y qué dice la ciencia sobre los beneficios de los microorganismos beneficiosos.
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">🎯 Nuestro enfoque</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• <strong>Basado en evidencia:</strong> Solo compartimos información respaldada por estudios científicos</li>
                  <li>• <strong>Lenguaje accesible:</strong> Traducimos la ciencia compleja a términos comprensibles</li>
                  <li>• <strong>Educativo únicamente:</strong> No vendemos productos ni damos consejos médicos</li>
                  <li>• <strong>Transparente:</strong> Citamos todas nuestras fuentes científicas</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Qué NO Hacemos</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                <ul className="space-y-2 text-red-700">
                  <li>❌ <strong>No damos consejos médicos</strong> - Siempre recomendamos consultar profesionales</li>
                  <li>❌ <strong>No vendemos productos</strong> - No tenemos afiliaciones comerciales con marcas</li>
                  <li>❌ <strong>No hacemos diagnósticos</strong> - Solo proporcionamos información general</li>
                  <li>❌ <strong>No reemplazamos al médico</strong> - Nuestro contenido es complementario</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestros Valores</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🔬 Rigor Científico</h4>
                  <p className="text-sm text-gray-600">
                    Basamos todo nuestro contenido en investigaciones peer-reviewed y fuentes académicas reconocidas.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🤝 Transparencia</h4>
                  <p className="text-sm text-gray-600">
                    Siempre indicamos las limitaciones de los estudios y cuando la evidencia es preliminar.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎓 Educación</h4>
                  <p className="text-sm text-gray-600">
                    Nuestro objetivo es educar e informar, nunca sustituir el criterio médico profesional.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">⚖️ Neutralidad</h4>
                  <p className="text-sm text-gray-600">
                    No promovemos marcas específicas ni tenemos intereses comerciales en productos.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestro Proceso Editorial</h2>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Investigación:</strong> Revisamos literatura científica actual en bases de datos como PubMed, 
                  Cochrane Library y revistas especializadas en microbiología y gastroenterología.
                </li>
                <li>
                  <strong>Verificación:</strong> Contrastamos información con múltiples fuentes científicas 
                  y organizaciones médicas reconocidas.
                </li>
                <li>
                  <strong>Simplificación:</strong> Traducimos conceptos complejos a lenguaje accesible 
                  sin perder precisión científica.
                </li>
                <li>
                  <strong>Revisión:</strong> Todo el contenido pasa por revisión para asegurar accuracy 
                  y cumplimiento de nuestros estándares éticos.
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Financiamiento y Sostenibilidad</h2>
              <p className="text-gray-700 mb-4">
                Para mantener este sitio web gratuito y accesible, utilizamos publicidad contextual a través 
                de Google AdSense. Esta publicidad:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>No influye en nuestro contenido editorial</li>
                <li>Se selecciona automáticamente según el tema de cada página</li>
                <li>No representa recomendaciones de nuestra parte</li>
                <li>Puede ser desactivada por los usuarios según sus preferencias</li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Transparencia total:</strong> No tenemos acuerdos comerciales con fabricantes de probióticos 
                  ni recibimos comisiones por ventas. Nuestro único ingreso proviene de publicidad contextual general.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes sugerencias para mejorar nuestro contenido, detectas algún error, 
                o tienes preguntas sobre nuestro enfoque editorial, no dudes en contactarnos.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> contacto@probioticosparatodos.com<br/>
                  <strong>Página de contacto:</strong> <Link href="/contacto" className="text-green-600 hover:text-green-700 underline">/contacto</Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Contacto | Probióticos Para Todos',
  description: 'Ponte en contacto con nosotros para preguntas sobre probióticos, colaboraciones o información adicional sobre salud digestiva.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function Contacto() {
  return (
    <>
      {/* Enhanced Header with gradient */}
      <header className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-green-800 opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full opacity-10 transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 rounded-full opacity-10 transform -translate-x-32 translate-y-32"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contacta con nosotros
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-6 leading-relaxed">
              ¿Tienes preguntas sobre probióticos o sugerencias para nuestro contenido? Te escuchamos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-green-200 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Respuesta en 24-48 horas
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Información basada en evidencia
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Equipo de expertos
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email directo</h3>
              <p className="text-gray-600 mb-3">Para consultas generales y colaboraciones</p>
              <a href="mailto:contacto@probioticosparatodos.com" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                contacto@probioticosparatodos.com
              </a>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tiempo de respuesta</h3>
              <p className="text-gray-600 mb-3">Respuesta típica en días laborables</p>
              <span className="text-blue-600 font-medium">24-48 horas</span>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ubicación</h3>
              <p className="text-gray-600 mb-3">Sitio web informativo</p>
              <span className="text-purple-600 font-medium">España (CET)</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                  Información detallada
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Email principal</h3>
                      <p className="text-gray-600 mb-2">contacto@probioticosparatodos.com</p>
                      <p className="text-sm text-gray-500">Para consultas generales, sugerencias de contenido y colaboraciones</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Horario de atención</h3>
                      <p className="text-gray-600 mb-2">Lunes a Viernes: 9:00 - 18:00 (CET)</p>
                      <p className="text-sm text-gray-500">Respuestas durante días laborables</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Nuestro compromiso</h3>
                      <p className="text-gray-600 mb-2">Información basada en evidencia científica</p>
                      <p className="text-sm text-gray-500">Contenido revisado por expertos en microbiología</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before contacting us section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Antes de contactarnos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-blue-700">
                      Consulta nuestras <Link href="/referencias" className="underline hover:text-blue-800 font-medium">referencias científicas</Link>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-blue-700">
                      Revisa la sección <Link href="/que-son" className="underline hover:text-blue-800 font-medium">¿Qué son los probióticos?</Link>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-blue-700">
                      Para consultas médicas, contacta a un profesional de la salud
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                Envíanos un mensaje
              </h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Nota:</strong> Para implementar el formulario de contacto, necesitarás configurar un backend o servicio de terceros como Formspree, Netlify Forms, o similar.
                    </p>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de consulta *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors">
                    <option>Pregunta general sobre probióticos</option>
                    <option>Sugerencia de contenido</option>
                    <option>Colaboración/Partnership</option>
                    <option>Reporte de error técnico</option>
                    <option>Consulta científica</option>
                    <option>Otros</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Resumen breve de tu consulta"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                    placeholder="Describe tu consulta, sugerencia o comentario en detalle..."
                  ></textarea>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="font-medium">* Campos requeridos</p>
                    <p>
                      Al enviar este formulario, aceptas nuestros{' '}
                      <Link href="/terminos-servicio" className="text-green-600 hover:text-green-700 underline font-medium">
                        Términos de Servicio
                      </Link>{' '}
                      y{' '}
                      <Link href="/politica-privacidad" className="text-green-600 hover:text-green-700 underline font-medium">
                        Política de Privacidad
                      </Link>.
                    </p>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    Enviar mensaje
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Enhanced FAQ Section */}
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-green-600 bg-clip-text text-transparent mb-8 text-center">
              Preguntas frecuentes sobre contacto
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </span>
                    ¿Responden consultas médicas personales?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    No proporcionamos consejos médicos personalizados. Para consultas sobre tu salud específica, 
                    siempre consulta con un profesional médico calificado. Nuestro contenido es puramente educativo.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </span>
                    ¿Recomiendan marcas específicas?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    No recomendamos marcas comerciales específicas. Nuestro contenido se enfoca en información 
                    educativa sobre tipos de cepas y sus beneficios respaldados por investigación científica.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </span>
                    ¿Aceptan colaboraciones?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estamos abiertos a colaboraciones educativas con profesionales de la salud, investigadores 
                    y organizaciones que compartan nuestro compromiso con información basada en evidencia.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </span>
                    ¿Cuánto tardan en responder?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Respondemos todas las consultas en un plazo de 24-48 horas durante días laborables. 
                    Para consultas complejas, el tiempo puede extenderse ligeramente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas información específica?</h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Explora nuestro contenido científico antes de contactarnos. Podrías encontrar la respuesta que buscas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/que-son" className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                  ¿Qué son los probióticos?
                </Link>
                <Link href="/beneficios" className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors border border-green-500">
                  Beneficios científicos
                </Link>
                <Link href="/referencias" className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors border border-green-500">
                  Referencias científicas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

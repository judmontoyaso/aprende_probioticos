import React from 'react';

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
      {/* Header */}
      <header className="bg-green-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Contacto</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            ¿Tienes preguntas sobre probióticos o sugerencias para nuestro contenido? Te escuchamos.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Información de contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">contacto@probioticosparatodos.com</p>
                    <p className="text-sm text-gray-500 mt-1">Respuesta típica: 24-48 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Ubicación</h3>
                    <p className="text-gray-600">España</p>
                    <p className="text-sm text-gray-500 mt-1">Sitio web informativo en español</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Horario de respuesta</h3>
                    <p className="text-gray-600">Lunes a Viernes</p>
                    <p className="text-sm text-gray-500 mt-1">9:00 - 18:00 (CET)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Antes de contactarnos</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Consulta nuestras <a href="/referencias" className="underline hover:text-blue-800">referencias científicas</a></li>
                  <li>• Revisa la sección de <a href="/que-son#faq" className="underline hover:text-blue-800">preguntas frecuentes</a></li>
                  <li>• Para consultas médicas, contacta a un profesional de la salud</li>
                </ul>
              </div>
            </div>

            {/* Formulario de contacto simple */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
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

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de consulta
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                    <option>Pregunta general sobre probióticos</option>
                    <option>Sugerencia de contenido</option>
                    <option>Colaboración/Partnership</option>
                    <option>Reporte de error técnico</option>
                    <option>Otros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre (opcional)
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Describe tu consulta o sugerencia..."
                  ></textarea>
                </div>

                <div className="text-sm text-gray-500">
                  <p>* Campos requeridos</p>
                  <p className="mt-2">
                    Al enviar este formulario, aceptas nuestros{' '}
                    <a href="/terminos-servicio" className="text-green-600 hover:text-green-700 underline">
                      Términos de Servicio
                    </a>{' '}
                    y{' '}
                    <a href="/politica-privacidad" className="text-green-600 hover:text-green-700 underline">
                      Política de Privacidad
                    </a>.
                  </p>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-12 bg-gray-50 p-6 sm:p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Preguntas frecuentes sobre contacto</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">¿Responden consultas médicas personales?</h3>
                <p className="text-gray-700">
                  No proporcionamos consejos médicos personalizados. Para consultas sobre tu salud específica, 
                  siempre consulta con un profesional médico calificado.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">¿Recomiendan marcas específicas de probióticos?</h3>
                <p className="text-gray-700">
                  No recomendamos marcas comerciales específicas. Nuestro contenido se enfoca en información 
                  educativa sobre tipos de cepas y sus beneficios respaldados por investigación científica.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">¿Aceptan colaboraciones?</h3>
                <p className="text-gray-700">
                  Estamos abiertos a colaboraciones educativas con profesionales de la salud, investigadores 
                  y organizaciones que compartan nuestro compromiso con información basada en evidencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

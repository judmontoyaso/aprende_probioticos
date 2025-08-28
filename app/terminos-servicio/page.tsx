import React from 'react';

export const metadata = {
  title: 'Términos de Servicio | Probióticos Para Todos',
  description: 'Términos y condiciones de uso del sitio web Probióticos Para Todos. Información legal importante sobre el uso de nuestro contenido educativo.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function TerminosServicio() {
  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Términos de Servicio</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            Condiciones de uso de nuestro sitio web informativo sobre probióticos.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm">
          <section className="mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Aviso importante:</strong> Este sitio web tiene fines únicamente informativos y educativos. La información proporcionada no constituye consejo médico profesional. Siempre consulte con un profesional de la salud antes de tomar decisiones sobre suplementos o cambios en su dieta.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>
          </section>
          
          <div className="prose prose-green max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Aceptación de los términos</h2>
              <p className="text-gray-700 mb-4">
                Al acceder y utilizar este sitio web (probioticosparatodos.com), usted acepta estar sujeto a estos Términos de Servicio y todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, se le prohíbe usar o acceder a este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Naturaleza del contenido</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">🔬 Contenido educativo e informativo</h3>
                <p className="text-blue-700">
                  Todo el contenido de este sitio web tiene fines exclusivamente educativos e informativos. No constituye consejo médico, diagnóstico o tratamiento profesional.
                </p>
              </div>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>La información se basa en investigación científica publicada y fuentes académicas confiables</li>
                <li>No reemplaza la consulta con profesionales de la salud calificados</li>
                <li>No promocionamos marcas específicas ni realizamos recomendaciones comerciales</li>
                <li>Proporcionamos información general sobre categorías de probióticos respaldada por evidencia científica</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Descargo de responsabilidad médica</h2>
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ Importante: No somos profesionales médicos</h3>
                <ul className="list-disc pl-6 space-y-2 text-red-700">
                  <li><strong>Consulte siempre a un profesional:</strong> Antes de tomar cualquier suplemento probiótico o hacer cambios en su dieta</li>
                  <li><strong>No autodiagnostique:</strong> Los síntomas digestivos pueden indicar condiciones serias que requieren atención médica</li>
                  <li><strong>Interacciones medicamentosas:</strong> Los probióticos pueden interactuar con ciertos medicamentos</li>
                  <li><strong>Condiciones especiales:</strong> Personas inmunocomprometidas, con enfermedades graves o mujeres embarazadas deben consultar médicos antes del uso</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Uso del sitio web</h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Usos permitidos:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Acceder y leer el contenido educativo para fines informativos</li>
                <li>Compartir enlaces a nuestros artículos en redes sociales con atribución adecuada</li>
                <li>Utilizar la información como punto de partida para discusiones con profesionales de la salud</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">Usos prohibidos:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Copiar, redistribuir o reproducir contenido sin autorización escrita</li>
                <li>Utilizar el contenido con fines comerciales sin permiso</li>
                <li>Interpretar la información como consejo médico personalizado</li>
                <li>Realizar scraping automatizado o extracción masiva de datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Propiedad intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todo el contenido de este sitio web, incluidos textos, gráficos, logotipos, íconos, imágenes y software, es propiedad de Probióticos Para Todos y está protegido por las leyes de derechos de autor y propiedad intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Limitación de responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                En ningún caso Probióticos Para Todos será responsable de daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar este sitio web o la información contenida en él.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Enlaces a sitios externos</h2>
              <p className="text-gray-700 mb-4">
                Este sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido, políticas de privacidad o prácticas de estos sitios externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Publicidad</h2>
              <p className="text-gray-700 mb-4">
                Este sitio web puede mostrar publicidad de terceros a través de redes publicitarias como Google AdSense. No respaldamos específicamente los productos o servicios anunciados. La publicidad se selecciona automáticamente basándose en el contenido del sitio y los intereses de los usuarios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contacto</h2>
              <p className="text-gray-700">
                Si tiene preguntas sobre estos Términos de Servicio, puede contactarnos a través de: contacto@probioticosparatodos.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

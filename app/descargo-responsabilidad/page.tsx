import React from 'react';

export const metadata = {
  title: 'Descargo de Responsabilidad Médica | Probióticos Para Todos',
  description: 'Información importante sobre el uso de nuestro contenido educativo. No sustituye el consejo médico profesional.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function DescargoResponsabilidad() {
  return (
    <>
      {/* Header */}
      <header className="bg-red-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Descargo de Responsabilidad Médica</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            Información importante sobre el alcance y limitaciones de nuestro contenido educativo.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm">
          
          {/* Aviso principal */}
          <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold text-red-800 mb-2">⚠️ AVISO MÉDICO IMPORTANTE</h2>
                <p className="text-red-700 font-medium">
                  El contenido de este sitio web es exclusivamente educativo e informativo. 
                  NO constituye consejo médico profesional, diagnóstico o tratamiento.
                </p>
              </div>
            </div>
          </div>
          
          <div className="prose prose-red max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Naturaleza del contenido</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🎓 Contenido educativo únicamente</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Información general sobre probióticos basada en literatura científica</li>
                  <li>• Resúmenes de estudios de investigación publicados</li>
                  <li>• Información nutricional general sobre alimentos fermentados</li>
                  <li>• Contexto histórico y científico sobre microbiota intestinal</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Lo que NO proporcionamos</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Diagnósticos médicos de ningún tipo</li>
                  <li>• Consejos de tratamiento personalizados</li>
                  <li>• Recomendaciones de productos específicos</li>
                  <li>• Orientación sobre dosis o régimens</li>
                  <li>• Evaluación de síntomas individuales</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Consulta médica obligatoria</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">🩺 Siempre consulte con un profesional</h3>
                <p className="text-yellow-700 mb-3">
                  Antes de tomar cualquier decisión relacionada con su salud, incluyendo el uso de probióticos o cambios en su dieta, 
                  <strong> siempre consulte con un profesional médico calificado</strong>.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Especialmente importante consultar si:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Tiene alguna condición médica diagnosticada</li>
                <li>Está tomando medicamentos</li>
                <li>Tiene el sistema inmunológico comprometido</li>
                <li>Está embarazada o en período de lactancia</li>
                <li>Es menor de edad</li>
                <li>Tiene alergias alimentarias conocidas</li>
                <li>Experimenta síntomas digestivos persistentes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Limitaciones de la información</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Variabilidad individual</h4>
                  <p className="text-sm text-gray-600">
                    Los efectos de los probióticos pueden variar significativamente entre individuos 
                    debido a factores genéticos, microbiota existente, dieta y estilo de vida.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Investigación en evolución</h4>
                  <p className="text-sm text-gray-600">
                    La ciencia de los probióticos está en constante evolución. 
                    Los hallazgos pueden cambiar con nuevas investigaciones.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Especificidad de cepas</h4>
                  <p className="text-sm text-gray-600">
                    Los efectos son específicos de cada cepa. La información general 
                    no aplica necesariamente a todos los productos.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Calidad de productos</h4>
                  <p className="text-sm text-gray-600">
                    No evaluamos la calidad, viabilidad o efectividad de productos 
                    comerciales específicos disponibles en el mercado.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Posibles riesgos y contraindicaciones</h2>
              
              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">⚠️ Los probióticos no son inofensivos para todos</h3>
                <p className="text-orange-700 mb-3">
                  Aunque generalmente se consideran seguros para personas sanas, los probióticos pueden presentar riesgos en ciertas situaciones:
                </p>
                
                <ul className="space-y-2 text-orange-700">
                  <li>• <strong>Infecciones sistémicas:</strong> Casos raros pero documentados en personas inmunodeprimidas</li>
                  <li>• <strong>Interacciones medicamentosas:</strong> Pueden afectar la absorción de algunos medicamentos</li>
                  <li>• <strong>Efectos secundarios digestivos:</strong> Gases, hinchazón o malestar inicial</li>
                  <li>• <strong>Transferencia de resistencia antibiótica:</strong> Riesgo teórico con algunas cepas</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Fuentes y metodología</h2>
              
              <p className="text-gray-700 mb-4">
                Nuestro contenido se basa en:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Revisiones sistemáticas y metanálisis publicados en revistas peer-reviewed</li>
                <li>Estudios clínicos controlados aleatorios</li>
                <li>Declaraciones de organizaciones médicas reconocidas</li>
                <li>Bases de datos científicas como PubMed, Cochrane Library</li>
              </ul>
              
              <p className="text-gray-700">
                Sin embargo, la interpretación y presentación de esta información puede no capturar todas las nuances 
                o limitaciones de los estudios originales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Uso responsable de la información</h2>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Recomendaciones de uso</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Utilice la información como punto de partida para conversaciones con profesionales de la salud</li>
                  <li>• Busque siempre asesoramiento médico personalizado</li>
                  <li>• Verifique la información con fuentes médicas actualizadas</li>
                  <li>• Mantenga un enfoque crítico y cuestione cualquier afirmación</li>
                  <li>• Considere la información en el contexto de su situación médica individual</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Limitación de responsabilidad legal</h2>
              
              <p className="text-gray-700 mb-4">
                Los propietarios, editores y contribuidores de este sitio web no asumen responsabilidad alguna por:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Decisiones de salud tomadas basándose en la información proporcionada</li>
                <li>Resultados adversos derivados del uso de probióticos</li>
                <li>Exactitud absoluta o completitud de la información presentada</li>
                <li>Interpretaciones erróneas del contenido educativo</li>
                <li>Cambios en las recomendaciones científicas después de la publicación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Actualizaciones y contacto</h2>
              
              <p className="text-gray-700 mb-4">
                Este descargo de responsabilidad puede actualizarse periódicamente. 
                La versión más reciente siempre estará disponible en esta página.
              </p>
              
              <p className="text-gray-700">
                Si tiene preguntas sobre este descargo de responsabilidad, puede contactarnos en: 
                <a href="mailto:contacto@probioticosparatodos.com" className="text-green-600 hover:text-green-700 underline ml-1">
                  contacto@probioticosparatodos.com
                </a>
              </p>
              
              <p className="text-sm text-gray-500 mt-6">
                Última actualización: 1 de diciembre de 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

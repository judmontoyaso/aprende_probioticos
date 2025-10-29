'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Article {
  doi: string;
  title: string;
  authors: string[];
  year: string | number;
  journal: string;
  abstract: string;
  subjects: string[];
  type: string;
}

interface SearchResults {
  article: Article;
  total: number;
  query: string;
}

export default function LearnClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (term?: string) => {
    const searchQuery = term || searchTerm;
    
    if (!searchQuery.trim()) {
      setError('Por favor ingresa un término de búsqueda');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`/api/crossref?query=${encodeURIComponent(searchQuery)}`);
      
      if (!response.ok) {
        throw new Error('Error en la búsqueda');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Hubo un error al buscar artículos. Por favor intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickSearch = (term: string) => {
    setSearchTerm(term);
    handleSearch(term);
  };

  const topics = [
    {
      icon: '🧬',
      title: 'Microbiota Intestinal',
      description: 'Descubre el ecosistema de bacterias en tu intestino',
      search: 'gut microbiome diversity'
    },
    {
      icon: '🛡️',
      title: 'Sistema Inmune',
      description: 'Cómo los probióticos fortalecen tus defensas',
      search: 'probiotics immune system'
    },
    {
      icon: '🧠',
      title: 'Eje Intestino-Cerebro',
      description: 'La conexión entre tu intestino y tu mente',
      search: 'gut brain axis probiotics'
    },
    {
      icon: '🥗',
      title: 'Alimentos Fermentados',
      description: 'Fuentes naturales de probióticos',
      search: 'fermented foods health benefits'
    },
    {
      icon: '💊',
      title: 'Suplementos',
      description: 'Evidencia científica sobre suplementos probióticos',
      search: 'probiotic supplements efficacy'
    },
    {
      icon: '🔬',
      title: 'Cepas Específicas',
      description: 'Investigación sobre Lactobacillus y Bifidobacterium',
      search: 'lactobacillus bifidobacterium clinical trials'
    }
  ];

  const didYouKnow = [
    {
      icon: '🦠',
      fact: 'Tienes más bacterias en tu cuerpo que células humanas',
      detail: 'Se estima que hay aproximadamente 39 trillones de bacterias frente a 30 trillones de células humanas.'
    },
    {
      icon: '⚖️',
      fact: 'Tu microbiota pesa entre 1-2 kg',
      detail: 'El peso total de todos los microorganismos en tu intestino equivale aproximadamente al peso de tu cerebro.'
    },
    {
      icon: '🧬',
      fact: 'Tu microbiota es única como tu huella digital',
      detail: 'Cada persona tiene una composición única de bacterias intestinales, influenciada por genética, dieta y ambiente.'
    },
    {
      icon: '🏭',
      fact: 'Las bacterias producen vitaminas esenciales',
      detail: 'Algunas bacterias intestinales producen vitamina K, B12 y otros nutrientes vitales para tu salud.'
    },
    {
      icon: '🌍',
      fact: 'Tu microbiota se establece en los primeros 3 años de vida',
      detail: 'El tipo de parto, la lactancia materna y la exposición temprana a microorganismos moldean tu microbiota para toda la vida.'
    },
    {
      icon: '💪',
      fact: 'El 70% de tu sistema inmune está en tu intestino',
      detail: 'La mayor parte de las células inmunitarias de tu cuerpo se encuentran en el tejido linfoide asociado al intestino (GALT).'
    }
  ];

  const scientificConcepts = [
    {
      title: 'Disbiosis Intestinal',
      description: 'Desequilibrio en la microbiota que puede causar problemas de salud',
      examples: ['Menos diversidad bacteriana', 'Sobrecrecimiento de patógenos', 'Pérdida de especies beneficiosas']
    },
    {
      title: 'Metabolitos Bacterianos',
      description: 'Sustancias producidas por bacterias que afectan tu salud',
      examples: ['Ácidos grasos de cadena corta (SCFA)', 'Neurotransmisores como serotonina', 'Vitaminas del complejo B']
    },
    {
      title: 'Resistencia a la Colonización',
      description: 'Capacidad de la microbiota de prevenir invasión de patógenos',
      examples: ['Competencia por nutrientes', 'Producción de bacteriocinas', 'Modulación del pH intestinal']
    },
    {
      title: 'Eje Microbiota-Intestino-Cerebro',
      description: 'Comunicación bidireccional entre intestino y cerebro vía microbiota',
      examples: ['Nervio vago', 'Sistema inmune', 'Metabolitos neuroactivos']
    }
  ];

  const researchTips = [
    {
      icon: '📖',
      title: 'Lee el Abstract Primero',
      tip: 'El resumen te da una visión general del estudio en 5 minutos. Si es relevante, continúa con el artículo completo.'
    },
    {
      icon: '🔍',
      title: 'Revisa la Metodología',
      tip: 'Un estudio bien diseñado tiene grupos de control, tamaño de muestra adecuado y métodos reproducibles.'
    },
    {
      icon: '📊',
      title: 'Observa el Tamaño de Muestra',
      tip: 'Estudios con más participantes generalmente son más confiables. Desconfía de estudios con menos de 30 participantes.'
    },
    {
      icon: '🏥',
      title: 'Distingue Estudios in vitro, in vivo y clínicos',
      tip: 'In vitro = laboratorio, in vivo = animales, clínicos = humanos. Los resultados en humanos son más aplicables.'
    },
    {
      icon: '⚠️',
      title: 'Identifica Conflictos de Interés',
      tip: 'Revisa quién financió el estudio. La industria puede sesgar resultados. Prefiere estudios independientes.'
    },
    {
      icon: '🎯',
      title: 'No generalices de un solo estudio',
      tip: 'La ciencia requiere replicación. Busca revisiones sistemáticas y meta-análisis para conclusiones más sólidas.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">📚</div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Aprende con Ciencia
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-blue-50">
              ¿Qué quieres leer hoy de investigación?
            </p>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
              Accede a artículos científicos revisados por pares sobre probióticos, 
              microbiota intestinal y salud digestiva. Cada búsqueda te mostrará un 
              artículo diferente y fascinante.
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Search Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-2 border-blue-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🔍 Busca tu artículo científico aleatorio
            </h2>
            
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="mb-6">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Ej: efectos de lactobacillus en sistema inmune"
                  className="flex-1 px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Buscando...
                    </span>
                  ) : (
                    '🎲 Descubrir'
                  )}
                </button>
              </div>
            </form>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-sm text-blue-800">
                💡 <strong>Tip:</strong> Cada búsqueda te mostrará un artículo científico diferente y aleatorio. 
                ¡Busca el mismo término varias veces para descubrir más investigaciones!
              </p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-xl shadow-md">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}

          {/* Article Result */}
          {result && result.article && (
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-200 mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    📊 {result.total.toLocaleString()} artículos encontrados
                  </span>
                  <button
                    onClick={() => handleSearch()}
                    className="text-sm bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors font-medium"
                  >
                    🔄 Otro artículo
                  </button>
                </div>
                <h2 className="text-2xl font-bold">Tu lectura de hoy</h2>
              </div>

              <div className="p-8">
                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {result.article.title}
                </h3>

                {/* Metadata Grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {result.article.authors.length > 0 && (
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                      <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span className="font-semibold text-sm">Autores</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        {result.article.authors.join(', ')}
                        {result.article.authors.length === 3 && ' et al.'}
                      </p>
                    </div>
                  )}
                  
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-sm">Año</span>
                    </div>
                    <p className="text-gray-700 text-lg font-bold">{result.article.year}</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 text-purple-600 mb-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                      <span className="font-semibold text-sm">Revista</span>
                    </div>
                    <p className="text-gray-700 text-sm italic">{result.article.journal}</p>
                  </div>
                </div>

                {/* Abstract */}
                {result.article.abstract && (
                  <div className="mb-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="text-xl">📝</span>
                      Resumen
                    </h4>
                    <div 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: result.article.abstract
                          .replace(/<\/?jats:[^>]*>/g, '')
                          .replace(/<p>/g, '<p class="mb-3">')
                      }} 
                    />
                  </div>
                )}

                {/* Subjects */}
                {result.article.subjects && result.article.subjects.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <span>🏷️</span>
                      Temas relacionados
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.article.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* DOI Link */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t-2 border-gray-200">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">DOI:</span>{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                      {result.article.doi}
                    </code>
                  </div>
                  
                  <a
                    href={`https://doi.org/${result.article.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl font-bold transform hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    Leer artículo completo
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Topics Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Explora temas fascinantes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <button
                  key={topic.title}
                  onClick={() => handleQuickSearch(topic.search)}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-300 text-left group transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {topic.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Did You Know Section */}
          <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              💡 ¿Sabías que...?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {didYouKnow.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">{item.fact}</h4>
                      <p className="text-sm text-gray-600">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scientific Concepts Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              🧪 Conceptos Científicos Clave
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {scientificConcepts.map((concept, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-all">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">{concept.title}</h3>
                  <p className="text-gray-700 mb-4">{concept.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-600">Ejemplos:</p>
                    <ul className="space-y-1">
                      {concept.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Read Research Section */}
          <div className="mb-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              🎓 Cómo Leer Artículos Científicos
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              No todos los estudios son iguales. Aquí te enseñamos a evaluar críticamente la investigación científica.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchTips.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Evidence Hierarchy Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              📊 Jerarquía de Evidencia Científica
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Meta-análisis y Revisiones Sistemáticas</h3>
                      <p className="text-green-50 text-sm">Análisis estadístico de múltiples estudios. La evidencia más robusta disponible.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Ensayos Clínicos Aleatorizados (RCT)</h3>
                      <p className="text-blue-50 text-sm">Estudios controlados con asignación aleatoria. Minimizan sesgos.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Estudios de Cohortes y Casos-Control</h3>
                      <p className="text-purple-50 text-sm">Estudios observacionales que siguen grupos de personas en el tiempo.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Estudios en Animales (In Vivo)</h3>
                      <p className="text-orange-50 text-sm">Útiles pero con limitaciones al extrapolar a humanos.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">5</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Estudios in Vitro (Laboratorio)</h3>
                      <p className="text-gray-50 text-sm">Investigación básica en células o cultivos. Punto de partida importante.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-sm text-yellow-800">
                  <strong>💡 Consejo:</strong> Mientras más arriba en la jerarquía, más confiable es la evidencia. 
                  Las decisiones médicas deben basarse principalmente en meta-análisis y RCTs.
                </p>
              </div>
            </div>
          </div>

          {/* Glossary Section */}
          <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              📚 Glosario de Términos Científicos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-1">DOI (Digital Object Identifier)</h4>
                <p className="text-sm text-gray-600">Identificador único y permanente para artículos científicos. Como un DNI para papers.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-1">Revisión por Pares (Peer Review)</h4>
                <p className="text-sm text-gray-600">Proceso donde expertos evalúan un estudio antes de publicarse. Garantía de calidad científica.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-1">Placebo</h4>
                <p className="text-sm text-gray-600">Tratamiento inactivo usado como control. Ayuda a identificar efectos reales vs. psicológicos.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-1">p-valor</h4>
                <p className="text-sm text-gray-600">Probabilidad de que un resultado sea por azar. Menor a 0.05 se considera significativo.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-1">Doble Ciego</h4>
                <p className="text-sm text-gray-600">Ni pacientes ni investigadores saben quién recibe tratamiento real. Minimiza sesgos.</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-1">CFU (Unidades Formadoras de Colonias)</h4>
                <p className="text-sm text-gray-600">Medida de bacterias vivas en probióticos. Típicamente miles de millones (10^9).</p>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📖 Más recursos para aprender
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-blue-200 hover:border-blue-400">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📰</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Blog</h3>
                  <p className="text-sm text-gray-600">Artículos educativos en español</p>
                </div>
              </Link>
              
              <Link href="/tipos" className="group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-green-200 hover:border-green-400">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🦠</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Tipos de Probióticos</h3>
                  <p className="text-sm text-gray-600">Conoce las diferentes cepas</p>
                </div>
              </Link>
              
              <Link href="/beneficios" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-purple-200 hover:border-purple-400">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">✨</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Beneficios</h3>
                  <p className="text-sm text-gray-600">Descubre cómo ayudan a tu salud</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

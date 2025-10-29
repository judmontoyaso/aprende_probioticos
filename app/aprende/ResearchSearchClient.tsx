'use client';

import { useState } from 'react';

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
  results: Article[];
  total: number;
  query: string;
}

export default function ResearchSearchClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setError('Por favor ingresa un término de búsqueda');
      return;
    }

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await fetch(`/api/crossref?query=${encodeURIComponent(searchTerm)}&rows=15`);
      
      if (!response.ok) {
        throw new Error('Error en la búsqueda');
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError('Hubo un error al buscar artículos. Por favor intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const suggestedSearches = [
    'lactobacillus benefits',
    'bifidobacterium health',
    'probiotic yogurt',
    'gut microbiome',
    'fermented foods',
    'saccharomyces boulardii',
    'intestinal health',
    'microbiota diversity'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              🔬 Investigación Científica
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-green-50">
              ¿Qué quieres leer hoy de investigación?
            </p>
            <p className="text-sm sm:text-base text-green-100 max-w-2xl mx-auto">
              Busca artículos científicos revisados por pares sobre probióticos, 
              microbiota intestinal y salud digestiva
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Search Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar artículos científicos
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Ej: efectos de lactobacillus en sistema inmune"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
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
                      '🔍 Buscar'
                    )}
                  </button>
                </div>
              </div>

              {/* Suggested Searches */}
              <div className="pt-2">
                <p className="text-sm text-gray-600 mb-2">Búsquedas sugeridas:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedSearches.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => setSearchTerm(suggestion)}
                      className="px-3 py-1 text-sm bg-green-50 text-green-700 rounded-full hover:bg-green-100 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Nota:</strong> Los resultados provienen de CrossRef, una base de datos de artículos científicos revisados por pares. 
                  Todos los artículos tienen DOI (Digital Object Identifier) para acceso directo.
                </p>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          {results && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Resultados de búsqueda
                </h2>
                <p className="text-gray-600">
                  Se encontraron aproximadamente <strong>{results.total.toLocaleString()}</strong> artículos.
                  Mostrando los {results.results.length} más relevantes.
                </p>
              </div>

              {results.results.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <p className="text-gray-600">
                    No se encontraron resultados para tu búsqueda. 
                    Intenta con otros términos o revisa las búsquedas sugeridas.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {results.results.map((article, index) => (
                    <article
                      key={article.doi}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
                    >
                      {/* Article Title */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {index + 1}. {article.title}
                      </h3>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        {article.authors.length > 0 && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            <span>
                              {article.authors.join(', ')}
                              {article.authors.length === 3 && ' et al.'}
                            </span>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span>{article.year}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                          </svg>
                          <span className="italic">{article.journal}</span>
                        </div>
                      </div>

                      {/* Abstract (if available) */}
                      {article.abstract && (
                        <div className="mb-4 text-gray-700 text-sm line-clamp-3">
                          <div dangerouslySetInnerHTML={{ __html: article.abstract.replace(/<\/?jats:[^>]*>/g, '') }} />
                        </div>
                      )}

                      {/* Subjects */}
                      {article.subjects && article.subjects.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {article.subjects.slice(0, 4).map((subject) => (
                            <span
                              key={subject}
                              className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* DOI Link */}
                      <div className="flex flex-wrap gap-3 items-center pt-3 border-t border-gray-200">
                        <a
                          href={`https://doi.org/${article.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                          Leer artículo completo
                        </a>
                        
                        <span className="text-xs text-gray-500 font-mono">
                          DOI: {article.doi}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { slugify } from '../utils';

interface Tienda {
  nombre: string;
  direccion: string;
  ciudad: string;
  pais: string;
  whatsapp?: string;
  web?: string;
  horarios?: string;
  confiabilidad: string;
  fechaVerificacion: string;
  tiposProbioticos: string[];
}

interface BuscadorPageClientProps {
  paises: string[];
  tiposEstablecimiento: string[];
  tiendasData: Tienda[];
}

export default function BuscadorPageClient({ paises, tiposEstablecimiento, tiendasData }: BuscadorPageClientProps) {
  const [filtros, setFiltros] = useState({
    pais: '',
    ciudad: '',
    tipo: '',
    busqueda: ''
  });

  const ciudades = useMemo(() => {
    if (!filtros.pais) return [];
    return [...new Set(tiendasData.filter(t => t.pais === filtros.pais).map(t => t.ciudad))];
  }, [filtros.pais, tiendasData]);

  const tiendasFiltradas = useMemo(() => {
    return tiendasData.filter(tienda => {
      const coincidePais = !filtros.pais || tienda.pais === filtros.pais;
      const coincideCiudad = !filtros.ciudad || tienda.ciudad === filtros.ciudad;
      const coincideTipo = !filtros.tipo || (tienda.tiposProbioticos && tienda.tiposProbioticos.includes(filtros.tipo));
      const coincideBusqueda = !filtros.busqueda || 
        tienda.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        tienda.direccion.toLowerCase().includes(filtros.busqueda.toLowerCase());
      
      return coincidePais && coincideCiudad && coincideTipo && coincideBusqueda;
    });
  }, [filtros, tiendasData]);

  const handleFiltroChange = (campo: string, valor: string) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor,
      // Reset ciudad si cambia el país
      ...(campo === 'pais' ? { ciudad: '' } : {})
    }));
  };

  return (
    <>
      {/* Filtros de búsqueda */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-biscay mb-6">Filtros de Búsqueda</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Búsqueda por texto */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Buscar por nombre o dirección
                  </label>
                  <input
                    type="text"
                    value={filtros.busqueda}
                    onChange={(e) => handleFiltroChange('busqueda', e.target.value)}
                    placeholder="Ej: Herbolario, Farmacia..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple focus:border-apple transition-colors"
                  />
                </div>

                {/* Filtro por país */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    País
                  </label>
                  <select
                    value={filtros.pais}
                    onChange={(e) => handleFiltroChange('pais', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple focus:border-apple transition-colors"
                  >
                    <option value="">Todos los países</option>
                    {paises.map(pais => (
                      <option key={pais} value={pais}>{pais}</option>
                    ))}
                  </select>
                </div>

                {/* Filtro por ciudad */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad
                  </label>
                  <select
                    value={filtros.ciudad}
                    onChange={(e) => handleFiltroChange('ciudad', e.target.value)}
                    disabled={!filtros.pais}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple focus:border-apple transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Todas las ciudades</option>
                    {ciudades.map(ciudad => (
                      <option key={ciudad} value={ciudad}>{ciudad}</option>
                    ))}
                  </select>
                </div>

                {/* Filtro por tipo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de establecimiento
                  </label>
                  <select
                    value={filtros.tipo}
                    onChange={(e) => handleFiltroChange('tipo', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple focus:border-apple transition-colors"
                  >
                    <option value="">Todos los tipos</option>
                    {tiposEstablecimiento.map(tipo => (
                      <option key={tipo} value={tipo}>{tipo}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Botón limpiar filtros */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setFiltros({ pais: '', ciudad: '', tipo: '', busqueda: '' })}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-biscay">
                Resultados ({tiendasFiltradas.length} tienda{tiendasFiltradas.length !== 1 ? 's' : ''})
              </h2>
            </div>

            {tiendasFiltradas.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron tiendas</h3>
                <p className="text-gray-600">Intenta ajustar los filtros de búsqueda</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tiendasFiltradas.map((tienda, index) => {
                  const paisSlug = slugify(tienda.pais);
                  const ciudadSlug = slugify(tienda.ciudad);
                  
                  return (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-biscay mb-2">{tienda.nombre}</h3>
                        <p className="text-gray-600 text-sm mb-2">
                          📍 {tienda.direccion}
                        </p>
                        <p className="text-gray-600 text-sm mb-2">
                          🌍 {tienda.ciudad}, {tienda.pais}
                        </p>
                      </div>

                      {tienda.whatsapp && (
                        <div className="mb-2">
                          <a 
                            href={`https://wa.me/${tienda.whatsapp.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 text-sm flex items-center"
                          >
                            📱 WhatsApp: {tienda.whatsapp}
                          </a>
                        </div>
                      )}

                      {tienda.web && (
                        <div className="mb-2">
                          <a 
                            href={tienda.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
                          >
                            🌐 Sitio web
                          </a>
                        </div>
                      )}

                      {tienda.horarios && (
                        <div className="mb-4">
                          <p className="text-gray-600 text-sm">
                            🕒 {tienda.horarios}
                          </p>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            tienda.confiabilidad === 'Muy Alta' ? 'bg-green-100 text-green-700' :
                            tienda.confiabilidad === 'Alta' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {tienda.confiabilidad}
                          </span>
                        </div>
                        <Link 
                          href={`/donde-comprar/${paisSlug}/${ciudadSlug}`}
                          className="text-apple hover:text-apple/80 font-medium text-sm"
                        >
                          Ver más tiendas →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

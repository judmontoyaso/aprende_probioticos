'use client';

import { useState, useMemo } from 'react';
import { tiendasData } from '../data';
import { slugify } from '../utils';
import Link from 'next/link';

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
  tipoEstablecimiento?: string;
}

export default function BuscadorClient() {
  // const [filtroConfiabilidad, setFiltroConfiabilidad] = useState<string>(''); // Removed unused state
  const [filtros, setFiltros] = useState({
    pais: '',
    ciudad: '',
    busqueda: ''
  });

  // Obtener datos únicos para los filtros
  const paises = useMemo(() => {
    return [...new Set(tiendasData.map((t) => t.pais))].sort();
  }, []);

  const ciudades = useMemo(() => {
    if (!filtros.pais) return [];
    return [...new Set(tiendasData
      .filter((t) => t.pais === filtros.pais)
      .map((t) => t.ciudad))].sort();
  }, [filtros.pais]);

  // Filtrar tiendas
  const tiendasFiltradas = useMemo(() => {
    return tiendasData.filter((tienda) => {
      const cumplePais = !filtros.pais || tienda.pais === filtros.pais;
      const cumpleCiudad = !filtros.ciudad || tienda.ciudad === filtros.ciudad;
      const cumpleBusqueda = !filtros.busqueda || 
        tienda.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        tienda.direccion.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        tienda.ciudad.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        tienda.pais.toLowerCase().includes(filtros.busqueda.toLowerCase());

      return cumplePais && cumpleCiudad && cumpleBusqueda;
    });
  }, [filtros]);

  const handleFiltroChange = (campo: string, valor: string) => {
    setFiltros(prev => {
      const nuevos = { ...prev, [campo]: valor };
      // Si cambia el país, resetear la ciudad
      if (campo === 'pais') {
        nuevos.ciudad = '';
      }
      return nuevos;
    });
  };

  const limpiarFiltros = () => {
    setFiltros({
      pais: '',
      ciudad: '',
      busqueda: ''
    });
  };

  const setTerminoBusqueda = (valor: string) => {
    setFiltros(prev => ({ ...prev, busqueda: valor }));
  };

  const setFiltroPais = (valor: string) => {
    setFiltros(prev => ({ ...prev, pais: valor, ciudad: '' }));
  };

  const setFiltroCiudad = (valor: string) => {
    setFiltros(prev => ({ ...prev, ciudad: valor }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Sección de filtros */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-biscay">Filtros de Búsqueda</h2>
          <button
            onClick={limpiarFiltros}
            className="px-4 py-2 text-sm text-gray-600 hover:text-apple transition-colors"
          >
            🗑️ Limpiar filtros
          </button>
        </div>
        
        {/* Barra de búsqueda */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Búsqueda por nombre o ubicación
          </label>
          <input
            type="text"
            placeholder="Buscar tienda, ciudad o dirección..."
            value={filtros.busqueda}
            onChange={(e) => setTerminoBusqueda(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple focus:border-apple"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Filtro por país */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">País</label>
            <select 
              value={filtros.pais}
              onChange={(e) => setFiltroPais(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple focus:border-apple"
            >
              <option value="">Todos los países</option>
              {paises.map((pais: string) => (
                <option key={pais} value={pais}>
                  {pais}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro por ciudad */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
            <select 
              value={filtros.ciudad}
              onChange={(e) => setFiltroCiudad(e.target.value)}
              disabled={!filtros.pais}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple focus:border-apple disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">Todas las ciudades</option>
              {ciudades.map((ciudad: string) => (
                <option key={ciudad} value={ciudad}>
                  {ciudad}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filtros activos */}
        {(filtros.pais || filtros.ciudad || filtros.busqueda) && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Filtros activos:</h3>
            <div className="flex flex-wrap gap-2">
              {filtros.pais && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-apple/10 text-apple">
                  País: {filtros.pais}
                  <button
                    onClick={() => setFiltroPais('')}
                    className="ml-2 text-apple hover:text-apple/70"
                  >
                    ×
                  </button>
                </span>
              )}
              {filtros.ciudad && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-apple/10 text-apple">
                  Ciudad: {filtros.ciudad}
                  <button
                    onClick={() => setFiltroCiudad('')}
                    className="ml-2 text-apple hover:text-apple/70"
                  >
                    ×
                  </button>
                </span>
              )}
              {filtros.busqueda && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-apple/10 text-apple">
                  Búsqueda: &quot;{filtros.busqueda}&quot;
                  <button
                    onClick={() => setTerminoBusqueda('')}
                    className="ml-2 text-apple hover:text-apple/70"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Resultados */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-biscay">Resultados de Búsqueda</h2>
          <span className="text-gray-600">
            {tiendasFiltradas.length} de {tiendasData.length} tiendas encontradas
          </span>
        </div>

        {tiendasFiltradas.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold text-biscay mb-4">No se encontraron tiendas</h3>
            <p className="text-gray-600 mb-6">
              No hay tiendas que coincidan con los filtros seleccionados.
            </p>
            <button
              onClick={limpiarFiltros}
              className="px-6 py-3 bg-apple text-white font-semibold rounded-lg hover:bg-apple/90 transition-colors"
            >
              Limpiar filtros y ver todas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiendasFiltradas.map((tienda: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-biscay pr-2">{tienda.nombre}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full flex-shrink-0 ${
                    tienda.confiabilidad === 'Muy Alta' ? 'bg-green-100 text-green-800' :
                    tienda.confiabilidad === 'Alta' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {tienda.confiabilidad}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-start">
                    <span className="w-4 h-4 text-apple mr-2 mt-0.5 flex-shrink-0">📍</span>
                    <span className="break-words">{tienda.direccion}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 text-apple mr-2 flex-shrink-0">🌍</span>
                    <span>{tienda.ciudad}, {tienda.pais}</span>
                  </div>
                  {tienda.whatsapp && (
                    <div className="flex items-center">
                      <span className="w-4 h-4 text-apple mr-2 flex-shrink-0">📱</span>
                      <span className="break-all">{tienda.whatsapp}</span>
                    </div>
                  )}
                  {tienda.web && (
                    <div className="flex items-center">
                      <span className="w-4 h-4 text-apple mr-2 flex-shrink-0">🌐</span>
                      <a 
                        href={tienda.web} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-apple hover:underline break-all"
                      >
                        Sitio web
                      </a>
                    </div>
                  )}
                  {tienda.horarios && (
                    <div className="flex items-start">
                      <span className="w-4 h-4 text-apple mr-2 mt-0.5 flex-shrink-0">🕒</span>
                      <span className="break-words">{tienda.horarios}</span>
                    </div>
                  )}
                </div>

                {/* Tipos de probióticos */}
                {tienda.tiposProbioticos && tienda.tiposProbioticos.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">Tipos de probióticos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tienda.tiposProbioticos.slice(0, 3).map((tipo: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-apple/10 text-apple text-xs rounded-full">
                          {tipo}
                        </span>
                      ))}
                      {tienda.tiposProbioticos.length > 3 && (
                        <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                          +{tienda.tiposProbioticos.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Botón para ver más detalles */}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href={`/donde-comprar/${slugify(tienda.pais)}/${slugify(tienda.ciudad)}`}
                    className="inline-flex items-center text-apple hover:text-apple/80 text-sm font-medium transition-colors"
                  >
                    Ver más tiendas en {tienda.ciudad}
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sección de estadísticas */}
      <div className="mt-8 bg-gradient-to-r from-apple/10 to-st-tropaz/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-biscay mb-6 text-center">
          Estadísticas del Directorio
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-apple mb-2">{tiendasData.length}</div>
            <div className="text-sm text-gray-600">Tiendas totales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-st-tropaz mb-2">{paises.length}</div>
            <div className="text-sm text-gray-600">Países</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-apple mb-2">
              {[...new Set(tiendasData.map((t: any) => t.ciudad))].length}
            </div>
            <div className="text-sm text-gray-600">Ciudades</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-st-tropaz mb-2">
              {tiendasData.filter((t: any) => t.confiabilidad === 'Muy Alta').length}
            </div>
            <div className="text-sm text-gray-600">Verificadas</div>
          </div>
        </div>
      </div>
    </div>
  );
}

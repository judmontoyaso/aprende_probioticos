'use client';

import { useState, useMemo } from 'react';
import { tiendasData } from '../data';
import Link from 'next/link';

export default function BuscadorTiendasPage() {
  const [selectedPais, setSelectedPais] = useState('');
  const [selectedCiudad, setSelectedCiudad] = useState('');

  const paises = useMemo(() => [...new Set(tiendasData.map(t => t.pais))], []);
  const ciudades = useMemo(() => {
    if (!selectedPais) return [];
    return [...new Set(tiendasData.filter(t => t.pais === selectedPais).map(t => t.ciudad))];
  }, [selectedPais]);

  const filteredTiendas = useMemo(() => {
    let tiendas = tiendasData;
    if (selectedPais) {
      tiendas = tiendas.filter(t => t.pais === selectedPais);
    }
    if (selectedCiudad) {
      tiendas = tiendas.filter(t => t.ciudad === selectedCiudad);
    }
    return tiendas.reduce((acc, tienda) => {
      if (!acc[tienda.pais]) {
        acc[tienda.pais] = [];
      }
      acc[tienda.pais].push(tienda);
      return acc;
    }, {} as Record<string, typeof tiendasData>);
  }, [selectedPais, selectedCiudad]);

  const handlePaisChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPais(e.target.value);
    setSelectedCiudad(''); // Reset city when country changes
  };

  return (
    <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Buscador de Tiendas de Probióticos</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Utiliza nuestros filtros para encontrar fácilmente tiendas, herbolarios y mercados de probióticos en tu área. Explora el listado completo a continuación.
        </p>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 p-6 bg-white rounded-lg border shadow-sm">
            <div className="flex-1">
            <label htmlFor="pais-filter" className="block text-sm font-medium text-gray-700 mb-1">Filtrar por País</label>
            <select
                id="pais-filter"
                value={selectedPais}
                onChange={handlePaisChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">Todos los países</option>
                {paises.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            </div>
            <div className="flex-1">
            <label htmlFor="ciudad-filter" className="block text-sm font-medium text-gray-700 mb-1">Filtrar por Ciudad</label>
            <select
                id="ciudad-filter"
                value={selectedCiudad}
                onChange={(e) => setSelectedCiudad(e.target.value)}
                disabled={!selectedPais}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-200"
            >
                <option value="">Todas las ciudades</option>
                {ciudades.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            </div>
        </div>

        {Object.keys(filteredTiendas).length === 0 && (
            <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No se encontraron tiendas con los filtros seleccionados.</p>
            </div>
        )}

        {Object.entries(filteredTiendas).map(([pais, tiendas]) => (
            <section key={pais} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-gray-200 pb-4 text-gray-700">{pais}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tiendas.map((tienda) => (
                <div key={tienda.nombre} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{tienda.nombre}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{tienda.direccion}</p>
                    
                    <div className="space-y-2 text-sm mb-4">
                    {tienda.whatsapp && <p><span className="font-semibold">WhatsApp:</span> {tienda.whatsapp}</p>}
                    {tienda.horarios && <p><span className="font-semibold">Horario:</span> {tienda.horarios}</p>}
                    <p><span className="font-semibold">Tipos de Probióticos:</span> {tienda.tiposProbioticos.join(', ')}</p>
                    {tienda.web && (
                        <Link href={tienda.web} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                        Visitar sitio web →
                        </Link>
                    )}
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center">
                        <span className={`text-xs font-bold py-1 px-2 rounded-full ${
                            tienda.confiabilidad === 'Muy Alta' ? 'bg-green-100 text-green-800' :
                            tienda.confiabilidad === 'Alta' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                        }`}>
                            {tienda.confiabilidad}
                        </span>
                        <span className="text-xs text-gray-500">
                            Verificado: {tienda.fechaVerificacion}
                        </span>
                    </div>
                </div>
                ))}
            </div>
            </section>
        ))}
        </div>
    </main>
  );
}

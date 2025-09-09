'use client';

import { useMemo } from 'react';
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

interface PaisPageClientProps {
  tiendas: Tienda[];
  paisSlug: string;
}

export default function PaisPageClient({ tiendas, paisSlug }: PaisPageClientProps) {
  // Agrupar tiendas por ciudad
  const ciudadesAgrupadas = useMemo(() => {
    return tiendas.reduce((acc, tienda) => {
      if (!acc[tienda.ciudad]) {
        acc[tienda.ciudad] = [];
      }
      acc[tienda.ciudad].push(tienda);
      return acc;
    }, {} as Record<string, Tienda[]>);
  }, [tiendas]);

  return (
    <>
      {/* Renderizar tiendas por ciudad */}
      {Object.entries(ciudadesAgrupadas).map(([ciudad, tiendasCiudad]) => (
        <div key={ciudad} className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-biscay">{ciudad}</h3>
            <Link 
              href={`/donde-comprar/${paisSlug}/${slugify(ciudad)}`}
              className="text-apple hover:text-apple/80 font-medium text-sm flex items-center transition-colors duration-200"
            >
              Ver todas <span className="ml-1">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiendasCiudad.map((tienda) => (
              <div key={tienda.nombre} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-apple/10 to-st-tropaz/10 rounded-xl flex items-center justify-center">
                    <span className="text-lg">🏪</span>
                  </div>
                  <span className={`text-xs font-bold py-1 px-3 rounded-full ${
                    tienda.confiabilidad === 'Muy Alta' ? 'bg-apple/10 text-apple' :
                    tienda.confiabilidad === 'Alta' ? 'bg-st-tropaz/10 text-st-tropaz' :
                    'bg-seagull/10 text-seagull'
                  }`}>
                    {tienda.confiabilidad}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-biscay mb-2">{tienda.nombre}</h4>
                <p className="text-gray-600 text-sm mb-4">{tienda.direccion}</p>
                
                <div className="space-y-2 text-sm mb-4">
                  {tienda.whatsapp && (
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">📱</span>
                      <span className="text-gray-700">{tienda.whatsapp}</span>
                    </div>
                  )}
                  
                  {tienda.web && (
                    <div className="flex items-center">
                      <span className="text-blue-500 mr-2">🌐</span>
                      <a href={tienda.web} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sitio web
                      </a>
                    </div>
                  )}
                  
                  {tienda.horarios && (
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">🕒</span>
                      <span className="text-gray-700">{tienda.horarios}</span>
                    </div>
                  )}
                  
                  <div className="flex items-start">
                    <span className="text-apple mr-2 mt-1">🦠</span>
                    <div className="flex-grow">
                      <p className="text-gray-700 font-medium mb-1">Tipos:</p>
                      <div className="flex flex-wrap gap-1">
                        {tienda.tiposProbioticos.slice(0, 2).map((tipo, index) => (
                          <span key={index} className="text-xs bg-apple/10 text-apple px-2 py-1 rounded-full">
                            {tipo}
                          </span>
                        ))}
                        {tienda.tiposProbioticos.length > 2 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{tienda.tiposProbioticos.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 pt-3 border-t border-gray-100">
                  Verificado: {tienda.fechaVerificacion}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

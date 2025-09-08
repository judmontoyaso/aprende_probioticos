'use client';

import { useState } from 'react';

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

interface CiudadPageClientProps {
  tiendas: Tienda[];
}

export default function CiudadPageClient({ tiendas }: CiudadPageClientProps) {
  return (
    <>
      {tiendas.map((tienda) => (
        <div key={tienda.nombre} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
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

          <h3 className="text-xl font-bold text-biscay mb-3">{tienda.nombre}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{tienda.direccion}</p>
          
          <div className="space-y-3 text-sm mb-6">
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
                <p className="text-gray-700 font-medium mb-1">Tipos disponibles:</p>
                <div className="flex flex-wrap gap-1">
                  {tienda.tiposProbioticos.map((tipo, index) => (
                    <span key={index} className="text-xs bg-apple/10 text-apple px-2 py-1 rounded-full">
                      {tipo}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
            Verificado: {tienda.fechaVerificacion}
          </div>
        </div>
      ))}
    </>
  );
}

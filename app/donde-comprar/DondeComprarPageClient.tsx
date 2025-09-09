'use client';

import Link from 'next/link';
import { slugify } from './utils';
import { tiendasData } from './data';

interface DondeComprarPageClientProps {
  paises: string[];
  ciudadesPorPais: Record<string, string[]>;
}

export default function DondeComprarPageClient({ paises, ciudadesPorPais }: DondeComprarPageClientProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
              Explora por País
            </h2>
            <p className="text-lg text-gray-600">
              Encuentra tiendas especializadas en tu país
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paises.map((pais) => {
              const paisSlug = slugify(pais);
              const ciudades = ciudadesPorPais[pais] || [];
              const totalTiendas = tiendasData.filter(t => t.pais === pais).length;
              
              // Mapeo de países a banderas
              const paisFlags: { [key: string]: string } = {
                'España': '🇪🇸',
                'México': '🇲🇽',
                'Colombia': '🇨🇴',
                'Argentina': '🇦🇷'
              };

              return (
                <Link 
                  key={pais} 
                  href={`/donde-comprar/${paisSlug}`}
                  className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-apple/20"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {paisFlags[pais] || '🌍'}
                    </div>
                    <h3 className="text-xl font-bold text-biscay mb-2 group-hover:text-apple transition-colors duration-300">
                      {pais}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>{totalTiendas} tienda{totalTiendas !== 1 ? 's' : ''}</p>
                      <p>{ciudades.length} ciudad{ciudades.length !== 1 ? 'es' : ''}</p>
                    </div>
                    <div className="mt-4 text-apple font-medium text-sm group-hover:text-apple/80 transition-colors duration-300">
                      Ver tiendas →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

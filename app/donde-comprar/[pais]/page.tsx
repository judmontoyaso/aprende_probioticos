'use client';

import { useMemo } from 'react';
import { tiendasData, Tienda } from '../data';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { slugify } from '../utils';

export default function PaisPage() {
  const params = useParams();
  
  if (!params) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Cargando...</h1>
        </div>
    );
  }

  const paisSlug = Array.isArray(params.pais) ? params.pais[0] : params.pais;

  const pais = useMemo(() => {
    return tiendasData.find(
      (tienda: Tienda) => slugify(tienda.pais) === paisSlug
    )?.pais;
  }, [paisSlug]);

  const ciudades = useMemo(() => {
    const ciudadesDelPais = tiendasData
      .filter((tienda: Tienda) => slugify(tienda.pais) === paisSlug)
      .map((tienda: Tienda) => tienda.ciudad);
    return [...new Set(ciudadesDelPais)];
  }, [paisSlug]);

  if (!pais) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">País no encontrado</h1>
        <Link href="/donde-comprar" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
            Volver al directorio
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Tiendas de Probióticos en {pais}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Selecciona una ciudad para ver la lista de tiendas, herbolarios y mercados disponibles.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ciudades.map((ciudad: string) => (
            <Link
                key={ciudad}
                href={`/donde-comprar/${paisSlug}/${slugify(ciudad)}`}
                className="bg-white p-6 rounded-lg shadow-md text-center text-lg font-semibold text-gray-700 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
            >
                {ciudad}
            </Link>
            ))}
        </div>

        <section className="my-16 p-8 bg-white rounded-lg border shadow-sm">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Por qué buscar en tiendas naturales y herbolarios de {pais}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 max-w-4xl mx-auto">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Selección Especializada</h3>
                    <p>Muchas ofrecen marcas de calidad y productos artesanales difíciles de encontrar en supermercados.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Productos Frescos y Locales</h3>
                    <p>Acceso a alimentos fermentados elaborados por productores locales, apoyando la economía de tu región.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Asesoría Personalizada</h3>
                    <p>Personal formado que puede orientarte según el formato y tus necesidades de bienestar.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Variedad de Formatos</h3>
                    <p>Desde kéfir y kombucha hasta fórmulas específicas en cápsulas o polvos.</p>
                </div>
            </div>
        </section>

        <section className="my-16 p-8 bg-aqua-squeeze rounded-lg border text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">¿Conoces otra tienda en {pais}?</h2>
            <p className="mb-6 text-gray-600">Ayúdanos a mejorar el directorio. Todas las propuestas se verifican con fuentes públicas antes de publicarse.</p>
            <Link href="/contacto" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Sugerir una tienda
            </Link>
        </section>
        </div>
    </main>
  );
}

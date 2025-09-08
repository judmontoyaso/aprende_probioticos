'use client';

import { useMemo } from 'react';
import { tiendasData } from './data';
import Link from 'next/link';
import { slugify } from './utils';

export default function DondeComprarPage() {
  const paises = useMemo(() => {
    const paisesUnicos = tiendasData.map(t => t.pais);
    return [...new Set(paisesUnicos)];
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Dónde comprar probióticos — Directorio por país</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Bienvenido a nuestro directorio verificado y práctico para encontrar herbolarios, mercados orgánicos y tiendas naturales donde comprar probióticos en países hispanohablantes.
        </p>

        <div className="text-center mb-12">
            <Link href="/donde-comprar/buscador" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Ir al Buscador de Tiendas
            </Link>
        </div>

        <section className="my-16 p-8 bg-aqua-squeeze rounded-lg border">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">¿Qué encontrarás en este directorio?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 max-w-4xl mx-auto">
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span><strong>Fichas por tienda:</strong> Dirección, web o redes sociales y tipos de probióticos disponibles.</span>
                </li>
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span><strong>Tiendas seleccionadas:</strong> Herbolarios, mercados orgánicos y tiendas saludables (priorizamos estos canales sobre farmacias masivas).</span>
                </li>
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span><strong>Información práctica:</strong> Marcas destacadas, formatos (alimentos fermentados / suplementos) y si realizan venta online.</span>
                </li>
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span><strong>Última verificación:</strong> 8 de septiembre de 2025.</span>
                </li>
            </ul>
        </section>

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Busca por país</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paises.map((pais) => (
            <Link
                key={pais}
                href={`/donde-comprar/${slugify(pais)}`}
                className="bg-white p-8 rounded-lg shadow-md text-center text-2xl font-bold text-gray-800 hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
                <span className="block">Probióticos en</span>
                <span className="block text-blue-600">{pais}</span>
            </Link>
            ))}
        </div>
        </div>
    </main>
  );
}

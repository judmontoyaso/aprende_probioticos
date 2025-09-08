'use client';

import { useMemo } from 'react';
import { tiendasData } from '../../data';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { slugify } from '../../utils';

export default function CiudadPage() {
  const params = useParams();

  if (!params) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Cargando...</h1>
        </div>
    );
  }

  const paisSlug = Array.isArray(params.pais) ? params.pais[0] : params.pais;
  const ciudadSlug = Array.isArray(params.ciudad) ? params.ciudad[0] : params.ciudad;

  const tiendas = useMemo(() => {
    return tiendasData.filter(
      (tienda) =>
        slugify(tienda.pais) === paisSlug &&
        slugify(tienda.ciudad) === ciudadSlug
    );
  }, [paisSlug, ciudadSlug]);

  const pais = tiendas.length > 0 ? tiendas[0].pais : '';
  const ciudad = tiendas.length > 0 ? tiendas[0].ciudad : '';

  if (tiendas.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">No se encontraron tiendas</h1>
        <p className="text-xl text-gray-600 mt-4">
          No tenemos datos para la ciudad o país especificado.
        </p>
        <Link href="/donde-comprar" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
            Volver al directorio
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Dónde Comprar Probióticos en {ciudad}, {pais}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guía detallada de tiendas, herbolarios y mercados en {ciudad}. Encuentra productos de calidad cerca de ti.
            </p>
        </section>

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

        <section className="my-16 p-8 bg-aqua-squeeze rounded-lg border">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Consejos rápidos antes de comprar en {ciudad}</h2>
            <ul className="space-y-4 text-gray-700 max-w-2xl mx-auto">
                <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Revisa la fecha de caducidad y las condiciones de almacenamiento, especialmente para productos refrigerados.</span>
                </li>
                <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Para suplementos, prefiere aquellos con descripción de cepas y UFC (Unidades Formadoras de Colonias).</span>
                </li>
                <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Para alimentos fermentados, pregunta si son pasteurizados (los no pasteurizados conservan más cultivos vivos).</span>
                </li>
            </ul>
        </section>

        <section className="my-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                <details className="p-6 border rounded-lg bg-white group" name="faq">
                    <summary className="font-semibold cursor-pointer flex justify-between items-center">
                        ¿Qué diferencia hay entre un probiótico alimentario y uno en cápsula?
                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <p className="mt-4 text-gray-600">Los alimentarios (kéfir, kombucha) contienen consorcios microbianos naturales; las cápsulas suelen contener cepas específicas y dosis estandarizadas.</p>
                </details>
                <details className="p-6 border rounded-lg bg-white group" name="faq">
                    <summary className="font-semibold cursor-pointer flex justify-between items-center">
                        ¿Puedo encontrar marcas internacionales en estas tiendas?
                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <p className="mt-4 text-gray-600">Sí, muchas de las tiendas listadas ofrecen tanto marcas nacionales como internacionales. Revisa la ficha de cada una para más detalles.</p>
                </details>
                <details className="p-6 border rounded-lg bg-white group" name="faq">
                    <summary className="font-semibold cursor-pointer flex justify-between items-center">
                        ¿Cómo sé si la información es confiable?
                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <p className="mt-4 text-gray-600">Cada ficha incluye la fuente de verificación (sitio oficial, Google Maps, etc.) y la fecha de nuestra última comprobación para asegurar la mayor precisión posible.</p>
                </details>
            </div>
        </section>
        </div>
    </main>
  );
}

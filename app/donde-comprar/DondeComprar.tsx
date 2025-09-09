import React from 'react';
import Link from 'next/link';
import DondeComprarClient from './DondeComprarClient';

export default function DondeComprar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dónde Comprar Probióticos
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Encuentra las mejores tiendas, herbolarios, farmacias y mercados para comprar probióticos de calidad cerca de ti
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg mb-4">🔍 Directorio verificado con más de 25 establecimientos</p>
              <p className="text-base opacity-90">Herbolarios • Farmacias Naturistas • Tiendas Online • Mercados Orgánicos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Analysis Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tipos de Establecimientos para Comprar Probióticos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cadenas Nacionales */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🏪</span>
                <h3 className="text-xl font-bold text-gray-900">Cadenas Nacionales</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Herbolarios y farmacias con múltiples sucursales que ofrecen amplia variedad de marcas y productos probióticos.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Amplia selección de marcas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Tienda online y física
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Entrega a domicilio
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900">Ejemplos:</p>
                <p className="text-sm text-gray-600">Herbolario Navarro, Súper Naturista, Veritas, Farmacia Mapuche</p>
              </div>
            </div>

            {/* Especialistas Online */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">💻</span>
                <h3 className="text-xl font-bold text-gray-900">Especialistas Online</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Tiendas especializadas exclusivamente en probióticos y suplementos digestivos con asesoría experta.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Productos especializados
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Asesoría personalizada
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Precios competitivos
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900">Ejemplos:</p>
                <p className="text-sm text-gray-600">Probiotico.cl, Naturista Virtual, Tienda Natural</p>
              </div>
            </div>

            {/* Mercados Locales */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🌱</span>
                <h3 className="text-xl font-bold text-gray-900">Mercados Locales</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Mercados orgánicos y tiendas locales que ofrecen alimentos fermentados artesanales y productos naturales.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Productos artesanales
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Alimentos fermentados frescos
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Apoyo a productores locales
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900">Ejemplos:</p>
                <p className="text-sm text-gray-600">Mercado el 100, Ecocentro, El Galpón, Agromandala</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Directory */}
        <DondeComprarClient />

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ¿Dónde puedo comprar probióticos de calidad?
              </h3>
              <p className="text-gray-700">
                Puedes comprar probióticos de calidad en herbolarios especializados como Herbolario Navarro, 
                farmacias naturistas, tiendas online especializadas como Probiotico.cl, y mercados orgánicos 
                como Mercado el 100. Es importante verificar que sean productos refrigerados y de marcas reconocidas.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ¿Qué tipos de establecimientos venden probióticos?
              </h3>
              <p className="text-gray-700">
                Los probióticos se venden en tres tipos principales de establecimientos: 1) Cadenas nacionales 
                (Herbolario Navarro, Súper Naturista, Veritas), 2) Especialistas online (Probiotico.cl, Naturista Virtual), 
                y 3) Mercados locales (Mercado el 100, El Galpón, Ecocentro).
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ¿Cuál es la diferencia entre comprar probióticos en farmacias vs herbolarios?
              </h3>
              <p className="text-gray-700">
                Las farmacias suelen tener probióticos farmacéuticos con cepas específicas y mayor concentración, 
                mientras que los herbolarios ofrecen mayor variedad de marcas naturales y alimentos fermentados. 
                Los herbolarios también suelen tener mejor asesoramiento especializado en productos naturales.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 mt-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Eres propietario de una tienda?
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Si vendes probióticos y quieres aparecer en nuestro directorio verificado, 
            contáctanos para incluir tu establecimiento.
          </p>
          <Link 
            href="/contacto" 
            className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Contactar para Inclusión
          </Link>
        </div>
      </div>
    </div>
  );
}

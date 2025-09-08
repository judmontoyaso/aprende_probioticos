'use client';

import { useState, useMemo } from 'react';
import CountrySelector from '../components/CountrySelector';
import RetailerCard from '../components/RetailerCard';
import AdBanner from '../components/AdBanner';
import retailersData from '../data/retailers.json';

interface City {
  key: string;
  name: string;
  province: string;
  retailerCount: number;
}

export default function DondeComprarClient() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Process data for easier handling
  const countries = Object.entries(retailersData.countries).map(([key, country]) => ({
    key,
    name: country.name,
    flag: country.flag,
  }));

  // Get cities for selected country
  const cities = useMemo(() => {
    if (!selectedCountry) return [];
    
    const country = retailersData.countries[selectedCountry as keyof typeof retailersData.countries];
    if (!country) return [];

    return Object.entries(country.cities).map(([key, city]) => ({
      key,
      name: city.name,
      province: city.province,
      retailerCount: city.retailers.length,
    }));
  }, [selectedCountry]);

  // Get filtered retailers
  const filteredRetailers = useMemo(() => {
    let allRetailers: any[] = [];

    Object.entries(retailersData.countries).forEach(([countryKey, country]) => {
      if (selectedCountry && selectedCountry !== countryKey) return;

      Object.entries(country.cities).forEach(([cityKey, city]) => {
        if (selectedCity && selectedCity !== cityKey) return;

        city.retailers.forEach(retailer => {
          if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = 
              retailer.name.toLowerCase().includes(searchLower) ||
              retailer.address.toLowerCase().includes(searchLower) ||
              retailer.probioticTypes.some(type => type.toLowerCase().includes(searchLower)) ||
              retailer.brands.some(brand => brand.toLowerCase().includes(searchLower));
            
            if (!matchesSearch) return;
          }

          allRetailers.push({
            ...retailer,
            countryName: country.name,
            countryKey,
            cityName: city.name,
            cityKey,
            province: city.province,
          });
        });
      });
    });

    return allRetailers;
  }, [selectedCountry, selectedCity, searchTerm]);

  // Get statistics
  const stats = useMemo(() => {
    const totalRetailers = filteredRetailers.length;
    const onlineStores = filteredRetailers.filter(r => r.onlineStore).length;
    const withDelivery = filteredRetailers.filter(r => r.delivery).length;
    const highReliability = filteredRetailers.filter(r => r.reliability === 'Muy Alta').length;

    return { totalRetailers, onlineStores, withDelivery, highReliability };
  }, [filteredRetailers]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Dónde Comprar Probióticos en Países Hispanohablantes
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-green-100">
              Encuentra las mejores tiendas, herbolarios y farmacias especializadas en probióticos. 
              Directorio completo con información verificada, precios y disponibilidad.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">{stats.totalRetailers}</div>
                <div className="text-sm text-green-100">Tiendas verificadas</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">{countries.length}</div>
                <div className="text-sm text-green-100">Países cubiertos</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">{stats.onlineStores}</div>
                <div className="text-sm text-green-100">Tiendas online</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">{stats.withDelivery}</div>
                <div className="text-sm text-green-100">Con envío</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="top" />
      </div>

      {/* Introduction */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
              Guía Completa para Comprar Probióticos
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Basado en una investigación exhaustiva del mercado minorista de probióticos en países hispanohablantes, 
                hemos compilado el directorio más completo de tiendas especializadas. Nuestro análisis abarca desde 
                grandes cadenas nacionales hasta mercados orgánicos locales y tiendas online especializadas.
              </p>
              <p className="mb-6">
                Cada establecimiento ha sido verificado y evaluado según criterios de confiabilidad, disponibilidad 
                de productos, precios y servicios ofrecidos. Encuentra exactamente lo que necesitas, desde suplementos 
                probióticos hasta alimentos fermentados naturales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Filtrar por ubicación</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Country Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">País</label>
                <CountrySelector
                  countries={countries}
                  selectedCountry={selectedCountry}
                  onCountryChange={(country) => {
                    setSelectedCountry(country);
                    setSelectedCity(''); // Reset city when country changes
                  }}
                />
              </div>

              {/* City Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  disabled={!selectedCountry}
                >
                  <option value="">Todas las ciudades</option>
                  {cities.map((city) => (
                    <option key={city.key} value={city.key}>
                      {city.name} ({city.retailerCount} tiendas)
                    </option>
                  ))}
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
                <input
                  type="text"
                  placeholder="Nombre, dirección, marca..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCountry || selectedCity || searchTerm) && (
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm text-gray-600">Filtros activos:</span>
                {selectedCountry && (
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">
                    {countries.find(c => c.key === selectedCountry)?.name}
                    <button onClick={() => setSelectedCountry('')} className="ml-1 hover:text-green-600">×</button>
                  </span>
                )}
                {selectedCity && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
                    {cities.find(c => c.key === selectedCity)?.name}
                    <button onClick={() => setSelectedCity('')} className="ml-1 hover:text-blue-600">×</button>
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded-full">
                    "{searchTerm}"
                    <button onClick={() => setSearchTerm('')} className="ml-1 hover:text-purple-600">×</button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Resultados ({filteredRetailers.length} tienda{filteredRetailers.length !== 1 ? 's' : ''})
              </h3>
              
              {filteredRetailers.length > 0 && (
                <div className="text-sm text-gray-600">
                  {stats.highReliability} con confiabilidad muy alta • {stats.onlineStores} tiendas online
                </div>
              )}
            </div>

            {filteredRetailers.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron resultados</h3>
                <p className="text-gray-600 mb-4">Intenta ajustar los filtros o términos de búsqueda</p>
                <button
                  onClick={() => {
                    setSelectedCountry('');
                    setSelectedCity('');
                    setSearchTerm('');
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRetailers.map((retailer) => (
                  <RetailerCard
                    key={`${retailer.countryKey}-${retailer.cityKey}-${retailer.id}`}
                    retailer={retailer}
                    cityName={retailer.cityName}
                    countryName={retailer.countryName}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 text-center">
              Análisis del Mercado de Probióticos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-green-600">Cadenas Nacionales</h3>
                <p className="text-gray-700 text-sm">
                  Herbolario Navarro, Súper Naturista y Veritas dominan con amplia selección 
                  y presencia omnicanal en múltiples ciudades.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Especialistas Online</h3>
                <p className="text-gray-700 text-sm">
                  Tiendas como Probiotico.cl y Naturista Virtual ofrecen catálogos extensos 
                  y envío nacional especializado.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-orange-600">Mercados Locales</h3>
                <p className="text-gray-700 text-sm">
                  Mercado el 100 y El Galpón destacan por alimentos fermentados artesanales 
                  y productos de productores directos.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Tipos de Productos Disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-600 mb-2">Suplementos Probióticos</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Cápsulas de alta concentración</li>
                    <li>• Sobres y polvos solubles</li>
                    <li>• Comprimidos masticables</li>
                    <li>• Gomitas para niños</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-600 mb-2">Alimentos Fermentados</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kéfir y yogures probióticos</li>
                    <li>• Kombucha artesanal</li>
                    <li>• Chucrut y kimchi</li>
                    <li>• Vinagres fermentados</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ad */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" />
      </div>
    </>
  );
}

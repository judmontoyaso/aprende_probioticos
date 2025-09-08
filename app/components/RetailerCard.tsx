'use client';

interface Retailer {
  id: string;
  name: string;
  address: string;
  phone: string | null;
  whatsapp: string | null;
  website: string;
  productUrl: string | null;
  hours: string | null;
  probioticTypes: string[];
  brands: string[];
  priceExample: string | null;
  paymentMethods: string[];
  onlineStore: boolean;
  delivery: boolean;
  reliability: string;
  reliabilityNote: string;
}

interface RetailerCardProps {
  retailer: Retailer;
  cityName: string;
  countryName: string;
}

export default function RetailerCard({ retailer, cityName, countryName }: RetailerCardProps) {
  const getReliabilityColor = (reliability: string) => {
    switch (reliability) {
      case 'Muy Alta':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Alta':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Media':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleContactClick = (type: 'phone' | 'whatsapp' | 'website', value: string) => {
    if (type === 'phone') {
      window.open(`tel:${value}`, '_self');
    } else if (type === 'whatsapp') {
      window.open(`https://wa.me/${value.replace(/[^0-9]/g, '')}`, '_blank');
    } else if (type === 'website') {
      window.open(value, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{retailer.name}</h3>
          <p className="text-sm text-gray-600">{cityName}, {countryName}</p>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getReliabilityColor(retailer.reliability)}`}>
          {retailer.reliability}
        </div>
      </div>

      {/* Address */}
      <div className="mb-4">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm text-gray-700">{retailer.address}</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-4 space-y-2">
        {retailer.phone && (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <button 
              onClick={() => handleContactClick('phone', retailer.phone!)}
              className="text-sm text-green-600 hover:text-green-700 hover:underline"
            >
              {retailer.phone}
            </button>
          </div>
        )}
        
        {retailer.whatsapp && (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <button 
              onClick={() => handleContactClick('whatsapp', retailer.whatsapp!)}
              className="text-sm text-green-600 hover:text-green-700 hover:underline"
            >
              WhatsApp
            </button>
          </div>
        )}
      </div>

      {/* Hours */}
      {retailer.hours && (
        <div className="mb-4">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-gray-700">{retailer.hours}</p>
          </div>
        </div>
      )}

      {/* Probiotic Types */}
      {retailer.probioticTypes.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Tipos de probióticos:</h4>
          <div className="flex flex-wrap gap-1">
            {retailer.probioticTypes.map((type, index) => (
              <span key={index} className="inline-block bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full border border-green-200">
                {type}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Brands */}
      {retailer.brands.length > 0 && retailer.brands[0] !== 'N/D (enfocado en alimentos)' && retailer.brands[0] !== 'N/A (productor directo)' && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Marcas disponibles:</h4>
          <div className="flex flex-wrap gap-1">
            {retailer.brands.slice(0, 4).map((brand, index) => (
              <span key={index} className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-200">
                {brand}
              </span>
            ))}
            {retailer.brands.length > 4 && (
              <span className="inline-block bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded-full border border-gray-200">
                +{retailer.brands.length - 4} más
              </span>
            )}
          </div>
        </div>
      )}

      {/* Price Example */}
      {retailer.priceExample && (
        <div className="mb-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
            <h4 className="text-sm font-medium text-yellow-800 mb-1">Ejemplo de precio:</h4>
            <p className="text-sm text-yellow-700">{retailer.priceExample}</p>
          </div>
        </div>
      )}

      {/* Services */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {retailer.onlineStore && (
            <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full border border-purple-200">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Tienda online
            </span>
          )}
          {retailer.delivery && (
            <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Envío a domicilio
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-4 border-t border-gray-200">
        <button 
          onClick={() => handleContactClick('website', retailer.website)}
          className="flex-1 bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
        >
          Visitar sitio web
        </button>
        {retailer.productUrl && (
          <button 
            onClick={() => handleContactClick('website', retailer.productUrl)}
            className="flex-1 bg-white text-green-600 text-sm font-medium py-2 px-4 rounded-md border border-green-600 hover:bg-green-50 transition-colors duration-200"
          >
            Ver probióticos
          </button>
        )}
      </div>

      {/* Reliability Note */}
      <div className="mt-3 text-xs text-gray-500 italic">
        {retailer.reliabilityNote}
      </div>
    </div>
  );
}

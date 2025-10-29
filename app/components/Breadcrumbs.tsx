'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getCountryNameFromSlug, getCityNameFromSlug } from '../donde-comprar/utils';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // No mostrar breadcrumbs en la página principal
  if (pathname === '/') {
    return null;
  }

  // Crear el array de breadcrumbs
  const pathSegments = (pathname ?? '').split('/').filter(segment => segment);
  
  // Mapa de rutas a nombres legibles
  const routeMap: Record<string, string> = {
    'que-son': '¿Qué son los probióticos?',
    'beneficios': 'Beneficios',
    'como-elegir': 'Cómo elegir',
    'referencias': 'Referencias',
    'politica-privacidad': 'Política de privacidad',
    'cookies': 'Política de cookies',
  };

  // Generar los breadcrumbs con sus rutas
  const breadcrumbs = [
    { name: 'Inicio', path: '/' },
    ...pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      let name = routeMap[segment] || segment;

      // Lógica para "Dónde comprar"
      if (pathSegments[0] === 'donde-comprar' && index > 0) {
          if (index === 1) { // Es un país
              name = getCountryNameFromSlug(segment);
          }
          if (index === 2) { // Es una ciudad
              const countrySlug = pathSegments[1];
              name = getCityNameFromSlug(segment, countrySlug);
          }
      }

      return {
        name,
        path,
      };
    }),
  ];

  // Generar datos estructurados para Schema.org BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': `https://probioticosparatodos.com${crumb.path}`,
    })),
  };

  return (
    <>
      {/* Datos estructurados Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* UI de Breadcrumbs */}
      <nav className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <ol className="flex flex-wrap text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-medium">{crumb.name}</span>
                ) : (
                  <Link href={crumb.path} className="hover:underline hover:text-white/90 transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}

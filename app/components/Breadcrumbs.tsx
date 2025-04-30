'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  
  // No mostrar breadcrumbs en la página principal
  if (pathname === '/') return null;
  
  // Obtener rutas y nombres
  const getPathSegments = () => {
    const segments = pathname.split('/').filter(Boolean);
    
    const breadcrumbMap: { [key: string]: string } = {
      'que-son': '¿Qué son?',
      'beneficios': 'Beneficios',
      'como-elegir': 'Cómo elegir',
      'referencias': 'Referencias',
      'politica-privacidad': 'Política de Privacidad',
    };
    
    return segments.map(segment => ({
      href: `/${segment}`,
      label: breadcrumbMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
    }));
  };
  
  const segments = getPathSegments();
  
  return (
    <div className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-2 text-sm">
        <div className="flex items-center">
          <Link href="/" className="text-white hover:text-green-200">
            Inicio
          </Link>
          
          {segments.map((segment, index) => (
            <div key={segment.href} className="flex items-center">
              <span className="mx-2 text-green-200">/</span>
              {index === segments.length - 1 ? (
                <span className="font-medium text-green-100">{segment.label}</span>
              ) : (
                <Link 
                  href={segment.href}
                  className="text-white hover:text-green-200"
                >
                  {segment.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs; 
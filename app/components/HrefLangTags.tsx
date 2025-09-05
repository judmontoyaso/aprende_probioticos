'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Configuración de países hispanohablantes con sus códigos ISO
const hispanicCountries = [
  { country: 'es', region: 'ES', name: 'España' },
  { country: 'es', region: 'MX', name: 'México' },
  { country: 'es', region: 'AR', name: 'Argentina' },
  { country: 'es', region: 'CO', name: 'Colombia' },
  { country: 'es', region: 'PE', name: 'Perú' },
  { country: 'es', region: 'VE', name: 'Venezuela' },
  { country: 'es', region: 'CL', name: 'Chile' },
  { country: 'es', region: 'EC', name: 'Ecuador' },
  { country: 'es', region: 'GT', name: 'Guatemala' },
  { country: 'es', region: 'CU', name: 'Cuba' },
  { country: 'es', region: 'BO', name: 'Bolivia' },
  { country: 'es', region: 'DO', name: 'República Dominicana' },
  { country: 'es', region: 'HN', name: 'Honduras' },
  { country: 'es', region: 'PY', name: 'Paraguay' },
  { country: 'es', region: 'SV', name: 'El Salvador' },
  { country: 'es', region: 'NI', name: 'Nicaragua' },
  { country: 'es', region: 'CR', name: 'Costa Rica' },
  { country: 'es', region: 'PA', name: 'Panamá' },
  { country: 'es', region: 'UY', name: 'Uruguay' },
  { country: 'es', region: 'US', name: 'Estados Unidos (Hispanohablantes)' },
];

interface HrefLangTagsProps {
  baseUrl?: string;
}

export default function HrefLangTags({ baseUrl = 'https://www.probioticosparatodos.com' }: HrefLangTagsProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Remover hreflang tags existentes para evitar duplicados
    const existingHrefLangs = document.querySelectorAll('link[hreflang]');
    existingHrefLangs.forEach(link => link.remove());

    // Crear la URL completa para la página actual
    const currentUrl = `${baseUrl}${pathname}`;

    // Agregar hreflang para cada país hispanohablante
    hispanicCountries.forEach(({ country, region }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = `${country}-${region}`;
      link.href = currentUrl;
      document.head.appendChild(link);
    });

    // Agregar hreflang genérico para español
    const spanishLink = document.createElement('link');
    spanishLink.rel = 'alternate';
    spanishLink.hreflang = 'es';
    spanishLink.href = currentUrl;
    document.head.appendChild(spanishLink);

    // Agregar x-default para la versión por defecto
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = currentUrl;
    document.head.appendChild(defaultLink);

    // Cleanup function para remover los links cuando el componente se desmonte
    return () => {
      const hrefLangLinks = document.querySelectorAll('link[hreflang]');
      hrefLangLinks.forEach(link => link.remove());
    };
  }, [pathname, baseUrl]);

  // Este componente no renderiza nada visible, solo maneja los meta tags
  return null;
}

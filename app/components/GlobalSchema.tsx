'use client';

import React, { useEffect, useState } from 'react';

export default function GlobalSchema() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://probioticosparatodos.com/#organization",
    "name": "Probióticos Para Todos",
    "url": "https://probioticosparatodos.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://probioticosparatodos.com/images/logo.png",
      "width": 260,
      "height": 60
    },
    "description": "Sitio informativo sobre probióticos basado en evidencia científica. Aprende sobre sus beneficios, cómo elegirlos y su impacto en la salud.",
    "sameAs": [
      "https://twitter.com/probioticospt",
      "https://facebook.com/probioticosparatodos",
      "https://instagram.com/probioticosparatodos"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://probioticosparatodos.com/#website",
    "url": "https://probioticosparatodos.com",
    "name": "Probióticos Para Todos",
    "description": "Información basada en evidencia científica sobre probióticos",
    "publisher": {
      "@id": "https://probioticosparatodos.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://probioticosparatodos.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "es"
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
} 

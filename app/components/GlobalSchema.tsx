'use client';

import React from 'react';

export default function GlobalSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.probioticosparatodos.com/#organization",
    "name": "Probióticos Para Todos",
    "url": "https://www.probioticosparatodos.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.probioticosparatodos.com/images/logo.png",
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
    "@id": "https://www.probioticosparatodos.com/#website",
    "url": "https://www.probioticosparatodos.com",
    "name": "Probióticos Para Todos",
    "description": "Información basada en evidencia científica sobre probióticos",
    "publisher": {
      "@id": "https://www.probioticosparatodos.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.probioticosparatodos.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "es"
  };

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
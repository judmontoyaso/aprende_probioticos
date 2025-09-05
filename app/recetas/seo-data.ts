import { Metadata } from 'next';

// Metadatos adicionales para contenido localizado
export const additionalKeywords = [
  // Palabras clave locales
  'fermentados colombia',
  'probióticos argentina',
  'yogur casero méxico',
  'kéfir españa',
  'kombucha venezuela',
  'chucrut chile',
  'miso casero perú',
  
  // Términos de cola larga
  'como hacer yogur en casa sin yogurtera',
  'receta kéfir de agua paso a paso',
  'fermentar verduras en casa fácil',
  'probióticos caseros para niños',
  'alimentos fermentados para principiantes',
  'beneficios bacterias lacticas',
  'microbiota intestinal sana',
  'digestión saludable natural',
  
  // Búsquedas relacionadas con salud
  'probióticos naturales vs suplementos',
  'fermentación láctica beneficios',
  'alimentos prebióticos y probióticos',
  'salud digestiva integral',
  'sistema inmunológico fuerte',
  'flora intestinal equilibrada',
  
  // Términos técnicos simples
  'lactobacilos caseros',
  'bifidobacterias alimentos',
  'fermentación anaeróbica',
  'cultivos madre probióticos',
  'starter fermentación',
  'scoby kombucha',
  'granos kéfir',
  
  // Preguntas frecuentes
  'que probióticos tomar',
  'cuantos probióticos al día',
  'mejor hora tomar probióticos',
  'probióticos embarazo lactancia',
  'probióticos niños dosis',
  'fermentados veganos',
  'recetas sin lactosa'
];

export const faqData = [
  {
    question: '¿Cuánto tiempo duran los fermentados caseros?',
    answer: 'Los fermentados caseros bien preparados y almacenados pueden durar de 1-4 semanas en refrigeración, dependiendo del tipo de alimento.'
  },
  {
    question: '¿Son seguros los fermentados caseros?',
    answer: 'Sí, son completamente seguros cuando se siguen las técnicas correctas de fermentación y se mantienen las condiciones de higiene adecuadas.'
  },
  {
    question: '¿Puedo hacer fermentados sin cultivos iniciadores?',
    answer: 'Algunos fermentados como el chucrut se pueden hacer solo con sal, pero otros como el yogur o kéfir requieren cultivos específicos para mejores resultados.'
  },
  {
    question: '¿Qué beneficios tienen los probióticos caseros vs comerciales?',
    answer: 'Los caseros suelen tener mayor diversidad y cantidad de probióticos vivos, sin conservantes ni aditivos, y son más económicos a largo plazo.'
  }
];

// Schema FAQ para búsquedas
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

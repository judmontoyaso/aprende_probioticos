'use client';

import React from 'react';

interface ArticleData {
  title: string;
  description: string;
  publishDate: string;
  author: string;
  image?: string;
  url?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOSchemaProps {
  type: 'article' | 'faq';
  data: ArticleData | FAQItem[];
}

export default function SEOSchema({ type, data }: SEOSchemaProps) {
  const schemaData = 
    type === 'article' ? {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: (data as ArticleData).title,
      description: (data as ArticleData).description,
      datePublished: (data as ArticleData).publishDate,
      author: {
        "@type": "Person",
        name: (data as ArticleData).author
      },
      image: (data as ArticleData).image,
      url: (data as ArticleData).url
    } : 
    type === 'faq' ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: (data as FAQItem[]).map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    } : {};

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
} 
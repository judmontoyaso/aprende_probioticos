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
  type: 'article' | 'faq' | 'both';
  data: ArticleData | FAQItem[] | { article: ArticleData; faq: FAQItem[] };
}

// Default-only export to avoid import confusion
function SEOSchema({ type, data }: SEOSchemaProps) {
  // Handle article schema
  const getArticleSchema = (articleData: ArticleData) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleData.title,
    description: articleData.description,
    datePublished: articleData.publishDate,
    author: {
      "@type": "Person",
      name: articleData.author,
    },
    image: articleData.image,
    url: articleData.url,
  });

  // Handle FAQ schema
  const getFAQSchema = (faqItems: FAQItem[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });

  // Single schema type (article or FAQ)
  if (type === 'article' || type === 'faq') {
    const schemaData = type === 'article' 
      ? getArticleSchema(data as ArticleData) 
      : getFAQSchema(data as FAQItem[]);
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    );
  }
  
  // Both schemas combined (article and FAQ)
  if (type === 'both') {
    const combinedData = data as { article: ArticleData; faq: FAQItem[] };
    const articleSchema = getArticleSchema(combinedData.article);
    const faqSchema = getFAQSchema(combinedData.faq);
    
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </>
    );
  }
  
  return null;
}

export default SEOSchema;

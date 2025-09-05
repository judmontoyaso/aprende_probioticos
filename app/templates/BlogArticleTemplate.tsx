import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface RelatedArticle {
  href: string;
  title: string;
  subtitle: string;
}

interface SidebarFact {
  text: string;
}

interface BlogArticleTemplateProps {
  // Header datos
  badge: string;
  title: string;
  date: string;
  author: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  
  // Contenido
  tableOfContents: TableOfContentsItem[];
  children: React.ReactNode;
  
  // Sidebar
  sidebarFacts: SidebarFact[];
  relatedArticles: RelatedArticle[];
  
  // CTA
  ctaTitle?: string;
  ctaLink?: string;
  ctaText?: string;
}

export default function BlogArticleTemplate({
  badge,
  title,
  date,
  author,
  description,
  heroImage,
  heroImageAlt,
  tableOfContents,
  children,
  sidebarFacts,
  relatedArticles,
  ctaTitle = "Recetas relacionadas",
  ctaLink = "/recetas",
  ctaText = "Ver recetas"
}: BlogArticleTemplateProps) {
  return (
    <div className="article-container">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[40vh] md:h-[50vh] lg:h-[60vh] w-full relative">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            priority
            className="object-cover brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          <div className="absolute bottom-0 w-full p-8 md:p-12 text-white">
            <div className="container mx-auto">
              <div className="inline-block px-3 py-1 bg-[#163660] text-white text-sm font-medium rounded-md mb-4">
                {badge}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {title}
              </h1>
              <div className="flex items-center text-sm md:text-base mb-4">
                <span className="mr-4">{date}</span>
                <span className="mr-4">|</span>
                <span>Por: {author}</span>
              </div>
              <p className="text-lg md:text-xl max-w-3xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AdBanner Top (temporarily disabled) */}
      <div className="container mx-auto px-4 py-6">
        {/* <AdBanner position="top" /> */}
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            {/* Table of Contents - Desktop */}
            <div className="hidden md:block mb-8 p-6 bg-[#eef8f2] rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-[#163660]">Contenido del artículo</h2>
              <nav aria-label="Tabla de contenidos">
                <ol className="list-decimal list-inside space-y-1 pl-4">
                  {tableOfContents.map((item, index) => (
                    <li key={index} className="text-[#275b9e] hover:text-[#163660] transition-colors">
                      <a href={`#${item.id}`}>{item.title}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Main Content */}
            {children}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-6">
              {/* <AdBanner position="sidebar" className="mb-6" /> */}
              
              <div className="bg-[#eef8f2] p-4 sm:p-6 rounded-lg shadow-sm border border-[#c4ccd7] mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#163660]">¿Sabías que...?</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  {sidebarFacts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#48a537] mr-2">✓</span>
                      {fact.text}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-4 text-[#163660]">Artículos relacionados</h3>
                <div className="space-y-4">
                  {relatedArticles.map((article, index) => (
                    <Link key={index} href={article.href} className="block group">
                      <p className="font-medium text-[#163660] group-hover:text-[#275b9e] transition-colors">{article.title}</p>
                      <p className="text-sm text-gray-500">{article.subtitle}</p>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-[#c4ccd7]">
                <h3 className="text-lg font-semibold mb-4 text-[#163660]">{ctaTitle}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Descubre más contenido relacionado con este tema y amplía tu conocimiento sobre probióticos.
                </p>
                <Link href={ctaLink} className="block text-center bg-white text-[#163660] font-medium py-2 px-4 rounded hover:bg-[#eef8f2] transition-colors">
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ad Banner Bottom */}
      <div className="container mx-auto px-4 py-6">
        {/* <AdBanner position="bottom" /> */}
      </div>
    </div>
  );
}

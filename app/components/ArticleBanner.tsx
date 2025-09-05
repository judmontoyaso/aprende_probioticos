'use client';

import { NewBannerProfessional } from './AdBanners';

export default function ArticleBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`container mx-auto px-4 my-8 ${className}`}>
      <NewBannerProfessional 
        className="max-w-4xl mx-auto" 
        alt="Banner promocional Probióticos Para Todos - Contenido educativo" 
      />
    </div>
  );
}

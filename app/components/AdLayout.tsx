import { NewBannerProfessional, HorizontalBanner } from './AdBanners';
import FloatingKefirBanner from './FloatingKefirBanner';

export default function AdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ad-layout-container">
      {/* Banner profesional superior */}
      <div className="w-full bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <NewBannerProfessional className="w-full max-w-6xl mx-auto" alt="Banner profesional Probióticos Para Todos" />
        </div>
      </div>

      {/* Banner lateral flotante - Kéfir Diary */}
      <FloatingKefirBanner />

      {/* Contenido principal */}
      <div className="relative">
        {children}
      </div>

      {/* Banner de footer */}
      <div className="container mx-auto px-4 py-4">
        <HorizontalBanner className="max-w-4xl mx-auto" alt="Banner horizontal Probióticos Para Todos - Footer" />
      </div>
    </div>
  );
}

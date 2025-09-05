import SafeImage from './SafeImage';

// Componente para espacios reservados de publicidad futura
export function AdSpace({ position, title }: { position: string; title: string }) {
  return (
    <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-4 text-center text-gray-500 rounded my-4">
      <div className="text-sm font-medium mb-1">📢 {title}</div>
      <div className="text-xs">Espacio publicitario - {position}</div>
      <div className="text-xs mt-1 text-gray-400">Reservado para futura publicidad</div>
    </div>
  );
}

// Banner promocional temporal
export function TemporaryBanner({ className = "", alt = "Banner promocional Probióticos Para Todos" }: { className?: string; alt?: string }) {
  return (
    <div className={`my-4 ${className}`}>
      <SafeImage
        src="/images/banner.png?v=2024"
        alt={alt}
        width={300}
        height={600}
        className="w-full h-auto rounded-lg hover:scale-105 transition-transform cursor-pointer"
        priority={false}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

// Banner profesional mejorado
export function NewBannerProfessional({ className = "", alt = "Banner profesional Probióticos Para Todos" }: { className?: string; alt?: string }) {
  return (
    <div className={`my-4 ${className}`}>
      <div 
        className="bg-gradient-to-r from-blue-50 to-purple-100 border border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
        role="banner"
        aria-label={alt}
      >
        <div className="flex items-center justify-between max-h-[90px]">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">🧬 Probióticos Para Todos</h3>
              <p className="text-sm text-gray-600">Ciencia, bienestar y salud digestiva</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
            <div className="text-center">
              <div className="font-bold text-blue-600">📚</div>
              <div>Guías Gratuitas</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-green-600">🥗</div>
              <div>Recetas Fáciles</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-purple-600">🎯</div>
              <div>Resultados Reales</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Banner de imagen profesional
export function ImageBannerProfessional({ className = "", alt = "Banner imagen Probióticos Para Todos" }: { className?: string; alt?: string }) {
  return (
    <div className={`my-4 ${className}`}>
      <SafeImage
        src="/images/banner_3.png"
        alt={alt}
        width={1200}
        height={400}
        sizes="100vw"
        className="w-full h-auto rounded-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer shadow-sm"
        priority={false}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}

// Banner horizontal
export function HorizontalBanner({ className = "", alt = "Banner horizontal Probióticos Para Todos" }: { className?: string; alt?: string }) {
  return (
    <div className={`my-4 ${className}`}>
      <SafeImage
        src="/images/banner_horizontal.png"
        alt={alt}
        width={970}
        height={280}
        className="w-full h-auto rounded-lg hover:scale-105 transition-transform cursor-pointer"
        priority={false}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

// Banner específico para artículos
export function ArticleBanner({ className = "", alt = "Banner artículos Probióticos Para Todos" }: { className?: string; alt?: string }) {
  return (
    <div className={`my-4 ${className}`}>
      <div 
        className="bg-gradient-to-r from-green-50 to-blue-100 border border-green-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
        role="banner"
        aria-label={alt}
      >
        <div className="flex items-center justify-between max-h-[90px]">
          <div className="flex items-center space-x-4">
            <div className="bg-green-600 p-3 rounded-full">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">📖 Artículos Científicos</h3>
              <p className="text-sm text-gray-600">Información respaldada por investigación</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
            <div className="text-center">
              <div className="font-bold text-green-600">🔬</div>
              <div>Estudios</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-blue-600">📊</div>
              <div>Evidencia</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-purple-600">✅</div>
              <div>Verificado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

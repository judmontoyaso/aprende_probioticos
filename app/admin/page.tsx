import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Panel de Administración
        </h1>
        <p className="text-lg text-gray-600">
          Gestiona el contenido de Probióticos Para Todos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Artículos */}
        <Link
          href="/admin/articles"
          className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="bg-[#48a537] text-white p-3 rounded-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <svg className="w-6 h-6 text-gray-400 group-hover:text-[#48a537] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Artículos del Blog</h2>
          <p className="text-gray-600">
            Crear, editar y administrar todos los artículos
          </p>
        </Link>

        {/* Imágenes - Próximamente */}
        <div className="bg-white rounded-xl shadow-lg p-6 opacity-50">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gray-400 text-white p-3 rounded-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Biblioteca de Imágenes</h2>
          <p className="text-gray-600">
            Próximamente - Gestión de imágenes
          </p>
        </div>

        {/* Categorías - Próximamente */}
        <div className="bg-white rounded-xl shadow-lg p-6 opacity-50">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gray-400 text-white p-3 rounded-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Categorías</h2>
          <p className="text-gray-600">
            Próximamente - Gestión de categorías
          </p>
        </div>

        {/* Estadísticas - Próximamente */}
        <div className="bg-white rounded-xl shadow-lg p-6 opacity-50">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gray-400 text-white p-3 rounded-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Estadísticas</h2>
          <p className="text-gray-600">
            Próximamente - Analytics del sitio
          </p>
        </div>

        {/* Configuración - Próximamente */}
        <div className="bg-white rounded-xl shadow-lg p-6 opacity-50">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gray-400 text-white p-3 rounded-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Configuración</h2>
          <p className="text-gray-600">
            Próximamente - Ajustes del sitio
          </p>
        </div>

        {/* Ver sitio web */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-br from-[#163660] to-[#275b9e] text-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2">Ver Sitio Web</h2>
          <p className="text-blue-100">
            Visitar el sitio público en una nueva pestaña
          </p>
        </a>
      </div>

      {/* Quick Stats */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Acceso Rápido</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link
            href="/admin/articles"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#48a537] hover:bg-green-50 transition-colors"
          >
            <div className="bg-green-100 text-[#48a537] p-2 rounded-lg mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Nuevo Artículo</span>
          </Link>

          <Link
            href="/admin/articles"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#48a537] hover:bg-green-50 transition-colors"
          >
            <div className="bg-blue-100 text-[#163660] p-2 rounded-lg mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Ver Artículos</span>
          </Link>

          <a
            href="/blog"
            target="_blank"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#48a537] hover:bg-green-50 transition-colors"
          >
            <div className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Vista Previa Blog</span>
          </a>

          <a
            href="/"
            target="_blank"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#48a537] hover:bg-green-50 transition-colors"
          >
            <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Ir a Inicio</span>
          </a>
        </div>
      </div>
    </div>
  );
}

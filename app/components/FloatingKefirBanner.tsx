"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingKefirBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya cerró el banner en esta sesión
    const bannerClosed = sessionStorage.getItem("kefirBannerClosed");
    if (bannerClosed === "true") {
      setIsClosed(true);
      return;
    }

    // Mostrar el banner después de 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsClosed(true);
      sessionStorage.setItem("kefirBannerClosed", "true");
    }, 300);
  };

  if (isClosed) return null;

  return (
    <div
      className={`hidden xl:block fixed right-6 bottom-6 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 rounded-2xl shadow-2xl max-w-sm overflow-hidden">
        {/* Botón de cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all group"
          aria-label="Cerrar banner"
        >
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Contenido del banner */}
        <div className="p-6 pt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-3xl shadow-lg animate-bounce">
              📥
            </div>
            <div>
              <div className="bg-yellow-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold inline-block mb-1">
                DESCARGA GRATIS
              </div>
              <h3 className="text-white font-bold text-lg">Kéfir Diary</h3>
            </div>
          </div>

          <p className="text-green-50 text-sm mb-5 leading-relaxed">
            Bitácora de fermentación + 5 recetas deliciosas con kéfir. ¡100% GRATIS!
          </p>

          <Link
            href="/recursos/kefir-diary"
            className="block w-full bg-yellow-400 text-green-900 text-center px-5 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Descargar Gratis →
          </Link>
        </div>

        {/* Decoración */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
      </div>
    </div>
  );
}

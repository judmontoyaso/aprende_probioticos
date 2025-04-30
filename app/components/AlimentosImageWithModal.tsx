'use client';

import { useState } from "react";
import Image from "next/image";
import OptimizedImage from "./OptimizedImage";

export default function AlimentosImageWithModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Manejar tecla Escape
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      {/* Imagen con evento de clic */}
      <div 
        className="relative w-full h-[300px] sm:h-[400px] cursor-pointer" 
        onClick={openModal}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <OptimizedImage 
          src="/images/alimentos-probioticos.png" 
          alt="Alimentos ricos en probióticos como yogur, kéfir, chucrut y kimchi"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200" />
      </div>
      
      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-full max-h-[90vh] w-auto h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
              aria-label="Cerrar modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src="/images/alimentos-probioticos.png"
              alt="Alimentos ricos en probióticos como yogur, kéfir, chucrut y kimchi"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
} 
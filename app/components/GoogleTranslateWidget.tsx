'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            layout: number;
            autoDisplay?: boolean;
          },
          elementId: string
        ) => void;
        Element: {
          InlineLayout: {
            SIMPLE: number;
            HORIZONTAL: number;
            VERTICAL: number;
          };
        };
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslateWidget() {
  useEffect(() => {
    // Función de inicialización de Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es', // Idioma original
          includedLanguages: 'en,pt,fr,de,it', // Idiomas disponibles
          layout: window.google.translate.Element.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Cargar el script de Google Translate
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="google-translate-container">
      <div id="google_translate_element"></div>
      
      <style jsx global>{`
        /* Estilos para mejorar la apariencia del widget */
        .goog-te-banner-frame {
          display: none !important;
        }
        
        body {
          top: 0 !important;
        }
        
        #google_translate_element {
          display: inline-block;
        }
        
        .goog-te-gadget {
          font-family: inherit !important;
          font-size: 14px !important;
        }
        
        .goog-te-gadget-simple {
          background-color: transparent !important;
          border: 1px solid #e5e7eb !important;
          padding: 8px 12px !important;
          border-radius: 8px !important;
          font-size: 14px !important;
          transition: all 0.2s ease !important;
        }
        
        .goog-te-gadget-simple:hover {
          border-color: #3b82f6 !important;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
        }
        
        .goog-te-gadget-simple .goog-te-menu-value {
          color: #374151 !important;
        }
        
        .goog-te-gadget-simple .goog-te-menu-value span {
          color: #3b82f6 !important;
          font-weight: 500 !important;
        }
        
        .goog-te-gadget-icon {
          display: none !important;
        }
        
        /* Ocultar el frame flotante de Google */
        .skiptranslate iframe {
          visibility: hidden !important;
          height: 0 !important;
        }
        
        /* Mobile responsive */
        @media (max-width: 640px) {
          .goog-te-gadget-simple {
            font-size: 12px !important;
            padding: 6px 10px !important;
          }
        }
      `}</style>
    </div>
  );
}

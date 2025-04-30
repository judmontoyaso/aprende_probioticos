'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Reemplazar con tu ID de Google Analytics
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; 

export default function Analytics() {
  useEffect(() => {
    // Comprobar si el usuario ha dado su consentimiento para las cookies
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted' && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
            cookie_domain: 'probioticosparatodos.com'
          });
          // Configuración por defecto: no almacenar cookies hasta que el usuario acepte
          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });
        `}
      </Script>
    </>
  );
} 
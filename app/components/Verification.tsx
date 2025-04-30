import React from 'react';
import Head from 'next/head';

interface VerificationProps {
  // Añadir IDs de verificación según sea necesario
  googleSiteVerification?: string;
  bingSiteVerification?: string;
  yandexVerification?: string;
}

export default function Verification({
  googleSiteVerification = "",
  bingSiteVerification = "",
  yandexVerification = "",
}: VerificationProps) {
  return (
    <>
      {googleSiteVerification && (
        <meta 
          name="google-site-verification" 
          content={googleSiteVerification} 
        />
      )}
      
      {bingSiteVerification && (
        <meta 
          name="msvalidate.01" 
          content={bingSiteVerification} 
        />
      )}
      
      {yandexVerification && (
        <meta 
          name="yandex-verification" 
          content={yandexVerification} 
        />
      )}
    </>
  );
} 
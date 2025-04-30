import React from 'react';

interface VerificationProps {
  googleSiteVerification?: string;
  bingSiteVerification?: string;
  yandexVerification?: string;
  baiduVerification?: string;
}

export default function Verification({
  googleSiteVerification,
  bingSiteVerification,
  yandexVerification,
  baiduVerification
}: VerificationProps) {
  return (
    <>
      {googleSiteVerification && (
        <meta name="google-site-verification" content={googleSiteVerification} />
      )}
      
      {bingSiteVerification && (
        <meta name="msvalidate.01" content={bingSiteVerification} />
      )}
      
      {yandexVerification && (
        <meta name="yandex-verification" content={yandexVerification} />
      )}
      
      {baiduVerification && (
        <meta name="baidu-site-verification" content={baiduVerification} />
      )}
    </>
  );
} 
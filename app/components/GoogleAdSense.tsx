'use client';

import Script from 'next/script';

const GoogleAdSense = () => {
  return (
    <Script
      id="adsbygoogle-init"
      strategy="afterInteractive"
      async
      crossOrigin="anonymous"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4689214255850199"
    />
  );
};

export default GoogleAdSense; 
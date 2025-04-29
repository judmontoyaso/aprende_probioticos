'use client';

import React, { useEffect, useRef } from 'react';

const HeadScripts = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      const scriptHtml = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4689214255850199"
     crossorigin="anonymous"></script>`;
      
      // Create a range
      const range = document.createRange();
      // Set context to our container
      range.selectNode(containerRef.current);
      // Create fragment with exact script HTML
      const fragment = range.createContextualFragment(scriptHtml);
      
      // Clear container and append fragment
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(fragment);
    }
  }, []);

  return <div ref={containerRef} style={{ display: 'none' }} />;
};

export default HeadScripts; 
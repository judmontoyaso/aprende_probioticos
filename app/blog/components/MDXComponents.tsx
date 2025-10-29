import React from 'react';
import Image from 'next/image';

// Componente para TL;DR
export const TldrBox = ({ children }: { children: React.ReactNode }) => (
  <div className="my-10 bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 rounded-r-2xl p-8 md:p-10 shadow-lg">
    <div className="flex items-start gap-5">
      <div className="flex-shrink-0 bg-yellow-500 text-white p-3 rounded-lg">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="flex-1 text-gray-800 leading-relaxed text-base md:text-lg space-y-3">
        {children}
      </div>
    </div>
  </div>
);

// Componente para FAQ
export const FAQ = ({ children }: { children: React.ReactNode }) => (
  <section className="my-16">
    <div className="flex items-center mb-10">
      <div className="flex-grow border-t-2 border-gray-300"></div>
      <h2 className="px-6 text-3xl md:text-4xl font-bold text-[#163660]">Preguntas Frecuentes</h2>
      <div className="flex-grow border-t-2 border-gray-300"></div>
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </section>
);

// Componente para cada pregunta FAQ
export const FAQItem = ({ question, children }: { question: string; children: React.ReactNode }) => (
  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-7 shadow-md border-l-4 border-[#4071b4] hover:shadow-lg transition-shadow">
    <div className="flex items-start mb-4 gap-4">
      <div className="flex-shrink-0 bg-[#4071b4] text-white p-2.5 rounded-full">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[#163660] flex-1">{question}</h3>
    </div>
    <div className="pl-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-3">
      {children}
    </div>
  </div>
);

// Componente para referencias
export const References = ({ children }: { children: React.ReactNode }) => (
  <section className="my-16">
    <div className="flex items-center mb-10">
      <div className="flex-grow border-t-2 border-gray-300"></div>
      <h2 className="px-6 text-3xl md:text-4xl font-bold text-[#163660]">Referencias</h2>
      <div className="flex-grow border-t-2 border-gray-300"></div>
    </div>
    <div className="space-y-4 text-sm md:text-base text-gray-700">
      {children}
    </div>
  </section>
);

// Componente para cada referencia
interface ReferenceProps {
  number: number;
  authors?: string;
  year?: string;
  title?: string;
  journal?: string;
  doi?: string;
  children?: React.ReactNode;
}

export const Reference = ({ number, authors, year, title, journal, doi, children }: ReferenceProps) => {
  // Si hay children, usar ese formato simple
  if (children) {
    return (
      <div className="pl-5 border-l-2 border-[#48a537] hover:bg-gray-50 transition-colors p-3 rounded-r">
        <span className="inline-flex items-center justify-center w-8 h-8 bg-[#48a537] text-white rounded-full text-sm font-bold mr-3">
          {number}
        </span>
        <span className="text-gray-700">{children}</span>
      </div>
    );
  }

  // Formato estructurado con props
  return (
    <div className="pl-5 border-l-2 border-[#48a537] hover:bg-gray-50 transition-colors p-3 rounded-r">
      <span className="inline-flex items-center justify-center w-8 h-8 bg-[#48a537] text-white rounded-full text-sm font-bold mr-3">
        {number}
      </span>
      <span className="text-gray-700">
        {authors && <span className="font-semibold">{authors}</span>}
        {year && <span> ({year}). </span>}
        {title && <span className="italic">{title}. </span>}
        {journal && <span>{journal}. </span>}
        {doi && (
          <a 
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4071b4] hover:text-[#275b9e] hover:underline font-medium"
          >
            DOI: {doi} ↗
          </a>
        )}
      </span>
    </div>
  );
};

// Sobrescribir los componentes H2, H3, H4
export const H2 = ({ children }: { children: React.ReactNode }) => (
  <div className="section-header mt-14 mb-8">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#163660] pb-5 border-b-4 border-[#48a537] flex items-center gap-4">
      <span className="w-2 h-12 bg-[#48a537] rounded"></span>
      {children}
    </h2>
  </div>
);

export const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#163660] mb-5 mt-10 flex items-center gap-3">
    <svg className="w-7 h-7 text-[#48a537] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    {children}
  </h3>
);

export const H4 = ({ number, children }: { number?: number; children: React.ReactNode }) => (
  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#163660] mb-5 mt-8 flex items-start gap-3">
    {number && (
      <span className="inline-flex items-center justify-center w-9 h-9 bg-[#48a537] text-white rounded-full text-lg font-bold flex-shrink-0">
        {number}
      </span>
    )}
    <span>{children}</span>
  </h4>
);

// Componentes para listas
export const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="space-y-4 my-8">
    {children}
  </ul>
);

export const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <svg className="w-6 h-6 text-[#48a537] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <span className="text-gray-700 leading-relaxed text-base md:text-lg flex-1">{children}</span>
  </li>
);

// Componente para blockquotes (evidencia científica)
export const Blockquote = ({ type = 'info', children }: { type?: 'info' | 'evidence' | 'recommendation'; children: React.ReactNode }) => {
  const styles = {
    info: 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500',
    evidence: 'bg-white border-2 border-[#48a537]',
    recommendation: 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-[#48a537]',
  };

  return (
    <blockquote className={`${styles[type]} p-8 my-8 rounded-r-xl shadow-md`}>
      <div className="text-gray-800 leading-relaxed text-base md:text-lg space-y-3">
        {children}
      </div>
    </blockquote>
  );
};

// Componente para párrafos
export const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
    {children}
  </p>
);

// Componente para tablas
export const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="my-10 overflow-x-auto rounded-xl shadow-lg border-2 border-gray-200">
    <table className="min-w-full divide-y divide-gray-300">
      {children}
    </table>
  </div>
);

export const THead = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-gradient-to-r from-[#163660] to-[#275b9e]">
    {children}
  </thead>
);

export const TBody = ({ children }: { children: React.ReactNode }) => (
  <tbody className="bg-white divide-y divide-gray-200">
    {children}
  </tbody>
);

export const TR = ({ children }: { children: React.ReactNode }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    {children}
  </tr>
);

export const TH = ({ children }: { children: React.ReactNode }) => (
  <th className="px-6 py-4 text-left text-sm md:text-base font-bold text-white uppercase tracking-wider">
    {children}
  </th>
);

export const TD = ({ children }: { children: React.ReactNode }) => (
  <td className="px-6 py-4 text-sm md:text-base text-gray-700 leading-relaxed">
    {children}
  </td>
);

// Componente para imágenes dentro del artículo
export const ArticleImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="my-10">
    <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-xl border-4 border-gray-100">
      <Image 
        src={src} 
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
    </div>
    {caption && (
      <figcaption className="mt-3 text-center text-sm md:text-base text-gray-600 italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

// Exportar todos los componentes
export const mdxComponents = {
  TldrBox,
  FAQ,
  FAQItem,
  References,
  Reference,
  Blockquote,
  Table,
  ArticleImage,
  h2: H2,
  h3: H3,
  h4: H4,
  ul: UL,
  li: LI,
  blockquote: Blockquote,
  p: P,
  table: Table,
  thead: THead,
  tbody: TBody,
  tr: TR,
  th: TH,
  td: TD,
  H4WithNumber: H4,
};

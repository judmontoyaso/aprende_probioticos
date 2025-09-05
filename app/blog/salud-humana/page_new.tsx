import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Probióticos en la salud humana: de la microbiota a la dieta | Blog',
  description: 'Análisis integral del papel de los probióticos en la salud digestiva, inmunológica y general del ser humano. Información científica actualizada sobre microbioma y probióticos.',
  keywords: 'probióticos, microbioma, salud humana, sistema inmunológico, salud digestiva, intestino, microbiota intestinal',
  openGraph: {
    title: 'Probióticos en la salud humana: de la microbiota a la dieta',
    description: 'Análisis integral del papel de los probióticos en la salud digestiva, inmunológica y general del ser humano.',
    images: ['/images/og-salud-humana.jpg'],
    type: 'article',
    publishedTime: '2023-05-10T00:00:00Z',
    authors: ['Probióticos Para Todos'],
  },
  alternates: {
    canonical: 'https://probioticosparatodos.com/blog/salud-humana',
  },
};

export default function SaludHumanaArticulo() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { name: 'Inicio', href: '/' },
            { name: 'Blog', href: '/blog' },
            { name: 'Salud Humana', href: '/blog/salud-humana' },
          ]}
        />

        <div className="flex flex-col lg:flex-row lg:gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <article className="bg-white">
              {/* Header */}
              <header className="mb-8">
                <div className="inline-block px-3 py-1 bg-[#48a537] text-white text-sm font-medium rounded-md mb-4">
                  Artículo Científico
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#163660] leading-tight">
                  Probióticos en la salud humana: de la microbiota a la dieta
                </h1>
                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <time dateTime="2023-05-10">10 de mayo, 2023</time>
                  <span className="mx-2">•</span>
                  <span>Por: Equipo Científico de Probióticos Para Todos</span>
                  <span className="mx-2">•</span>
                  <span>15 min de lectura</span>
                </div>
                <div className="w-full h-[400px] relative mb-8 rounded-lg overflow-hidden">
                  <Image
                    src="/images/microbiota-salud.png"
                    alt="Microbiota intestinal humana y su relación con la salud"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </header>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="lead text-xl text-[#163660]">
                  Los probióticos han emergido como uno de los campos más prometedores en la medicina moderna, 
                  revolucionando nuestra comprensión de la relación entre microbioma intestinal y salud humana. 
                  Este análisis integral explora cómo estos microorganismos beneficiosos impactan múltiples 
                  sistemas corporales y ofrecen nuevas perspectivas terapéuticas.
                </p>
                
                <p className="text-gray-700 mt-6">
                  Desde la modulación del sistema inmunológico hasta la influencia en la salud mental, 
                  los probióticos están redefiniendo los paradigmas de la medicina preventiva y el tratamiento 
                  de diversas condiciones de salud.
                </p>
              </div>

              {/* Section 1: Definición */}
              <section id="definicion" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#163660]">Definición de probióticos según la FAO/OMS</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700">
                    Según la definición oficial de la FAO/OMS, los probióticos son "microorganismos vivos que, 
                    cuando se administran en cantidades adecuadas, confieren un beneficio para la salud del huésped". 
                    Esta definición, establecida en 2001 y refinada en años posteriores, establece tres criterios 
                    fundamentales que deben cumplir estos microorganismos.
                  </p>
                </div>
              </section>

            </article>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-6">
              <div className="bg-[#eef8f2] p-4 sm:p-6 rounded-lg shadow-sm border border-[#c4ccd7] mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#163660]">¿Sabías que...?</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#48a537] mr-2">✓</span>
                    El cuerpo humano contiene aproximadamente 100 billones de microorganismos.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#48a537] mr-2">✓</span>
                    El 70% del sistema inmunológico se encuentra en el intestino.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#48a537] mr-2">✓</span>
                    Existen más de 1000 especies bacterianas en nuestro microbioma.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

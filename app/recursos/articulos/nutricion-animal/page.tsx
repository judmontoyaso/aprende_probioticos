import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nutrición animal con probióticos: guía completa | Artículos',
  description: 'Análisis integral del uso de probióticos en mascotas y ganadería para optimizar la salud y el rendimiento animal. Protocolos y recomendaciones específicas.',
  keywords: 'probióticos animales, mascotas, ganadería, bovinos, avícolas, porcinos, lechones, microbiota animal',
  openGraph: {
    title: 'Nutrición animal con probióticos: guía completa',
    description: 'Análisis integral del uso de probióticos en mascotas y ganadería para optimizar la salud y el rendimiento animal.',
    images: ['/images/og-nutricion-animal.jpg'],
    type: 'article',
    publishedTime: '2023-06-22T00:00:00Z',
    authors: ['Probióticos Para Todos'],
  },
};

export default function NutricionAnimalArticulo() {
  return (
    <div className="article-container">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[40vh] md:h-[50vh] lg:h-[60vh] w-full relative">
          <Image
            src="/images/nutricion-animal.png"
            alt="Animales saludables con alimentación probiótica"
            fill
            priority
            className="object-cover brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          <div className="absolute bottom-0 w-full p-8 md:p-12 text-white">
            <div className="container mx-auto">
              <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-md mb-4">
                Artículo Completo
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Nutrición animal con probióticos: guía completa
              </h1>
              <div className="flex items-center text-sm md:text-base mb-4">
                <span className="mr-4">22 de junio, 2023</span>
                <span className="mr-4">|</span>
                <span>Por: Equipo Veterinario de Probióticos Para Todos</span>
              </div>
              <p className="text-lg md:text-xl max-w-3xl">
                Un análisis integral del uso de probióticos en mascotas y ganadería para optimizar la salud 
                y el rendimiento animal, con protocolos específicos para diferentes especies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            {/* Table of Contents - Desktop */}
            <div className="hidden md:block mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Contenido del artículo</h2>
              <nav aria-label="Tabla de contenidos">
                <ol className="list-decimal list-inside space-y-1 pl-4">
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#introduccion">Introducción: microbiota y salud animal</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#beneficios">Beneficios de los probióticos en animales</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#mascotas">Probióticos para mascotas: perros y gatos</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#ganaderia">Probióticos en ganadería bovina</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#porcinos">Aplicaciones en porcinos</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#avicolas">Probióticos en aves de corral</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#formulaciones">Tipos de formulaciones probióticas para animales</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#conclusion">Conclusiones y recomendaciones</a>
                  </li>
                </ol>
              </nav>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-gray-600">
                La salud gastrointestinal es tan crucial para los animales como lo es para los seres humanos. 
                La microbiota intestinal representa una compleja comunidad de microorganismos que juega un papel 
                fundamental en la digestión, inmunidad y bienestar general de todas las especies animales.
              </p>
              <p>
                Este artículo proporciona una guía detallada sobre el uso de probióticos en diferentes especies 
                animales, desde mascotas domésticas hasta ganado de producción. Analizaremos la evidencia científica 
                actualizada, los beneficios específicos para cada especie y las mejores prácticas para su administración.
              </p>
            </div>

            {/* Section 1: Introduction */}
            <section id="introduccion" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Introducción: microbiota y salud animal</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Al igual que en humanos, el tracto gastrointestinal de los animales alberga un ecosistema microbiano 
                  complejo que incluye bacterias, hongos, virus y protozoos. Esta microbiota cumple funciones esenciales:
                </p>
                <ul>
                  <li>Participa en la digestión y fermentación de nutrientes</li>
                  <li>Produce vitaminas esenciales y ácidos grasos de cadena corta</li>
                  <li>Previene la colonización por patógenos mediante exclusión competitiva</li>
                  <li>Modula el sistema inmunológico local y sistémico</li>
                  <li>Mantiene la integridad de la barrera intestinal</li>
                </ul>
                <p>
                  Los desequilibrios en la microbiota (disbiosis) pueden provocar diversos problemas de salud, 
                  desde trastornos digestivos hasta afecciones sistémicas. Estos desequilibrios son particularmente comunes en:
                </p>
                <ul>
                  <li>Animales jóvenes con sistemas inmunológicos inmaduros</li>
                  <li>Periodos de estrés (transporte, cambios ambientales, destete)</li>
                  <li>Tratamientos con antibióticos</li>
                  <li>Cambios bruscos en la alimentación</li>
                  <li>Condiciones de alta densidad poblacional (granjas intensivas)</li>
                </ul>
                <p>
                  Los probióticos han surgido como una herramienta valiosa para mantener y restaurar el equilibrio 
                  de la microbiota en diversas especies animales, con aplicaciones que van desde la prevención de 
                  enfermedades hasta la mejora del rendimiento productivo.
                </p>
              </div>
            </section>

            {/* Section 2: Benefits */}
            <section id="beneficios" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Beneficios de los probióticos en animales</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  La administración de probióticos en animales ofrece numerosos beneficios respaldados por estudios científicos:
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4 border-b pb-2">Beneficios digestivos</h3>
                <ul>
                  <li>Prevención y reducción de diarreas</li>
                  <li>Mejora de la digestibilidad y absorción de nutrientes</li>
                  <li>Reducción de la incidencia de trastornos gastrointestinales</li>
                  <li>Eliminación de patógenos intestinales</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4 border-b pb-2">Beneficios inmunológicos</h3>
                <ul>
                  <li>Fortalecimiento de la inmunidad local intestinal</li>
                  <li>Mejora de la respuesta a vacunas</li>
                  <li>Reducción de infecciones respiratorias y gastrointestinales</li>
                  <li>Modulación de la respuesta inflamatoria</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4 border-b pb-2">Beneficios productivos</h3>
                <ul>
                  <li>Aumento de la ganancia de peso diaria</li>
                  <li>Mejora de la conversión alimenticia</li>
                  <li>Incremento en la producción láctea</li>
                  <li>Mejora de la calidad de productos como huevos y leche</li>
                  <li>Reducción de la mortalidad, especialmente en animales jóvenes</li>
                </ul>
                
                <div className="bg-gray-50 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">¿Sabías que?</h3>
                  <p>
                    Una microbiota intestinal equilibrada genera barreras naturales contra patógenos, produce 
                    vitaminas esenciales y mejora significativamente la utilización de los alimentos en todas 
                    las especies animales, resultando en animales más sanos y productivos.
                  </p>
                </div>
              </div>
            </section>

            {/* We'll continue with more sections in future edits */}
            <div className="text-center text-gray-500 italic mt-12">
              [Este artículo continúa con secciones específicas sobre probióticos para mascotas, ganadería bovina,
              aplicaciones en porcinos, aves de corral, formulaciones y conclusiones.]
            </div>

            {/* References */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Referencias científicas</h2>
              <div className="prose prose-sm max-w-none bg-gray-50 p-6 rounded-lg">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Weese, J. S., & Anderson, M. E. (2002). Preliminary evaluation of Lactobacillus rhamnosus strain GG, a potential probiotic in dogs. <em>Canadian Veterinary Journal</em>, 43(10), 771-774.</li>
                  <li>Bajagai, Y. S., Klieve, A. V., Dart, P. J., & Bryden, W. L. (2016). Probiotics in animal nutrition: production, impact and regulation. <em>FAO Animal Production and Health Paper</em>, 179.</li>
                  <li>Uyeno, Y., Shigemori, S., & Shimosato, T. (2015). Effect of Probiotics/Prebiotics on Cattle Health and Productivity. <em>Microbes and Environments</em>, 30(2), 126-132.</li>
                  <li>Krehbiel, C. R., Rust, S. R., Zhang, G., & Gilliland, S. E. (2003). Bacterial direct-fed microbials in ruminant diets: Performance response and mode of action. <em>Journal of Animal Science</em>, 81(14 suppl 2), E120-E132.</li>
                  <li>Timmerman, H. M., Koning, C. J., Mulder, L., Rombouts, F. M., & Beynen, A. C. (2004). Monostrain, multistrain and multispecies probiotics—A comparison of functionality and efficacy. <em>International Journal of Food Microbiology</em>, 96(3), 219-233.</li>
                </ol>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            {/* Table of Contents - Mobile */}
            <div className="md:hidden p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Contenido del artículo</h2>
              <nav aria-label="Tabla de contenidos móvil">
                <ol className="list-decimal list-inside space-y-1 pl-4">
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#introduccion">Microbiota y salud animal</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#beneficios">Beneficios en animales</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#mascotas">Probióticos para mascotas</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#ganaderia">Ganadería bovina</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#porcinos">Aplicaciones en porcinos</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#avicolas">Aves de corral</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#formulaciones">Formulaciones</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#conclusion">Conclusiones</a>
                  </li>
                </ol>
              </nav>
            </div>
            
            {/* Related Content */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Artículos relacionados</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/recursos/articulos/salud-humana" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                    <div className="h-14 w-14 flex-shrink-0 rounded overflow-hidden mr-3">
                      <Image 
                        src="/images/microbiota-salud.png" 
                        alt="Microbiota intestinal humana" 
                        width={56} 
                        height={56} 
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-green-600 font-medium">Probióticos en la salud humana</h4>
                      <p className="text-gray-600 text-sm">De la microbiota a la dieta: análisis integral</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/recursos/articulos/agricultura-sostenible" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                    <div className="h-14 w-14 flex-shrink-0 rounded overflow-hidden mr-3">
                      <Image 
                        src="/images/agricultura-probioticos.png" 
                        alt="Agricultura con probióticos" 
                        width={56} 
                        height={56} 
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-green-600 font-medium">Agricultura sostenible con probióticos</h4>
                      <p className="text-gray-600 text-sm">Biofertilizantes y mejoradores de suelo basados en microorganismos</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/tipos/bacillus" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                    <div className="h-14 w-14 flex-shrink-0 rounded overflow-hidden mr-3">
                      <Image 
                        src="/images/bacillus.png" 
                        alt="Bacillus subtilis" 
                        width={56} 
                        height={56} 
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-green-600 font-medium">Bacillus: Probióticos para animales</h4>
                      <p className="text-gray-600 text-sm">El género Bacillus y sus aplicaciones en nutrición animal</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* CTA - Download Guides */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-xl font-bold mb-4">Guías veterinarias gratuitas</h3>
              <p className="text-gray-700 mb-4">Descarga nuestras guías especializadas sobre probióticos para animales:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Probióticos para perros y gatos: dosis y cepas</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Guía de aditivos probióticos para ganado</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 transition-colors">
                Descargar guías gratuitas
              </button>
            </div>
            
            {/* AdSense In-Article Ad */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="ad-container">
                <ins className="adsbygoogle"
                    style={{ display: 'block', textAlign: 'center' }}
                    data-ad-layout="in-article"
                    data-ad-format="fluid"
                    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                    data-ad-slot="XXXXXXXXXX"></ins>
                <script>
                    {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                </script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
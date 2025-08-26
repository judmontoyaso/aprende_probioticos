import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Probióticos en la salud humana: de la microbiota a la dieta | Artículos',
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
};

export default function SaludHumanaArticulo() {
  return (
    <div className="article-container">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[40vh] md:h-[50vh] lg:h-[60vh] w-full relative">
          <Image
            src="/images/microbiota-salud.png"
            alt="Microbiota intestinal humana"
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
                Probióticos en la salud humana: de la microbiota a la dieta
              </h1>
              <div className="flex items-center text-sm md:text-base mb-4">
                <span className="mr-4">10 de mayo, 2023</span>
                <span className="mr-4">|</span>
                <span>Por: Equipo Científico de Probióticos Para Todos</span>
              </div>
              <p className="text-lg md:text-xl max-w-3xl">
                Un análisis integral del papel fundamental de los probióticos en la salud digestiva, 
                inmunológica y general del ser humano.
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
                    <a href="#definicion">Definición de probióticos según la FAO/OMS</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#microbioma">El microbioma humano: nuestro ecosistema interior</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#digestiva">Probióticos y salud digestiva</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#inmune">Sistema inmunológico y probióticos</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#salud-mental">El eje intestino-cerebro: probióticos y salud mental</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#fuentes">Fuentes de probióticos en la dieta</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#suplementacion">Suplementación con probióticos: indicaciones y precauciones</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#futuro">El futuro de los probióticos en la medicina personalizada</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#conclusion">Conclusiones</a>
                  </li>
                </ol>
              </nav>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-gray-600">
                La relación entre los microorganismos y los seres humanos ha evolucionado durante millones de años, 
                creando una simbiosis compleja que apenas estamos comenzando a comprender en toda su magnitud. 
                Los probióticos, como parte integral de esta relación, representan una frontera fascinante 
                en la medicina moderna y la nutrición.
              </p>
              <p>
                Este artículo explora en profundidad el papel de los probióticos en la salud humana, desde sus 
                definiciones científicas hasta las aplicaciones prácticas en diversas condiciones de salud. 
                Analizaremos la evidencia científica actual, las recomendaciones clínicas y las perspectivas 
                futuras de estos microorganismos beneficiosos.
              </p>
            </div>

            {/* Section 1: Definition */}
            <section id="definicion" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Definición de probióticos según la FAO/OMS</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  De acuerdo con la definición conjunta de la Organización de las Naciones Unidas para la Alimentación y 
                  la Agricultura (FAO) y la Organización Mundial de la Salud (OMS), los probióticos son:
                </p>
                <blockquote className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  &ldquo;Microorganismos vivos que, cuando se administran en cantidades adecuadas, confieren un beneficio 
                  a la salud del huésped.&rdquo;
                </blockquote>
                <p>
                  Esta definición, establecida en 2001 y confirmada en 2014, destaca tres componentes esenciales:
                </p>
                <ul>
                  <li><strong>Microorganismos vivos:</strong> Deben estar vivos en el momento de administración para ejercer su efecto.</li>
                  <li><strong>Cantidad adecuada:</strong> La dosis es crítica para obtener el efecto deseado.</li>
                  <li><strong>Beneficio para la salud:</strong> Debe existir evidencia científica que respalde sus efectos positivos.</li>
                </ul>
                <p>
                  No todos los microorganismos pueden considerarse probióticos. Para que una cepa microbiana reciba esta 
                  designación, debe cumplir con criterios específicos:
                </p>
                <ul>
                  <li>Estar completamente caracterizada a nivel de cepa</li>
                  <li>Sobrevivir al tránsito gastrointestinal</li>
                  <li>Adherirse a la mucosa intestinal</li>
                  <li>Producir sustancias antimicrobianas</li>
                  <li>Demostrar eficacia en estudios clínicos controlados</li>
                  <li>Ser segura para su uso en humanos</li>
                </ul>
              </div>
            </section>

            {/* Section 2: Microbiome */}
            <section id="microbioma" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">El microbioma humano: nuestro ecosistema interior</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  El cuerpo humano alberga aproximadamente 100 billones de microorganismos, superando en número a 
                  nuestras propias células. Este conjunto de bacterias, virus, hongos y arqueas constituye el microbioma 
                  humano, un ecosistema dinámico que varía según la región corporal.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">Datos fascinantes sobre el microbioma humano</h3>
                  <ul className="space-y-2">
                    <li>Contiene más de 1,000 especies diferentes de bacterias</li>
                    <li>El intestino alberga la mayor densidad de microorganismos</li>
                    <li>El genoma microbiano colectivo (microbioma) contiene 100 veces más genes que nuestro genoma humano</li>
                    <li>Cada persona tiene una composición única, similar a una &ldquo;huella dactilar microbiana&rdquo;</li>
                    <li>Se establece principalmente durante los primeros 1,000 días de vida</li>
                  </ul>
                </div>
                <p>
                  El microbioma intestinal, en particular, desempeña funciones esenciales:
                </p>
                <ul>
                  <li><strong>Metabólicas:</strong> Fermentación de fibras no digeribles, producción de vitaminas (K, B12), absorción de minerales.</li>
                  <li><strong>Protectoras:</strong> Competencia con patógenos, fortalecimiento de la barrera intestinal, producción de antimicrobianos naturales.</li>
                  <li><strong>Estructurales:</strong> Desarrollo y maduración del sistema inmunitario intestinal, producción de mucina.</li>
                  <li><strong>Inmunológicas:</strong> Modulación del sistema inmune, tolerancia a antígenos alimentarios, prevención de inflamación crónica.</li>
                </ul>
                <p>
                  La disbiosis, o desequilibrio en la composición y función del microbioma, se ha asociado con 
                  numerosas condiciones patológicas, desde enfermedades intestinales hasta trastornos metabólicos, 
                  neurológicos y psiquiátricos. Aquí es donde los probióticos pueden desempeñar un papel terapéutico, 
                  ayudando a restaurar el equilibrio microbiano alterado.
                </p>
              </div>
            </section>

            {/* We'll continue with more sections in future edits */}
            <div className="text-center text-gray-500 italic mt-12">
              [Este artículo continúa con secciones sobre salud digestiva, sistema inmunológico, eje intestino-cerebro,
              fuentes alimentarias, suplementación, investigación futura y conclusiones.]
            </div>

            {/* References */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Referencias científicas</h2>
              <div className="prose prose-sm max-w-none bg-gray-50 p-6 rounded-lg">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Food and Agriculture Organization of the United Nations; World Health Organization. (2001). <em>Health and nutritional properties of probiotics in food including powder milk with live lactic acid bacteria</em>. FAO Food and Nutrition Paper.</li>
                  <li>Hill, C., Guarner, F., Reid, G., Gibson, G. R., Merenstein, D. J., Pot, B., Morelli, L., Canani, R. B., Flint, H. J., Salminen, S., Calder, P. C., & Sanders, M. E. (2014). Expert consensus document: The International Scientific Association for Probiotics and Prebiotics consensus statement on the scope and appropriate use of the term probiotic. <em>Nature Reviews Gastroenterology & Hepatology</em>, 11(8), 506–514.</li>
                  <li>Lloyd-Price, J., Abu-Ali, G., & Huttenhower, C. (2016). The healthy human microbiome. <em>Genome Medicine</em>, 8(1), 51.</li>
                  <li>McFarland, L. V. (2014). Use of probiotics to correct dysbiosis of normal microbiota following disease or disruptive events: a systematic review. <em>BMJ Open</em>, 4(8), e005047.</li>
                  <li>Ritchie, M. L., & Romanuk, T. N. (2012). A meta-analysis of probiotic efficacy for gastrointestinal diseases. <em>PLoS One</em>, 7(4), e34938.</li>
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
                    <a href="#definicion">Definición de probióticos según la FAO/OMS</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#microbioma">El microbioma humano</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#digestiva">Salud digestiva</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#inmune">Sistema inmunológico</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#salud-mental">Eje intestino-cerebro</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#fuentes">Fuentes dietéticas</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#suplementacion">Suplementación</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#futuro">Futuro de los probióticos</a>
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
                  <Link href="/condiciones/digestiva" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                    <div className="h-14 w-14 flex-shrink-0 rounded overflow-hidden mr-3">
                      <Image 
                        src="/images/beneficios-digestivos.png" 
                        alt="Salud digestiva" 
                        width={56} 
                        height={56} 
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-green-600 font-medium">Probióticos para la Salud Digestiva</h4>
                      <p className="text-gray-600 text-sm">Beneficios específicos para diferentes trastornos digestivos</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/tipos/lactobacillus" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                    <div className="h-14 w-14 flex-shrink-0 rounded overflow-hidden mr-3">
                      <Image 
                        src="/images/lactobacillus.png" 
                        alt="Lactobacillus" 
                        width={56} 
                        height={56} 
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-green-600 font-medium">Lactobacillus: El Probiótico Versátil</h4>
                      <p className="text-gray-600 text-sm">Características y beneficios de este género probiótico clave</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/recursos/articulos/nutricion-animal" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                    <div className="h-14 w-14 flex-shrink-0 rounded overflow-hidden mr-3">
                      <Image 
                        src="/images/nutricion-animal.png" 
                        alt="Nutrición animal" 
                        width={56} 
                        height={56} 
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-green-600 font-medium">Nutrición Animal con Probióticos</h4>
                      <p className="text-gray-600 text-sm">Guía completa sobre probióticos para mascotas y ganadería</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* CTA - Download Guides */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-xl font-bold mb-4">Guías descargables gratuitas</h3>
              <p className="text-gray-700 mb-4">Accede a nuestras guías sobre probióticos y salud intestinal:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Guía de cepas probióticas por condición</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>El microbioma en cada etapa de la vida</span>
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
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Probióticos para el cabello y la piel: ¿La belleza comienza en el intestino?",
  description:
    "Descubre cómo los probióticos pueden mejorar la salud de tu piel y cabello desde el interior. Conoce la ciencia detrás de la conexión intestino-piel y los beneficios de los probióticos para la belleza.",
  keywords: [
    "probióticos para la piel",
    "probióticos para el cabello",
    "eje intestino-piel",
    "microbiota cutánea",
    "acné y probióticos",
    "dermatitis atópica",
    "rosácea",
    "belleza desde el intestino",
    "salud cutánea",
    "cabello saludable"
  ],
  openGraph: {
    title: "Probióticos para el cabello y la piel: ¿La belleza comienza en el intestino?",
    description:
      "Descubre cómo los probióticos pueden mejorar la salud de tu piel y cabello desde el interior.",
    type: "article",
    publishedTime: "2025-10-27T00:00:00.000Z",
    authors: ["Equipo de Probióticos"],
    url: "https://www.probioticos.info/blog/probioticos-cabello-piel",
  },
  alternates: {
    canonical: "https://www.probioticos.info/blog/probioticos-cabello-piel",
  },
};

export default function ProbioticosCabelloPielPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Breadcrumbs />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Probióticos para el cabello y la piel: ¿La belleza comienza en el
            intestino?
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <time dateTime="2025-10-27">27 de octubre de 2025</time>
            <span className="mx-2">•</span>
            <span>Lectura de 12 min</span>
          </div>
        </header>

        {/* Introducción */}
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Durante años, hemos buscado la clave para una piel radiante y un
            cabello saludable en cremas, sérums y tratamientos tópicos. Sin
            embargo, la ciencia moderna está revelando que la verdadera belleza
            podría comenzar en un lugar inesperado: nuestro intestino.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            La conexión entre la salud intestinal y la apariencia de nuestra
            piel y cabello es cada vez más evidente. Los probióticos, esos
            microorganismos beneficiosos que habitan en nuestro tracto
            digestivo, no solo mejoran la digestión, sino que también pueden
            tener un impacto significativo en nuestra salud cutánea y capilar.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            En este artículo, exploraremos cómo los probióticos pueden
            transformar tu rutina de belleza desde adentro hacia afuera,
            respaldados por evidencia científica sólida.
          </p>
        </section>

        {/* El Eje Intestino-Piel */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            El eje intestino-piel: Una conexión revolucionaria
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Al igual que existe el eje intestino-cerebro, los investigadores han
            identificado un <strong>&quot;eje intestino-piel&quot;</strong>, una
            vía bidireccional de comunicación entre nuestra microbiota
            intestinal y la salud de nuestra piel.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Esta conexión funciona a través de varios mecanismos:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
            <li>
              <strong>Regulación inmunológica:</strong> El 70% de nuestro
              sistema inmunitario reside en el intestino. Una microbiota
              saludable ayuda a regular las respuestas inflamatorias que pueden
              manifestarse en la piel.
            </li>
            <li>
              <strong>Producción de metabolitos:</strong> Las bacterias
              intestinales producen compuestos como ácidos grasos de cadena
              corta que tienen efectos antiinflamatorios sistémicos.
            </li>
            <li>
              <strong>Barrera intestinal:</strong> Una microbiota equilibrada
              mantiene la integridad de la barrera intestinal, previniendo la
              &quot;permeabilidad intestinal&quot; que puede desencadenar
              inflamación cutánea.
            </li>
            <li>
              <strong>Absorción de nutrientes:</strong> Los probióticos mejoran
              la absorción de vitaminas y minerales esenciales para la piel y el
              cabello, como vitaminas B, biotina, zinc y hierro.
            </li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Dato interesante:</strong> Estudios han demostrado que las
              personas con afecciones cutáneas como acné, rosácea y dermatitis
              atópica suelen tener una microbiota intestinal alterada,
              conocida como disbiosis.
            </p>
          </div>
        </section>

        {/* Probióticos y la piel */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Probióticos y salud de la piel: Evidencia científica
          </h2>

          <div className="space-y-6">
            {/* Acné */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Acné: Más que un problema superficial
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                El acné es una de las afecciones cutáneas más comunes, y la
                investigación sugiere que los probióticos pueden ser un aliado
                valioso en su tratamiento:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Un estudio publicado en <em>Dermatology and Therapy</em>{" "}
                  (2020) encontró que la suplementación con{" "}
                  <em>Lactobacillus rhamnosus SP1</em> durante 12 semanas redujo
                  significativamente las lesiones inflamatorias del acné.
                </li>
                <li>
                  Investigaciones han demostrado que ciertas cepas probióticas
                  pueden inhibir el crecimiento de{" "}
                  <em>Cutibacterium acnes</em>, la bacteria asociada con el
                  acné.
                </li>
                <li>
                  Los probióticos ayudan a reducir la inflamación sistémica, un
                  factor clave en el desarrollo del acné.
                </li>
              </ul>
            </div>

            {/* Dermatitis Atópica */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Dermatitis atópica y eczema
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                La dermatitis atópica, también conocida como eczema, es una
                afección inflamatoria crónica de la piel que afecta tanto a
                niños como a adultos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Un metaanálisis publicado en <em>JAMA Pediatrics</em> (2016)
                  concluyó que los probióticos pueden reducir la incidencia de
                  eczema en lactantes de alto riesgo cuando se administran
                  durante el embarazo y la lactancia.
                </li>
                <li>
                  Cepas como <em>Lactobacillus rhamnosus GG</em> y{" "}
                  <em>Bifidobacterium lactis</em> han mostrado efectos
                  beneficiosos en la prevención y manejo del eczema.
                </li>
                <li>
                  Los probióticos pueden modular la respuesta inmunitaria
                  excesiva que caracteriza a esta condición.
                </li>
              </ul>
            </div>

            {/* Rosácea */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Rosácea: Calmando la inflamación
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                La rosácea es una afección inflamatoria crónica que causa
                enrojecimiento facial y, a veces, pústulas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Estudios han encontrado una correlación entre el sobrecrecimiento
                  bacteriano intestinal (SIBO) y la rosácea.
                </li>
                <li>
                  Un estudio observó que el tratamiento de SIBO con probióticos
                  y prebióticos mejoró significativamente los síntomas de la
                  rosácea en muchos pacientes.
                </li>
                <li>
                  Los probióticos pueden ayudar a reducir la inflamación y
                  mejorar la barrera cutánea en personas con rosácea.
                </li>
              </ul>
            </div>

            {/* Envejecimiento */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Envejecimiento de la piel y protección UV
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Los probióticos también pueden desempeñar un papel en la
                prevención del envejecimiento prematuro de la piel:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Investigaciones sugieren que ciertos probióticos pueden
                  proteger contra el daño UV al reducir el estrés oxidativo.
                </li>
                <li>
                  Estudios han demostrado que los probióticos pueden aumentar la
                  producción de colágeno y mejorar la hidratación de la piel.
                </li>
                <li>
                  La fermentación bacteriana produce péptidos bioactivos que
                  pueden tener efectos antienvejecimiento.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Probióticos y el cabello */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Probióticos y salud capilar: La conexión invisible
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aunque la investigación sobre probióticos y cabello es más limitada
            que en el caso de la piel, los estudios emergentes son prometedores:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Absorción de nutrientes esenciales
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Los probióticos mejoran la absorción de nutrientes cruciales
                para el crecimiento del cabello, como biotina (vitamina B7),
                hierro, zinc y vitaminas del complejo B. La deficiencia de estos
                nutrientes está directamente relacionada con la caída del
                cabello y la falta de brillo.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Reducción de la inflamación del cuero cabelludo
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La inflamación crónica puede dañar los folículos pilosos. Al
                regular la respuesta inmunitaria y reducir la inflamación
                sistémica, los probióticos pueden crear un ambiente más
                saludable para el crecimiento del cabello.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Producción de biotina
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Algunas cepas probióticas, especialmente{" "}
                <em>Lactobacillus plantarum</em> y{" "}
                <em>Bifidobacterium</em>, pueden producir biotina de forma
                natural en el intestino. La biotina es esencial para la salud
                del cabello, las uñas y la piel.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Equilibrio hormonal
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La microbiota intestinal juega un papel en el metabolismo de las
                hormonas, incluidas aquellas que afectan el crecimiento del
                cabello. Una microbiota equilibrada puede ayudar a regular los
                niveles hormonales que influyen en la caída del cabello.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nota importante:</strong> Si bien los probióticos pueden
              apoyar la salud capilar, no son una cura mágica para la calvicie
              genética o la alopecia areata. Sin embargo, pueden ser un
              complemento valioso en un enfoque integral para la salud del
              cabello.
            </p>
          </div>
        </section>

        {/* Cómo incorporar probióticos */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cómo incorporar probióticos para la piel y el cabello
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Alimentos fermentados
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            La forma más natural de obtener probióticos es a través de alimentos
            fermentados:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li>
              <strong>Yogur natural:</strong> Rico en <em>Lactobacillus</em> y{" "}
              <em>Bifidobacterium</em>
            </li>
            <li>
              <strong>Kéfir:</strong> Contiene una mayor diversidad de cepas
              probióticas que el yogur
            </li>
            <li>
              <strong>Chucrut y kimchi:</strong> Fuentes excelentes de{" "}
              <em>Lactobacillus plantarum</em>
            </li>
            <li>
              <strong>Kombucha:</strong> Bebida fermentada rica en probióticos y
              antioxidantes
            </li>
            <li>
              <strong>Miso y tempeh:</strong> Opciones fermentadas a base de
              soja
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Suplementos probióticos
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si decides tomar suplementos, considera lo siguiente:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li>
              Busca productos con al menos 10-20 mil millones de UFC (unidades
              formadoras de colonias)
            </li>
            <li>
              Elige formulaciones con múltiples cepas, especialmente{" "}
              <em>Lactobacillus rhamnosus</em>, <em>Lactobacillus acidophilus</em>,
              y <em>Bifidobacterium</em>
            </li>
            <li>
              Verifica que el producto esté refrigerado o tenga tecnología de
              liberación controlada
            </li>
            <li>Consulta con un profesional de la salud antes de comenzar</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Probióticos tópicos
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Además de los probióticos orales, existe un creciente mercado de
            productos tópicos que contienen probióticos vivos o extractos
            probióticos para aplicar directamente en la piel:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li>
              Cremas y sérums con probióticos pueden ayudar a equilibrar la
              microbiota cutánea
            </li>
            <li>
              Los productos con prebióticos (alimento para las bacterias
              beneficiosas) pueden apoyar la microbiota natural de la piel
            </li>
            <li>
              Los postbióticos (metabolitos producidos por probióticos) están
              ganando popularidad en productos de cuidado de la piel
            </li>
          </ul>
        </section>

        {/* Recomendaciones prácticas */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recomendaciones prácticas para maximizar los beneficios
          </h2>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                ✓ Combina probióticos con prebióticos
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Los prebióticos (fibra soluble) alimentan a las bacterias
                beneficiosas. Incluye alimentos como ajo, cebolla, plátanos,
                espárragos y avena en tu dieta.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                ✓ Sé consistente
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Los beneficios de los probióticos se acumulan con el tiempo. Es
                importante mantener un consumo regular durante al menos 8-12
                semanas para ver resultados visibles en la piel y el cabello.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                ✓ Mantén un estilo de vida saludable
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Los probióticos funcionan mejor como parte de un estilo de vida
                integral que incluya una dieta equilibrada, hidratación
                adecuada, sueño suficiente y manejo del estrés.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                ✓ Evita factores que dañan la microbiota
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Limita el consumo de antibióticos innecesarios, alcohol excesivo
                y alimentos ultraprocesados, ya que pueden alterar el equilibrio
                de tu microbiota intestinal.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                ✓ Personaliza tu enfoque
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lo que funciona para una persona puede no funcionar para otra.
                Observa cómo responde tu cuerpo y ajusta según sea necesario.
                Considera trabajar con un dermatólogo o nutricionista
                especializado.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusión */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Conclusión: Una revolución en el cuidado de la piel y el cabello
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La investigación sobre el eje intestino-piel está transformando
            nuestra comprensión de la salud cutánea y capilar. Los probióticos
            ofrecen un enfoque desde adentro hacia afuera que complementa los
            tratamientos tópicos tradicionales.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si bien no son una solución mágica, los probióticos pueden ser una
            herramienta poderosa para mejorar la salud de la piel y el cabello,
            especialmente cuando se combinan con una dieta equilibrada, buena
            hidratación y cuidados apropiados.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            La belleza verdadera comienza desde el interior, y cuidar tu
            microbiota intestinal puede ser el primer paso hacia una piel
            radiante y un cabello saludable.
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Recuerda:</strong> Antes de iniciar cualquier
              suplementación con probióticos, especialmente si tienes
              condiciones de salud preexistentes o estás tomando medicamentos,
              consulta con un profesional de la salud para asegurarte de que sea
              seguro y apropiado para ti.
            </p>
          </div>
        </section>

        {/* Referencias */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Referencias científicas
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
            <li>
              Salem, I., Ramser, A., Isham, N., & Ghannoum, M. A. (2018). The
              Gut Microbiome as a Major Regulator of the Gut-Skin Axis.{" "}
              <em>Frontiers in Microbiology</em>, 9, 1459.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/30042745/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/30042745/
              </a>
            </li>
            <li>
              Kober, M. M., & Bowe, W. P. (2015). The effect of probiotics on
              immune regulation, acne, and photoaging.{" "}
              <em>International Journal of Women&apos;s Dermatology</em>, 1(2),
              85-89.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/28491995/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/28491995/
              </a>
            </li>
            <li>
              Fabbrocini, G., et al. (2020). Supplementation with{" "}
              <em>Lactobacillus rhamnosus</em> SP1 normalises skin expression of
              genes implicated in insulin signalling and improves adult acne.{" "}
              <em>Dermatology and Therapy</em>, 10(5), 1107-1120.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/32756288/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/32756288/
              </a>
            </li>
            <li>
              Foolad, N., et al. (2013). Effect of nutrient supplementation on
              atopic dermatitis in children: a systematic review of probiotics,
              prebiotics, formula, and fatty acids.{" "}
              <em>JAMA Dermatology</em>, 149(3), 350-355.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/23700152/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/23700152/
              </a>
            </li>
            <li>
              Parodi, A., et al. (2008). Small intestinal bacterial overgrowth
              in rosacea: clinical effectiveness of its eradication.{" "}
              <em>Clinical Gastroenterology and Hepatology</em>, 6(7), 759-764.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/18456568/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/18456568/
              </a>
            </li>
            <li>
              Bouilly-Gauthier, D., et al. (2010). Clinical evidence of benefits
              of a dietary supplement containing probiotic and carotenoids on
              ultraviolet-induced skin damage.{" "}
              <em>British Journal of Dermatology</em>, 163(3), 536-543.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/20346020/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/20346020/
              </a>
            </li>
            <li>
              Kim, J. E., et al. (2019). <em>Lactobacillus plantarum</em>{" "}
              HY7714 Protects against Photoaging by Improving Collagen
              Production in Hairless Mice. <em>Nutrients</em>, 11(11), 2529.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/31652533/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/31652533/
              </a>
            </li>
            <li>
              Lee, D. E., et al. (2022). Oral intake of{" "}
              <em>Lactobacillus plantarum</em> promotes hair growth through
              upregulation of IGF-1 in C57BL/6 mice. <em>Food Science and Biotechnology</em>,
              31(6), 765-773.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/35600531/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/35600531/
              </a>
            </li>
            <li>
              Grice, E. A., & Segre, J. A. (2011). The skin microbiome.{" "}
              <em>Nature Reviews Microbiology</em>, 9(4), 244-253.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/21407241/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/21407241/
              </a>
            </li>
            <li>
              Puebla-Barragan, S., & Reid, G. (2019). Forty-five-year evolution
              of probiotic therapy. <em>Microbial Cell</em>, 6(4), 184-196.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/30963089/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/30963089/
              </a>
            </li>
          </ol>
        </section>

        {/* Artículos relacionados */}
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Artículos relacionados
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/eje-intestino-cerebro"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Eje Intestino-Cerebro y Estado de Ánimo
              </h3>
              <p className="text-gray-600 text-sm">
                Descubre cómo los probióticos pueden mejorar tu salud mental
              </p>
            </Link>
            <Link
              href="/blog/salud-humana"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Más sobre Salud Humana
              </h3>
              <p className="text-gray-600 text-sm">
                Explora otros artículos sobre probióticos y salud humana
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

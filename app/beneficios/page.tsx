import Image from 'next/image';
import AdBanner from '../components/AdBanner';
import SEOSchema from '../components/SEOSchema';

export default function Beneficios() {
  // Datos estructurados para el esquema de artículo
  const articleData = {
    title: "Beneficios de los Probióticos: Evidencia Científica Actualizada",
    description: "Descubre los múltiples beneficios que los probióticos ofrecen para tu salud, respaldados por evidencia científica reciente. Incluye mejoras para la salud digestiva, inmunológica, mental y metabólica.",
    publishDate: "2024-06-01T08:00:00+00:00",
    author: "Probióticos Para Todos",
    image: "https://www.probioticosparatodos.com/images/beneficios-digestivos.png",
    url: "https://www.probioticosparatodos.com/beneficios"
  };

  return (
    <>
      {/* Schema.org estructurado */}
      <SEOSchema type="article" data={articleData} />
      
      {/* Header */}
      <header className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Beneficios de los Probióticos</h1>
          <p className="text-xl max-w-3xl">
            Descubre los múltiples beneficios que los probióticos ofrecen para tu salud, respaldados por evidencia científica.
          </p>
        </div>
      </header>
      
      {/* Ad Banner Top */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="top" />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Salud Digestiva</h2>
              
              <div className="mb-6">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image 
                    src="/images/beneficios-digestivos.png" 
                    alt="Beneficios digestivos de los probióticos"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="rounded-lg shadow-md object-cover md:object-contain"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Mejora del equilibrio de la microbiota intestinal</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos ayudan a restaurar y mantener un equilibrio saludable de bacterias en el intestino, especialmente después de alteraciones como el uso de antibióticos, que pueden eliminar tanto bacterias dañinas como beneficiosas.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> La investigación reciente sugiere que los probióticos pueden ayudar tras el uso de antibióticos, fortaleciendo la barrera intestinal y promoviendo bacterias beneficiosas. Un estudio de Éliás et al. (2023) en <em>BMC Medicine</em> encontró que los probióticos tienen efectos limitados en la diversidad microbiana, con resultados variados según las cepas de <em>Lactobacillus</em> y <em>Bifidobacterium</em> <a href="#ref18" className="text-green-600 font-semibold">[18]</a>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Prevención y reducción de la diarrea asociada a antibióticos</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos han demostrado ser eficaces para prevenir y reducir la duración de varios tipos de diarrea, especialmente la diarrea asociada a antibióticos (DAA).
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Goodman et al. (2021) en <em>BMJ Open</em> encontraron que en adultos la administración de probióticos con antibióticos disminuye en aproximadamente 37% el riesgo de DAA (RR≈0.63) <a href="#ref3" className="text-green-600 font-semibold">[3]</a>. En pediatría, Yang et al. (2023) analizaron múltiples revisiones sistemáticas y concluyeron que dosis altas (≥5–40×10⁹ UFC) de <em>Lactobacillus</em> y <em>Saccharomyces boulardii</em> previenen la DAA infantil <a href="#ref4" className="text-green-600 font-semibold">[4]</a>. La cepa <em>S. boulardii</em> ha mostrado particular eficacia en este campo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Alivio del síndrome del intestino irritable (SII)</h3>
                  <p className="text-gray-700 mb-3">
                    Varias cepas de probióticos pueden ayudar a reducir los síntomas del SII, como dolor abdominal, distensión, gases, diarrea y estreñimiento.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Meta-análisis recientes muestran que varios probióticos mejoran modestamente los síntomas globales y el dolor abdominal en SII. Goodoory et al. (2023) en <em>Gastroenterology</em> reportaron un beneficio significativo de combinaciones probióticas sobre placebo (SMD ~–0,55 en síntomas SII) <a href="#ref1" className="text-green-600 font-semibold">[1]</a>. Otro meta-análisis de 72 ensayos clínicos aleatorios (Xiao et al. 2023) confirmó una reducción promedio de síntomas globales y dolor abdominal con probióticos versus placebo <a href="#ref2" className="text-green-600 font-semibold">[2]</a>. Ford et al. (2018) encontraron un número necesario para tratar (NNT) de 11, indicando beneficios significativos especialmente en síntomas generales y dolor abdominal <a href="#ref17" className="text-green-600 font-semibold">[17]</a>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Estreñimiento funcional</h3>
                  <p className="text-gray-700 mb-3">
                    Ciertos probióticos han mostrado efectos positivos en el tratamiento del estreñimiento funcional, mejorando la frecuencia y consistencia de las deposiciones.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Meta-análisis de ensayos clínicos en adultos (Zhang et al. 2020) indican que los probióticos (principalmente <em>Bifidobacterium</em> y <em>Lactobacillus</em>) mejoran síntomas de estreñimiento en comparación con placebo <a href="#ref5" className="text-green-600 font-semibold">[5]</a>. El beneficio es moderado, con menos tiempo de tránsito intestinal y más evacuaciones. Los estudios muestran efectos clínicamente relevantes en el incremento del ritmo de evacuaciones y mejora de la consistencia fecal.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Sistema Inmunológico</h2>
              
              <div className="mb-6">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image 
                    src="/images/sistema-inmune.png" 
                    alt="Probióticos y sistema inmunológico"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="rounded-lg shadow-md object-cover md:object-contain"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Fortalecimiento de las defensas</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos interactúan con el sistema inmune intestinal, aumentando la producción de IgA, regulando citoquinas y favoreciendo células T reguladoras.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Una revisión reciente de Liu et al. (2021) en <em>Frontiers in Nutrition</em> destaca mecanismos de regulación inmune, donde probióticos fortalecen la barrera intestinal y modulan la respuesta inflamatoria <a href="#ref7" className="text-green-600 font-semibold">[7]</a>. Clínicamente, estudios han hallado mejoras en biomarcadores inflamatorios (p.ej. ↓CRP, ↑IL-10) en sujetos sanos tras el consumo de probióticos. 
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Reducción del riesgo de infecciones respiratorias</h3>
                  <p className="text-gray-700 mb-3">
                    El consumo regular de probióticos se ha asociado con un menor riesgo de infecciones del tracto respiratorio superior, como resfriados y gripe.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Revisiones recientes muestran que la suplementación con probióticos puede reducir la gravedad y duración de infecciones respiratorias altas. Łagowska et al. (2021) hallaron en meta-análisis en atletas que los probióticos (sobre todo monocepa) disminuyen significativamente la puntuación de gravedad de URTI (p&lt;0,05) y reducen marcadores inflamatorios (IL-6, TNFα) <a href="#ref6" className="text-green-600 font-semibold">[6]</a>. En suma, la evidencia sugiere un efecto protector leve-moderado de probióticos frente a resfriados e influenza, especialmente en poblaciones exigidas.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Alergias y atopia</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos pueden tener efectos beneficiosos en condiciones alérgicas, especialmente en niños y bebés con predisposición a desarrollar dermatitis atópica.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Meta-análisis en lactantes con dermatitis atópica (Zhao et al. 2018) indicaron que <em>Lactobacillus</em> (en especial cepas del género) reducen significativamente el puntaje de gravedad de AD (reducción SCORAD ≈ –5 a –8 en promedio) <a href="#ref8" className="text-green-600 font-semibold">[8]</a>. Otra revisión actualizada (Chen et al. 2021) incluyó 25 ensayos clínicos pediátricos y halló que suplementos probióticos en gestantes y/o lactantes pueden bajar la incidencia de dermatitis atópica (RR≈0,70) y mejorar el SCORAD en niños con dermatitis atópica (descenso medio WMD≈–7) <a href="#ref9" className="text-green-600 font-semibold">[9]</a>. Estos análisis resaltan que los efectos beneficiosos son más marcados cuando se administran prebióticos/probióticos combinados a madre e hijo, y con cepas mixtas.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Eje Intestino-Cerebro</h2>
              
              <div className="mb-6">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image 
                    src="/images/intestino-cerebro.png" 
                    alt="Conexión intestino-cerebro y probióticos"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="rounded-lg shadow-md object-cover md:object-contain"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Comunicación bidireccional</h3>
                  <p className="text-gray-700 mb-3">
                    Existe una comunicación bidireccional entre el intestino y el cerebro, conocida como el eje intestino-cerebro. Los probióticos pueden influir en esta comunicación y afectar positivamente la salud mental.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Investigaciones recientes confirman que la microbiota intestinal influye en el comportamiento y las funciones cerebrales a través de vías neurales, inmunes y endocrinas. Esta comunicación bidireccional es clave para entender cómo los probióticos pueden tener efectos sistémicos que van más allá del intestino.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Ansiedad y depresión</h3>
                  <p className="text-gray-700 mb-3">
                    Algunas cepas de probióticos muestran efectos positivos en la reducción de síntomas de ansiedad y depresión, posiblemente a través de la modulación de neurotransmisores y marcadores inflamatorios.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Revisiones sistemáticas recientes indican que los probióticos pueden aliviar síntomas leves-moderados de depresión y ansiedad. Sikorska et al. (2023) mostraron en metaanálisis que la terapia probiótica se asocia con mayor incremento de BDNF y disminución de marcadores inflamatorios (CRP) en pacientes con depresión, en comparación con placebo <a href="#ref10" className="text-green-600 font-semibold">[10]</a>. Además, un meta-análisis (Zhang et al. 2023) de 13 ensayos clínicos aleatorios encontró que intervenciones con probióticos/sinbióticos mejoran significativamente las puntuaciones de depresión (moderado efecto), con mayor beneficio en casos leves-moderados <a href="#ref11" className="text-green-600 font-semibold">[11]</a>. Una revisión integral (Merkouris et al. 2024) de ensayos clínicos concluye que la mayoría de estudios recientes reporta un rol beneficioso de probióticos en depresión/ansiedad, aunque con heterogeneidad de resultados <a href="#ref12" className="text-green-600 font-semibold">[12]</a>.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Salud Metabólica</h2>
              
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16">
                  <Image 
                    src="/icons/salud_bienestar.png" 
                    alt="Icono de salud y bienestar"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Obesidad y control de peso</h3>
                  <p className="text-gray-700 mb-3">
                    Ciertas cepas probióticas pueden favorecer la pérdida de peso y reducir la circunferencia abdominal en personas con sobrepeso u obesidad.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Revisiones sistemáticas actuales reportan que la suplementación probiótica con géneros <em>Lactobacillus</em> y <em>Bifidobacterium</em> puede favorecer la pérdida de peso. Ciudad et al. (2024) analizaron ensayos sin dieta asociada y mostraron reducciones significativas de peso corporal y BMI en aproximadamente 2/3 de los estudios revisados (cepas mixtas de Bifidobacterium+Lactobacillus fueron las más efectivas) <a href="#ref13" className="text-green-600 font-semibold">[13]</a>. Similarmente, Guo et al. (2025) en meta-análisis hallaron que tomar probióticos (8 ensayos clínicos, ~412 pacientes) resultó en mayor pérdida de peso y circunferencia abdominal en obesos versus placebo (p&lt;0,01).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Diabetes tipo 2 y perfil glucémico</h3>
                  <p className="text-gray-700 mb-3">
                    Algunos probióticos mejoran el perfil glucémico en personas con diabetes o riesgo de desarrollarla, ayudando a controlar la glucemia y la resistencia a la insulina.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Zhang CC et al. (2022) realizaron meta-análisis de ensayos clínicos y observaron que la administración de probióticos en diabéticos redujo niveles de HbA1c, glucosa en ayunas y mejoró la resistencia insulínica comparado con placebo <a href="#ref14" className="text-green-600 font-semibold">[14]</a>. En sujetos con intolerancia a la glucosa o síndrome metabólico, la suplementación también mostró descenso de glucemia en ayunas. Estos efectos se atribuyen a modulaciones en el microbioma que favorecen mayor sensibilidad a la insulina.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Síndrome metabólico y lípidos</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos pueden tener efectos positivos en los factores de riesgo cardiovascular asociados al síndrome metabólico, como los niveles elevados de lípidos en sangre.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Un metaanálisis en pacientes con síndrome metabólico (Chen et al. 2024) concluyó que probióticos/sinbióticos reducen significativamente el BMI, LDL-colesterol y glucemia en ayunas, aunque no afectaron la presión arterial <a href="#ref15" className="text-green-600 font-semibold">[15]</a>. En grasa visceral, estudios preliminares sugieren una disminución del tejido adiposo visceral con probióticos. En conjunto, los probióticos aportan mejoras leves en marcadores metabólicos (peso, lípidos, glucosa) que pueden ser clínicamente relevantes como terapia complementaria.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Cepas Específicas y Seguridad</h2>
              
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16">
                  <Image 
                    src="/icons/bacterias_probioticos.png" 
                    alt="Ícono de bacterias probióticas"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Cepas probióticas importantes</h3>
                  <p className="text-gray-700 mb-3">
                    Diferentes cepas de probióticos tienen efectos específicos en la salud. Algunas de las cepas más estudiadas incluyen:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-3">
                    <li><strong>Lactobacillus rhamnosus GG (LGG):</strong> La cepa más estudiada a nivel pediátrico, con evidencia para diarrea aguda infantil y prevención de dermatitis atópica.</li>
                    <li><strong>Bifidobacterium lactis (Bb-12, HN019) y B. longum:</strong> Cepas con respaldo en estudios de estreñimiento y metabolismo.</li>
                    <li><strong>Lactobacillus reuteri DSM 17938:</strong> Conocida por reducir cólicos en lactantes sanos y por sus efectos en diarrea infantil.</li>
                    <li><strong>Saccharomyces boulardii:</strong> Levadura probiótica con evidencia fuerte en prevención y tratamiento de diarrea asociada a antibióticos.</li>
                  </ul>
                  <p className="text-gray-700 mb-3">
                    Diferentes cepas ofrecen beneficios distintos y a menudo se necesitan combinaciones multicepa para mayor eficacia. La selección debe basarse en la indicación clínica específica.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Seguridad en el uso de probióticos</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos son generalmente seguros para la mayoría de las personas, pero existen algunas consideraciones importantes:
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Población general:</strong> En personas sanas, los probióticos se consideran seguros. Una revisión extensa (Merenstein et al. 2024) concluye que no aumenta la tasa global de efectos adversos en comparación con placebo en adultos y niños sanos <a href="#ref16" className="text-green-600 font-semibold">[16]</a>. Los efectos adversos habituales son leves (distensión, flatulencia) y raramente requieren suspensión del tratamiento.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Grupos vulnerables:</strong> Se han reportado casos muy raros de infecciones invasivas en pacientes inmunodeprimidos, prematuros o críticamente enfermos. Se recomienda precaución en personas con sistemas inmunes comprometidos o catéteres intravasculares de larga duración.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8" id="referencias">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Referencias Científicas</h2>
              
              <ol className="list-decimal pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                <li id="ref1"><span className="font-semibold">[1]</span> Goodoory VC et al. (2023). <em>Efficacy of Probiotics in Irritable Bowel Syndrome: Systematic Review and Meta-analysis</em>. Gastroenterology, 165(5):1206–1218. <a href="https://doi.org/10.1053/j.gastro.2023.07.012" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.1053/j.gastro.2023.07.012</a></li>
                
                <li id="ref2"><span className="font-semibold">[2]</span> Xiao X et al. (2023). <em>Probiotics for the management of irritable bowel syndrome: a systematic review and three-level meta-analysis</em>. Medicine (Baltimore), 102(46):e34332. <a href="https://doi.org/10.1097/MD.0000000000034332" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.1097/MD.0000000000034332</a></li>
                
                <li id="ref3"><span className="font-semibold">[3]</span> Goodman C et al. (2021). <em>Probiotics for the prevention of antibiotic-associated diarrhoea: a systematic review and meta-analysis</em>. BMJ Open, 11(8):e043054. <a href="https://doi.org/10.1136/bmjopen-2020-043054" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.1136/bmjopen-2020-043054</a></li>
                
                <li id="ref4"><span className="font-semibold">[4]</span> Yang Q et al. (2023). <em>Overview of systematic reviews of probiotics in the prevention and treatment of antibiotic-associated diarrhea in children</em>. Front Pharmacol, 14:1153070. <a href="https://doi.org/10.3389/fphar.2023.1153070" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.3389/fphar.2023.1153070</a></li>
                
                <li id="ref5"><span className="font-semibold">[5]</span> Zhang C et al. (2020). <em>Meta-analysis of randomized controlled trials of the effects of probiotics on functional constipation in adults</em>. Clin Nutr, 39(10):2960–2969. <a href="https://doi.org/10.1016/j.clnu.2019.12.023" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.1016/j.clnu.2019.12.023</a></li>
                
                <li id="ref6"><span className="font-semibold">[6]</span> Łagowska K & Bajerska J. (2021). <em>Probiotic Supplementation and Respiratory Infection and Immune Function in Athletes: Systematic Review and Meta-Analysis of Randomized Controlled Trials</em>. J Athl Train, 56(11):1213–1223. <a href="https://doi.org/10.4085/1062-6050-0222.20" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.4085/1062-6050-0222.20</a></li>
                
                <li id="ref7"><span className="font-semibold">[7]</span> Liu Y et al. (2021). <em>Modulation of Gut Microbiota and Immune System by Probiotics, Pre-biotics, and Post-biotics</em>. Front Nutr, 8:634897. <a href="https://doi.org/10.3389/fnut.2021.634897" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.3389/fnut.2021.634897</a></li>
                
                <li id="ref8"><span className="font-semibold">[8]</span> Zhao M et al. (2018). <em>Treatment efficacy of probiotics on atopic dermatitis, zooming in on infants: a systematic review and meta-analysis</em>. Int J Dermatol, 57(6):635–641. <a href="https://doi.org/10.1111/ijd.14415" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.1111/ijd.14415</a></li>
                
                <li id="ref9"><span className="font-semibold">[9]</span> Chang XY et al. (2021). <em>The Role of Probiotics in the Prevention and Treatment of Atopic Dermatitis in Children: An Updated Systematic Review and Meta-Analysis of Randomized Controlled Trials</em>. Pediatr Drugs, 23(3):215–228. <a href="https://doi.org/10.1007/s40272-021-00449-y" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.1007/s40272-021-00449-y</a></li>
                
                <li id="ref10"><span className="font-semibold">[10]</span> Sikorska M et al. (2023). <em>Probiotics as a Tool for Regulating Molecular Mechanisms in Depression: A Systematic Review and Meta-Analysis of Randomized Clinical Trials</em>. Int J Mol Sci, 24(4):3081. <a href="https://doi.org/10.3390/ijms24043081" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.3390/ijms24043081</a></li>
                
                <li id="ref11"><span className="font-semibold">[11]</span> Zhang Q et al. (2023). <em>Effect of prebiotics, probiotics, synbiotics on depression: results from a meta-analysis</em>. BMC Psychiatry, 23:477. <a href="https://doi.org/10.1186/s12888-023-05047-4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.1186/s12888-023-05047-4</a></li>
                
                <li id="ref12"><span className="font-semibold">[12]</span> Merkouris E et al. (2024). <em>Probiotics&apos; Effects in the Treatment of Anxiety and Depression: A Comprehensive Review of 2014–2023 Clinical Trials</em>. Nutrients, 15(3):1382. <a href="https://doi.org/10.3390/nu15031382" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.3390/nu15031382</a></li>
                
                <li id="ref13"><span className="font-semibold">[13]</span> Ciudad MJ et al. (2024). <em>Use of probiotics in preventing and treating excess weight and obesity. A systematic review</em>. Obes Sci Pract, 10(5):e1234.</li>
                
                <li id="ref14"><span className="font-semibold">[14]</span> Zhang CC et al. (2022). <em>Effects of probiotic type, dose and duration on the efficacy of probiotics in type 2 diabetes mellitus: A meta-analysis</em>. Clin Nutr, 41(2):365–373. <a href="https://doi.org/10.1016/j.clnu.2021.09.024" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.1016/j.clnu.2021.09.024</a></li>
                
                <li id="ref15"><span className="font-semibold">[15]</span> Chen TR et al. (2024). <em>Effect of supplementation with probiotics or synbiotics on cardiovascular risk factors in patients with metabolic syndrome: a systematic review and meta-analysis of randomized clinical trials</em>. Front Endocrinol, 14:1282699. <a href="https://doi.org/10.3389/fendo.2023.1282699" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.3389/fendo.2023.1282699</a></li>
                
                <li id="ref16"><span className="font-semibold">[16]</span> Merenstein D et al. (2024). <em>Emerging issues in probiotic safety: 2023 perspectives</em>. Clin Infect Dis.</li>
                
                <li id="ref17"><span className="font-semibold">[17]</span> Ford AC et al. (2018). <em>Efficacy of Probiotics in Irritable Bowel Syndrome: A Systematic Review and Meta-Analysis</em>. Am J Gastroenterol, 113:1043-1050. <a href="https://doi.org/10.1038/s41395-018-0111-z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.1038/s41395-018-0111-z</a></li>
                
                <li id="ref18"><span className="font-semibold">[18]</span> Éliás AJ et al. (2023). <em>Probiotic supplementation during antibiotic treatment is unjustified in maintaining the gut microbiome diversity: a systematic review and meta-analysis</em>. BMC Med, 21(1):178. <a href="https://doi.org/10.1186/s12916-023-02961-0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI: 10.1186/s12916-023-02961-0</a></li>
              </ol>
            </section>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="sticky top-6">
              <AdBanner position="sidebar" className="mb-6" />
              
              <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Puntos clave</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Los beneficios de los probióticos son específicos de cada cepa y dependen de la dosis.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    La investigación muestra eficacia moderada en síndrome del intestino irritable (SII).
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Reducen significativamente el riesgo de diarrea asociada a antibióticos (DAA).
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Pueden ayudar en el control de peso y marcadores metabólicos.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Muestran efectos positivos en ansiedad y depresión a través del eje intestino-cerebro.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Son generalmente seguros, pero consulta con un profesional de la salud antes de iniciar suplementos.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Artículos relacionados</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/que-son" className="text-green-600 hover:text-green-700 transition-colors">
                      ¿Qué son los probióticos?
                    </a>
                  </li>
                  <li>
                    <a href="/como-elegir" className="text-green-600 hover:text-green-700 transition-colors">
                      Cómo elegir el probiótico adecuado
                    </a>
                  </li>
                  <li>
                    <a href="/referencias" className="text-green-600 hover:text-green-700 transition-colors">
                      Referencias científicas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Ad */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" />
      </div>
    </>
  );
} 
// Archivo de datos para las condiciones de salud relacionadas con probióticos
// En un entorno de producción, estos datos podrían venir de una API o CMS

export interface CondicionData {
  titulo: string;
  descripcion: string;
  imagenPrincipal: {
    src: string;
    alt: string;
  };
  fechaPublicacion: string;
  introduccion: string;
  seccionesContenido: {
    titulo: string;
    contenido: string;
  }[];
  cepasRecomendadas: {
    nombre: string;
    descripcion: string;
  }[];
  estudiosRelevantes: {
    titulo: string;
    autores: string;
    año: string;
    publicacion: string;
    url?: string;
    resumen: string;
  }[];
  faq: {
    pregunta: string;
    respuesta: string;
  }[];
  recomendacionesDoctor?: string;
}

interface CondicionesData {
  [key: string]: CondicionData;
}

export const condicionesData: CondicionesData = {
  'digestiva': {
    titulo: 'Probióticos para la Salud Digestiva',
    descripcion: 'Cómo los probióticos pueden ayudar a mejorar problemas digestivos como síndrome del intestino irritable, enfermedad inflamatoria intestinal y estreñimiento.',
    imagenPrincipal: {
      src: '/images/beneficios-digestivos.png',
      alt: 'Sistema digestivo saludable con bacterias beneficiosas'
    },
    fechaPublicacion: '2024-05-15T10:00:00+00:00',
    introduccion: `
      <p>El sistema digestivo es el hogar de billones de microorganismos que componen nuestra microbiota intestinal. Este ecosistema complejo juega un papel crucial en la digestión de alimentos, absorción de nutrientes y protección contra patógenos.</p>
      <p>Cuando este balance microbiano se altera (disbiosis), pueden surgir diversos problemas digestivos. Los probióticos, microorganismos vivos que aportan beneficios a la salud cuando se administran en cantidades adecuadas, ofrecen una forma de restaurar este equilibrio.</p>
      <p>En esta guía completa, exploraremos cómo los probióticos pueden ayudar a mejorar diversas condiciones digestivas, qué cepas específicas han mostrado efectividad en estudios clínicos, y cómo integrarlos a tu régimen de salud digestiva.</p>
    `,
    seccionesContenido: [
      {
        titulo: 'Síndrome del Intestino Irritable (SII)',
        contenido: `
          <p>El SII afecta entre el 10-15% de la población mundial y se caracteriza por dolor abdominal, hinchazón, y alteraciones en los hábitos intestinales. La investigación sugiere que las personas con SII pueden tener alteraciones en su microbiota intestinal.</p>
          <h3 class="text-xl font-semibold mt-4 mb-2 text-green-600">¿Cómo ayudan los probióticos?</h3>
          <ul class="list-disc pl-6 space-y-2 mb-4">
            <li>Reducen la inflamación intestinal de bajo grado</li>
            <li>Mejoran la barrera intestinal, reduciendo la permeabilidad</li>
            <li>Modifican la activación del sistema nervioso entérico</li>
            <li>Normalizan el tiempo de tránsito intestinal</li>
          </ul>
          <p>Diversas revisiones sistemáticas y metanálisis han mostrado que los probióticos pueden reducir la gravedad general de los síntomas del SII, aunque la respuesta puede variar según el subtipo de SII (con predominio de diarrea, estreñimiento o mixto).</p>
        `
      },
      {
        titulo: 'Enfermedad Inflamatoria Intestinal (EII)',
        contenido: `
          <p>La EII incluye la enfermedad de Crohn y la colitis ulcerosa, condiciones caracterizadas por inflamación crónica del tracto gastrointestinal. La disbiosis intestinal se considera un factor importante en su desarrollo y progresión.</p>
          <h3 class="text-xl font-semibold mt-4 mb-2 text-green-600">Beneficios potenciales de los probióticos en EII:</h3>
          <ul class="list-disc pl-6 space-y-2 mb-4">
            <li>Inducción y mantenimiento de la remisión, especialmente en colitis ulcerosa</li>
            <li>Reducción de la inflamación a través de efectos inmunomoduladores</li>
            <li>Fortalecimiento de la barrera intestinal</li>
            <li>Competencia con bacterias patógenas</li>
          </ul>
          <p>La evidencia es más sólida para el uso de ciertos probióticos como coadyuvantes en el tratamiento de la colitis ulcerosa, mientras que los resultados son más variables para la enfermedad de Crohn.</p>
        `
      },
      {
        titulo: 'Diarrea asociada a antibióticos',
        contenido: `
          <p>Los antibióticos, aunque esenciales para tratar infecciones bacterianas, pueden alterar el equilibrio de la microbiota intestinal, resultando en diarrea en hasta el 35% de los pacientes. La diarrea asociada a antibióticos (DAA) puede variar desde episodios leves hasta infecciones graves por <em>Clostridioides difficile</em>.</p>
          <h3 class="text-xl font-semibold mt-4 mb-2 text-green-600">Efectividad de los probióticos:</h3>
          <p>Los probióticos han mostrado ser particularmente efectivos en la prevención de la DAA. Múltiples metanálisis han encontrado que pueden reducir el riesgo de DAA en aproximadamente un 60%.</p>
          <p>Se recomienda iniciar la suplementación con probióticos al mismo tiempo que el antibiótico y continuarla durante 1-2 semanas después de completar el tratamiento antibiótico para obtener los mejores resultados.</p>
        `
      },
      {
        titulo: 'Estreñimiento crónico',
        contenido: `
          <p>El estreñimiento funcional afecta aproximadamente al 14% de la población adulta global. Se caracteriza por movimientos intestinales poco frecuentes, heces duras, y dificultad para evacuar.</p>
          <p>La investigación ha identificado diferencias en la composición de la microbiota intestinal entre personas con estreñimiento y aquellas con hábitos intestinales normales, con menores niveles de Lactobacillus y Bifidobacterium frecuentemente observados en personas estreñidas.</p>
          <h3 class="text-xl font-semibold mt-4 mb-2 text-green-600">Mecanismos de acción:</h3>
          <ul class="list-disc pl-6 space-y-2 mb-4">
            <li>Producción de ácidos grasos de cadena corta que mejoran la motilidad intestinal</li>
            <li>Reducción del pH del colon</li>
            <li>Aumento del volumen de las heces</li>
            <li>Modificación de la actividad enzimática intestinal</li>
          </ul>
          <p>Los estudios clínicos han demostrado mejoras en la frecuencia de las evacuaciones, consistencia de las heces y esfuerzo durante la defecación con ciertas cepas probióticas.</p>
        `
      }
    ],
    cepasRecomendadas: [
      {
        nombre: 'Lactobacillus plantarum 299v',
        descripcion: 'Ha demostrado efectividad para reducir el dolor abdominal, la hinchazón y la flatulencia en pacientes con SII. Varios estudios clínicos muestran que puede normalizar la frecuencia de las deposiciones.'
      },
      {
        nombre: 'Bifidobacterium infantis 35624',
        descripcion: 'Estudios han demostrado su capacidad para aliviar múltiples síntomas del SII, incluyendo dolor abdominal, hinchazón y problemas de evacuación. Es especialmente eficaz para el SII con predominio de dolor y distensión.'
      },
      {
        nombre: 'Saccharomyces boulardii',
        descripcion: 'Una levadura probiótica particularmente efectiva para prevenir y tratar la diarrea asociada a antibióticos y la diarrea infecciosa. También ha mostrado beneficios en la prevención de recurrencias de infección por C. difficile.'
      },
      {
        nombre: 'VSL#3 (mezcla de 8 cepas probióticas)',
        descripcion: 'Esta formulación de alta potencia ha mostrado beneficios en la colitis ulcerosa, síndrome del intestino irritable y pouchitis. Contiene múltiples cepas de Lactobacillus, Bifidobacterium y Streptococcus thermophilus.'
      },
      {
        nombre: 'Bifidobacterium lactis BB-12',
        descripcion: 'Eficaz para el tratamiento del estreñimiento funcional. Estudios han demostrado que puede aumentar la frecuencia de las evacuaciones y mejorar la consistencia de las heces.'
      }
    ],
    estudiosRelevantes: [
      {
        titulo: 'Probióticos en el tratamiento del síndrome del intestino irritable: una revisión sistemática',
        autores: 'Ford AC, et al.',
        año: '2018',
        publicacion: 'American Journal of Gastroenterology',
        url: 'https://journals.lww.com/ajg/Abstract/2018/07000/Efficacy_of_prebiotics,_probiotics,_and_synbiotics.7.aspx',
        resumen: 'Meta-análisis de 53 ensayos controlados aleatorios con 5,545 pacientes que encontró que los probióticos son efectivos para mejorar los síntomas globales del SII, así como el dolor abdominal, la hinchazón y la flatulencia.'
      },
      {
        titulo: 'Probióticos para la prevención de la diarrea asociada a antibióticos',
        autores: 'Guo Q, et al.',
        año: '2019',
        publicacion: 'Cochrane Database of Systematic Reviews',
        url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004827.pub5/full',
        resumen: 'Revisión de 82 estudios que encontró evidencia moderada de que los probióticos son efectivos y seguros para prevenir la diarrea asociada a antibióticos en niños y adultos.'
      },
      {
        titulo: 'La suplementación con probióticos mejora los síntomas del estreñimiento crónico',
        autores: 'Martínez-Martínez MI, et al.',
        año: '2017',
        publicacion: 'Nutrición Hospitalaria',
        resumen: 'Estudio controlado aleatorio que mostró que B. lactis BB-12 aumentó significativamente la frecuencia de las evacuaciones y mejoró la consistencia de las heces en adultos con estreñimiento crónico.'
      }
    ],
    faq: [
      {
        pregunta: '¿Cuánto tiempo debo tomar probióticos para ver beneficios en mi salud digestiva?',
        respuesta: 'El tiempo varía según la condición y la persona. Para problemas como la diarrea, los beneficios pueden notarse en pocos días. Para condiciones crónicas como el SII o el estreñimiento, se recomienda un mínimo de 4-8 semanas para evaluar adecuadamente la respuesta. Algunas personas necesitan un uso continuo para mantener los beneficios.'
      },
      {
        pregunta: '¿Puedo tomar probióticos junto con medicamentos para mis problemas digestivos?',
        respuesta: 'En general, los probióticos pueden tomarse junto con medicamentos digestivos como antiácidos o antiespasmódicos. Sin embargo, es recomendable separar la toma de probióticos y antibióticos por al menos 2 horas. Siempre consulta con tu médico antes de combinar tratamientos, especialmente si tienes condiciones graves como EII o estás inmunocomprometido.'
      },
      {
        pregunta: '¿Los probióticos son seguros para todos?',
        respuesta: 'Los probióticos son generalmente seguros para personas sanas. Sin embargo, personas con sistema inmunitario comprometido, pacientes críticos, bebés prematuros y personas con problemas médicos graves deben consultar con un profesional de la salud antes de iniciar la suplementación con probióticos, ya que se han reportado casos raros de infecciones en estas poblaciones vulnerables.'
      },
      {
        pregunta: '¿Es mejor obtener probióticos de alimentos o suplementos?',
        respuesta: 'Ambas fuentes tienen ventajas. Los alimentos fermentados como el yogur y el kéfir proporcionan probióticos junto con nutrientes adicionales. Los suplementos ofrecen cepas específicas y dosis controladas, lo que puede ser importante para tratar condiciones particulares. Para muchas personas, una combinación de ambos enfoques puede ser óptima.'
      }
    ],
    recomendacionesDoctor: 'Para problemas digestivos crónicos, recomiendo comenzar con modificaciones dietéticas y de estilo de vida antes de considerar los probióticos. Una vez que decides probar probióticos, elige cepas específicas para tu condición particular y mantenlas durante al menos 4 semanas para evaluar su efectividad. Lleva un registro de tus síntomas y consulta con tu gastroenterólogo si no observas mejoría.'
  },
  // ... Otras condiciones se agregarán aquí
};

// Exportar también un arreglo de slugs disponibles para la generación de sitemap o navegación
export const condicionSlugs = Object.keys(condicionesData); 
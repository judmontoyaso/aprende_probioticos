// Archivo de datos para los tipos de probióticos
// En un entorno de producción, estos datos podrían venir de una API o CMS

interface TipoData {
  titulo: string;
  descripcion: string;
  imagenPrincipal: {
    src: string;
    alt: string;
  };
  fechaPublicacion: string;
  introduccion: string;
  caracteristicas: {
    titulo: string;
    descripcion: string;
  }[];
  beneficios: {
    titulo: string;
    descripcion: string;
  }[];
  cepasPopulares: {
    nombre: string;
    descripcion: string;
    beneficios: string[];
    condiciones?: string[];
  }[];
  alimentosNaturales?: {
    nombre: string;
    descripcion: string;
    imagen?: {
      src: string;
      alt: string;
    };
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
}

interface TiposData {
  [key: string]: TipoData;
}

export const tiposData: TiposData = {
  'lactobacillus': {
    titulo: 'Lactobacillus: El Probiótico Versátil',
    descripcion: 'Descubre los beneficios y aplicaciones de las bacterias Lactobacillus, uno de los géneros probióticos más estudiados y utilizados.',
    imagenPrincipal: {
      src: '/images/lactobacillus.png',
      alt: 'Bacterias Lactobacillus bajo microscopio'
    },
    fechaPublicacion: '2024-05-10T00:00:00+00:00',
    introduccion: `
      <p>El género <em>Lactobacillus</em> engloba a más de 200 especies de bacterias ácido-lácticas, siendo uno de los grupos probióticos más comunes y ampliamente investigados. Estos microorganismos reciben su nombre por su capacidad para convertir lactosa y otros azúcares en ácido láctico.</p>
      <p>Naturalmente presentes en nuestro sistema digestivo, también se encuentran en alimentos fermentados y son utilizados extensamente en suplementos probióticos debido a sus diversos beneficios para la salud.</p>
      <p>En esta guía completa, exploraremos las características que hacen que Lactobacillus sea un género probiótico tan valorado, sus principales especies, beneficios específicos y aplicaciones en diferentes condiciones de salud.</p>
    `,
    caracteristicas: [
      {
        titulo: 'Bacteria Gram-positiva',
        descripcion: 'Los Lactobacillus son bacterias gram-positivas, lo que significa que tienen una pared celular gruesa compuesta de peptidoglicano que retiene el tinte violeta cristal durante la tinción de Gram.'
      },
      {
        titulo: 'Producción de ácido láctico',
        descripcion: 'Su principal característica es la capacidad de fermentar carbohidratos y producir ácido láctico como producto metabólico principal, lo que contribuye a la acidificación del ambiente intestinal.'
      },
      {
        titulo: 'Microorganismos anaerobios facultativos',
        descripcion: 'Aunque prefieren ambientes con poco oxígeno, pueden sobrevivir en presencia de oxígeno, lo que les permite colonizar diversos nichos ecológicos en el cuerpo humano.'
      },
      {
        titulo: 'Alta tolerancia a condiciones ácidas',
        descripcion: 'Muchas especies pueden sobrevivir en ambientes altamente ácidos, incluyendo el estómago, lo que facilita su llegada viable al intestino.'
      }
    ],
    beneficios: [
      {
        titulo: 'Salud digestiva',
        descripcion: 'Los Lactobacillus compiten con patógenos por nutrientes y sitios de adhesión, producen sustancias antimicrobianas y fortalecen la barrera intestinal, promoviendo un equilibrio microbiano saludable.'
      },
      {
        titulo: 'Apoyo inmunológico',
        descripcion: 'Interactúan con el sistema inmune intestinal, modulando respuestas inmunes e influenciando la producción de citocinas, lo que puede prevenir inflamación excesiva y mejorar la inmunidad.'
      },
      {
        titulo: 'Mejora de intolerancia a la lactosa',
        descripcion: 'Algunas cepas producen la enzima beta-galactosidasa (lactasa), que ayuda a descomponer la lactosa, aliviando los síntomas de intolerancia a la lactosa en algunas personas.'
      },
      {
        titulo: 'Salud urogenital femenina',
        descripcion: 'Ciertas especies, como L. rhamnosus y L. reuteri, pueden ayudar a mantener un pH vaginal saludable, previniendo infecciones y desequilibrios en la microbiota vaginal.'
      }
    ],
    cepasPopulares: [
      {
        nombre: 'Lactobacillus acidophilus',
        descripcion: 'Una de las especies más investigadas y utilizadas en productos probióticos. Se encuentra naturalmente en el intestino y la vagina.',
        beneficios: [
          'Mejora de síntomas de síndrome del intestino irritable',
          'Reducción de diarrea asociada a antibióticos',
          'Disminución de niveles de colesterol',
          'Prevención de infecciones vaginales'
        ],
        condiciones: [
          'Síndrome del intestino irritable',
          'Diarrea infecciosa',
          'Vaginosis bacteriana',
          'Intolerancia a la lactosa'
        ]
      },
      {
        nombre: 'Lactobacillus rhamnosus GG',
        descripcion: 'Una de las cepas probióticas más estudiadas científicamente, aislada en 1983 por los investigadores Sherwood Gorbach y Barry Goldin (de ahí el "GG").',
        beneficios: [
          'Prevención y tratamiento de diarrea pediátrica',
          'Reducción de eczema atópico en niños',
          'Prevención de infecciones respiratorias',
          'Reducción de síntomas gastrointestinales'
        ],
        condiciones: [
          'Diarrea asociada a antibióticos',
          'Infecciones gastrointestinales',
          'Alergias y eczema',
          'Infecciones respiratorias'
        ]
      },
      {
        nombre: 'Lactobacillus plantarum',
        descripcion: 'Una especie versátil encontrada en muchos alimentos fermentados, con alta resistencia al ácido gástrico y sales biliares.',
        beneficios: [
          'Reducción de hinchazón y flatulencia',
          'Mejora de síntomas de SII',
          'Fortalecimiento de la barrera intestinal',
          'Propiedades antiinflamatorias'
        ]
      }
    ],
    alimentosNaturales: [
      {
        nombre: 'Yogur',
        descripcion: 'El alimento fermentado más conocido que contiene Lactobacillus. El yogur tradicional contiene L. bulgaricus junto con Streptococcus thermophilus.',
        imagen: {
          src: '/images/yogur.png',
          alt: 'Yogur natural con cultivos vivos'
        }
      },
      {
        nombre: 'Kéfir',
        descripcion: 'Bebida fermentada que contiene múltiples especies de Lactobacillus, junto con levaduras y otras bacterias beneficiosas.',
        imagen: {
          src: '/images/kefir.png',
          alt: 'Kéfir de leche con granos probióticos'
        }
      },
      {
        nombre: 'Chucrut',
        descripcion: 'Col fermentada que contiene L. plantarum y otras especies de Lactobacillus, junto con nutrientes y compuestos bioactivos.',
        imagen: {
          src: '/images/chucrut.png',
          alt: 'Chucrut casero fermentado'
        }
      }
    ],
    estudiosRelevantes: [
      {
        titulo: 'Eficacia de Lactobacillus rhamnosus GG para prevenir diarrea asociada a antibióticos',
        autores: 'Szajewska H, et al.',
        año: '2019',
        publicacion: 'Journal of Pediatrics',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30852022/',
        resumen: 'Meta-análisis que encontró que L. rhamnosus GG reduce significativamente el riesgo de diarrea asociada a antibióticos en niños y adultos cuando se administra en dosis ≥10^10 UFC.'
      },
      {
        titulo: 'Lactobacillus plantarum 299v para el tratamiento del síndrome del intestino irritable',
        autores: 'Ducrotté P, et al.',
        año: '2012',
        publicacion: 'World Journal of Gastroenterology',
        resumen: 'Ensayo controlado aleatorio que demostró que L. plantarum 299v alivia eficazmente el dolor abdominal y normaliza la frecuencia de las deposiciones en pacientes con SII.'
      }
    ],
    faq: [
      {
        pregunta: '¿Todas las especies de Lactobacillus tienen los mismos beneficios?',
        respuesta: 'No, los beneficios son específicos de cada cepa. Diferentes especies y cepas de Lactobacillus tienen propiedades distintas y pueden influir en diferentes aspectos de la salud. Por ejemplo, L. acidophilus puede ser más beneficioso para la salud digestiva, mientras que L. rhamnosus puede ser más efectivo para el sistema inmune. Esta especificidad de cepa es fundamental al elegir un probiótico para una condición particular.'
      },
      {
        pregunta: '¿Cómo puedo saber qué cepas de Lactobacillus contiene un producto probiótico?',
        respuesta: 'Los productos probióticos de calidad deben especificar en su etiqueta no solo el género y la especie (por ejemplo, Lactobacillus acidophilus), sino también la designación de la cepa específica (como L. acidophilus LA-5). También deben indicar la concentración de bacterias viables, generalmente expresada en Unidades Formadoras de Colonias (UFC). Busca productos que mantengan su potencia hasta la fecha de caducidad, no solo en el momento de la fabricación.'
      },
      {
        pregunta: '¿Los Lactobacillus son seguros durante el embarazo?',
        respuesta: 'Los probióticos que contienen Lactobacillus son generalmente reconocidos como seguros durante el embarazo. Algunas investigaciones sugieren que podrían ayudar a prevenir condiciones como la diabetes gestacional y el eczema infantil. Sin embargo, siempre es recomendable consultar con un profesional de la salud antes de comenzar cualquier suplementación durante el embarazo o la lactancia.'
      }
    ]
  },
  // Más tipos de probióticos se agregarán aquí
};

// Exportar también un arreglo de slugs disponibles para la generación de sitemap o navegación
export const tipoSlugs = Object.keys(tiposData); 
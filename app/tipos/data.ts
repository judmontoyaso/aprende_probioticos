// Archivo de datos para los tipos de probióticos
// En un entorno de producción, estos datos podrían venir de una API o CMS

export interface TipoData {
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
    titulo: 'Lactobacillus: Lo que deberías saber',
    descripcion: 'Descubre los beneficios y aplicaciones de las bacterias Lactobacillus, uno de los géneros probióticos más estudiados y utilizados.',
    imagenPrincipal: {
      src: '/images/lactobacillus.png',
      alt: 'Bacterias Lactobacillus - género probiótico versátil'
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
          src: '/images/yogurt_photo.png',
          alt: 'Yogur natural con cultivos vivos'
        }
      },
      {
        nombre: 'Kéfir',
        descripcion: 'Bebida fermentada que contiene múltiples especies de Lactobacillus, junto con levaduras y otras bacterias beneficiosas.',
        imagen: {
          src: '/images/kefir_photo.png',
          alt: 'Kéfir de leche con granos probióticos'
        }
      },
      {
        nombre: 'Chucrut',
        descripcion: 'Col fermentada que contiene L. plantarum y otras especies de Lactobacillus, junto con nutrientes y compuestos bioactivos.',
        imagen: {
          src: '/images/chucrut _photo.png',
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
  
  'bifidobacterium': {
    titulo: 'Bifidobacterium: El Guardián del Colon',
    descripcion: 'Explora las bacterias Bifidobacterium, esenciales para la salud intestinal y el desarrollo del microbioma desde la infancia.',
    imagenPrincipal: {
      src: '/images/bifido.png',
      alt: 'Bacterias Bifidobacterium - probióticos para el colon'
    },
    fechaPublicacion: '2024-05-15T00:00:00+00:00',
    introduccion: `
      <p>Las <em>Bifidobacterium</em> son bacterias anaerobias estrictas que constituyen uno de los géneros más importantes del microbioma humano. Estas bacterias reciben su nombre por su forma característica en "Y" o bifurcada, observada por primera vez por Henri Tissier en 1899.</p>
      <p>Son especialmente abundantes en los intestinos de los bebés y juegan un papel crucial en el desarrollo del sistema inmune. Con la edad, su presencia disminuye gradualmente, por lo que su suplementación puede ser particularmente beneficiosa en adultos y personas mayores.</p>
      <p>Estas bacterias son fundamentales para mantener la salud del colon, producir nutrientes esenciales y establecer una barrera protectora contra patógenos. Su importancia en la salud humana las convierte en uno de los probióticos más estudiados y recomendados.</p>
    `,
    caracteristicas: [
      {
        titulo: 'Anaerobias estrictas',
        descripcion: 'Requieren ambientes libres de oxígeno para sobrevivir, lo que las hace ideales para colonizar el colon donde las condiciones anaeróbicas son naturales.'
      },
      {
        titulo: 'Forma bifurcada característica',
        descripcion: 'Su morfología única en forma de "Y" o bifurcada las distingue fácilmente de otras bacterias probióticas bajo el microscopio.'
      },
      {
        titulo: 'Dominantes en la infancia',
        descripcion: 'Constituyen hasta el 90% del microbioma intestinal en bebés, estableciendo la base para un sistema inmune saludable.'
      },
      {
        titulo: 'Productoras de ácidos orgánicos',
        descripcion: 'Generan ácido acético y ácido láctico, creando un ambiente intestinal ácido que inhibe el crecimiento de bacterias patógenas.'
      },
      {
        titulo: 'Metabolismo especializado',
        descripcion: 'Poseen enzimas únicas que les permiten metabolizar oligosacáridos complejos y fibras prebióticas específicas.'
      },
      {
        titulo: 'Resistencia al estrés',
        descripcion: 'Aunque sensibles al oxígeno, muestran notable resistencia a cambios de pH y temperatura dentro del rango intestinal normal.'
      }
    ],
    beneficios: [
      {
        titulo: 'Salud óptima del colon',
        descripcion: 'Producen ácidos grasos de cadena corta (AGCC) como butirato, acetato y propionato que nutren las células del colon, mantienen la integridad de la barrera intestinal y reducen la inflamación colónica.'
      },
      {
        titulo: 'Síntesis de vitaminas esenciales',
        descripcion: 'Producen vitaminas del complejo B, especialmente ácido fólico, vitamina B12, tiamina y riboflavina, contribuyendo significativamente al estado nutricional del organismo.'
      },
      {
        titulo: 'Modulación inmunológica avanzada',
        descripcion: 'Estimulan la producción de IgA secretora, modulan la respuesta de células T reguladoras y ayudan en el desarrollo de tolerancia inmunológica, previniendo alergias y enfermedades autoinmunes.'
      },
      {
        titulo: 'Prevención de infecciones intestinales',
        descripcion: 'Compiten efectivamente con patógenos por nutrientes y sitios de adhesión, producen bacteriocinas naturales y mantienen un pH intestinal que inhibe el crecimiento de microorganismos dañinos.'
      },
      {
        titulo: 'Mejora de la digestión de carbohidratos',
        descripcion: 'Poseen enzimas especializadas para degradar oligosacáridos complejos, fibras prebióticas y almidones resistentes, mejorando la digestión y absorción de nutrientes.'
      },
      {
        titulo: 'Regulación del metabolismo',
        descripcion: 'Influyen en el metabolismo de lípidos y glucosa, contribuyendo al control del peso corporal y la sensibilidad a la insulina.'
      },
      {
        titulo: 'Salud mental y cognitiva',
        descripcion: 'A través del eje intestino-cerebro, producen neurotransmisores y metabolitos que pueden influir positivamente en el estado de ánimo, la ansiedad y la función cognitiva.'
      },
      {
        titulo: 'Protección hepática',
        descripcion: 'Sus metabolitos pueden ayudar a reducir la carga tóxica en el hígado y mejorar la función de detoxificación hepática.'
      }
    ],
    cepasPopulares: [
      {
        nombre: 'Bifidobacterium bifidum',
        descripcion: 'Una de las primeras especies en colonizar el intestino infantil, fundamental para el desarrollo del sistema inmune temprano.',
        beneficios: ['Salud intestinal infantil', 'Apoyo inmunológico', 'Digestión de carbohidratos', 'Prevención de alergias', 'Síntesis de vitamina K'],
        condiciones: ['Síndrome del intestino irritable', 'Diarrea infantil', 'Estreñimiento', 'Intolerancia a la lactosa']
      },
      {
        nombre: 'Bifidobacterium longum',
        descripcion: 'Especie versátil con múltiples subespecies, conocida por su longevidad en el intestino y beneficios amplios para todas las edades.',
        beneficios: ['Reducción de inflamación', 'Salud mental', 'Longevidad intestinal', 'Antioxidante natural', 'Mejora de la barrera intestinal'],
        condiciones: ['Enfermedad inflamatoria intestinal', 'Ansiedad', 'Colesterol elevado', 'Síndrome metabólico']
      },
      {
        nombre: 'Bifidobacterium infantis',
        descripcion: 'Especializada en metabolizar oligosacáridos complejos, esencial para la salud digestiva infantil.',
        beneficios: ['Digestión de oligosacáridos', 'Desarrollo inmune infantil', 'Prevención de cólicos', 'Reducción de inflamación intestinal'],
        condiciones: ['Cólicos del lactante', 'Diarrea asociada a antibióticos', 'Dermatitis atópica infantil']
      },
      {
        nombre: 'Bifidobacterium animalis subsp. lactis',
        descripcion: 'Cepa probiótica ampliamente utilizada en productos comerciales, conocida por su estabilidad y beneficios digestivos.',
        beneficios: ['Regulación del tránsito intestinal', 'Mejora de la inmunidad', 'Reducción de infecciones respiratorias', 'Tolerancia a la lactosa'],
        condiciones: ['Estreñimiento crónico', 'Inmunodeficiencias leves', 'Síndrome del intestino irritable']
      },
      {
        nombre: 'Bifidobacterium breve',
        descripcion: 'Cepa pequeña pero poderosa, especialmente beneficiosa para la salud intestinal y la función inmune en niños.',
        beneficios: ['Protección contra alergias', 'Mejora de la función intestinal', 'Apoyo en prematuros', 'Producción de vitaminas'],
        condiciones: ['Alergias alimentarias', 'Enterocolitis necrotizante', 'Dermatitis atópica']
      }
    ],
    alimentosNaturales: [
      {
        nombre: 'Yogur natural',
        descripcion: 'Fuente tradicional de bifidobacterias, especialmente cuando está marcado como contiene "cultivos vivos y activos".',
        imagen: {
          src: '/images/yogurt_photo.png',
          alt: 'Yogur natural con cultivos probióticos activos'
        }
      },
      {
        nombre: 'Kéfir',
        descripcion: 'Bebida fermentada rica en diversas cepas de bifidobacterias y otros probióticos beneficiosos.',
        imagen: {
          src: '/images/kefir_photo.png',
          alt: 'Kéfir casero fuente natural de probióticos'
        }
      },
      {
        nombre: 'Productos lácteos fermentados',
        descripcion: 'Quesos madurados, leches fermentadas y otros productos lácteos tradicionales pueden contener bifidobacterias naturales.',
        imagen: {
          src: '/images/quesos.png',
          alt: 'Quesos fermentados ricos en probióticos naturales'
        }
      }
    ],
    estudiosRelevantes: [
      {
        titulo: 'Bifidobacterium y salud mental: eje intestino-cerebro',
        autores: 'Pinto-Sanchez MI, et al.',
        año: '2017',
        publicacion: 'Clinical and Translational Gastroenterology',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28323273/',
        resumen: 'Estudio que demuestra la conexión entre Bifidobacterium y la mejora del estado de ánimo a través del eje intestino-cerebro, mostrando reducciones significativas en ansiedad y depresión.'
      },
      {
        titulo: 'Efectos de B. infantis en la inflamación intestinal',
        autores: 'Underwood MA, et al.',
        año: '2020',
        publicacion: 'Nutrients',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32708578/',
        resumen: 'Investigación que documenta cómo B. infantis reduce marcadores inflamatorios en el intestino de bebés prematuros y mejora la función de barrera intestinal.'
      },
      {
        titulo: 'Bifidobacterium longum y función cognitiva en adultos mayores',
        autores: 'Tamura T, et al.',
        año: '2021',
        publicacion: 'Frontiers in Aging Neuroscience',
        resumen: 'Estudio que demuestra mejoras en memoria y función ejecutiva en adultos mayores tras suplementación con B. longum durante 12 semanas.'
      },
      {
        titulo: 'Papel de las bifidobacterias en la prevención de alergias',
        autores: 'Kalliomaki M, et al.',
        año: '2019',
        publicacion: 'Current Opinion in Allergy and Clinical Immunology',
        resumen: 'Revisión sistemática que confirma el papel protector de las bifidobacterias contra el desarrollo de alergias y asma en la infancia.'
      },
      {
        titulo: 'Bifidobacterium animalis y síndrome del intestino irritable',
        autores: 'Ford AC, et al.',
        año: '2018',
        publicacion: 'The Lancet Gastroenterology & Hepatology',
        resumen: 'Meta-análisis que demuestra la efectividad de B. animalis subsp. lactis en la reducción de síntomas del intestino irritable.'
      }
    ],
    faq: [
      {
        pregunta: '¿Por qué disminuyen las Bifidobacterium con la edad?',
        respuesta: 'Los cambios en la dieta (menor consumo de fibras prebióticas), el estrés crónico, el uso de medicamentos (especialmente antibióticos), cambios hormonales y el envejecimiento natural del sistema digestivo contribuyen a la reducción progresiva de estas bacterias. La suplementación dirigida puede ayudar a mantener niveles saludables.'
      },
      {
        pregunta: '¿Cuál es la diferencia entre las especies de Bifidobacterium?',
        respuesta: 'Cada especie tiene características únicas: B. infantis es especialista en oligosacáridos de leche materna, B. longum es versátil y persistente, B. bifidum es excelente para la inmunidad, y B. animalis subsp. lactis es muy estable en productos comerciales. La diversidad es clave para obtener beneficios óptimos.'
      },
      {
        pregunta: '¿Pueden las Bifidobacterium sobrevivir al ácido estomacal?',
        respuesta: 'Las bifidobacterias son naturalmente sensibles al ácido, pero muchas cepas probióticas comerciales están formuladas con recubrimientos entéricos o en formas que mejoran su supervivencia. Tomarlas con comida también ayuda a protegerlas durante el tránsito gástrico.'
      },
      {
        pregunta: '¿Es seguro dar Bifidobacterium a bebés?',
        respuesta: 'Sí, las bifidobacterias son naturalmente dominantes en bebés sanos. Cepas específicas como B. infantis han demostrado ser seguras y beneficiosas para bebés, especialmente prematuros. Sin embargo, siempre consulte con el pediatra antes de usar suplementos probióticos.'
      },
      {
        pregunta: '¿Cuánto tiempo tardan en hacer efecto las Bifidobacterium?',
        respuesta: 'Los primeros beneficios pueden notarse en 1-2 semanas, pero los efectos óptimos generalmente se observan después de 4-8 semanas de uso consistente. La colonización estable del intestino requiere tiempo y puede beneficiarse del consumo regular de alimentos prebióticos.'
      },
      {
        pregunta: '¿Qué alimentos ayudan a que crezcan las Bifidobacterium?',
        respuesta: 'Los prebióticos como inulina, fructooligosacáridos (FOS), galactooligosacáridos (GOS), y fibras de frutas y verduras alimentan específicamente a las bifidobacterias. Alimentos ricos en estos incluyen: ajo, cebolla, plátanos, espárragos, alcachofas y legumbres.'
      }
    ]
  },

  'saccharomyces-boulardii': {
    titulo: 'Saccharomyces boulardii: La Levadura Probiótica',
    descripcion: 'Descubre S. boulardii, la única levadura probiótica ampliamente estudiada, resistente a antibióticos y efectiva contra la diarrea.',
    imagenPrincipal: {
      src: '/images/saccaromises.png',
      alt: 'Saccharomyces boulardii - levadura probiótica única'
    },
    fechaPublicacion: '2024-05-20T00:00:00+00:00',
    introduccion: `
      <p><em>Saccharomyces boulardii</em> es una levadura probiótica única, diferente de las bacterias probióticas tradicionales. Fue descubierta en 1923 y ha sido ampliamente estudiada por sus propiedades terapéuticas.</p>
      <p>Su principal ventaja es su resistencia a los antibióticos, lo que la convierte en el probiótico ideal durante y después de tratamientos antibióticos.</p>
    `,
    caracteristicas: [
      {
        titulo: 'Levadura no patógena',
        descripcion: 'Es una levadura beneficiosa, diferente de las bacterias probióticas comunes.'
      },
      {
        titulo: 'Resistente a antibióticos',
        descripcion: 'No se ve afectada por tratamientos antibióticos, mantiendo sus beneficios durante estos tratamientos.'
      },
      {
        titulo: 'Termoresistente',
        descripcion: 'Sobrevive a temperaturas más altas que muchas bacterias probióticas.'
      }
    ],
    beneficios: [
      {
        titulo: 'Prevención de diarrea',
        descripcion: 'Especialmente efectiva contra la diarrea asociada a antibióticos y la diarrea del viajero.'
      },
      {
        titulo: 'Protección intestinal',
        descripcion: 'Fortalece la barrera intestinal y reduce la inflamación.'
      },
      {
        titulo: 'Antifúngica natural',
        descripcion: 'Ayuda a controlar el crecimiento excesivo de Candida y otros hongos patógenos.'
      }
    ],
    cepasPopulares: [
      {
        nombre: 'Saccharomyces boulardii CNCM I-745',
        descripcion: 'La cepa más estudiada y ampliamente utilizada en suplementos.',
        beneficios: ['Diarrea asociada a antibióticos', 'Diarrea del viajero', 'Síndrome del intestino irritable']
      }
    ],
    estudiosRelevantes: [
      {
        titulo: 'Eficacia de S. boulardii en la prevención de diarrea asociada a antibióticos',
        autores: 'McFarland LV, et al.',
        año: '2016',
        publicacion: 'Cochrane Database of Systematic Reviews',
        resumen: 'Meta-análisis que confirma la eficacia de S. boulardii para prevenir la diarrea asociada a antibióticos en adultos y niños.'
      }
    ],
    faq: [
      {
        pregunta: '¿Puedo tomar S. boulardii con antibióticos?',
        respuesta: 'Sí, S. boulardii es resistente a la mayoría de antibióticos y puede tomarse simultáneamente. Es especialmente recomendada para prevenir los efectos secundarios gastrointestinales de los antibióticos.'
      }
    ]
  }
  
  // Más tipos de probióticos se agregarán aquí
};

// Exportar también un arreglo de slugs disponibles para la generación de sitemap o navegación
export const tipoSlugs = Object.keys(tiposData); 
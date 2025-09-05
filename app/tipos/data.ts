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
    titulo: 'Saccharomyces boulardii: La Levadura Probiótica Más Estudiada',
    descripcion: 'Descubre todo sobre Saccharomyces boulardii, la única levadura probiótica resistente a antibióticos, ideal para diarrea, síndrome del intestino irritable y recuperación digestiva.',
    imagenPrincipal: {
      src: '/images/saccaromices_hero.png',
      alt: 'Saccharomyces boulardii - levadura probiótica única resistente a antibióticos'
    },
    fechaPublicacion: '2024-05-20T00:00:00+00:00',
    introduccion: `
      <p><strong>Saccharomyces boulardii</strong> es una levadura probiótica única que se diferencia fundamentalmente de las bacterias probióticas tradicionales. Descubierta por el microbiólogo francés Henri Boulard en 1923 en el sudeste asiático, esta levadura tropical ha revolucionado el campo de la gastroenterología probiótica.</p>
      
      <p>Su característica más distintiva es su <strong>resistencia natural a los antibióticos</strong>, lo que la convierte en el probiótico de elección durante y después de tratamientos antibióticos. A diferencia de las bacterias probióticas que pueden ser eliminadas por los antimicrobianos, S. boulardii mantiene su viabilidad y efectividad.</p>
      
      <p>Con más de <strong>100 años de investigación</strong> y cientos de estudios clínicos que respaldan su eficacia, S. boulardii ha demostrado ser particularmente efectiva para la <strong>prevención y tratamiento de diarrea</strong>, especialmente la asociada a antibióticos, la diarrea del viajero, y diversas condiciones gastrointestinales.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <h3 class="text-lg font-semibold text-blue-800 mb-2">💡 Dato Científico Clave</h3>
        <p class="text-blue-700">S. boulardii es la única levadura clasificada oficialmente como probiótico por la Organización Mundial de la Salud (OMS), con un perfil de seguridad excepcional respaldado por décadas de uso clínico.</p>
      </div>
    `,
    caracteristicas: [
      {
        titulo: 'Levadura no patógena única',
        descripcion: 'Es la única levadura probiótica reconocida científicamente, completamente diferente de las bacterias probióticas comunes. Su estructura celular eucariota le confiere propiedades únicas de resistencia y estabilidad.'
      },
      {
        titulo: 'Resistencia total a antibióticos',
        descripcion: 'Mantiene su viabilidad durante tratamientos antibióticos de amplio espectro, incluyendo penicilinas, cefalosporinas, quinolonas y macrólidos. Esta resistencia es natural, no adquirida genéticamente.'
      },
      {
        titulo: 'Termoresistencia excepcional',
        descripcion: 'Sobrevive a temperaturas de hasta 37°C (temperatura corporal) y es estable a temperatura ambiente, a diferencia de muchas bacterias probióticas que requieren refrigeración.'
      },
      {
        titulo: 'Tránsito intestinal optimizado',
        descripcion: 'No coloniza permanentemente el intestino, sino que actúa de forma transitoria, ejerciendo sus efectos beneficiosos durante su paso por el tracto digestivo (5-6 días).'
      },
      {
        titulo: 'Producción de metabolitos bioactivos',
        descripcion: 'Secreta factores tróficos, proteasas y otras sustancias bioactivas que protegen la mucosa intestinal y modulan la respuesta inmune local.'
      },
      {
        titulo: 'Compatibilidad farmacológica',
        descripcion: 'Puede administrarse simultáneamente con medicamentos sin interferencias, incluyendo antibióticos, antiinflamatorios y otros probióticos bacterianos.'
      }
    ],
    beneficios: [
      {
        titulo: 'Prevención de diarrea asociada a antibióticos (DAA)',
        descripcion: 'Reduce el riesgo de DAA en un 57% según meta-análisis. Especialmente efectiva contra Clostridium difficile, previniendo colitis pseudomembranosa en pacientes hospitalizados.'
      },
      {
        titulo: 'Tratamiento de diarrea aguda infecciosa',
        descripcion: 'Reduce la duración de la diarrea aguda en niños y adultos en 1-2 días. Efectiva contra rotavirus, norovirus y bacterias enteropatógenas como E. coli y Salmonella.'
      },
      {
        titulo: 'Prevención de diarrea del viajero',
        descripcion: 'Reduce la incidencia de diarrea del viajero en un 40-50% cuando se toma profilácticamente. Especialmente útil para viajes a áreas de alto riesgo en Asia, África y América Latina.'
      },
      {
        titulo: 'Manejo del síndrome del intestino irritable (SII)',
        descripcion: 'Mejora síntomas del SII con predominio de diarrea, reduciendo la frecuencia de evacuaciones, dolor abdominal y distensión. Efectos observados desde las 4 semanas de tratamiento.'
      },
      {
        titulo: 'Fortalecimiento de la barrera intestinal',
        descripcion: 'Estimula la producción de inmunoglobulina A secretoria (sIgA), fortalece las uniones estrechas entre enterocitos y reduce la permeabilidad intestinal ("leaky gut").'
      },
      {
        titulo: 'Actividad antifúngica natural',
        descripcion: 'Controla el crecimiento excesivo de Candida albicans y otros hongos oportunistas. Produce sustancias antifúngicas como el ácido caprílico y capriálico.'
      },
      {
        titulo: 'Modulación inmune intestinal',
        descripcion: 'Equilibra la respuesta inmune Th1/Th2, reduce citoquinas pro-inflamatorias (TNF-α, IL-1β) y estimula la producción de citoquinas anti-inflamatorias (IL-10).'
      },
      {
        titulo: 'Protección contra toxinas bacterianas',
        descripcion: 'Neutraliza toxinas de C. difficile, V. cholerae y E. coli enterotoxigénica. Secreta proteasas que degradan las toxinas A y B de C. difficile.'
      },
      {
        titulo: 'Mejora de la digestión y absorción',
        descripcion: 'Estimula enzimas digestivas pancreáticas e intestinales, mejora la absorción de nutrientes y restaura la función digestiva post-antibiótico.'
      },
      {
        titulo: 'Reducción de inflamación sistémica',
        descripcion: 'Disminuye marcadores inflamatorios sistémicos como proteína C reactiva (PCR) y velocidad de sedimentación globular (VSG) en condiciones gastrointestinales crónicas.'
      }
    ],
    cepasPopulares: [
      {
        nombre: 'Saccharomyces boulardii CNCM I-745',
        descripcion: 'La cepa de referencia mundial, más estudiada y utilizada comercialmente. Depositada en la Colección Nacional de Cultivos de Microorganismos de Francia (CNCM).',
        beneficios: [
          'Diarrea asociada a antibióticos (evidencia nivel A)',
          'Diarrea del viajero (prevención y tratamiento)',
          'Síndrome del intestino irritable con diarrea',
          'Colitis ulcerosa (terapia adyuvante)',
          'Infección recurrente por C. difficile'
        ],
        condiciones: [
          'Gastroenteritis aguda en niños',
          'Diarrea post-radioterapia',
          'Síndrome de malabsorción post-infecciosa',
          'Prevención de infecciones nosocomiales'
        ]
      },
      {
        nombre: 'Saccharomyces boulardii Hansen CBS 5926',
        descripcion: 'Cepa ampliamente utilizada en Europa, con estudios específicos en poblaciones pediátricas y geriátricas.',
        beneficios: [
          'Diarrea aguda en lactantes y niños',
          'Prevención de diarrea nosocomial',
          'Restauración de microbiota post-antibiótico',
          'Mejora de síntomas en enfermedad de Crohn'
        ]
      },
      {
        nombre: 'Saccharomyces boulardii Biocodex',
        descripcion: 'Formulación farmacéutica específica con estudios de biodisponibilidad y estabilidad optimizados.',
        beneficios: [
          'Diarrea asociada a H. pylori y su tratamiento',
          'Prevención de efectos secundarios de quimioterapia',
          'Diarrea en pacientes inmunodeprimidos',
          'Síndrome de intestino corto'
        ]
      }
    ],
    alimentosNaturales: [
      {
        nombre: 'Té de Kombucha fermentado',
        descripcion: 'Algunas variedades de kombucha contienen S. boulardii como parte de su SCOBY (cultivo simbiótico), aunque en concentraciones variables.',
        imagen: {
          src: '/images/kombucha.png',
          alt: 'Té de kombucha fermentado con cultivos probióticos'
        }
      },
      {
        nombre: 'Fruta del litchi fermentada',
        descripcion: 'S. boulardii fue originalmente aislada de la piel de frutos de litchi fermentados en el sudeste asiático, donde se utilizaba tradicionalmente.',
        imagen: {
          src: '/images/kynche.png',
          alt: 'Fruta de litchi fermentada, fuente original de S. boulardii'
        }
      },
      {
        nombre: 'Té de mangostán fermentado',
        descripcion: 'Bebida tradicional del sudeste asiático donde S. boulardii puede encontrarse naturalmente durante la fermentación de esta fruta tropical.',
        imagen: {
          src: '/images/mangostino.png',
          alt: 'Té de mangostán fermentado con levaduras probióticas'
        }
      }
    ],
    estudiosRelevantes: [
      {
        titulo: 'Efficacy of Saccharomyces boulardii for prevention of antibiotic-associated diarrhea: a meta-analysis of randomized controlled trials',
        autores: 'McFarland LV, Goh S, et al.',
        año: '2016',
        publicacion: 'Cochrane Database of Systematic Reviews, Issue 4',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27171137/',
        resumen: 'Meta-análisis de 31 estudios (5,029 participantes) confirma que S. boulardii reduce significativamente el riesgo de diarrea asociada a antibióticos en un 57% (RR 0.43, IC 95% 0.31-0.58). La eficacia es consistente en adultos y niños.'
      },
      {
        titulo: 'Saccharomyces boulardii in the treatment of Clostridium difficile-associated disease',
        autores: 'Pothoulakis C, Kelly CP, et al.',
        año: '2018',
        publicacion: 'Clinical Microbiology Reviews, 31(1)',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29142077/',
        resumen: 'Revisión exhaustiva que demuestra la eficacia de S. boulardii contra C. difficile. Reduce recurrencias en 50% y mejora síntomas clínicos. Mecanismo incluye neutralización de toxinas A y B.'
      },
      {
        titulo: 'Prevention of travelers\' diarrhea with Saccharomyces boulardii: Results of a double-blind placebo-controlled study',
        autores: 'Kollaritsch H, Holst H, et al.',
        año: '2017',
        publicacion: 'Travel Medicine and Infectious Disease, 18:64-71',
        resumen: 'Estudio doble ciego en 1,016 viajeros demuestra reducción del 47% en incidencia de diarrea del viajero. Especialmente efectiva en viajes a África subsahariana y sudeste asiático.'
      },
      {
        titulo: 'Saccharomyces boulardii improves intestinal barrier function in children with acute gastroenteritis',
        autores: 'Villarruel G, Rubio DM, et al.',
        año: '2019',
        publicacion: 'Pediatric Research, 85(5):574-581',
        resumen: 'Estudio pediátrico muestra que S. boulardii restaura la función de barrera intestinal medida por ratio lactulosa/manitol. Reduce duración de síntomas en 1.5 días promedio.'
      },
      {
        titulo: 'Anti-inflammatory properties of Saccharomyces boulardii in irritable bowel syndrome',
        autores: 'Jawhara S, Poulain D, et al.',
        año: '2020',
        publicacion: 'World Journal of Gastroenterology, 26(20):2368-2379',
        resumen: 'Estudio clínico randomizado en 194 pacientes con SII-D muestra mejora significativa en escala Rome IV. Reduce IL-1β, TNF-α y aumenta IL-10. Efectos sostenidos 8 semanas post-tratamiento.'
      }
    ],
    faq: [
      {
        pregunta: '¿Puedo tomar S. boulardii junto con antibióticos?',
        respuesta: 'Sí, esta es precisamente una de las principales ventajas de S. boulardii. Al ser una levadura, es naturalmente resistente a todos los antibióticos comúnmente utilizados y puede tomarse simultáneamente sin pérdida de eficacia. Se recomienda tomar durante todo el tratamiento antibiótico y continuar 1-2 semanas después.'
      },
      {
        pregunta: '¿Cuál es la dosis recomendada de S. boulardii?',
        respuesta: 'La dosis estándar para adultos es de 250-500 mg (5-10 mil millones de UFC) dos veces al día. Para prevención de diarrea del viajero: 250 mg/día comenzando 5 días antes del viaje. Para niños: 250 mg/día. Para diarrea aguda: hasta 1000 mg/día dividido en 2-3 tomas.'
      },
      {
        pregunta: '¿S. boulardii necesita refrigeración?',
        respuesta: 'No necesariamente. S. boulardii es estable a temperatura ambiente (hasta 25°C) durante períodos prolongados, a diferencia de muchas bacterias probióticas. Sin embargo, la refrigeración puede extender su vida útil y mantener mayor potencia, especialmente en climas cálidos.'
      },
      {
        pregunta: '¿Cuánto tiempo permanece S. boulardii en el intestino?',
        respuesta: 'S. boulardii no coloniza permanentemente el intestino. Permanece activa durante su tránsito intestinal (5-6 días) y es eliminada naturalmente. Esto es una ventaja ya que no altera permanentemente la microbiota residente, pero requiere administración continua para mantener beneficios.'
      },
      {
        pregunta: '¿S. boulardii es segura para personas inmunodeprimidas?',
        respuesta: 'Aunque S. boulardii tiene un excelente perfil de seguridad, en pacientes severamente inmunodeprimidos (ej. trasplante de médula ósea, VIH avanzado) se han reportado casos raros de fungemia. Se recomienda consulta médica especializada en estos casos específicos.'
      },
      {
        pregunta: '¿Puede S. boulardii causar infecciones por hongos?',
        respuesta: 'Es extremadamente raro. S. boulardii es no patógena y no está relacionada con Candida albicans. De hecho, tiene propiedades antifúngicas naturales que ayudan a controlar el crecimiento de hongos patógenos. Los casos de infección son excepcionales y limitados a pacientes críticos con catéteres centrales.'
      },
      {
        pregunta: '¿S. boulardii interactúa con otros medicamentos?',
        respuesta: 'S. boulardii no tiene interacciones medicamentosas conocidas. Es compatible con antibióticos, antiinflamatorios, medicamentos para SII, y otros probióticos. Su uso es seguro en combinación con la mayoría de tratamientos farmacológicos convencionales.'
      },
      {
        pregunta: '¿Cuándo veré resultados con S. boulardii?',
        respuesta: 'Para diarrea aguda: mejora en 1-3 días. Para prevención de diarrea asociada a antibióticos: efectos desde el primer día de co-administración. Para SII: mejora gradual en 2-4 semanas. Para restauración post-antibiótico: 1-2 semanas de tratamiento completo.'
      }
    ]
  }
  
  // Más tipos de probióticos se agregarán aquí
};

// Exportar también un arreglo de slugs disponibles para la generación de sitemap o navegación
export const tipoSlugs = Object.keys(tiposData); 
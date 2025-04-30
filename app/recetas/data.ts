// Archivo de datos para las recetas probióticas
// En un entorno de producción, estos datos podrían venir de una API o CMS

interface RecetaData {
  titulo: string;
  descripcion: string;
  imagenPrincipal: {
    src: string;
    alt: string;
  };
  fechaPublicacion: string;
  tiempoPreparacion: string;
  dificultad: 'Fácil' | 'Media' | 'Difícil';
  porciones: number;
  introduccion: string;
  ingredientes: {
    nombre: string;
    cantidad: string;
    nota?: string;
  }[];
  materialesRequeridos?: string[];
  instrucciones: {
    paso: string;
    descripcion: string;
    imagen?: {
      src: string;
      alt: string;
    };
  }[];
  consejos?: string[];
  beneficios: {
    titulo: string;
    descripcion: string;
  }[];
  probioticosPresentes: {
    nombre: string;
    descripcion: string;
  }[];
  variaciones?: {
    titulo: string;
    descripcion: string;
  }[];
  faq: {
    pregunta: string;
    respuesta: string;
  }[];
  notas?: string;
}

interface RecetasData {
  [key: string]: RecetaData;
}

export const recetasData: RecetasData = {
  'yogur-casero': {
    titulo: 'Yogur Casero Probiótico',
    descripcion: 'Aprende a preparar yogur casero rico en probióticos con ingredientes simples y sin conservantes artificiales.',
    imagenPrincipal: {
      src: '/images/yogur-casero.png',
      alt: 'Yogur casero en recipiente de vidrio con frutas frescas'
    },
    fechaPublicacion: '2024-05-12T00:00:00+00:00',
    tiempoPreparacion: '24 horas',
    dificultad: 'Fácil',
    porciones: 4,
    introduccion: `
      <p>El yogur es uno de los alimentos probióticos más accesibles y versátiles. Prepararlo en casa no solo es más económico que comprarlo, sino que también te permite controlar completamente sus ingredientes, evitando azúcares añadidos, estabilizantes y conservantes.</p>
      <p>Hacer yogur casero es una práctica tradicional en muchas culturas por una buena razón: el proceso es simple, requiere pocos ingredientes y el resultado es un alimento nutritivo, rico en proteínas y cargado de bacterias beneficiosas para tu microbiota intestinal.</p>
      <p>En esta receta, aprenderás el proceso básico para elaborar yogur casero cremoso y delicioso, además de consejos para personalizarlo según tus preferencias.</p>
    `,
    ingredientes: [
      {
        nombre: 'leche entera',
        cantidad: '1 litro',
        nota: 'preferiblemente orgánica'
      },
      {
        nombre: 'yogur natural con cultivos vivos',
        cantidad: '2 cucharadas',
        nota: 'como cultivo iniciador'
      }
    ],
    materialesRequeridos: [
      'Olla de acero inoxidable o esmaltada',
      'Termómetro de cocina',
      'Frascos de vidrio con tapa',
      'Manta o toalla',
      'Cuchara de madera o silicona'
    ],
    instrucciones: [
      {
        paso: 'Esterilizar los recipientes',
        descripcion: 'Lava bien los frascos de vidrio y sus tapas. Esterilízalos sumergiéndolos en agua hirviendo durante 5 minutos, o pasándolos por el lavavajillas en ciclo caliente. Déjalos secar boca abajo sobre un paño limpio.',
        imagen: {
          src: '/images/esterilizar-frascos.png',
          alt: 'Frascos de vidrio siendo esterilizados'
        }
      },
      {
        paso: 'Calentar la leche',
        descripcion: 'Vierte la leche en una olla y caliéntala a fuego medio-bajo hasta alcanzar 85°C (185°F). Mantén esta temperatura durante 5-10 minutos, removiendo ocasionalmente. Este paso desnaturaliza las proteínas de la leche, lo que resultará en un yogur más espeso.',
        imagen: {
          src: '/images/calentar-leche.png',
          alt: 'Leche calentándose en una olla'
        }
      },
      {
        paso: 'Enfriar la leche',
        descripcion: 'Retira la olla del fuego y deja que la leche se enfríe hasta 43-46°C (110-115°F). Para acelerar este proceso, puedes sumergir parcialmente la olla en un baño de agua fría, removiendo constantemente.',
      },
      {
        paso: 'Añadir el cultivo iniciador',
        descripcion: 'Una vez que la leche alcance la temperatura adecuada, añade las 2 cucharadas de yogur natural. Mezcla suavemente hasta que esté completamente incorporado.',
        imagen: {
          src: '/images/anadir-cultivo.png',
          alt: 'Añadiendo cultivo iniciador a la leche'
        }
      },
      {
        paso: 'Incubación',
        descripcion: 'Vierte la mezcla en los frascos esterilizados y ciérralos. Envuélvelos en una manta o toalla para mantener el calor, y colócalos en un lugar cálido y sin corrientes de aire durante 6-12 horas. Cuanto más tiempo lo incubes, más ácido será el yogur. Una opción es usar una yogurtera o el horno con la luz encendida.',
      },
      {
        paso: 'Refrigeración',
        descripcion: 'Una vez que el yogur haya alcanzado la consistencia deseada, refrigéralo durante al menos 4 horas antes de consumirlo. Esto detendrá el proceso de fermentación y ayudará a que el yogur se asiente.',
      }
    ],
    consejos: [
      'Reserva 2 cucharadas de tu yogur casero para usar como cultivo iniciador en tu próximo lote.',
      'Para obtener un yogur más espeso, puedes filtrar el producto final a través de una gasa o un paño de muselina.',
      'Evita mezclar o agitar el yogur durante la incubación para no interrumpir el proceso de fermentación.',
      'Si prefieres un yogur más dulce, puedes añadir miel, frutas o mermelada casera al servirlo, no durante la fermentación.'
    ],
    beneficios: [
      {
        titulo: 'Rico en bacterias beneficiosas',
        descripcion: 'El yogur casero contiene una mayor cantidad de bacterias probióticas viables que muchos productos comerciales, ya que no pasa por procesos de pasteurización después de la fermentación.'
      },
      {
        titulo: 'Proteínas y calcio de alta calidad',
        descripcion: 'Es una excelente fuente de proteínas completas y calcio biodisponible, nutrientes esenciales para la salud ósea y muscular.'
      },
      {
        titulo: 'Mejora la digestión láctea',
        descripcion: 'Durante la fermentación, las bacterias descomponen parcialmente la lactosa, haciendo que el yogur sea más digerible para personas con intolerancia leve a la lactosa.'
      },
      {
        titulo: 'Sin aditivos artificiales',
        descripcion: 'Al prepararlo en casa, evitas conservantes, estabilizantes, azúcares añadidos y otros aditivos presentes en muchos yogures comerciales.'
      }
    ],
    probioticosPresentes: [
      {
        nombre: 'Lactobacillus bulgaricus',
        descripcion: 'Una de las bacterias características del yogur tradicional, contribuye a su acidez y aroma característico. Ayuda a la digestión de la lactosa y tiene propiedades antiinflamatorias.'
      },
      {
        nombre: 'Streptococcus thermophilus',
        descripcion: 'Trabaja en sinergia con L. bulgaricus para fermentar la leche. Produce ácido láctico y contribuye a la textura cremosa del yogur. Puede ayudar a mejorar la salud digestiva y fortalecer el sistema inmune.'
      },
      {
        nombre: 'Cultivos adicionales (según el yogur iniciador)',
        descripcion: 'Dependiendo del yogur que uses como iniciador, puedes incorporar una variedad más amplia de cepas probióticas como Lactobacillus acidophilus, Bifidobacterium lactis, Lactobacillus casei y otros.'
      }
    ],
    variaciones: [
      {
        titulo: 'Yogur griego casero',
        descripcion: 'Después de la fermentación, coloca el yogur en un colador forrado con tela de algodón o filtro de café y déjalo drenar en la nevera durante 2-4 horas. El líquido que se separa (suero) puede utilizarse en batidos o para fermentar otros alimentos.'
      },
      {
        titulo: 'Yogur de coco',
        descripcion: 'Sustituye la leche de vaca por leche de coco (preferiblemente alta en grasa). Ten en cuenta que necesitarás usar un cultivo iniciador más potente, ya que la fermentación puede ser más lenta.'
      },
      {
        titulo: 'Yogur de baja temperatura',
        descripcion: 'Para preservar más bacterias probióticas, puedes fermentar a una temperatura más baja (38-40°C) durante más tiempo (12-24 horas). Esto resulta en un yogur menos ácido pero con mayor actividad probiótica.'
      }
    ],
    faq: [
      {
        pregunta: '¿Por qué mi yogur quedó muy líquido?',
        respuesta: 'Esto puede deberse a varias razones: la leche no se calentó lo suficiente para desnaturalizar las proteínas, el cultivo iniciador no estaba activo, la temperatura de incubación fue demasiado alta o baja, o el tiempo de incubación fue insuficiente. Asegúrate de seguir cuidadosamente cada paso de la receta.'
      },
      {
        pregunta: '¿Puedo usar leche descremada o semidescremada?',
        respuesta: 'Sí, puedes usar cualquier tipo de leche, pero ten en cuenta que el contenido de grasa afectará la cremosidad del yogur. La leche entera producirá un yogur más cremoso y rico, mientras que la leche descremada resultará en un yogur más ligero y posiblemente menos espeso.'
      },
      {
        pregunta: '¿Cuánto tiempo dura el yogur casero en la nevera?',
        respuesta: 'El yogur casero generalmente se mantiene en buen estado durante 1-2 semanas en la nevera. Sin embargo, su acidez aumentará gradualmente con el tiempo. Conserva siempre el yogur en recipientes limpios y sellados, y desecha cualquier porción que muestre signos de moho o tenga un olor desagradable.'
      },
      {
        pregunta: '¿Puedo usar yogur comercial como cultivo iniciador?',
        respuesta: 'Sí, pero asegúrate de que el yogur contenga cultivos vivos y activos. Busca en la etiqueta frases como "contiene cultivos vivos" o "con cultivos activos". Evita yogures con muchos aditivos o tratados térmicamente después de la fermentación, ya que pueden contener menos bacterias viables.'
      }
    ],
    notas: `<p>El éxito en la elaboración de yogur casero depende en gran medida de la calidad de los ingredientes y del control de la temperatura. Con un poco de práctica, podrás ajustar los tiempos y temperaturas para lograr exactamente la textura y sabor que prefieres.</p><p>Recuerda que la fermentación es un proceso vivo y puede variar de un lote a otro. ¡Disfruta experimentando con esta antigua técnica de conservación de alimentos!</p>`
  },
  // Más recetas se agregarán aquí
};

// Exportar también un arreglo de slugs disponibles para la generación de sitemap o navegación
export const recetaSlugs = Object.keys(recetasData); 
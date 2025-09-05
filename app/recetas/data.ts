// Archivo de datos para las recetas probióticas
// En un entorno de producción, estos datos podrían venir de una API o CMS

export interface RecetaData {
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
  beneficiosPrincipales?: string[];
}

interface RecetasData {
  [key: string]: RecetaData;
}

export const recetasData: RecetasData = {
  'yogur-casero': {
    titulo: 'Yogur Casero Probiótico',
    descripcion: 'Aprende a preparar yogur casero rico en probióticos con ingredientes simples y sin conservantes artificiales.',
    imagenPrincipal: {
      src: '/images/yogurt-recetas.png',
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
    notas: `<p>El éxito en la elaboración de yogur casero depende en gran medida de la calidad de los ingredientes y del control de la temperatura. Con un poco de práctica, podrás ajustar los tiempos y temperaturas para lograr exactamente la textura y sabor que prefieres.</p><p>Recuerda que la fermentación es un proceso vivo y puede variar de un lote a otro. ¡Disfruta experimentando con esta antigua técnica de conservación de alimentos!</p>`,
    beneficiosPrincipales: ['Probióticos naturales', 'Rico en proteínas', 'Sin conservantes']
  },

  'kefir-agua': {
    titulo: 'Kéfir de Agua Natural',
    descripcion: 'Bebida probiótica refrescante y ligeramente efervescente, rica en bacterias beneficiosas y enzimas digestivas.',
    imagenPrincipal: {
      src: '/images/kefir_recetas.png',
      alt: 'Kéfir de agua en botella de vidrio con limón y hierbas'
    },
    fechaPublicacion: '2024-05-15T00:00:00+00:00',
    tiempoPreparacion: '48-72 horas',
    dificultad: 'Fácil',
    porciones: 6,
    introduccion: `
      <p>El kéfir de agua es una alternativa refrescante y saludable a las bebidas gaseosas comerciales. Esta bebida fermentada milenaria contiene una diversidad de microorganismos beneficiosos que superan en variedad a muchos suplementos probióticos.</p>
      <p>A diferencia del kéfir de leche, el kéfir de agua es naturalmente libre de lácteos y tiene un sabor más suave y refrescante. Es perfecto para aquellos que buscan una bebida probiótica ligera y deliciosa.</p>
      <p>Los gránulos de kéfir de agua, cuando se cuidan adecuadamente, pueden durar años y multiplicarse, creando una fuente continua de probióticos para toda la familia.</p>
    `,
    ingredientes: [
      {
        nombre: 'agua filtrada',
        cantidad: '1 litro',
        nota: 'libre de cloro'
      },
      {
        nombre: 'gránulos de kéfir de agua',
        cantidad: '3-4 cucharadas',
        nota: 'hidratados y activos'
      },
      {
        nombre: 'azúcar orgánico',
        cantidad: '3 cucharadas',
        nota: 'alimento para los gránulos'
      },
      {
        nombre: 'limón orgánico',
        cantidad: '1/2 unidad',
        nota: 'opcional, para sabor'
      },
      {
        nombre: 'higos secos o pasas',
        cantidad: '2-3 unidades',
        nota: 'opcional, para minerales adicionales'
      }
    ],
    materialesRequeridos: [
      'Frasco de vidrio de 1.5 litros',
      'Colador de plástico o acero inoxidable',
      'Cuchara de madera o plástico',
      'Tela o filtro de café',
      'Banda elástica',
      'Botellas de vidrio con tapa hermética'
    ],
    instrucciones: [
      {
        paso: 'Preparar el agua azucarada',
        descripcion: 'Disuelve completamente el azúcar en el agua filtrada. Asegúrate de que el agua esté a temperatura ambiente. El cloro del agua del grifo puede dañar los gránulos, por lo que es importante usar agua filtrada o dejada reposar 24 horas para que se evapore el cloro.',
        imagen: {
          src: '/images/agua-azucarada-kefir.png',
          alt: 'Disolviendo azúcar en agua para kéfir'
        }
      },
      {
        paso: 'Añadir gránulos y saborizantes',
        descripcion: 'Coloca los gránulos de kéfir en el frasco con el agua azucarada. Añade el medio limón (puedes exprimirlo ligeramente) y los higos secos o pasas si los usas. Estos ingredientes proporcionan minerales adicionales que nutren los gránulos.',
        imagen: {
          src: '/images/granulos-kefir-agua.png',
          alt: 'Gránulos de kéfir de agua en frasco'
        }
      },
      {
        paso: 'Cubrir y fermentar',
        descripcion: 'Cubre el frasco con una tela transpirable o filtro de café asegurado con banda elástica. Esto permite que la fermentación ocurra mientras protege de contaminantes. Fermenta a temperatura ambiente (20-25°C) durante 24-48 horas.',
      },
      {
        paso: 'Colar y embotellar',
        descripcion: 'Cuela el kéfir a través del colador, separando los gránulos del líquido fermentado. Reserva los gránulos para el siguiente lote. Embotella el kéfir en botellas de vidrio hermético para crear una segunda fermentación si deseas más carbonatación.',
      },
      {
        paso: 'Segunda fermentación (opcional)',
        descripcion: 'Para mayor efervescencia y sabor, cierra herméticamente las botellas y déjalas a temperatura ambiente durante 12-24 horas adicionales. Luego refrigera para detener la fermentación. Abre con cuidado ya que puede estar muy carbonatado.',
      }
    ],
    consejos: [
      'Nunca uses utensilios de metal en contacto directo con los gránulos, pueden dañarlos.',
      'Si los gránulos se multiplican, compártelos con amigos o guárdalos en agua azucarada en la nevera.',
      'Para conservar gránulos a largo plazo, deshidrátalos o congélalos en agua azucarada.',
      'El kéfir de agua es más activo en clima cálido; ajusta los tiempos según la temperatura.',
      'Experimenta con diferentes sabores en la segunda fermentación: jengibre, hierbas, frutas.'
    ],
    beneficios: [
      {
        titulo: 'Diversidad microbiana excepcional',
        descripcion: 'El kéfir de agua contiene más de 30 cepas diferentes de bacterias y levaduras probióticas, superando la diversidad de muchos suplementos comerciales.'
      },
      {
        titulo: 'Digestión mejorada',
        descripcion: 'Las enzimas producidas durante la fermentación ayudan a pre-digerir nutrientes y facilitan la absorción intestinal.'
      },
      {
        titulo: 'Hidratación probiótica',
        descripcion: 'Combina hidratación con beneficios probióticos, ideal para deportistas o como alternativa saludable a bebidas azucaradas.'
      },
      {
        titulo: 'Bajo en azúcar',
        descripcion: 'Los microorganismos consumen la mayoría del azúcar durante la fermentación, resultando en una bebida naturalmente baja en azúcar.'
      }
    ],
    probioticosPresentes: [
      {
        nombre: 'Lactobacillus brevis',
        descripcion: 'Bacteria productora de ácido láctico que ayuda a mantener el equilibrio del pH intestinal y puede tener propiedades antiinflamatorias.'
      },
      {
        nombre: 'Lactobacillus casei',
        descripcion: 'Contribuye a la salud digestiva y puede ayudar a fortalecer la respuesta inmune del organismo.'
      },
      {
        nombre: 'Saccharomyces cerevisiae',
        descripcion: 'Levadura probiótica que ayuda a mantener el equilibrio de la microbiota intestinal y puede contribuir a la síntesis de vitaminas del complejo B.'
      },
      {
        nombre: 'Bifidobacterium lactis',
        descripcion: 'Bacteria beneficiosa que coloniza el intestino grueso y puede ayudar a mejorar la función digestiva y la salud intestinal general.'
      }
    ],
    variaciones: [
      {
        titulo: 'Kéfir de agua de coco',
        descripcion: 'Sustituye el agua normal por agua de coco natural. Reduce el azúcar a 1-2 cucharadas ya que el agua de coco ya contiene azúcares naturales. El resultado es más rico en electrolitos.'
      },
      {
        titulo: 'Kéfir sabor jengibre-limón',
        descripcion: 'En la segunda fermentación, añade rodajas de jengibre fresco y limón. Fermenta 12-24 horas para desarrollar un sabor picante y refrescante con propiedades adicionales antiinflamatorias.'
      },
      {
        titulo: 'Kéfir de frutas estacionales',
        descripcion: 'Durante la segunda fermentación, añade frutas de temporada como fresas, duraznos o arándanos. Machácalas ligeramente para liberar sus jugos y sabores naturales.'
      }
    ],
    faq: [
      {
        pregunta: '¿Dónde puedo conseguir gránulos de kéfir de agua?',
        respuesta: 'Los gránulos se pueden obtener de otros cultivadores (comunidades en línea los comparten), tiendas especializadas en fermentación, o puedes comprarlos deshidratados en línea. Una vez que tengas gránulos saludables, se multiplicarán y tendrás una fuente continua.'
      },
      {
        pregunta: '¿Cómo sé si mis gránulos están saludables?',
        respuesta: 'Los gránulos saludables son de color blanco translúcido, tienen una textura firme pero gelatinosa, y producen una fermentación activa con burbujas visibles. Si se vuelven marrones, blandos o no producen burbujas después de 48 horas, pueden estar dañados.'
      },
      {
        pregunta: '¿Puedo usar azúcar blanca regular?',
        respuesta: 'Sí, aunque el azúcar orgánico o de caña es preferible. Evita edulcorantes artificiales, miel (tiene propiedades antibacterianas) o azúcar con aditivos. Los gránulos necesitan azúcar real para alimentarse y mantener su vitalidad.'
      },
      {
        pregunta: '¿Qué hago si mi kéfir tiene moho?',
        respuesta: 'Si ves moho peludo (generalmente verde, azul o negro) en la superficie, desecha todo el lote incluyendo los gránulos. El moho indica contaminación y puede ser peligroso. Esteriliza todos los utensilios antes de comenzar con gránulos nuevos.'
      }
    ],
    notas: `<p>El kéfir de agua es una de las formas más accesibles de introducir probióticos en tu dieta diaria. Su sabor suave y refrescante lo hace especialmente atractivo para niños y personas que no disfrutan de alimentos fermentados más fuertes.</p><p>Recuerda que la fermentación es un arte tanto como una ciencia. Cada lote puede variar ligeramente dependiendo de la temperatura, humedad y calidad de los ingredientes. ¡Disfruta del proceso de experimentación!</p>`,
    beneficiosPrincipales: ['Hidratación probiótica', 'Digestión mejorada', 'Bajo en azúcar']
  },

  'chucrut-casero': {
    titulo: 'Chucrut Casero Tradicional',
    descripcion: 'Repollo fermentado crujiente y ácido, rico en vitamina C y probióticos. Receta tradicional alemana fácil de preparar.',
    imagenPrincipal: {
      src: '/images/churcrut-recetas.png',
      alt: 'Chucrut casero en frasco de vidrio con repollo fresco'
    },
    fechaPublicacion: '2024-05-18T00:00:00+00:00',
    tiempoPreparacion: '3-4 semanas',
    dificultad: 'Media',
    porciones: 8,
    introduccion: `
      <p>El chucrut es uno de los alimentos fermentados más antiguos y nutritivos del mundo. Esta preparación tradicional alemana transforma el humilde repollo en un superalimento rico en probióticos, vitamina C y enzimas digestivas.</p>
      <p>Durante la fermentación láctica, las bacterias naturales del repollo convierten los azúcares en ácido láctico, creando un ambiente ácido que preserva el vegetal y desarrolla su característico sabor ácido y complejo.</p>
      <p>Hacer chucrut en casa te permite controlar la calidad de los ingredientes y el nivel de sal, además de disfrutar de probióticos vivos que los productos comerciales pasteurizados no pueden ofrecer.</p>
    `,
    ingredientes: [
      {
        nombre: 'repollo blanco fresco',
        cantidad: '1 cabeza grande (2-3 kg)',
        nota: 'orgánico preferiblemente'
      },
      {
        nombre: 'sal marina sin refinar',
        cantidad: '2-3 cucharadas',
        nota: 'sin yodo ni aditivos'
      },
      {
        nombre: 'semillas de comino',
        cantidad: '1 cucharadita',
        nota: 'opcional, para sabor tradicional'
      },
      {
        nombre: 'bayas de enebro',
        cantidad: '3-4 unidades',
        nota: 'opcional, sabor tradicional alemán'
      }
    ],
    materialesRequeridos: [
      'Cuchillo grande y afilado',
      'Tabla de cortar amplia',
      'Rallador o mandolina (opcional)',
      'Tazón grande para mezclar',
      'Frascos de vidrio de boca ancha',
      'Peso de fermentación o piedra limpia',
      'Tela o filtro de café',
      'Banda elástica'
    ],
    instrucciones: [
      {
        paso: 'Preparar el repollo',
        descripcion: 'Retira las hojas exteriores del repollo y reserva 2-3 hojas enteras y limpias. Corta el repollo en cuartos, retira el corazón duro y córtalo en tiras finas de 2-3mm. La consistencia debe ser uniforme para una fermentación pareja.',
        imagen: {
          src: '/images/cortar-repollo-chucrut.png',
          alt: 'Repollo cortado en tiras finas para chucrut'
        }
      },
      {
        paso: 'Salar y masajear',
        descripcion: 'Coloca el repollo cortado en un tazón grande y espolvorea con sal. Masajea vigorosamente con las manos durante 5-10 minutos hasta que el repollo libere su jugo natural y se ablande considerablemente. Debe formar su propia salmuera.',
        imagen: {
          src: '/images/masajear-repollo-sal.png',
          alt: 'Masajeando repollo con sal para extraer jugos'
        }
      },
      {
        paso: 'Añadir especias',
        descripcion: 'Si usas especias como comino o bayas de enebro, mézclalas uniformemente con el repollo salado. Estas especias no solo añaden sabor sino que también tienen propiedades antimicrobianas que ayudan en la fermentación.',
      },
      {
        paso: 'Empacar en frascos',
        descripcion: 'Transfiere el repollo y todo su líquido a frascos de vidrio limpios. Presiona firmemente con un utensilio limpio para eliminar burbujas de aire y asegurar que el repollo esté completamente cubierto por su propia salmuera. Deja 3-5cm de espacio en la parte superior.',
      },
      {
        paso: 'Crear sello anaeróbico',
        descripcion: 'Coloca una hoja de repollo reservada sobre la superficie para cubrir completamente el repollo cortado. Coloca un peso limpio (puede ser una piedra hervida, un frasco pequeño con agua, o un peso específico de fermentación) para mantener todo sumergido bajo la salmuera.',
      },
      {
        paso: 'Cubrir y fermentar',
        descripcion: 'Cubre con tela o filtro de café asegurado con banda elástica. Fermenta a temperatura ambiente (18-22°C) durante 3-4 semanas. Los primeros días revisita diariamente para presionar hacia abajo si es necesario y asegurar que permanezca sumergido.',
      },
      {
        paso: 'Probar y refrigerar',
        descripcion: 'Después de 3 semanas, prueba el chucrut. Debe tener un sabor ácido agradable y textura crujiente. Cuando alcance el sabor deseado, retira los pesos y hojas superiores, y refrigera para ralentizar la fermentación.',
      }
    ],
    consejos: [
      'El repollo debe estar siempre cubierto por salmuera para prevenir moho. Si se evapora, añade salmuera (1 cucharada de sal por taza de agua).',
      'No uses sal con yodo o aditivos antiaglomerantes, pueden inhibir la fermentación.',
      'Un poco de espuma blanca en la superficie es normal, pero moho peludo indica contaminación.',
      'La temperatura ambiente afecta la velocidad: más frío = más lento, más cálido = más rápido.',
      'El chucrut estará listo cuando tenga el sabor ácido deseado y mantenga cierta textura crujiente.',
      'Mantén utensilios limpios pero no necesitas esterilizar - las bacterias naturales del repollo harán el trabajo.'
    ],
    beneficios: [
      {
        titulo: 'Superalimento en vitamina C',
        descripcion: 'El chucrut contiene más vitamina C que muchas frutas cítricas. Durante la fermentación, se preserva y concentra esta vitamina esencial para el sistema inmune.'
      },
      {
        titulo: 'Probióticos diversos y potentes',
        descripcion: 'Contiene múltiples cepas de bacterias del ácido láctico que colonizan beneficiosamente el intestino y mejoran la salud digestiva general.'
      },
      {
        titulo: 'Enzimas digestivas naturales',
        descripcion: 'La fermentación produce enzimas que ayudan a descomponer y absorber otros alimentos, mejorando la digestión global de las comidas.'
      },
      {
        titulo: 'Propiedades antiinflamatorias',
        descripcion: 'Los compuestos bioactivos desarrollados durante la fermentación tienen efectos antiinflamatorios que pueden beneficiar la salud general.'
      }
    ],
    probioticosPresentes: [
      {
        nombre: 'Lactobacillus plantarum',
        descripcion: 'Bacteria dominante en el chucrut, conocida por su resistencia al ácido gástrico y capacidad de colonizar el intestino. Contribuye significativamente a la salud digestiva.'
      },
      {
        nombre: 'Lactobacillus brevis',
        descripcion: 'Produce ácido láctico y puede tener efectos beneficiosos sobre la función inmune y la salud intestinal.'
      },
      {
        nombre: 'Lactobacillus pentosus',
        descripcion: 'Contribuye al desarrollo del sabor característico del chucrut y puede ayudar en la digestión de fibras complejas.'
      },
      {
        nombre: 'Leuconostoc mesenteroides',
        descripcion: 'Bacteria iniciadora de la fermentación que crea el ambiente ácido inicial y produce compuestos que dan sabor y aroma únicos.'
      }
    ],
    variaciones: [
      {
        titulo: 'Chucrut rojo',
        descripcion: 'Usa repollo morado en lugar de blanco. El resultado es un chucrut vibrante rico en antocianinas con propiedades antioxidantes adicionales.'
      },
      {
        titulo: 'Chucrut con zanahorias',
        descripcion: 'Añade zanahorias ralladas (10-15% del peso del repollo) para color, dulzor natural y beta-caroteno adicional.'
      },
      {
        titulo: 'Chucrut picante',
        descripcion: 'Incorpora chiles jalapeños cortados finos o hojuelas de chile rojo para una versión con patada picante y beneficios adicionales del capsicum.'
      },
      {
        titulo: 'Chucrut con manzana',
        descripcion: 'Añade manzanas cortadas en juliana para un sabor más dulce y complejo. Las manzanas aportan pectina natural que puede mejorar la textura.'
      }
    ],
    faq: [
      {
        pregunta: '¿Cómo sé si mi chucrut se está fermentando correctamente?',
        respuesta: 'Deberías ver burbujas pequeñas subiendo después de 1-3 días, el líquido se volverá turbio, desarrollará un aroma ácido agradable, y el color del repollo se volverá más apagado. Estos son signos normales de fermentación activa.'
      },
      {
        pregunta: '¿Qué hago si aparece moho en mi chucrut?',
        respuesta: 'Si ves moho peludo (verde, azul, negro) en la superficie, desecha todo el lote. El moho indica contaminación peligrosa. Para prevenir: mantén todo sumergido, usa sal suficiente, y mantén utensilios limpios.'
      },
      {
        pregunta: '¿Puedo hacer chucrut sin sal?',
        respuesta: 'No se recomienda. La sal es esencial para extraer agua del repollo, crear un ambiente seguro para fermentación, e inhibir bacterias dañinas. Sin sal adecuada, el riesgo de contaminación aumenta significativamente.'
      },
      {
        pregunta: '¿Cuánto tiempo dura el chucrut en la nevera?',
        respuesta: 'El chucrut bien fermentado puede durar 6 meses o más en refrigeración. Su acidez lo preserva naturalmente. Con el tiempo puede volverse más ácido y perder algo de textura, pero sigue siendo seguro y nutritivo.'
      },
      {
        pregunta: '¿Debo hervir el chucrut antes de comerlo?',
        respuesta: 'No es necesario y no se recomienda si quieres los beneficios probióticos. El calor destruye las bacterias beneficiosas. Puedes comerlo crudo como condimento o añadirlo a platos calientes al final de la cocción.'
      }
    ],
    notas: `<p>El chucrut casero es infinitamente superior al comercial en sabor, textura y contenido probiótico. La mayoría de los chucruts comerciales están pasteurizados, eliminando todos los probióticos vivos.</p><p>Este es un proyecto de fermentación perfecto para principiantes - es difícil que salga mal si sigues las proporciones de sal correctas y mantienes todo sumergido. ¡Disfruta experimentando con diferentes verduras y especias!</p>`,
    beneficiosPrincipales: ['Rico en vitamina C', 'Probióticos potentes', 'Digestión mejorada']
  },

  'kombucha-casa': {
    titulo: 'Kombucha Casera - Té Fermentado',
    descripcion: 'Bebida probiótica efervescente hecha con té endulzado fermentado con SCOBY. Rica en probióticos y antioxidantes.',
    imagenPrincipal: {
      src: '/images/kombucha-recetas.png',
      alt: 'Kombucha casera en botella de vidrio con SCOBY flotando'
    },
    fechaPublicacion: '2024-05-20T00:00:00+00:00',
    tiempoPreparacion: '7-14 días',
    dificultad: 'Media',
    porciones: 8,
    introduccion: `
      <p>La kombucha es una bebida milenaria originaria de Asia que ha conquistado el mundo por su sabor único y extraordinarios beneficios para la salud. Este "té inmortal" combina el poder antioxidante del té con una diversidad probiótica excepcional.</p>
      <p>El proceso de fermentación crea una simbiosís perfecta entre bacterias y levaduras (SCOBY) que transforman el té endulzado en una bebida compleja, ligeramente ácida y naturalmente efervescente.</p>
      <p>Hacer kombucha en casa te permite experimentar con diferentes tés y sabores, controlando completamente los ingredientes y obteniendo una bebida probiótica fresca y potente a una fracción del costo comercial.</p>
    `,
    ingredientes: [
      {
        nombre: 'agua filtrada',
        cantidad: '1 litro',
        nota: 'libre de cloro'
      },
      {
        nombre: 'té negro o verde',
        cantidad: '4 bolsitas o 2 cucharadas',
        nota: 'orgánico preferiblemente'
      },
      {
        nombre: 'azúcar blanca o de caña',
        cantidad: '4 cucharadas',
        nota: 'alimento para el SCOBY'
      },
      {
        nombre: 'SCOBY saludable',
        cantidad: '1 unidad',
        nota: 'con líquido iniciador'
      },
      {
        nombre: 'kombucha sin pasteurizar',
        cantidad: '200ml',
        nota: 'líquido iniciador ácido'
      }
    ],
    materialesRequeridos: [
      'Frasco de vidrio de boca ancha (1.5L)',
      'Tela transpirable o filtro de café',
      'Banda elástica',
      'Colador de plástico',
      'Botellas de vidrio hermético',
      'Embudo',
      'Utensilios no metálicos'
    ],
    instrucciones: [
      {
        paso: 'Preparar té endulzado',
        descripcion: 'Hierve el agua y prepara un té fuerte con las bolsitas o té suelto durante 10-15 minutos. Disuelve completamente el azúcar mientras el té está caliente. Deja enfriar completamente a temperatura ambiente - el calor puede dañar el SCOBY.',
        imagen: {
          src: '/images/te-endulzado-kombucha.png',
          alt: 'Preparando té endulzado para kombucha'
        }
      },
      {
        paso: 'Añadir SCOBY y líquido iniciador',
        descripcion: 'Con las manos limpias o pinzas no metálicas, coloca el SCOBY en el frasco con el té frío. Añade el líquido iniciador (kombucha sin pasteurizar). Este líquido ácido protege la nueva fermentación de bacterias dañinas.',
        imagen: {
          src: '/images/scoby-kombucha.png',
          alt: 'SCOBY flotando en té para kombucha'
        }
      },
      {
        paso: 'Cubrir y fermentar',
        descripcion: 'Cubre el frasco con tela transpirable asegurada con banda elástica. El SCOBY necesita oxígeno pero debe estar protegido de contaminantes. Fermenta en lugar cálido (22-26°C) alejado de luz directa durante 7-14 días.',
      },
      {
        paso: 'Probar y decidir',
        descripcion: 'Después de 5-7 días, prueba con una pajita o cuchara limpia no metálica. Debe tener equilibrio entre dulce y ácido, con ligera efervescencia. Continúa fermentando hasta alcanzar el sabor deseado.',
      },
      {
        paso: 'Cosechar y preparar segunda fermentación',
        descripcion: 'Reserva el SCOBY y 200ml de kombucha para el próximo lote. Cuela el resto y embotella en frascos hermético. Para segunda fermentación (más carbonatación), deja 24-48 horas a temperatura ambiente antes de refrigerar.',
      },
      {
        paso: 'Saborizar (opcional)',
        descripcion: 'En la segunda fermentación puedes añadir frutas, hierbas, especias o jugos naturales. Jengibre, frutas del bosque, limón, o hibisco son opciones populares. Experimenta con pequeñas cantidades.',
      }
    ],
    consejos: [
      'Nunca uses utensilios de metal en contacto directo con el SCOBY - puede dañarlo.',
      'Un SCOBY saludable flota, se hunde parcialmente, o forma uno nuevo en la superficie.',
      'Manchas marrones en el SCOBY son normales; moho peludo indica contaminación.',
      'Guarda SCOBYs extra en "hotel SCOBY" - frasco con kombucha fuerte en la nevera.',
      'La temperatura ambiente afecta la fermentación: más cálido = más rápido.',
      'Mantén un pH entre 2.5-3.5 para seguridad - usa tiras de pH si tienes dudas.'
    ],
    beneficios: [
      {
        titulo: 'Probióticos y prebióticos únicos',
        descripcion: 'La kombucha contiene una diversidad excepcional de bacterias y levaduras beneficiosas, además de prebióticos que alimentan la microbiota intestinal.'
      },
      {
        titulo: 'Antioxidantes potentes',
        descripcion: 'Conserva y concentra los antioxidantes del té (especialmente EGCG del té verde), que tienen propiedades antiinflamatorias y protectoras celulares.'
      },
      {
        titulo: 'Desintoxicación natural',
        descripcion: 'Los ácidos orgánicos producidos durante la fermentación pueden ayudar en los procesos naturales de desintoxicación del hígado.'
      },
      {
        titulo: 'Hidratación y energía',
        descripcion: 'Proporciona hidratación saludable con un ligero contenido de cafeína natural y vitaminas B producidas durante la fermentación.'
      }
    ],
    probioticosPresentes: [
      {
        nombre: 'Acetobacter xylinum',
        descripcion: 'Bacteria que forma la matriz del SCOBY y produce ácido acético, contribuyendo al sabor característico y propiedades preservativas de la kombucha.'
      },
      {
        nombre: 'Gluconobacter oxydans',
        descripcion: 'Oxida azúcares y alcoholes, contribuyendo al equilibrio ácido de la kombucha y produciendo compuestos beneficiosos únicos.'
      },
      {
        nombre: 'Saccharomyces cerevisiae',
        descripcion: 'Levadura que fermenta azúcares produciendo alcohol (que luego se convierte en ácidos) y CO2, creando la efervescencia natural.'
      },
      {
        nombre: 'Lactobacillus plantarum',
        descripcion: 'Bacteria del ácido láctico que contribuye a la acidez y puede tener beneficios específicos para la salud digestiva e inmune.'
      }
    ],
    variaciones: [
      {
        titulo: 'Kombucha de té verde',
        descripcion: 'Usa solo té verde para una kombucha más suave, rica en EGCG y con color más claro. El SCOBY puede volverse más claro con el tiempo.'
      },
      {
        titulo: 'Kombucha de hierbas',
        descripcion: 'Combina té base (negro/verde) con hierbas como rooibos, hibisco, o manzanilla. Máximo 25% de hierbas para mantener nutrientes para el SCOBY.'
      },
      {
        titulo: 'Jun (kombucha de miel)',
        descripcion: 'Variación tradicional que usa miel cruda en lugar de azúcar y té verde. Requiere cultivo específico de Jun y produce sabor más delicado.'
      },
      {
        titulo: 'Kombucha continua',
        descripcion: 'Sistema donde cosechas parte de la kombucha regularmente y añades té fresco, manteniendo fermentación continua sin interrupciones.'
      }
    ],
    faq: [
      {
        pregunta: '¿Dónde puedo conseguir un SCOBY?',
        respuesta: 'Puedes obtener SCOBYs de otros cultivadores (comunidades en línea), comprarlos deshidratados, o cultivar uno desde kombucha comercial sin pasteurizar dejándola fermentar en un frasco cubierto durante 2-4 semanas.'
      },
      {
        pregunta: '¿Es normal que mi SCOBY cambie de forma o color?',
        respuesta: 'Sí, los SCOBYs son organismos vivos que cambian constantemente. Pueden volverse más gruesos, cambiar de color según el té usado, desarrollar hebras marrones, o formar capas múltiples. Mientras no tengan moho peludo, son normales.'
      },
      {
        pregunta: '¿Cuánto alcohol contiene la kombucha casera?',
        respuesta: 'La kombucha casera típicamente contiene 0.5-3% de alcohol, similar a algunos productos comerciales. Fermentaciones más largas o segundas fermentaciones pueden aumentar ligeramente el contenido alcohólico.'
      },
      {
        pregunta: '¿Puedo usar edulcorantes artificiales o miel?',
        respuesta: 'No uses edulcorantes artificiales - el SCOBY no puede procesarlos y morirá. La miel cruda tiene propiedades antibacterianas que pueden dañar el SCOBY. Usa azúcar blanca, de caña, o azúcar de coco para mejores resultados.'
      },
      {
        pregunta: '¿Qué hago si mi kombucha está demasiado ácida?',
        respuesta: 'Kombucha muy ácida indica sobre-fermentación. Puedes usarla como vinagre, diluirla con agua o té frío, o usar menos líquido iniciador y fermentar menos tiempo en futuros lotes.'
      }
    ],
    notas: `<p>La kombucha es una de las bebidas fermentadas más fascinantes - cada lote es único y evoluciona con el tiempo. El SCOBY es un organismo vivo que se adapta a tu ambiente y preferencias.</p><p>Mantén registros de tus experimentos: tipos de té, tiempos de fermentación, sabores añadidos. Esto te ayudará a replicar tus combinaciones favoritas y perfeccionar tu técnica.</p>`,
    beneficiosPrincipales: ['Probióticos únicos', 'Antioxidantes del té', 'Hidratación saludable']
  },

  'miso-casero': {
    titulo: 'Miso Casero - Pasta de Soya Fermentada',
    descripcion: 'Pasta tradicional japonesa rica en umami y probióticos. Proceso de fermentación largo pero gratificante.',
    imagenPrincipal: {
      src: '/images/miso-recetas.png',
      alt: 'Miso casero en recipiente de bambú con soya fermentada'
    },
    fechaPublicacion: '2024-05-22T00:00:00+00:00',
    tiempoPreparacion: '6-12 meses',
    dificultad: 'Difícil',
    porciones: 20,
    introduccion: `
      <p>El miso es una de las joyas culinarias de Japón y uno de los alimentos fermentados más antiguos del mundo. Esta pasta de soya fermentada es el resultado de meses de paciente fermentación que transforma simples granos de soya en un condimento complejo y profundamente sabroso.</p>
      <p>Hacer miso casero es un compromiso a largo plazo que conecta con tradiciones milenarias. El proceso requiere paciencia, pero el resultado es incomparable: un miso único, vivo y lleno de probióticos beneficiosos.</p>
      <p>Este proyecto de fermentación te enseñará sobre la transformación profunda que pueden lograr los microorganismos y te dará una apreciación completamente nueva por este ingrediente fundamental de la cocina japonesa.</p>
    `,
    ingredientes: [
      {
        nombre: 'soya amarilla seca',
        cantidad: '500g',
        nota: 'orgánica, remojada 12-24 horas'
      },
      {
        nombre: 'koji (Aspergillus oryzae)',
        cantidad: '250g',
        nota: 'arroz inoculado con koji'
      },
      {
        nombre: 'sal marina sin refinar',
        cantidad: '125g',
        nota: 'aproximadamente 12-13% del peso total'
      },
      {
        nombre: 'líquido de cocción de soya',
        cantidad: '200-300ml',
        nota: 'según necesidad de humedad'
      }
    ],
    materialesRequeridos: [
      'Olla grande para cocinar soya',
      'Procesador de alimentos o machacador',
      'Recipiente de fermentación (cerámica, vidrio o plástico grado alimentario)',
      'Papel film o tapa hermética',
      'Peso para prensar',
      'Termómetro',
      'Balanza de cocina'
    ],
    instrucciones: [
      {
        paso: 'Preparar la soya',
        descripcion: 'Remoja las soyas secas en abundante agua durante 12-24 horas. Deben triplicar su tamaño. Cocina en olla a presión durante 45 minutos o hierve durante 3-4 horas hasta que estén muy blandas - deben aplastarse fácilmente con los dedos.',
        imagen: {
          src: '/images/soya-cocida-miso.png',
          alt: 'Soyas cocidas muy blandas para miso'
        }
      },
      {
        paso: 'Enfriar y machacar',
        descripcion: 'Escurre las soyas reservando el líquido de cocción. Deja enfriar a temperatura corporal (37°C). Machaca completamente hasta obtener una pasta uniforme. Puedes usar procesador de alimentos, pero la textura tradicional incluye algunos trozos pequeños.',
      },
      {
        paso: 'Preparar mezcla de sal y koji',
        descripcion: 'Mezcla íntimamente el koji con la sal hasta que esté uniformemente distribuida. Esta mezcla se llama "shio-koji" y es fundamental para una fermentación exitosa.',
        imagen: {
          src: '/images/koji-sal-miso.png',
          alt: 'Koji mezclado con sal para miso'
        }
      },
      {
        paso: 'Combinar ingredientes',
        descripcion: 'Mezcla la pasta de soya con la mezcla de koji y sal. Añade líquido de cocción gradualmente hasta obtener consistencia de masa moldeable - debe mantenerse unida pero no estar líquida. La textura debe ser similar a plastilina húmeda.',
      },
      {
        paso: 'Formar y empacar',
        descripcion: 'Forma bolas del tamaño de un puño con la mezcla y láncalas vigorosamente contra el fondo del recipiente de fermentación para eliminar bolsas de aire. Presiona firmemente para crear una superficie uniforme. Aplana la superficie y crea una depresión ligera en el centro.',
      },
      {
        paso: 'Cubrir y pesar',
        descripcion: 'Cubre la superficie directamente con papel film presionando para eliminar aire. Coloca un peso uniforme (2-3 kg) sobre toda la superficie. Esto previene oxidación y mantiene ambiente anaeróbico ideal.',
      },
      {
        paso: 'Fermentar pacientemente',
        descripcion: 'Fermenta en lugar fresco (15-20°C) y oscuro durante 6-12 meses mínimo. Miso más joven (6 meses) es más dulce; miso más viejo (1-3 años) desarrolla sabores más complejos y profundos. Revisa ocasionalmente por moho superficial.',
      },
      {
        paso: 'Cosechar y usar',
        descripcion: 'Después del tiempo mínimo, prueba el miso. Debe tener aroma rico, color más oscuro, y sabor complejo salado-dulce. Transfiere a recipientes más pequeños y refrigera para uso diario.',
      }
    ],
    consejos: [
      'El koji es esencial - búscalo en tiendas asiáticas especializadas o proveedores en línea.',
      'Mantén todo muy limpio pero no esterilizado - necesitas las bacterias naturales.',
      'Un poco de líquido marrón en la superficie (tamari) es normal y delicioso.',
      'Si aparece moho blanco peludo, retíralo cuidadosamente - moho negro o verde requiere descartar todo.',
      'La temperatura ambiente afecta dramáticamente el sabor final del miso.',
      'Tradicionales recipientes de madera (cedar) dan mejor sabor, pero cerámica o vidrio funcionan bien.',
      'Paciencia es clave - miso verdaderamente excelente toma años, no meses.'
    ],
    beneficios: [
      {
        titulo: 'Proteína completa fermentada',
        descripcion: 'El proceso de fermentación convierte las proteínas de soya en aminoácidos más biodisponibles, creando una proteína completa de fácil digestión.'
      },
      {
        titulo: 'Enzimas digestivas activas',
        descripcion: 'Contiene múltiples enzimas producidas durante la fermentación que ayudan en la digestión de otros alimentos y mejoran la absorción de nutrientes.'
      },
      {
        titulo: 'Probióticos resistentes',
        descripcion: 'Las bacterias del miso son especialmente resistentes al ácido gástrico y tienen mayor probabilidad de llegar vivas al intestino.'
      },
      {
        titulo: 'Compuestos bioactivos únicos',
        descripcion: 'La fermentación larga produce isoflavonas modificadas y péptidos bioactivos con propiedades antioxidantes y potencialmente anticancerígenas.'
      }
    ],
    probioticosPresentes: [
      {
        nombre: 'Aspergillus oryzae',
        descripcion: 'El hongo koji que inicia la fermentación, produce enzimas que descomponen proteínas y carbohidratos, creando sabores umami únicos.'
      },
      {
        nombre: 'Lactobacillus plantarum',
        descripcion: 'Bacteria del ácido láctico que se desarrolla durante la fermentación larga, contribuye a la acidez y conservación del miso.'
      },
      {
        nombre: 'Pediococcus pentosaceus',
        descripcion: 'Bacteria que produce ácido láctico y contribuye al desarrollo del sabor complejo durante la maduración prolongada.'
      },
      {
        nombre: 'Tetragenococcus halophilus',
        descripcion: 'Bacteria resistente a la sal que puede sobrevivir el ambiente salino del miso y contribuir a sabores únicos.'
      }
    ],
    variaciones: [
      {
        titulo: 'Miso blanco (Shiro Miso)',
        descripcion: 'Usa más koji y menos sal (8-10%). Fermenta solo 6 meses para sabor más dulce y suave. Color más claro y textura más cremosa.'
      },
      {
        titulo: 'Miso de cebada (Mugi Miso)',
        descripcion: 'Sustituye parte del koji de arroz por koji de cebada. Produce sabor más rústico y textura ligeramente más gruesa.'
      },
      {
        titulo: 'Miso oscuro (Aka Miso)',
        descripcion: 'Usa más sal (15-18%) y fermenta 2-3 años. Desarrolla color muy oscuro y sabor intensamente complejo y salado.'
      },
      {
        titulo: 'Miso de garbanzos',
        descripcion: 'Alternativa libre de soya usando garbanzos. El proceso es similar pero el sabor resultante es diferente - más suave y menos umami.'
      }
    ],
    faq: [
      {
        pregunta: '¿Dónde puedo conseguir koji starter?',
        respuesta: 'Busca en tiendas asiáticas especializadas, proveedores de fermentación en línea, o tiendas de ingredientes japoneses. También puedes hacer koji casero inoculando arroz cocido con esporas de Aspergillus oryzae, pero requiere equipo especializado.'
      },
      {
        pregunta: '¿Qué hago si aparece moho en mi miso?',
        respuesta: 'Moho blanco peludo en la superficie puede removerse cuidadosamente con cuchara limpia. Moho negro, verde, o cualquier color inusual indica contaminación severa y requiere descartar todo el lote por seguridad.'
      },
      {
        pregunta: '¿Puedo acelerar el proceso de fermentación?',
        respuesta: 'Temperaturas más altas aceleran la fermentación pero cambian dramáticamente el sabor final. Miso tradicional requiere tiempo para desarrollar complejidad. Ten paciencia - los mejores sabores vienen con tiempo.'
      },
      {
        pregunta: '¿Cómo sé cuándo mi miso está listo?',
        respuesta: 'Miso joven (6 meses) es comestible pero suave. Miso maduro tiene color más oscuro, aroma rico y complejo, sabor balanceado salado-dulce, y textura uniforme. Prueba pequeñas cantidades durante el proceso.'
      },
      {
        pregunta: '¿Debo pasteurizar mi miso casero?',
        respuesta: 'No es necesario ni recomendado. La alta salinidad y acidez del miso maduro lo preservan naturalmente. Pasteurizar destruiría los probióticos vivos que son uno de los principales beneficios del miso casero.'
      }
    ],
    notas: `<p>Hacer miso casero es probablemente el proyecto de fermentación más ambicioso y gratificante. Requiere compromiso a largo plazo pero conecta profundamente con tradiciones ancestrales.</p><p>Cada lote de miso casero será único - influenciado por tu ambiente local, microorganismos nativos, y técnica personal. Mantén registros detallados de cada lote para perfeccionar tu técnica a lo largo de los años.</p>`,
    beneficiosPrincipales: ['Proteína completa', 'Probióticos resistentes', 'Sabor umami único']
  }
};

// Exportar también un arreglo de slugs disponibles para la generación de sitemap o navegación
export const recetaSlugs = Object.keys(recetasData); 
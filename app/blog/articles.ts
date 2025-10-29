export interface Article {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  useTemplate?: boolean; // true = usa plantilla, false = página personalizada
}

export const articles: Article[] = [
  // Artículos nuevos con plantilla
  {
    slug: 'eje-intestino-cerebro',
    title: '¿Puede un probiótico mejorar tu estado de ánimo?',
    description: 'Descubre cómo la conexión entre tu intestino y cerebro puede influir en tu estado de ánimo y bienestar mental. Exploramos la ciencia detrás del eje intestino-cerebro.',
    imageSrc: '/images/probioticos_animo.png',
    imageAlt: 'Eje intestino-cerebro y salud mental - Conexión microbiota y estado de ánimo',
    category: 'Salud Mental',
    date: '27 de octubre, 2025',
    readTime: '10 min',
    featured: true,
    useTemplate: false // Ya tiene página personalizada
  },
  {
    slug: 'probioticos-cabello-piel',
    title: 'Probióticos para el cabello y la piel',
    description: 'Descubre cómo los probióticos pueden mejorar la salud de tu piel y cabello desde el interior. La belleza comienza en el intestino.',
    imageSrc: '/images/probioticos_belleza.png',
    imageAlt: 'Probióticos para la belleza - Piel radiante y cabello saludable',
    category: 'Belleza y Salud',
    date: '27 de octubre, 2025',
    readTime: '12 min',
    useTemplate: false // Ya tiene página personalizada
  },
  // Artículos existentes con páginas personalizadas
  {
    slug: 'salud-humana',
    title: 'Probióticos en la salud humana: de la microbiota a la dieta',
    description: 'Un análisis integral del papel fundamental de los probióticos en la salud digestiva, inmunológica y general del ser humano, incluyendo definiciones oficiales y aplicaciones prácticas.',
    imageSrc: '/images/blog-salud.png',
    imageAlt: 'Probióticos y salud humana',
    category: 'Salud Humana',
    date: '10 de mayo, 2023',
    readTime: '15 min',
    useTemplate: false
  },
  {
    slug: 'alimentos-fermentados',
    title: 'Enciclopedia de alimentos fermentados',
    description: 'Un recorrido completo por los alimentos fermentados tradicionales y modernos, sus beneficios probióticos y métodos de preparación casera y comercial.',
    imageSrc: '/images/probiotic_foods.png',
    imageAlt: 'Variedad de alimentos fermentados',
    category: 'Alimentación',
    date: '13 de agosto, 2023',
    readTime: '12 min',
    useTemplate: false
  },
  {
    slug: 'nutricion-animal',
    title: 'Nutrición animal con probióticos: guía completa',
    description: 'Análisis integral del uso de probióticos en mascotas y ganadería para optimizar la salud y el rendimiento animal, con protocolos específicos para diferentes especies.',
    imageSrc: '/images/blog-animales.png',
    imageAlt: 'Animales saludables con alimentación probiótica',
    category: 'Nutrición Animal',
    date: '22 de junio, 2023',
    readTime: '18 min',
    useTemplate: false
  },
  {
    slug: 'agricultura-sostenible',
    title: 'Agricultura sostenible: probióticos para el cultivo',
    description: 'Cómo los probióticos revolucionan los cultivos mediante biofertilizantes y mejoradores de suelo basados en microorganismos, incrementando rendimiento y sostenibilidad.',
    imageSrc: '/images/blog-agricultura.png',
    imageAlt: 'Campo agrícola tratado con probióticos',
    category: 'Agricultura',
    date: '5 de julio, 2023',
    readTime: '20 min',
    useTemplate: false
  },
  // Nuevos artículos que usarán la plantilla
  {
    slug: 'probioticos-sistema-inmune',
    title: 'Probióticos y Sistema Inmune: Tu Defensa Interna',
    description: 'Descubre cómo los probióticos fortalecen tu sistema inmune. Aprende sobre su papel en la barrera intestinal, la microbiota y la defensa contra infecciones.',
    imageSrc: '/images/probioticos_inmune.png',
    imageAlt: 'Sistema inmunológico y probióticos',
    category: 'Salud Humana',
    date: '29 de octubre, 2025',
    readTime: '11 min',
    useTemplate: true
  },
  {
    slug: 'probioticos-embarazo-lactancia',
    title: 'Probióticos en el Embarazo y la Lactancia: Guía Completa',
    description: 'Descubre los beneficios y la seguridad de los probióticos en el embarazo y la lactancia. Una guía completa sobre cepas, dosis y cómo elegirlos.',
    imageSrc: '/images/probioticos_embarazo.png',
    imageAlt: 'Probióticos en el embarazo',
    category: 'Salud Materno-Infantil',
    date: '29 de octubre, 2025',
    readTime: '13 min',
    useTemplate: true
  },
  {
    slug: 'probioticos-sindrome-intestino-irritable',
    title: 'Probióticos para el SII: Guía Basada en Evidencia Científica',
    description: 'Descubre cómo los probióticos pueden aliviar el Síndrome del Intestino Irritable (SII). Explora la evidencia científica, las cepas efectivas y consejos prácticos.',
    imageSrc: '/images/probioticos_sii.png',
    imageAlt: 'Probióticos para SII',
    category: 'Salud Digestiva',
    date: '29 de octubre, 2025',
    readTime: '12 min',
    useTemplate: true
  },
  {
    slug: 'probioticos-para-adelgazar-evidencia-cientifica',
    title: 'Probióticos para adelgazar: ¿Qué dice la ciencia?',
    description: '¿Realmente funcionan los probióticos para adelgazar? Explora la evidencia científica sobre la microbiota intestinal, las cepas y su efecto real en la pérdida de peso.',
    imageSrc: '/images/probioticos_peso.png',
    imageAlt: 'Probióticos para adelgazar',
    category: 'Nutrición',
    date: '29 de octubre, 2025',
    readTime: '12 min',
    useTemplate: true
  },
  {
    slug: 'probioticos-ninos',
    title: 'Probióticos para niños: Guía completa para padres',
    description: 'Descubre cómo los probióticos para niños pueden mejorar su salud intestinal, reforzar su sistema inmune y aliviar cólicos o diarrea. Una guía completa basada en evidencia.',
    imageSrc: '/images/probioticos_kids.png',
    imageAlt: 'Probióticos para niños',
    category: 'Salud Infantil',
    date: '29 de octubre, 2025',
    readTime: '10 min',
    useTemplate: true
  },
];

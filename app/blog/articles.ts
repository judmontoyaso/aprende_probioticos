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
    imageSrc: '/images/blog-salud.png',
    imageAlt: 'Eje intestino-cerebro y salud mental',
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
    imageSrc: '/images/probiotic_foods.png',
    imageAlt: 'Probióticos para la belleza',
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
    title: 'Probióticos y sistema inmunológico: Tu primera línea de defensa',
    description: 'Descubre cómo los probióticos fortalecen tu sistema inmune y te protegen de infecciones. La ciencia detrás de la inmunidad intestinal.',
    imageSrc: '/images/blog-salud.png',
    imageAlt: 'Sistema inmunológico y probióticos',
    category: 'Salud Humana',
    date: '27 de octubre, 2025',
    readTime: '11 min',
    useTemplate: true
  },
  {
    slug: 'probioticos-embarazo-lactancia',
    title: 'Probióticos durante el embarazo y la lactancia',
    description: 'Guía completa sobre el uso seguro de probióticos durante el embarazo y la lactancia, y sus beneficios para madre e hijo.',
    imageSrc: '/images/blog-salud.png',
    imageAlt: 'Probióticos en el embarazo',
    category: 'Salud Materno-Infantil',
    date: '27 de octubre, 2025',
    readTime: '13 min',
    useTemplate: true
  },
  {
    slug: 'probioticos-sindrome-intestino-irritable',
    title: 'Probióticos para el Síndrome del Intestino Irritable (SII)',
    description: 'Cómo los probióticos pueden aliviar los síntomas del SII: evidencia científica, cepas recomendadas y protocolos de tratamiento.',
    imageSrc: '/images/blog-salud.png',
    imageAlt: 'Probióticos para SII',
    category: 'Salud Digestiva',
    date: '27 de octubre, 2025',
    readTime: '14 min',
    useTemplate: true
  },
  {
    slug: 'probioticos-perdida-peso',
    title: 'Probióticos y pérdida de peso: ¿Mito o realidad?',
    description: 'Análisis científico sobre el papel de los probióticos en el control del peso y el metabolismo. Evidencia, estudios y recomendaciones prácticas.',
    imageSrc: '/images/probiotic_foods.png',
    imageAlt: 'Probióticos y control de peso',
    category: 'Nutrición',
    date: '27 de octubre, 2025',
    readTime: '12 min',
    useTemplate: true
  },
  {
    slug: 'probioticos-ninos',
    title: 'Probióticos para niños: Guía completa para padres',
    description: 'Todo lo que los padres necesitan saber sobre probióticos infantiles: dosis, cepas seguras, beneficios y cuándo usarlos.',
    imageSrc: '/images/blog-salud.png',
    imageAlt: 'Probióticos para niños',
    category: 'Salud Infantil',
    date: '27 de octubre, 2025',
    readTime: '10 min',
    useTemplate: true
  },
];

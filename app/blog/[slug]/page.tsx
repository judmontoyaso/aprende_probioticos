import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles } from "../articles";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

interface ArticleTemplateProps {
  params: {
    slug: string;
  };
}

// Función para leer el contenido Markdown
async function getArticleContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "app/blog/content", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    
    // Convertir Markdown a HTML con procesamiento mejorado
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(fileContent);
    
    let htmlContent = processedContent.toString();
    
    // Post-procesar para agregar estilos y componentes visuales
    htmlContent = enhanceHTMLContent(htmlContent);
    
    return htmlContent;
  } catch (error) {
    return null;
  }
}

// Función para mejorar el contenido HTML
function enhanceHTMLContent(html: string): string {
  // Convertir h2 en secciones destacadas
  html = html.replace(
    /<h2>(.*?)<\/h2>/g,
    '<div class="section-header"><h2 class="text-3xl md:text-4xl font-bold text-[#163660] mb-6 pb-4 border-b-4 border-[#48a537] flex items-center"><span class="w-2 h-12 bg-[#48a537] mr-4 rounded"></span>$1</h2></div>'
  );

  // Convertir h3 en subsecciones con icono
  html = html.replace(
    /<h3>(.*?)<\/h3>/g,
    '<h3 class="text-2xl md:text-3xl font-bold text-[#275b9e] mb-4 mt-8 flex items-center"><svg class="w-6 h-6 mr-3 text-[#48a537]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>$1</h3>'
  );

  // Convertir listas no ordenadas en listas con iconos personalizados
  html = html.replace(
    /<ul>([\s\S]*?)<\/ul>/g,
    '<ul class="space-y-3 my-6">$1</ul>'
  );

  html = html.replace(
    /<li>(.*?)<\/li>/g,
    '<li class="flex items-start"><svg class="w-5 h-5 text-[#48a537] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg><span class="text-gray-700 leading-relaxed">$1</span></li>'
  );

  // Convertir listas ordenadas
  html = html.replace(
    /<ol>([\s\S]*?)<\/ol>/g,
    '<ol class="space-y-3 my-6 counter-reset list-counter">$1</ol>'
  );

  // Mejorar blockquotes para que parezcan tarjetas de información
  html = html.replace(
    /<blockquote>([\s\S]*?)<\/blockquote>/g,
    '<div class="my-8 bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-[#4071b4] p-6 rounded-r-xl shadow-lg"><div class="flex"><svg class="w-8 h-8 text-[#4071b4] mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg><blockquote class="text-lg text-gray-800 italic">$1</blockquote></div></div>'
  );

  // Mejorar párrafos
  html = html.replace(
    /<p>(.*?)<\/p>/g,
    '<p class="text-lg text-gray-700 leading-relaxed mb-6">$1</p>'
  );

  // Convertir strong (negrita) en texto destacado
  html = html.replace(
    /<strong>(.*?)<\/strong>/g,
    '<strong class="font-bold text-[#163660]">$1</strong>'
  );

  // Convertir em (cursiva) en texto enfatizado
  html = html.replace(
    /<em>(.*?)<\/em>/g,
    '<em class="italic text-gray-800">$1</em>'
  );

  // Mejorar código inline
  html = html.replace(
    /<code>(.*?)<\/code>/g,
    '<code class="bg-gray-100 text-[#163660] px-2 py-1 rounded font-mono text-sm">$1</code>'
  );

  // Agregar cajas de información especiales para secciones de evidencia
  html = html.replace(
    /<p>(.*?Evidencia.*?:<\/strong>)(.*?)<\/p>/gi,
    '<div class="my-6 bg-white border-2 border-[#48a537] rounded-xl p-6 shadow-md"><div class="flex items-start"><svg class="w-6 h-6 text-[#48a537] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg><p class="text-lg text-gray-700 leading-relaxed">$1$2</p></div></div>'
  );

  // Agregar cajas especiales para recomendaciones prácticas
  html = html.replace(
    /<p>(.*?Recomendación práctica.*?:<\/strong>)(.*?)<\/p>/gi,
    '<div class="my-6 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-[#48a537] rounded-r-xl p-6 shadow-md"><div class="flex items-start"><svg class="w-6 h-6 text-[#48a537] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg><p class="text-lg text-gray-700 leading-relaxed">$1$2</p></div></div>'
  );

  // Mejorar las secciones de referencias científicas
  html = html.replace(
    /<h2>(.*?Referencias.*?)<\/h2>/gi,
    '<div class="mt-16 mb-8"><div class="flex items-center"><div class="flex-grow border-t-2 border-gray-300"></div><h2 class="text-2xl md:text-3xl font-bold text-[#163660] px-6 flex items-center"><svg class="w-7 h-7 text-[#48a537] mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>$1</h2><div class="flex-grow border-t-2 border-gray-300"></div></div></div>'
  );

  return html;
}

export async function generateMetadata({ params }: ArticleTemplateProps): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: [
      "probióticos",
      article.category,
      "salud intestinal",
      "microbiota",
      "bacterias beneficiosas",
    ],
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      authors: ["Equipo de Probióticos"],
      url: `https://www.probioticos.info/blog/${article.slug}`,
      images: [article.imageSrc],
    },
    alternates: {
      canonical: `https://www.probioticos.info/blog/${article.slug}`,
    },
  };
}

export default async function ArticleTemplate({ params }: ArticleTemplateProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const content = await getArticleContent(params.slug);

  if (!content) {
    notFound();
  }

  // Obtener artículos relacionados (mismo categoría, excluyendo el actual)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  // Si no hay suficientes de la misma categoría, agregar otros
  if (relatedArticles.length < 2) {
    const moreArticles = articles
      .filter((a) => a.slug !== article.slug && !relatedArticles.includes(a))
      .slice(0, 2 - relatedArticles.length);
    relatedArticles.push(...moreArticles);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#163660] via-[#275b9e] to-[#4071b4] text-white py-12 md:py-16 mb-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Categoría */}
          <div className="mb-4">
            <span className="inline-block bg-[#c4faa4] text-[#163660] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              {article.category}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-blue-100 text-sm md:text-base">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <time>{article.date}</time>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{article.readTime} de lectura</span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 pb-12">
        {/* Imagen destacada */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-8 -mt-20">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Descripción destacada */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-[#48a537] p-6 md:p-8 rounded-r-xl mb-10 shadow-md">
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic">
            {article.description}
          </p>
        </div>

        {/* Contenido del artículo desde Markdown */}
        <div
          className="article-content max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Artículos relacionados */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t-2 border-gray-200">
            <div className="flex items-center mb-8">
              <div className="flex-grow border-t-2 border-[#48a537]"></div>
              <h2 className="text-3xl font-bold text-gray-900 px-6">
                Artículos relacionados
              </h2>
              <div className="flex-grow border-t-2 border-[#48a537]"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((relArticle) => (
                <Link
                  key={relArticle.slug}
                  href={`/blog/${relArticle.slug}`}
                  className="group block bg-white p-6 border-2 border-gray-200 rounded-xl hover:border-[#4071b4] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={relArticle.imageSrc}
                        alt={relArticle.imageAlt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-[#48a537] mb-2 uppercase tracking-wide">
                        {relArticle.category}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#4071b4] transition-colors">
                        {relArticle.title}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {relArticle.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Call to action */}
        <section className="mt-16 bg-gradient-to-br from-[#163660] via-[#275b9e] to-[#4071b4] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-[#c4faa4] text-[#163660] px-4 py-2 rounded-full text-sm font-bold mb-6">
              ¿Te gustó este artículo?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Quieres aprender más sobre probióticos?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Explora nuestra guía completa sobre probióticos y descubre cómo pueden
              mejorar tu salud de manera natural y efectiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/que-son"
                className="group bg-[#c4faa4] text-[#163660] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                ¿Qué son los probióticos?
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="group bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#163660] transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Ver todos los artículos
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

// Generar rutas estáticas para todos los artículos que usan plantilla
export async function generateStaticParams() {
  return articles
    .filter((article) => article.useTemplate)
    .map((article) => ({
      slug: article.slug,
    }));
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles } from "../articles";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "../components/MDXComponents";

interface ArticleTemplateProps {
  params: Promise<{
    slug: string;
  }>;
}

interface ProcessedContent {
  title: string;
  description: string;
  content: string;
}

// Función para leer y procesar el contenido MDX
async function getArticleContent(slug: string): Promise<ProcessedContent | null> {
  try {
    const filePath = path.join(process.cwd(), "app/blog/content", `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    
    // Parsear frontmatter simple
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = fileContent.match(frontmatterRegex);
    
    if (!match) {
      return null;
    }
    
    const frontmatterText = match[1];
    const content = match[2];
    
    // Extraer title y description del frontmatter
    const titleMatch = frontmatterText.match(/title:\s*["'](.+?)["']/);
    const descriptionMatch = frontmatterText.match(/description:\s*["'](.+?)["']/);
    
    const title = titleMatch ? titleMatch[1] : '';
    const description = descriptionMatch ? descriptionMatch[1] : '';
    
    return {
      title,
      description,
      content
    };
  } catch (error) {
    console.error(`Error loading MDX for slug ${slug}:`, error);
    return null;
  }
}



export async function generateMetadata({ params }: ArticleTemplateProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Artículo no encontrado",
    };
  }

  const content = await getArticleContent(slug);
  const title = content?.title || article.title;

  return {
    title: title,
    description: article.description,
    keywords: [
      "probióticos",
      article.category,
      "salud intestinal",
      "microbiota",
      "bacterias beneficiosas",
    ],
    openGraph: {
      title: title,
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
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const content = await getArticleContent(slug);

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
            {content.title}
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

        {/* Contenido MDX */}
        <div className="article-content max-w-none mb-12 prose prose-lg prose-headings:text-[#163660] prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h3:text-2xl prose-h3:font-bold prose-h3:text-[#275b9e] prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#4071b4] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#163660] prose-strong:font-bold">
          <MDXRemote source={content.content} components={mdxComponents} />
        </div>

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

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles } from "../articles";
import { notFound } from "next/navigation";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '../components/MDXComponents';
import fs from "fs";
import path from "path";

interface ArticleTemplateProps {
  params: Promise<{
    slug: string;
  }>;
}

// Función simple para leer contenido MDX
async function getArticleContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "app/blog/content", `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    
    // Extraer frontmatter (metadatos)
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = fileContent.match(frontmatterRegex);
    
    const metadata: Record<string, string> = {};
    let content = fileContent;
    
    if (match) {
      const frontmatterText = match[1];
      content = fileContent.replace(frontmatterRegex, '');
      
      // Parsear frontmatter simple
      frontmatterText.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
          const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
          metadata[key.trim()] = value;
        }
      });
    }
    
    return { content, metadata };
  } catch (error) {
    console.error(`Error loading MDX file for ${slug}:`, error);
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

  const articleData = await getArticleContent(slug);
  const title = articleData?.metadata?.title || article.title;

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

  const articleData = await getArticleContent(slug);

  if (!articleData) {
    notFound();
  }

  // Obtener artículos relacionados
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  if (relatedArticles.length < 2) {
    const moreArticles = articles
      .filter((a) => a.slug !== article.slug && !relatedArticles.includes(a))
      .slice(0, 2 - relatedArticles.length);
    relatedArticles.push(...moreArticles);
  }

  const title = articleData.metadata?.title || article.title;

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
            {title}
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
        <div className="article-content max-w-none mb-12">
          <MDXRemote 
            source={articleData.content} 
            components={mdxComponents}
          />
        </div>

        {/* Artículos Relacionados */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-8 border-t-2 border-gray-200">
            <h2 className="text-3xl font-bold text-[#163660] mb-8 text-center">
              Artículos Relacionados
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/blog/${relatedArticle.slug}`}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedArticle.imageSrc}
                      alt={relatedArticle.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-[#c4faa4] text-[#163660] px-3 py-1 rounded-full text-xs font-bold mb-3">
                      {relatedArticle.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#163660] mb-2 group-hover:text-[#48a537] transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedArticle.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Final */}
        <div className="mt-12 bg-gradient-to-r from-[#163660] to-[#4071b4] rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Quieres aprender más sobre probióticos?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Explora nuestra colección completa de artículos sobre salud intestinal y microbiota.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-[#48a537] hover:bg-[#3d8c2e] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Todos los Artículos
          </Link>
        </div>
      </article>
    </div>
  );
}

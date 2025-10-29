import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  const rows = '20'; // Obtener más resultados para poder randomizar

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    // Construir búsqueda enfocada en probióticos
    const probioticTerms = [
      'probiotic', 'probiotics', 'probiótico', 'probióticos',
      'lactobacillus', 'bifidobacterium', 'saccharomyces',
      'microbiota', 'gut health', 'intestinal', 'fermented'
    ];
    
    // Agregar términos de probióticos a la búsqueda
    const enhancedQuery = `${query} AND (${probioticTerms.join(' OR ')})`;

    // Offset aleatorio para obtener diferentes resultados
    const randomOffset = Math.floor(Math.random() * 50);
    
    // Llamar a la API de CrossRef
    const crossrefUrl = `https://api.crossref.org/works?query=${encodeURIComponent(enhancedQuery)}&rows=${rows}&offset=${randomOffset}&select=DOI,title,author,published,container-title,abstract,subject,type`;
    
    const response = await fetch(crossrefUrl, {
      headers: {
        'User-Agent': 'ProbioticosParaTodos/1.0 (https://probioticosparatodos.com; mailto:contacto@probioticosparatodos.com)'
      }
    });

    if (!response.ok) {
      throw new Error('CrossRef API request failed');
    }

    const data = await response.json();

    interface CrossRefAuthor {
      given?: string;
      family?: string;
    }

    interface CrossRefItem {
      DOI: string;
      title: string | string[];
      author?: CrossRefAuthor[];
      published?: {
        'date-parts'?: number[][];
      };
      'container-title'?: string | string[];
      abstract?: string;
      subject?: string[];
      type?: string;
    }

    // Filtrar y formatear resultados
    const formattedResults = data.message.items.map((item: CrossRefItem) => ({
      doi: item.DOI,
      title: Array.isArray(item.title) ? item.title[0] : item.title,
      authors: item.author?.slice(0, 3).map((a: CrossRefAuthor) => 
        `${a.given || ''} ${a.family || ''}`.trim()
      ).filter(Boolean) || [],
      year: item.published?.['date-parts']?.[0]?.[0] || 'N/A',
      journal: Array.isArray(item['container-title']) 
        ? item['container-title'][0] 
        : item['container-title'] || 'Unknown',
      abstract: item.abstract || '',
      subjects: item.subject || [],
      type: item.type || 'article'
    }));

    // Seleccionar uno aleatorio de los resultados
    const randomIndex = Math.floor(Math.random() * formattedResults.length);
    const randomArticle = formattedResults[randomIndex];

    return NextResponse.json({
      article: randomArticle,
      total: data.message['total-results'],
      query: enhancedQuery
    });

  } catch (error) {
    console.error('CrossRef API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch research articles' },
      { status: 500 }
    );
  }
}

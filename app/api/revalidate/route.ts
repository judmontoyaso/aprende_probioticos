import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route para revalidación bajo demanda de páginas
 * 
 * Uso:
 * POST /api/revalidate
 * Body: { path: '/blog/mi-articulo', secret: 'tu-secret-token' }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, secret } = body;

    // Validar el secret token para seguridad
    const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'dev-secret-change-in-production';
    
    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret token' },
        { status: 401 }
      );
    }

    if (!path) {
      return NextResponse.json(
        { message: 'Path is required' },
        { status: 400 }
      );
    }

    // Revalidar la ruta específica
    revalidatePath(path);
    
    // También revalidar la página principal del blog si es un artículo
    if (path.startsWith('/blog/') && path !== '/blog') {
      revalidatePath('/blog');
    }

    return NextResponse.json({
      revalidated: true,
      path,
      now: Date.now()
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint para revalidación simple por query params
 * 
 * Uso:
 * GET /api/revalidate?path=/blog/mi-articulo&secret=tu-secret-token
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const path = searchParams.get('path');
    const secret = searchParams.get('secret');

    const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'dev-secret-change-in-production';
    
    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret token' },
        { status: 401 }
      );
    }

    if (!path) {
      return NextResponse.json(
        { message: 'Path is required' },
        { status: 400 }
      );
    }

    revalidatePath(path);
    
    if (path.startsWith('/blog/') && path !== '/blog') {
      revalidatePath('/blog');
    }

    return NextResponse.json({
      revalidated: true,
      path,
      now: Date.now()
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: String(error) },
      { status: 500 }
    );
  }
}

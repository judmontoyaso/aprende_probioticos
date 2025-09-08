'use client';

import Link from 'next/link';

export default function TestMinimal() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Test &quot;Minimal&quot; Page</h2>
      <h1 className="text-3xl font-bold mb-6">Página de Prueba Mínima</h1>
      
      <div className="space-y-4">
        <p>Si ves esto, la navegación &quot;funciona&quot; correctamente.</p>
        
        <div className="flex gap-4">
          <Link 
            href="/recetas" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Ir a Recetas
          </Link>
          
          <Link 
            href="/recetas/yogur-casero" 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Ir a Receta Individual
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Botón Atrás
          </button>
        </div>
        
        <div className="mt-8 p-4 bg-yellow-100 rounded">
          <h2 className="font-bold mb-2">Instrucciones de Prueba:</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Navega a una receta usando el enlace</li>
            <li>Usa el botón atrás del navegador</li>
            <li>Observa si aparece el error removeChild en la consola</li>
            <li>Prueba también con el botón "Botón Atrás" de arriba</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

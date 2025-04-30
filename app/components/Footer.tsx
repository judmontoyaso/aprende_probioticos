import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Probióticos Para Todos</h3>
            <p className="text-sm">
              Información científica y actualizada sobre probióticos y sus beneficios para la salud.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-green-600 transition-colors">Inicio</Link></li>
              <li><Link href="/que-son" className="hover:text-green-600 transition-colors">¿Qué son los probióticos?</Link></li>
              <li><Link href="/beneficios" className="hover:text-green-600 transition-colors">Beneficios</Link></li>
              <li><Link href="/como-elegir" className="hover:text-green-600 transition-colors">Cómo elegir</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Probióticos Para Todos. Todos los derechos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/politica-privacidad" className="hover:text-green-600 transition-colors">Política de privacidad</Link>
            <Link href="/cookies" className="hover:text-green-600 transition-colors">Política de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
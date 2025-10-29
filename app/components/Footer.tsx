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
          <p>&copy; {2024} Probióticos Para Todos. Todos los derechos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4 flex-wrap">
            <Link href="/politica-privacidad" className="hover:text-green-600 transition-colors">Política de privacidad</Link>
            <Link href="/terminos-servicio" className="hover:text-green-600 transition-colors">Términos de servicio</Link>
            <Link href="/descargo-responsabilidad" className="hover:text-green-600 transition-colors">Descargo médico</Link>
            <Link href="/cookies" className="hover:text-green-600 transition-colors">Cookies</Link>
            <Link href="/contacto" className="hover:text-green-600 transition-colors">Contacto</Link>
          </div>
          <div className="mt-4 text-xs text-gray-500 max-w-3xl mx-auto">
            <p className="mb-2">
              <strong>Aviso médico:</strong> La información de este sitio es únicamente educativa. 
              No constituye consejo médico. Consulte siempre con un profesional de la salud.
            </p>
            <p className="mb-2">
              © 2024-2025 Probióticos Para Todos. Todos los derechos reservados.
            </p>
            <p className="text-center">
              Contenido original creado con fines educativos sobre salud digestiva y probióticos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 

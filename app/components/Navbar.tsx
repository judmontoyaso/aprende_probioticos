import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">🦠</span> Probióticos Para Todos
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-200 transition-colors">
            Inicio
          </Link>
          <Link href="/que-son" className="hover:text-green-200 transition-colors">
            ¿Qué son?
          </Link>
          <Link href="/beneficios" className="hover:text-green-200 transition-colors">
            Beneficios
          </Link>
          <Link href="/como-elegir" className="hover:text-green-200 transition-colors">
            Cómo elegir
          </Link>
          <Link href="/referencias" className="hover:text-green-200 transition-colors">
            Referencias
          </Link>
        </div>

        <button className="md:hidden flex items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 
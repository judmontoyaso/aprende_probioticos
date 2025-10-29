import { Metadata } from 'next';
import AdminGuard from './AdminGuard';

export const metadata: Metadata = {
  title: 'Admin - Probióticos Para Todos',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-100">
        {/* Admin Navigation */}
        <nav className="bg-[#163660] text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/admin" className="text-xl font-bold">
                  📊 Panel de Administración
                </a>
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/admin/articles"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#275b9e] transition-colors"
                  >
                    Artículos
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#275b9e] transition-colors"
                  >
                    Ver sitio web →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main>{children}</main>
      </div>
    </AdminGuard>
  );
}

import React from 'react';

export const metadata = {
  title: 'Política de Cookies | Probióticos Para Todos',
  description: 'Información sobre cómo utilizamos las cookies y otras tecnologías de seguimiento en Probióticos Para Todos.',
};

export default function PoliticaCookies() {
  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Política de Cookies</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            Cómo utilizamos las cookies y otras tecnologías de seguimiento en nuestro sitio web.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm">
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Introducción</h2>
            <p className="text-gray-700 mb-4">
              En Probióticos Para Todos utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Esta política explica qué son las cookies, cómo las utilizamos y cómo puedes controlarlas.
            </p>
            <p className="text-gray-700">
              Al continuar navegando por nuestro sitio, aceptas el uso de cookies de acuerdo con esta política.
            </p>
          </section>
          
          <div className="prose prose-green max-w-none">
            <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
            
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, teléfono móvil o tableta) cuando visitas un sitio web. Las cookies permiten que el sitio web recuerde tus acciones y preferencias durante un período de tiempo, para que no tengas que volver a introducir cierta información cada vez que visites el sitio o navegues de una página a otra.
            </p>
            <p>
              Las cookies se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
            </p>
            
            <h2>2. Tipos de cookies que utilizamos</h2>
            <p>
              En nuestro sitio web utilizamos los siguientes tipos de cookies:
            </p>
            
            <h3>2.1. Cookies esenciales</h3>
            <p>
              Estas cookies son necesarias para el funcionamiento básico del sitio web. Te permiten navegar por el sitio y utilizar sus funciones. Sin estas cookies, no podríamos proporcionar los servicios que has solicitado.
            </p>
            <ul>
              <li><strong>Cookie de sesión:</strong> Se almacena temporalmente durante una sesión de navegación y se elimina cuando cierras el navegador.</li>
              <li><strong>Cookie de preferencias:</strong> Guarda tus preferencias respecto a la configuración del sitio, como el idioma o la región.</li>
            </ul>
            
            <h3>2.2. Cookies analíticas</h3>
            <p>
              Utilizamos Google Analytics para recopilar información sobre cómo interactúas con nuestro sitio web. Estas cookies nos ayudan a mejorar nuestro sitio mediante la recopilación y el informe de información sobre su uso.
            </p>
            <p>
              La información recopilada incluye:
            </p>
            <ul>
              <li>El número de visitantes del sitio</li>
              <li>De dónde vienen los visitantes</li>
              <li>Las páginas que visitan</li>
              <li>Cuánto tiempo permanecen en el sitio</li>
              <li>Si han visitado el sitio antes</li>
              <li>Qué navegador y dispositivo utilizan</li>
            </ul>
            <p>
              Google Analytics almacena la información recopilada por las cookies en servidores ubicados en Estados Unidos. Google puede transferir esta información a terceros cuando así lo requiera la ley o cuando dichos terceros procesen la información en nombre de Google.
            </p>
            
            <h2>3. Control de cookies</h2>
            <p>
              Puedes controlar y gestionar las cookies de varias maneras. Ten en cuenta que eliminar o bloquear las cookies puede afectar a tu experiencia de usuario y es posible que algunas partes de nuestro sitio web no funcionen correctamente.
            </p>
            
            <h3>3.1. Configuración del navegador</h3>
            <p>
              La mayoría de los navegadores te permiten ver qué cookies tienes y eliminarlas individualmente o bloquear las cookies de un sitio web en particular o de todos los sitios web. Ten en cuenta que si bloqueas todas las cookies, muchos sitios web no funcionarán correctamente.
            </p>
            <p>
              Aquí te mostramos cómo puedes ajustar la configuración de cookies en diferentes navegadores:
            </p>
            <ul>
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos del sitio web</li>
              <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio → Administrar y eliminar cookies</li>
            </ul>
            
            <h3>3.2. Banner de consentimiento</h3>
            <p>
              Cuando visitas nuestro sitio web por primera vez, verás un banner de cookies que te permite aceptar o rechazar las cookies no esenciales. Puedes cambiar tus preferencias en cualquier momento a través del enlace &quot;Configuración de cookies&quot; en el pie de página de nuestro sitio.
            </p>
            
            <h3>3.3. Desactivación de Google Analytics</h3>
            <p>
              Puedes impedir que Google Analytics recopile datos sobre tu uso del sitio descargando e instalando el complemento de inhabilitación para navegadores de Google Analytics disponible en <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">https://tools.google.com/dlpage/gaoptout</a>.
            </p>
            
            <h2>4. Actualizaciones de esta política</h2>
            <p>
              Podemos actualizar nuestra Política de Cookies de vez en cuando para reflejar, por ejemplo, cambios en las cookies que utilizamos o por otros motivos operativos, legales o regulatorios. Te recomendamos que visites regularmente esta página para estar informado sobre el uso de cookies y tecnologías relacionadas.
            </p>
            <p>
              La fecha en la parte superior de esta Política indica cuándo se actualizó por última vez.
            </p>
            
            <h2>5. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre nuestra política de cookies, no dudes en contactarnos a través de nuestro correo electrónico: <a href="mailto:info@aprendeprobioticos.com" className="text-green-600 hover:text-green-700">info@aprendeprobioticos.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 
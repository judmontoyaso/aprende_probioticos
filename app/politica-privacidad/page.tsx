import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Política de Privacidad | Probióticos Para Todos',
  description: 'Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales en Probióticos Para Todos.',
};

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Política de Privacidad</h1>
          
          <div className="prose prose-green max-w-none">
            <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
            
            <h2>1. Introducción</h2>
            <p>
              En Probióticos Para Todos, accesible desde https://www.probioticosparatodos.com, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Esta Política de Privacidad documenta los tipos de información que recopilamos y registramos y cómo la utilizamos.
            </p>
            
            <h2>2. Información que recopilamos</h2>
            <p>
              Cuando visitas nuestro sitio web, podemos recopilar cierta información automáticamente, incluyendo:
            </p>
            <ul>
              <li>Datos de uso, como páginas visitadas, tiempo de permanencia y patrones de navegación</li>
              <li>Información técnica, como dirección IP, tipo de navegador, dispositivo y sistema operativo</li>
              <li>Cookies y tecnologías similares que pueden identificar tu navegador o dispositivo</li>
            </ul>
            
            <h2>3. Cómo utilizamos Google Analytics</h2>
            <p>
              Utilizamos Google Analytics, un servicio de análisis web proporcionado por Google, Inc. ("Google"), para entender cómo los visitantes interactúan con nuestro sitio web. Google Analytics utiliza "cookies", que son archivos de texto colocados en tu ordenador, para ayudar al sitio web a analizar cómo los usuarios utilizan el sitio.
            </p>
            <p>
              La información generada por la cookie sobre tu uso del sitio web (incluyendo tu dirección IP) será transmitida y almacenada por Google en servidores en Estados Unidos. Google utilizará esta información con el propósito de evaluar tu uso del sitio web, compilar informes sobre la actividad del sitio web para los operadores del sitio web y proporcionar otros servicios relacionados con la actividad del sitio web y el uso de internet.
            </p>
            <p>
              Google puede también transferir esta información a terceros cuando así lo requiera la legislación, o cuando dichos terceros procesen la información en nombre de Google. Google no asociará tu dirección IP con ningún otro dato del que disponga Google.
            </p>
            
            <h2>4. Base legal para el procesamiento</h2>
            <p>
              Procesamos tus datos personales solo cuando tenemos una base legal válida para hacerlo. Dependiendo de las circunstancias específicas, podemos basarnos en:
            </p>
            <ul>
              <li>Tu consentimiento explícito, que puedes retirar en cualquier momento</li>
              <li>Nuestros intereses legítimos, siempre que no prevalezcan tus derechos y libertades</li>
              <li>La necesidad de cumplir con obligaciones legales</li>
            </ul>
            
            <h2>5. Tus derechos sobre tus datos</h2>
            <p>
              De acuerdo con las leyes de protección de datos, tienes ciertos derechos respecto a tus datos personales:
            </p>
            <ul>
              <li>Derecho de acceso: Puedes solicitar una copia de los datos personales que tenemos sobre ti.</li>
              <li>Derecho de rectificación: Puedes solicitar que corrijamos información inexacta o incompleta.</li>
              <li>Derecho al olvido: En ciertas circunstancias, puedes solicitar que eliminemos tus datos personales.</li>
              <li>Derecho a la limitación del tratamiento: Puedes solicitar que restrinjamos el procesamiento de tus datos.</li>
              <li>Derecho a la portabilidad de los datos: Puedes solicitar una copia de tus datos en un formato estructurado y legible por máquina.</li>
              <li>Derecho de oposición: Puedes oponerte al procesamiento de tus datos personales en cualquier momento.</li>
            </ul>
            
            <h2>6. Cookies y tecnologías similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Puedes gestionar tus preferencias de cookies a través del banner de consentimiento que aparece cuando visitas nuestro sitio por primera vez.
            </p>
            <p>
              Las cookies que utilizamos se dividen en las siguientes categorías:
            </p>
            <ul>
              <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web.</li>
              <li><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo interactúas con nuestro sitio web (Google Analytics).</li>
            </ul>
            
            <h2>7. Cambios a esta política</h2>
            <p>
              Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Te recomendamos que revises esta Política de Privacidad periódicamente para ver si hay cambios.
            </p>
            
            <h2>8. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos a través de nuestro formulario de contacto o enviando un correo electrónico a info@probioticosparatodos.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 
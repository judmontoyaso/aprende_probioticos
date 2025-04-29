# ProbióticosCiencia - Sitio Web de Nicho sobre Probióticos

Este es un sitio web informativo sobre probióticos, creado con Next.js, TypeScript y Tailwind CSS. La página está diseñada para proporcionar información científica sobre probióticos y monetizar a través de anuncios.

## Características

- **Diseño Responsive**: Totalmente adaptable a dispositivos móviles, tablets y escritorio
- **Diseño Moderno**: Interfaz limpia y atractiva con estilo profesional
- **Optimizado para SEO**: Metadatos y estructura adecuada para mejorar el posicionamiento
- **Monetización**: Espacios preparados para anuncios en ubicaciones estratégicas
- **Información Científica**: Contenido basado en investigaciones y estudios actualizados

## Requisitos

- Node.js 16.x o superior
- npm o yarn

## Instalación

1. Clona este repositorio:
```
git clone <URL-del-repositorio>
```

2. Instala las dependencias:
```
npm install
# o
yarn install
```

3. Ejecuta el servidor de desarrollo:
```
npm run dev
# o
yarn dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio.

## Estructura del Proyecto

- `/app`: Contiene las páginas y componentes de la aplicación
- `/app/components`: Componentes reutilizables (Navbar, Footer, AdBanner)
- `/public`: Archivos estáticos como imágenes

## Imágenes

El sitio requiere algunas imágenes para funcionar correctamente. Debes añadir las siguientes imágenes:

1. `/public/images/probiotics-hero.png` - Imagen principal para la página de inicio
2. Otras imágenes ilustrativas sobre probióticos y salud intestinal según sea necesario

Puedes usar imágenes libres de derechos de sitios como Unsplash, Pexels o crear tus propias ilustraciones.

## Monetización

El sitio incluye componentes `AdBanner` en diferentes posiciones estratégicas:
- Parte superior de cada página
- Barra lateral
- Parte inferior de cada página

Para implementar anuncios reales, debes reemplazar el contenido del componente `AdBanner.tsx` con el código proporcionado por tu red de publicidad (Google AdSense, Mediavine, etc.).

## Despliegue

Para construir la versión de producción:

```
npm run build
# o
yarn build
```

Luego puedes desplegar el sitio en plataformas como Vercel, Netlify o cualquier servicio que soporte aplicaciones Next.js.

## Personalización

Puedes personalizar varios aspectos del sitio:

- Colores: Modifica los colores en los archivos CSS o clases de Tailwind
- Contenido: Actualiza el texto en los archivos de página
- Estructura: Añade o modifica componentes según sea necesario

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

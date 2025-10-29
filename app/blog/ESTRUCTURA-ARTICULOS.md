# 📋 Estructura Estándar para Artículos del Blog

Esta es la estructura que **TODOS** los artículos en formato Markdown (`.md`) deben seguir para ser procesados correctamente por la plantilla del blog.

---

## 🏗️ Estructura Completa del Archivo

```markdown
### **Meta Información SEO**

- **Meta Título:** [Título optimizado para SEO - máx 60 caracteres]
- **Meta Descripción:** [Descripción atractiva - 150-160 caracteres]
- **Sugerencia de URL:** `/blog/[slug-del-articulo]`

---

### **TL;DR (Resumen Rápido)**

[Párrafo de 3-5 líneas que resuma los puntos clave del artículo. Este resumen aparecerá en una caja amarilla destacada al inicio del artículo]

---

# [Título Principal del Artículo]

[Párrafos introductorios - 2-3 párrafos que presenten el tema]

**Puntos clave que cubriremos:**
- Punto 1
- Punto 2
- Punto 3
- Punto 4

![Descripción de la imagen](/images/nombre-imagen.jpg)

## [Título de Sección Principal 1]

[Contenido de la primera sección principal]

### [Subtítulo 1.1]

[Contenido del subtema]

**Evidencia científica:** [Descripción de estudios relevantes con datos concretos]

**Recomendación práctica:** [Consejos aplicables basados en la evidencia]

### [Subtítulo 1.2]

[Más contenido]

## [Título de Sección Principal 2]

[Contenido de la segunda sección]

> [Cita importante o dato destacado - aparecerá en una caja especial]

### [Subtítulo 2.1]

- Lista de puntos importantes
- Cada punto tendrá un ícono de check verde
- Espaciado optimizado automáticamente

## [Título de Sección Principal 3]

[Contenido...]

#### [Subtítulo nivel 4 - opcional]

[Detalles específicos]

## [Más Secciones según sea necesario]

[Continuar con el contenido...]

## [Título de Conclusión]

[Resumen de puntos principales y llamado a la acción - 2-3 párrafos]

---

### **Preguntas Frecuentes (FAQ)**

**P: [Pregunta 1]**\
**R:** [Respuesta completa a la pregunta 1]

**P: [Pregunta 2]**\
**R:** [Respuesta completa a la pregunta 2]

**P: [Pregunta 3]**\
**R:** [Respuesta completa a la pregunta 3]

[Continuar con más preguntas según sea necesario - mínimo 3, máximo 8]

---

### **Referencias**

\[1] Autor, A. (Año). Título del estudio. *Revista*, volumen(número), páginas. [DOI: enlace](URL)

\[2] Autor, B. et al. (Año). Título del estudio. *Revista*, volumen(número), páginas. [DOI: enlace](URL)

\[3] Autor, C., Autor, D. (Año). Título del estudio. *Revista*, volumen(número), páginas. [DOI: enlace](URL)

[Continuar con más referencias - mínimo 5, recomendado 8-15]
```

---

## 🎨 Elementos de Diseño Automáticos

### ✅ **Meta Información SEO**
- **NO se renderiza** en el artículo
- Se usa solo para metadatos (futuras implementaciones)
- Debe estar al inicio del archivo

### ✅ **TL;DR**
- Aparece en una **caja amarilla** con icono de rayo ⚡
- Posicionada justo después de la descripción del artículo
- Fondo: gradiente amarillo-ámbar con borde izquierdo amarillo
- Icono de información a la izquierda

### ✅ **Imagen Principal**
- Formato: `![Descripción](/images/nombre.jpg)`
- Se puede colocar después de la introducción
- Se renderiza con clases de Tailwind automáticas

### ✅ **Títulos H1 (`#`)**
- Solo el título principal del artículo
- Aparece en el hero section (azul oscuro)

### ✅ **Títulos H2 (`##`)**
- Barra verde lateral decorativa
- Texto grande (3xl-4xl)
- Borde inferior verde (#48a537)
- Color azul oscuro (#163660)

### ✅ **Subtítulos H3 (`###`)**
- Icono de check verde a la izquierda
- Tamaño 2xl-3xl
- Color azul medio (#275b9e)

### ✅ **Subtítulos H4 (`####`)**
- Sin decoración especial
- Útil para sub-subsecciones

### ✅ **Listas con viñetas (`-` o `*`)**
- Cada ítem tiene icono de check verde
- Espaciado vertical optimizado
- Texto gris legible

### ✅ **Listas numeradas (`1.`, `2.`, etc.)**
- Numeración automática
- Espaciado consistente

### ✅ **Blockquotes (`>`)**
- Caja con gradiente azul-verde
- Icono de información
- Sombra y bordes redondeados
- Perfecto para datos impactantes

### ✅ **Negritas (`**texto**`)**
- Color azul oscuro corporativo (#163660)
- Font-weight bold

### ✅ **Cursivas (`*texto*`)**
- Estilo italic
- Color gris oscuro

### ✅ **Cajas Especiales: "Evidencia científica:"**
- Detecta automáticamente: `**Evidencia científica:**`
- Caja blanca con borde verde
- Icono de verificación certificada
- Sombra destacada

### ✅ **Cajas Especiales: "Recomendación práctica:"**
- Detecta automáticamente: `**Recomendación práctica:**`
- Gradiente verde-azul
- Icono de lista de tareas
- Borde lateral verde

### ✅ **FAQ (Preguntas Frecuentes)**
- Formato: `**P: pregunta**\**R:** respuesta`
- Se convierte en acordeones visuales
- Header azul con icono de pregunta
- Cuerpo en fondo azul claro

### ✅ **Referencias**
- Formato numérico: `\[1]` o `1.`
- Cada referencia en caja individual
- Número en círculo verde
- Borde lateral verde con hover
- Fondo gris claro para toda la sección

---

## 📐 Especificaciones Técnicas

### **Longitud Recomendada**
- **Total**: 1,500 - 3,000 palabras
- **TL;DR**: 50-100 palabras
- **Introducción**: 150-250 palabras
- **Cada sección H2**: 200-400 palabras
- **FAQ**: 3-8 preguntas
- **Referencias**: 5-15 citas

### **Estructura de Secciones**
- **Secciones H2**: 3-6 secciones principales
- **Subsecciones H3**: 2-4 por cada H2
- **Subsecciones H4**: Usar solo cuando sea necesario

### **Elementos Especiales**
- **Evidencia científica**: 3-5 cajas por artículo
- **Recomendaciones prácticas**: 2-4 cajas por artículo
- **Blockquotes**: 1-3 para datos impactantes
- **Listas**: Usar generosamente para facilitar escaneo

### **Imágenes**
- **Formato**: JPG o PNG
- **Ubicación**: `/public/images/`
- **Tamaño recomendado**: 1200x630px para la principal
- **Posición**: Después de la introducción o donde sea relevante

---

## 💡 Mejores Prácticas

### ✅ **Hacer**
1. Usar títulos descriptivos y claros
2. Incluir datos científicos con referencias
3. Balancear teoría con aplicación práctica
4. Usar listas para información fácil de escanear
5. Incluir FAQ con preguntas reales de usuarios
6. Citar fuentes académicas recientes (últimos 5-10 años)
7. Mantener párrafos cortos (3-5 líneas)
8. Usar blockquotes para estadísticas impactantes

### ❌ **Evitar**
1. Secciones muy largas sin subtítulos
2. Bloques de texto de más de 150 palabras sin división
3. Afirmaciones sin respaldo científico
4. Referencias incompletas o sin DOI
5. Exceso de jerga técnica sin explicación
6. Omitir TL;DR o FAQ
7. Imágenes de baja calidad
8. Títulos H2 sin contenido sustancial

---

## 🔍 Ejemplo Completo

Ver el archivo: `probioticos-perdida-peso.md` para un ejemplo completo y funcional de esta estructura.

---

## 📝 Checklist Pre-Publicación

Antes de publicar un artículo, verificar:

- [ ] Meta Información SEO completa
- [ ] TL;DR presente (50-100 palabras)
- [ ] Título principal atractivo y claro
- [ ] Introducción con puntos clave a cubrir
- [ ] Imagen principal incluida
- [ ] 3-6 secciones H2 con contenido sustancial
- [ ] Uso de H3 y H4 para organización
- [ ] Al menos 3 cajas de "Evidencia científica"
- [ ] Al menos 2 "Recomendaciones prácticas"
- [ ] FAQ con mínimo 3 preguntas
- [ ] Referencias con formato correcto (mínimo 5)
- [ ] Longitud total: 1,500-3,000 palabras
- [ ] Sin errores ortográficos
- [ ] Links funcionales en referencias

---

**Última actualización**: Octubre 27, 2025
**Versión**: 1.0
**Compatibilidad**: Next.js 15.5.2 + Plantilla de Blog con Remark

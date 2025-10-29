# Guía de Conversión: MD → MDX

## Estructura del Artículo MDX

### 1. Frontmatter (Metadatos)
```mdx
---
title: "Título del artículo"
description: "Descripción corta"
---
```

### 2. TL;DR (Resumen)
```mdx
<TldrBox>
Texto del resumen rápido aquí...
</TldrBox>
```

### 3. Contenido Principal
Escribe markdown normal. Los componentes H2, H3, UL, LI se estilizan automáticamente:

```mdx
## Título de Sección (H2)
Texto normal aquí...

### Subsección (H3)
Más texto...

- Item de lista 1
- Item de lista 2
```

### 4. H4 con Números (Opcional)
```mdx
<H4WithNumber number={1}>
Modulación del metabolismo energético
</H4WithNumber>

<H4WithNumber number={2}>
Producción de ácidos grasos
</H4WithNumber>
```

### 5. Blockquotes Especiales
```mdx
<Blockquote type="evidence">
**Evidencia científica:** Contenido de la caja especial
</Blockquote>

<Blockquote type="recommendation">
**Recomendación práctica:** Consejos útiles
</Blockquote>
```

### 6. FAQ
```mdx
<FAQ>
  <FAQItem question="¿Primera pregunta?">
    Respuesta a la primera pregunta...
  </FAQItem>

  <FAQItem question="¿Segunda pregunta?">
    Respuesta a la segunda pregunta...
  </FAQItem>
</FAQ>
```

### 7. Referencias
```mdx
<References>
  <Reference number={1}>
    Autor, A. (2024). Título del artículo. *Revista*. DOI: 10.xxxx/xxxxx
  </Reference>
  
  <Reference number={2}>
    Autor, B. (2023). Otro artículo. *Journal*. DOI: 10.yyyy/yyyyy
  </Reference>
</References>
```

## Ejemplo Completo

```mdx
---
title: "Mi Artículo de Probióticos"
description: "Una guía completa sobre probióticos"
---

<TldrBox>
Los probióticos son microorganismos beneficiosos que ayudan a tu salud...
</TldrBox>

La salud intestinal es fundamental para el bienestar general...

## ¿Qué son los Probióticos?

Los probióticos son bacterias buenas que viven en tu intestino...

### Tipos Principales

Existen varios tipos de probióticos:

- *Lactobacillus*
- *Bifidobacterium*
- *Saccharomyces boulardii*

## Mecanismos de Acción

Los probióticos funcionan de varias maneras:

<H4WithNumber number={1}>
Primera forma de actuar
</H4WithNumber>

Explicación de cómo funcionan...

<H4WithNumber number={2}>
Segunda forma de actuar
</H4WithNumber>

Más explicación...

<Blockquote type="evidence">
**Evidencia científica:** Los estudios muestran que...
</Blockquote>

<FAQ>
  <FAQItem question="¿Cuánto tiempo tardan en hacer efecto?">
    Los probióticos requieren de 4-8 semanas de uso constante...
  </FAQItem>

  <FAQItem question="¿Son seguros?">
    Sí, para la mayoría de las personas sanas...
  </FAQItem>
</FAQ>

<References>
  <Reference number={1}>
    Smith, J. (2024). Probiotics and Health. *Nature*. DOI: 10.1234/5678
  </Reference>
</References>
```

## Componentes Disponibles

| Componente | Uso |
|------------|-----|
| `<TldrBox>` | Caja amarilla de resumen |
| `<FAQ>` | Container de preguntas |
| `<FAQItem>` | Pregunta individual |
| `<References>` | Container de referencias |
| `<Reference>` | Referencia individual |
| `<H4WithNumber>` | H4 con círculo numerado |
| `<Blockquote type="...">` | Cajas especiales (evidence/recommendation/info) |

## Tips

✅ **Usar** markdown normal para el texto principal
✅ **Usar** componentes MDX para elementos especiales
✅ **No olvidar** el frontmatter al inicio
✅ **Mantener** espacios entre componentes y markdown

❌ **No mezclar** sintaxis markdown y HTML en el mismo elemento
❌ **No usar** ### para FAQ (usar `<FAQ>` en su lugar)
❌ **No duplicar** el título H1 (está en el frontmatter)

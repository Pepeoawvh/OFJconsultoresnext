# Guía de SEO - Oscar Fuentes Abogado

## Optimizaciones Implementadas

### 1. **Metadata Completa** ✅

#### Layout Principal (`src/app/layout.js`)
- **Title**: Título descriptivo con palabras clave principales
- **Description**: Descripción optimizada con keywords relevantes
- **Keywords**: Lista completa de términos de búsqueda relevantes
- **Open Graph**: Metadatos para redes sociales (Facebook, LinkedIn)
- **Twitter Cards**: Optimización para compartir en Twitter
- **Robots**: Configuración de indexación para Google

#### Páginas Específicas
- `page.js`: Metadata para página principal
- `trayectoria/page.jsx`: Metadata para trayectoria profesional

### 2. **Archivos Técnicos SEO** ✅

#### robots.txt (`public/robots.txt`)
```
User-agent: *
Allow: /
Sitemap: https://ofuentes.cl/sitemap.xml
```
- Permite indexación de todas las páginas
- Referencia al sitemap
- Bloquea archivos innecesarios (API, _next, node_modules)

#### Sitemap (`src/app/sitemap.js`)
- Sitemap dinámico generado por Next.js
- URLs principales con prioridades y frecuencias de actualización
- Se genera automáticamente en `/sitemap.xml`

#### Manifest (`public/manifest.json`)
- PWA (Progressive Web App) compatible
- Mejora experiencia móvil
- Permite "Añadir a pantalla de inicio"

### 3. **Structured Data (Schema.org)** ✅

Ubicación: `src/components/StructuredData.jsx`

Implementado tres tipos de datos estructurados:

#### a) Attorney Schema
```json
{
  "@type": "Attorney",
  "name": "Oscar Fuentes Jiménez",
  "knowsAbout": ["Derecho Tributario", "Impugnaciones tributarias", ...],
  "hasCredential": [...]
}
```

#### b) Professional Service Schema
```json
{
  "@type": "ProfessionalService",
  "name": "Oscar Fuentes Abogado",
  "hasOfferCatalog": {
    "itemListElement": [
      "Impugnaciones y litigios",
      "Defensa en delitos tributarios",
      "Prescripción y cobros"
    ]
  }
}
```

#### c) Breadcrumb Schema
- Mejora la navegación en resultados de búsqueda
- Muestra la estructura del sitio

### 4. **Palabras Clave Principales**

#### Alta Prioridad
- abogado tributario
- asesoría tributaria
- SII (Servicio de Impuestos Internos)
- TGR (Tesorería General República)
- Tribunales Tributarios

#### Secundarias
- impugnaciones tributarias
- delitos tributarios
- prescripción deudas
- abogado Puerto Montt
- derecho tributario Chile
- litigios fiscales
- defensa tributaria

### 5. **Estructura Semántica**

#### Jerarquía de Encabezados
- `<h1>`: Nombre del abogado (Navbar)
- `<h2>`: Título principal hero
- `<h3>`: Secciones importantes
- `<h4>`: Subsecciones

#### Elementos HTML Semánticos
- `<main>`: Contenido principal
- `<section>`: Secciones de contenido
- `<article>`: Contenido independiente
- `<nav>`: Navegación
- `<footer>`: Pie de página

---

## Configuración de Google Search Console

### Paso 1: Verificar Propiedad del Sitio

1. Ir a [Google Search Console](https://search.google.com/search-console)
2. Agregar propiedad: `https://ofuentes.cl`
3. Método de verificación recomendado: **Etiqueta HTML**
4. Copiar el código de verificación
5. Agregarlo en `src/app/layout.js`:

```javascript
verification: {
  google: 'tu-código-de-verificación-aquí',
}
```

### Paso 2: Enviar Sitemap

1. En Search Console, ir a **Sitemaps**
2. Agregar nuevo sitemap: `https://ofuentes.cl/sitemap.xml`
3. Enviar
4. Esperar indexación (puede tomar días)

### Paso 3: Solicitar Indexación

1. Ir a **Inspección de URLs**
2. Ingresar: `https://ofuentes.cl`
3. Hacer clic en **Solicitar indexación**
4. Repetir para: `https://ofuentes.cl/trayectoria`

### Paso 4: Configurar Google Analytics (Opcional)

1. Crear cuenta en [Google Analytics](https://analytics.google.com)
2. Obtener ID de medición (G-XXXXXXXXXX)
3. Instalar: `npm install @next/third-parties`
4. Agregar a `layout.js`:

```javascript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

---

## Monitoreo y Mejora Continua

### Métricas Clave en Search Console

1. **Rendimiento**
   - Impresiones totales
   - Clics totales
   - CTR (porcentaje de clics)
   - Posición promedio

2. **Cobertura**
   - Páginas válidas indexadas
   - Páginas excluidas
   - Errores de indexación

3. **Experiencia**
   - Core Web Vitals
   - Velocidad de carga
   - Usabilidad móvil

### Acciones Recomendadas

#### Mensualmente
- ✅ Revisar palabras clave que generan tráfico
- ✅ Identificar páginas con bajo rendimiento
- ✅ Revisar errores de cobertura
- ✅ Analizar competencia en palabras clave

#### Trimestralmente
- ✅ Actualizar contenido con nuevas keywords
- ✅ Crear contenido nuevo (blog de casos, artículos)
- ✅ Optimizar meta descriptions según CTR
- ✅ Mejorar velocidad de carga

### Optimizaciones Futuras Sugeridas

1. **Blog de Contenido**
   - Crear sección `/blog` con artículos sobre:
     - Casos tributarios recientes
     - Cambios en legislación
     - Consejos para contribuyentes
     - FAQs tributarias

2. **Página de Servicios Detallada**
   - `/servicios/impugnaciones`
   - `/servicios/delitos-tributarios`
   - `/servicios/prescripcion`

3. **Testimonios y Casos de Éxito**
   - Schema Review para reseñas
   - Aumenta confianza y credibilidad

4. **Optimización de Imágenes**
   - Formato WebP para mejor compresión
   - Lazy loading implementado
   - Alt texts descriptivos

5. **Enlaces Internos**
   - Mejorar linking entre páginas
   - Crear contenido relacionado

---

## Herramientas de Verificación

### Testing SEO
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Testing Técnico
```bash
# Verificar sitemap generado
curl https://ofuentes.cl/sitemap.xml

# Verificar robots.txt
curl https://ofuentes.cl/robots.txt

# Verificar manifest
curl https://ofuentes.cl/manifest.json
```

### Lighthouse Audit (Chrome DevTools)
1. Abrir Chrome DevTools (F12)
2. Ir a pestaña **Lighthouse**
3. Seleccionar categorías: Performance, SEO, Accessibility
4. Hacer clic en **Analyze page load**

Meta objetivo: **90+ en todas las categorías**

---

## Checklist SEO Completo ✅

### Técnico
- [x] robots.txt configurado
- [x] Sitemap.xml generado
- [x] Metadata completa (title, description)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured Data (Schema.org)
- [x] Manifest.json (PWA)
- [x] Canonical URLs
- [x] Lang attribute (es)
- [x] Theme color

### Contenido
- [x] Keywords en títulos
- [x] Keywords en meta descriptions
- [x] Encabezados jerárquicos (H1-H6)
- [x] Alt text en imágenes
- [x] Contenido único y relevante
- [x] URLs descriptivas

### Performance
- [x] Next.js Image optimization
- [x] Lazy loading habilitado
- [ ] Compresión de imágenes WebP (pendiente)
- [x] CSS optimizado (Tailwind)

### Usabilidad
- [x] Responsive design
- [x] Mobile-friendly
- [x] Formulario de contacto
- [x] Navegación clara
- [x] Accesibilidad básica

---

## Contacto y Soporte

Para dudas sobre SEO o mejoras adicionales:
- Email: contacto@ofuentes.cl
- Documentación: Este archivo SEO-GUIDE.md

**Última actualización**: Abril 2026

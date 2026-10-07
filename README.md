# Oscar Fuentes - Abogado Tributario

Sitio web profesional para servicios de asesoría tributaria especializada en Chile.

## 🎯 Características

- ✅ **Next.js 14** con App Router
- ✅ **Tailwind CSS** para estilos
- ✅ **SEO Optimizado** (Ver [SEO-GUIDE.md](./SEO-GUIDE.md))
- ✅ **Responsive Design** - Mobile-first
- ✅ **Structured Data** (Schema.org)
- ✅ **Formulario de Contacto** con envío por email
- ✅ **PWA Ready** (Progressive Web App)

## 📋 Páginas

- **Inicio** (`/`) - Presentación de servicios y formulario de contacto
- **Trayectoria** (`/trayectoria`) - Formación académica y experiencia profesional

## 🚀 Instalación y Desarrollo

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPO]

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
```

### Variables de Entorno

Crear archivo `.env.local` con:

```env
# SMTP Configuration para formulario de contacto
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=tu-email@example.com
SMTP_PASS=tu-contraseña
CONTACT_TO=contacto@ofuentes.cl
CONTACT_FROM="Formulario Web <noreply@ofuentes.cl>"
```

### Ejecutar en Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

### Build para Producción

```bash
# Crear build optimizado
npm run build

# Ejecutar build en producción
npm start
```

## 📁 Estructura del Proyecto

```
ofuentesabogado/
├── src/
│   ├── app/
│   │   ├── layout.js          # Layout principal con SEO
│   │   ├── page.js             # Página de inicio
│   │   ├── globals.css         # Estilos globales
│   │   ├── sitemap.js          # Sitemap dinámico
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js    # API de formulario
│   │   └── trayectoria/
│   │       └── page.jsx        # Página de trayectoria
│   └── components/
│       ├── Navbar.jsx          # Navegación principal
│       ├── Hero.jsx            # Sección hero
│       ├── About.jsx           # Sección "Quiénes somos"
│       ├── ProductGrid.jsx     # Grid de servicios
│       ├── ContactForm.jsx     # Formulario de contacto
│       ├── Footer.jsx          # Pie de página
│       └── StructuredData.jsx  # JSON-LD para SEO
├── public/
│   ├── robots.txt              # Configuración de crawlers
│   ├── manifest.json           # PWA manifest
│   └── assets/
│       └── img/                # Imágenes del sitio
├── SEO-GUIDE.md                # Guía completa de SEO
└── SEO-CHECKLIST.md            # Checklist post-despliegue
```

## 🔍 SEO y Optimización

### Archivos SEO Implementados

- ✅ **robots.txt** - Control de indexación
- ✅ **sitemap.xml** - Mapa del sitio dinámico
- ✅ **Structured Data** - Schema.org (Attorney, ProfessionalService)
- ✅ **Open Graph** - Optimización para redes sociales
- ✅ **Twitter Cards** - Compartir en Twitter
- ✅ **Meta Tags** - Títulos y descripciones optimizadas

### Palabras Clave Principales

- Abogado tributario
- Asesoría tributaria
- SII (Servicio de Impuestos Internos)
- TGR (Tesorería General República)
- Tribunales Tributarios
- Impugnaciones tributarias
- Delitos tributarios

### Verificaciones Post-Despliegue

Ver [SEO-CHECKLIST.md](./SEO-CHECKLIST.md) para lista completa.

```bash
# Verificar archivos públicos
curl https://ofuentes.cl/robots.txt
curl https://ofuentes.cl/sitemap.xml
curl https://ofuentes.cl/manifest.json
```

### Herramientas de Testing

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Schema Validator](https://validator.schema.org/)

## 📧 Formulario de Contacto

El formulario envía emails usando Nodemailer con la siguiente información:

- Nombre del contribuyente
- RUT
- Email
- Teléfono
- Domicilio
- Motivo de consulta
- Modalidad (Remoto/Presencial)
- Mensaje

### Configuración SMTP

Configurar variables de entorno en `.env.local` (ver sección anterior).

### Protección Anti-Spam

- Honeypot field oculto
- Validación en servidor
- Rate limiting (recomendado agregar)

## 🎨 Diseño y Estilos

### Tailwind CSS

Configurado y listo para usar. No requiere inicialización adicional.

```bash
# Ya configurado en:
- postcss.config.mjs
- tailwind.config.cjs
- src/app/globals.css
```

### Colores Principales

- **Primario**: Sky blue (`#0ea5e9`)
- **Acento**: Orange (`#ef4600`)
- **Texto**: Zinc (`#3f3f46`)

### Fuentes

- **Urbanist**: Títulos y encabezados
- System fonts: Texto general

## 📱 Progressive Web App (PWA)

El sitio es compatible con PWA:

- Manifest configurado
- Icono para "Añadir a pantalla de inicio"
- Optimizado para móviles
- Modo standalone

## 🔧 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Estilos**: Tailwind CSS
- **Email**: Nodemailer
- **SEO**: next/metadata, Schema.org
- **Imágenes**: next/image (optimizadas automáticamente)
- **Fuentes**: next/font (optimizadas)

## 📊 Google Search Console

### Configuración Inicial

1. Verificar propiedad en [Search Console](https://search.google.com/search-console)
2. Agregar código de verificación en `src/app/layout.js`:

```javascript
verification: {
  google: 'tu-código-aquí',
}
```

3. Enviar sitemap: `https://ofuentes.cl/sitemap.xml`
4. Solicitar indexación de páginas principales

Ver guía completa en [SEO-GUIDE.md](./SEO-GUIDE.md)

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático

```bash
# O usar Vercel CLI
npm i -g vercel
vercel
```

### Otros Proveedores

- Netlify
- AWS Amplify
- Railway
- Render

Asegurar configurar variables de entorno SMTP.

## 📝 Mantenimiento

### Actualizaciones Recomendadas

- Revisar métricas SEO mensualmente
- Actualizar contenido según tendencias
- Mantener dependencias actualizadas
- Monitorear errores en Search Console

### Mejoras Futuras Sugeridas

- [ ] Blog de artículos tributarios
- [ ] Página de servicios detallada
- [ ] Sección de testimonios
- [ ] Chat en vivo
- [ ] Optimización de imágenes a WebP
- [ ] Google Analytics 4
- [ ] Rate limiting en formulario

## 📄 Licencia

Proyecto privado - Oscar Fuentes Abogado

## 📞 Contacto

- **Email**: contacto@ofuentes.cl
- **Sitio Web**: https://ofuentes.cl

---

**Última actualización**: Abril 2026

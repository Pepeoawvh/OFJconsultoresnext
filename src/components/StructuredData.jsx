// Structured Data (JSON-LD) para SEO
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": "https://ofuentes.cl/#attorney",
    "name": "Oscar Fuentes Jiménez",
    "description": "Abogado tributario especialista en SII, TGR y Tribunales Tributarios con 10 años de experiencia",
    "url": "https://ofuentes.cl",
    "image": "https://ofuentes.cl/assets/img/OftLogoHead.png",
    "email": "contacto@ofuentes.cl",
    "knowsAbout": [
      "Derecho Tributario",
      "Impugnaciones tributarias",
      "Litigios fiscales",
      "Delitos tributarios",
      "Prescripción de deudas",
      "Servicio de Impuestos Internos",
      "Tesorería General de la República"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CL",
      "addressRegion": "Los Lagos",
      "addressLocality": "Puerto Montt"
    },
    "priceRange": "Consulta",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Universidad del Desarrollo",
        "location": "Concepción, Chile"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Abogado",
        "dateCreated": "2012"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Magíster en Derecho de la Empresa, mención Derecho Tributario",
        "dateCreated": "2013"
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Corte Suprema de Justicia de Chile"
      }
    ]
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://ofuentes.cl/#business",
    "name": "Oscar Fuentes Abogado",
    "description": "Asesoría tributaria especializada con enfoque estratégico y humano",
    "url": "https://ofuentes.cl",
    "logo": "https://ofuentes.cl/assets/img/OftLogoHead.png",
    "image": "https://ofuentes.cl/assets/img/OftLogoHead.png",
    "email": "contacto@ofuentes.cl",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CL",
      "addressRegion": "Los Lagos"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "CL"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Chile"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Legales Tributarios",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Impugnaciones y litigios tributarios",
            "description": "Impugnación de resoluciones, liquidaciones y giros de impuestos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Defensa en delitos tributarios",
            "description": "Defensa privada en casos por delito tributario"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Prescripción y cobros",
            "description": "Revisión de procesos de cobro y prescripción de deudas"
          }
        }
      ]
    }
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://ofuentes.cl"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Trayectoria Profesional",
        "item": "https://ofuentes.cl/trayectoria"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  );
}

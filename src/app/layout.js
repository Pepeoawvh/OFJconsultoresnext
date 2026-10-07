import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  metadataBase: new URL('https://ofuentes.cl'),
  title: {
    default: "Oscar Fuentes - Abogado Tributario | Asesoría SII, TGR y Tribunales Tributarios",
    template: "%s | Oscar Fuentes Abogado"
  },
  description: "Abogado tributario con 10 años de experiencia en SII y TGR. Especialista en impugnaciones, litigios tributarios, defensa en delitos fiscales y prescripción de deudas. Puerto Montt, Chile.",
  keywords: [
    "abogado tributario",
    "asesoría tributaria",
    "SII",
    "Servicio de Impuestos Internos",
    "TGR",
    "Tesorería General República",
    "Tribunales Tributarios",
    "impugnaciones tributarias",
    "delitos tributarios",
    "prescripción deudas",
    "abogado Puerto Montt",
    "derecho tributario Chile",
    "litigios fiscales",
    "defensa tributaria",
    "Oscar Fuentes"
  ],
  authors: [{ name: "Oscar Fuentes Jiménez" }],
  creator: "Oscar Fuentes Jiménez",
  publisher: "Oscar Fuentes Abogado",
  formatDetection: {
    email: true,
    address: true,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://ofuentes.cl',
    siteName: 'Oscar Fuentes Abogado',
    title: 'Oscar Fuentes - Abogado Tributario Especialista',
    description: 'Abogado tributario con 10 años de experiencia en SII y TGR. Especialista en impugnaciones, litigios y defensa tributaria.',
    images: [
      {
        url: '/assets/img/OftLogoHead.png',
        width: 1200,
        height: 630,
        alt: 'Oscar Fuentes Abogado Tributario',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oscar Fuentes - Abogado Tributario',
    description: 'Especialista en asesoría tributaria, SII, TGR y Tribunales Tributarios',
    images: ['/assets/img/OftLogoHead.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agregar estos valores cuando tengas las cuentas configuradas:
    // google: 'código-de-verificación-google',
    // yandex: 'código-de-verificación-yandex',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/assets/img/OftLogoHead.png" />
        <link rel="canonical" href="https://ofuentes.cl" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

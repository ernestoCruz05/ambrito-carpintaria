import type { Metadata } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import './globals.css'
import SmoothScroll from './components/ui/SmoothScroll' // <--- Importamos aqui

// Fonte Serif para Títulos
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Fonte Sans para Textos
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ambritocarpintaria.pt'),
  title: {
    default: 'A.M. Brito | Carpintaria de Excelência em Arouca',
    template: '%s | A.M. Brito Carpintaria'
  },
  description: 'Carpintaria portuguesa especializada em cozinhas, roupeiros, mobiliário por medida e restauro de madeira. Mais de 20 anos de experiência em Arouca, Portugal. Orçamentos gratuitos.',
  keywords: ['carpintaria', 'carpinteiro', 'mobiliário por medida', 'cozinhas por medida', 'roupeiros', 'restauro de móveis', 'madeira', 'Arouca', 'Portugal', 'mobiliário personalizado', 'portas de madeira', 'caixilharia'],
  authors: [{ name: 'A.M. Brito Carpintaria' }],
  creator: 'A.M. Brito Carpintaria',
  publisher: 'A.M. Brito Carpintaria',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://www.ambritocarpintaria.pt',
    siteName: 'A.M. Brito Carpintaria',
    title: 'A.M. Brito | Carpintaria de Excelência em Arouca',
    description: 'Carpintaria portuguesa especializada em cozinhas, roupeiros, mobiliário por medida e restauro. Mais de 20 anos de experiência.',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'A.M. Brito Carpintaria - Mobiliário por Medida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A.M. Brito | Carpintaria de Excelência',
    description: 'Carpintaria portuguesa especializada em mobiliário por medida. Mais de 20 anos de experiência em Arouca.',
    images: ['/logo.jpg'],
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
  alternates: {
    canonical: 'https://www.ambritocarpintaria.pt',
  },
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
  },
}

// JSON-LD Structured Data for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ambritocarpintaria.pt',
  name: 'A.M. Brito Carpintaria',
  description: 'Carpintaria portuguesa especializada em cozinhas, roupeiros, mobiliário por medida e restauro de madeira.',
  url: 'https://www.ambritocarpintaria.pt',
  telephone: '+351 919 205 718',
  email: 'a.britocarpintaria@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Arouca',
    addressRegion: 'Aveiro',
    addressCountry: 'PT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.9321,
    longitude: -8.2456,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  priceRange: '€€',
  image: 'https://www.ambritocarpintaria.pt/imgs/og-image.jpg',
  sameAs: [
    // Add social media URLs here when available
    'https://www.facebook.com/profile.php?id=100017558200968',
    // 'https://www.instagram.com/ambritocarpintaria',
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 40.9321,
      longitude: -8.2456,
    },
    geoRadius: '50000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Carpintaria',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cozinhas por Medida',
          description: 'Design e construção de cozinhas personalizadas em madeira.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobiliário por Medida',
          description: 'Criação de móveis únicos adaptados ao seu espaço.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Restauro de Móveis',
          description: 'Recuperação e restauro de peças antigas em madeira.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Portas e Caixilharia',
          description: 'Fabrico de portas e caixilhos em madeira.',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${playfair.variable} font-sans antialiased bg-[#f4f1ea] text-[#1a1a1a]`}>
        <SmoothScroll /> {/* <--- O scroll suave é ativado aqui */}
        {children}
      </body>
    </html>
  )
}
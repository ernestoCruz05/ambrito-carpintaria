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
  title: {
    default: 'A.M. Brito | Carpintaria de Excelencia',
    template: '%s | A.M. Brito'
  },
  description: 'Carpintaria portuguesa especializada em cozinhas, roupeiros e mobiliario por medida. Desde 2000 em Arouca, Portugal.',
  keywords: ['carpintaria', 'mobiliario', 'cozinhas', 'roupeiros', 'madeira', 'Arouca', 'Portugal', 'mobiliario por medida'],
  authors: [{ name: 'A.M. Brito Carpintaria' }],
  creator: 'A.M. Brito',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    siteName: 'A.M. Brito Carpintaria',
    title: 'A.M. Brito | Carpintaria de Excelencia',
    description: 'Carpintaria portuguesa especializada em cozinhas, roupeiros e mobiliario por medida.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${manrope.variable} ${playfair.variable} font-sans antialiased bg-[#f4f1ea] text-[#1a1a1a]`}>
        <SmoothScroll /> {/* <--- O scroll suave é ativado aqui */}
        {children}
      </body>
    </html>
  )
}
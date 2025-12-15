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
  title: 'A.M. Brito | Carpintaria de Excelência',
  description: 'Carpintaria portuguesa especializada em espaços únicos.',
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
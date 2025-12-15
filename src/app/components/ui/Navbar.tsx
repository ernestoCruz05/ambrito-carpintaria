'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  // Agora a Navbar é transparente na Home ('/') E nos Contactos ('/contactos')
  const isTransparent = pathname === '/' || pathname === '/contactos' || pathname === '/oficina' || pathname === '/portfolio' || pathname === '/sobre'
  return (
    <nav className={isTransparent
      ? "absolute top-0 w-full px-8 pt-12 pb-8 z-50 flex justify-between items-center text-white"
      : "relative w-full px-8 py-8 z-50 flex justify-between items-center bg-[#050505] text-white border-b border-white/10"
    }>

      {/* Esquerda */}
      <div className="hidden md:flex gap-8 text-xs font-sans tracking-ultra-wide uppercase font-medium drop-shadow-md">
        <Link href="/portfolio" className="hover:text-[#C19A6B] transition-colors">Portfólio</Link>
        <Link href="/oficina" className="hover:text-[#C19A6B] transition-colors">Oficina</Link>
      </div>

      {/* Logo Central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center drop-shadow-md">
        <Link href="/">
          <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase border-b border-white/40 pb-2">
            A.M. Brito
          </h1>
          <p className="text-[0.6rem] uppercase tracking-[0.3em] mt-1 text-white/80">
            Carpintaria & Design
          </p>
        </Link>
      </div>

      {/* Direita */}
      <div className="hidden md:flex gap-8 text-xs font-sans tracking-ultra-wide uppercase font-medium drop-shadow-md">
        <Link href="/sobre" className="hover:text-[#C19A6B] transition-colors">Sobre</Link>
        <Link href="/contactos" className="hover:text-[#C19A6B] transition-colors">Contactos</Link>
      </div>
    </nav>
  )
}
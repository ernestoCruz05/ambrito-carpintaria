'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const isTransparent = pathname === '/' || pathname === '/contactos' || pathname === '/oficina' || pathname === '/portfolio' || pathname === '/sobre'

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/oficina', label: 'Oficina' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contactos', label: 'Contactos' },
  ]

  return (
    <>
      <nav className={isTransparent
        ? "absolute top-0 w-full px-8 pt-12 pb-8 z-50 flex justify-between items-center text-white"
        : "relative w-full px-8 py-8 z-50 flex justify-between items-center bg-[#050505] text-white border-b border-white/10"
      }>

        {/* Esquerda */}
        <div className="hidden md:flex gap-8 text-xs font-sans tracking-ultra-wide uppercase font-medium drop-shadow-md">
          <Link href="/portfolio" className="hover:text-[#C19A6B] transition-colors">Portfolio</Link>
          <Link href="/oficina" className="hover:text-[#C19A6B] transition-colors">Oficina</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden z-50 p-2 -ml-2"
          aria-label="Abrir menu"
        >
          <Menu size={24} className="text-white drop-shadow-md" />
        </button>

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

        {/* Empty div for mobile layout balance */}
        <div className="md:hidden w-8"></div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-[100] md:hidden
          transition-all duration-500 ease-out
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Backdrop with blur */}
        <div 
          className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-12 right-8 z-10 p-2"
          aria-label="Fechar menu"
        >
          <X size={28} className="text-white" />
        </button>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center">
            <h2 className="font-serif text-2xl tracking-widest uppercase text-white border-b border-white/40 pb-2">
              A.M. Brito
            </h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  font-serif text-3xl tracking-wider uppercase text-white
                  hover:text-[#C19A6B] transition-all duration-300
                  transform transition-transform
                  ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                  ${pathname === link.href ? 'text-[#C19A6B]' : ''}
                `}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info at Bottom */}
          <div className="absolute bottom-16 text-center space-y-2">
            <p className="text-gray-500 text-xs uppercase tracking-widest">Contacte-nos</p>
            <a 
              href="tel:+351919204718" 
              className="text-white text-lg font-serif hover:text-[#C19A6B] transition-colors block"
            >
              +351 919 204 718
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
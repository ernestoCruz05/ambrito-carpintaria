import SawdustParticles from './components/3d/SawdustParticles'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import ServicesGallery from './components/sections/ServiceGallery'
import Testimonials from './components/sections/Testimonials'
import WorkshopCTA from './components/sections/WorkshopCTA'
import Footer from './components/ui/Footer'
import Navbar from './components/ui/Navbar'

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#050505] text-[#e0e0e0]">

      { }
      <Navbar />

      {/* HERO BANNER */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/imgs/hero_placeholder.jpg"
            alt="Interiores modernos com acabamentos em madeira"
            className="w-full h-full object-cover scale-105 animate-in fade-in duration-[2s]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505]"></div>
        </div>

        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
          <SawdustParticles />
        </div>

        <div className="z-20 text-center space-y-8 max-w-5xl px-4 mt-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-[#C19A6B] font-medium animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            Desde 2000
          </p>

          {/* TÍTULO ATUALIZADO: Foco na Modernidade */}
          <h2 className="font-serif text-5xl md:text-8xl font-thin leading-[1.1] uppercase tracking-wide text-white drop-shadow-2xl animate-in slide-in-from-bottom-8 duration-1000 delay-500">
            A Arte da <br />
            <span className="italic font-light text-[#e0e0e0]/90">Carpintaria Moderna</span>
          </h2>

          {/* DESCRIÇÃO ATUALIZADA: Foco nos materiais reais que usam */}
          <p className="font-sans font-light text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed tracking-wide animate-in slide-in-from-bottom-8 duration-1000 delay-600">
            Especialistas em cozinhas, roupeiros e mobiliário personalizado.
            Dominamos os materiais contemporâneos: dos lacados perfeitos às folhas naturais e texturas inovadoras.
          </p>

          <div className="pt-8 animate-in slide-in-from-bottom-8 duration-1000 delay-700">
            <Link href="/portfolio" className="border border-white/30 bg-black/20 backdrop-blur-sm px-12 py-4 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 text-white inline-block">
              Ver Projetos
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 z-20 animate-bounce text-white/50">
          <ArrowDown size={24} strokeWidth={1} />
        </div>
      </section>

      { }
      <section className="bg-[#050505] py-32 px-6 relative z-20">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#C19A6B] to-transparent mx-auto mb-8"></div>

          <h3 className="font-serif text-3xl md:text-5xl leading-tight text-[#d4d4d4]">
            "A evolução da marcenaria <br /> exige versatilidade."
          </h3>

          <p className="text-xs uppercase tracking-widest text-[#8B5A2B]">
            — Materiais & Acabamentos
          </p>

          { }
          <p className="font-sans font-light text-gray-500 leading-loose text-sm md:text-base max-w-2xl mx-auto">
            Não nos limitamos ao passado. Combinamos a durabilidade das madeiras nobres com a
            precisão dos materiais modernos. Trabalhamos com <strong>MDFs hidrófugos</strong>, <strong>contraplacados</strong> de bétula,
            <strong>folhas de madeira natural</strong> (maple, carvalho, nogueira) e acabamentos <strong>lacados</strong> de alta resistência.
            O resultado é um mobiliário esteticamente irrepreensível e tecnicamente superior.
          </p>
        </div>
      </section>

      { }
      <ServicesGallery />

      { }
      <Testimonials />

      { }
      <WorkshopCTA />

      { }
      <Footer />

    </main>
  )
}
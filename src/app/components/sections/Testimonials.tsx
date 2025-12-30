'use client'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

const testimonials = [
    {
        id: 1,
        quote: "A A.M. Brito nao se limita a executar um projeto. Eles elevam a visao do arquiteto. A atencao ao detalhe nas caixilharias e o acabamento manual dos moveis transformaram completamente a atmosfera da nossa casa no Douro.",
        author: "Francisco & Helena S.",
        project: "Restauro de Solar, 2024"
    },
    {
        id: 2,
        quote: "Profissionalismo do inicio ao fim. A cozinha ficou exatamente como imaginavamos, com acabamentos impecaveis e uma qualidade que se ve e se sente.",
        author: "Ana R.",
        project: "Cozinha por Medida, 2024"
    },
    {
        id: 3,
        quote: "Trabalhamos com a A.M. Brito em varios projetos de interiores. A capacidade de interpretarem os desenhos tecnicos e de proporem solucoes praticas e um diferencial no mercado.",
        author: "Arq. Manuel Costa",
        project: "Colaboracao em Projetos, 2023"
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, [])

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    // Auto-advance every 6 seconds
    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(nextSlide, 6000)
        return () => clearInterval(interval)
    }, [isAutoPlaying, nextSlide])

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section className="bg-[#050505] py-32 px-6 relative border-t border-white/5">
            <div className="container mx-auto max-w-4xl text-center">

                {/* Linha Decorativa Vertical */}
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#C19A6B] to-transparent mx-auto mb-8"></div>

                {/* Titulo da Seccao */}
                <span className="text-gray-500 text-[0.65rem] uppercase tracking-[0.3em] mb-4 block">
                    A Palavra dos Clientes
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#e0e0e0] mb-12 tracking-wide">
                    DISTINCOES
                </h2>

                {/* Icone de Citacao */}
                <div className="flex justify-center mb-8">
                    <Quote className="text-[#C19A6B] w-8 h-8 opacity-50 rotate-180" />
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 text-gray-600 hover:text-[#C19A6B] transition-colors z-10"
                        aria-label="Depoimento anterior"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 text-gray-600 hover:text-[#C19A6B] transition-colors z-10"
                        aria-label="Proximo depoimento"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* O Depoimento - Fixed height container */}
                    <blockquote className="min-h-[200px] md:min-h-[180px] flex flex-col justify-center">
                        <p 
                            key={currentTestimonial.id}
                            className="font-serif text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto italic font-light animate-in fade-in duration-500"
                        >
                            &ldquo;{currentTestimonial.quote}&rdquo;
                        </p>

                        <footer className="space-y-2 mt-8">
                            <cite className="block text-[#C19A6B] text-xs uppercase tracking-widest not-italic font-bold">
                                — {currentTestimonial.author}
                            </cite>
                            <span className="block text-gray-600 text-[0.6rem] uppercase tracking-wider">
                                {currentTestimonial.project}
                            </span>
                        </footer>
                    </blockquote>
                </div>

                {/* Indicadores de Slide */}
                <div className="flex justify-center gap-3 mt-16">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'bg-[#C19A6B] w-6' 
                                    : 'bg-white/10 hover:bg-white/30'
                            }`}
                            aria-label={`Ir para depoimento ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}
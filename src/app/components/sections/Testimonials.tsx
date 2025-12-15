'use client'
import { Quote } from 'lucide-react'

export default function Testimonials() {
    return (
        <section className="bg-[#050505] py-32 px-6 relative border-t border-white/5">
            <div className="container mx-auto max-w-4xl text-center">

                {/* Linha Decorativa Vertical */}
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#C19A6B] to-transparent mx-auto mb-8"></div>

                {/* Título da Secção */}
                <span className="text-gray-500 text-[0.65rem] uppercase tracking-[0.3em] mb-4 block">
                    A Palavra dos Clientes
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#e0e0e0] mb-12 tracking-wide">
                    DISTINÇÕES
                </h2>

                {/* Ícone de Citação */}
                <div className="flex justify-center mb-8">
                    <Quote className="text-[#C19A6B] w-8 h-8 opacity-50 rotate-180" />
                </div>

                {/* O Depoimento */}
                <blockquote className="space-y-8">
                    <p className="font-serif text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto italic font-light">
                        "A A.M. Brito não se limita a executar um projeto. Eles elevam a visão do arquiteto.
                        A atenção ao detalhe nas caixilharias e o acabamento manual dos móveis transformaram
                        completamente a atmosfera da nossa casa no Douro."
                    </p>

                    <footer className="space-y-2">
                        <cite className="block text-[#C19A6B] text-xs uppercase tracking-widest not-italic font-bold">
                            — Francisco & Helena S.
                        </cite>
                        <span className="block text-gray-600 text-[0.6rem] uppercase tracking-wider">
                            Restauro de Solar, 2024
                        </span>
                    </footer>
                </blockquote>

                {/* Indicadores de Slide (Decorativos por agora) */}
                <div className="flex justify-center gap-3 mt-16">
                    <button className="w-2 h-2 rounded-full bg-[#C19A6B] transition-all"></button>
                    <button className="w-2 h-2 rounded-full bg-white/10 hover:bg-white/30 transition-all"></button>
                    <button className="w-2 h-2 rounded-full bg-white/10 hover:bg-white/30 transition-all"></button>
                </div>

            </div>
        </section>
    )
}
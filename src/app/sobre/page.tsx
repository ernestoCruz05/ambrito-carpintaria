import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Ruler, PenTool, LayoutDashboard } from 'lucide-react'

export default function Sobre() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1701964619679-4eced72c785e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvb2QlMjB0ZXh0dXJlJTIwaGlnaCUyMHF1YWxpdHklMjBjYXJwZW50cnklMjB3b29kd29ya2luZyUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D"
                        alt="Textura de madeira escura"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/50 to-[#050505]"></div>
                </div>

                <div className="z-10 text-center px-6 mt-16">
                    <span className="text-[#C19A6B] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        Quem Somos
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
                        Mais do que <br /> <span className="italic text-gray-500">Carpinteiros.</span>
                    </h1>
                </div>
            </section>

            {/* --- INTRODUÇÃO (Texto) --- */}
            <section className="py-20 px-6 container mx-auto max-w-4xl text-center">
                <p className="text-xl md:text-2xl font-serif text-gray-300 leading-relaxed italic">
                    "Desde 2000, dedicados à carpintaria técnica — com rigor, precisão e respeito pelo material."
                </p>
            </section>

            {/* --- O QUE FAZEMOS (A Lista Técnica "No Meio") --- */}
            <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative">
                <div className="container mx-auto px-6 max-w-6xl">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Lado Esquerdo: Título e Contexto */}
                        <div className="space-y-8 sticky top-32">
                            <h2 className="font-serif text-4xl text-white leading-tight">
                                Serviços & <br /> Capacidades
                            </h2>
                            <p className="text-gray-400 font-light leading-relaxed max-w-md">
                                Não nos limitamos a um estilo ou material. A nossa equipa está preparada para executar qualquer desafio de carpintaria, desde a estrutura bruta ao detalhe final de decoração.
                            </p>

                            {/* Botão para Portfolio */}
                            <div className="pt-4">
                                <Link href="/portfolio" className="text-[#C19A6B] text-xs uppercase tracking-widest border-b border-[#C19A6B] pb-1 hover:text-white hover:border-white transition-all">
                                    Ver Exemplos no Portfólio
                                </Link>
                            </div>
                        </div>

                        {/* Lado Direito: A Lista Detalhada */}
                        <div className="grid gap-12">

                            {/* Categoria 1: Interiores */}
                            <div className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-full text-[#C19A6B]">
                                        <LayoutDashboard size={24} />
                                    </div>
                                    <h3 className="font-serif text-2xl text-white">Interiores Residenciais</h3>
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {['Cozinhas por medida', 'Roupeiros e Closets', 'Mobiliário de WC', 'Revestimentos de Parede', 'Pavimentos em Madeira', 'Portas Interiores'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                                            <CheckCircle2 size={14} className="text-[#C19A6B]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Categoria 2: Mobiliário Técnico */}
                            <div className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-full text-[#C19A6B]">
                                        <Ruler size={24} />
                                    </div>
                                    <h3 className="font-serif text-2xl text-white">Mobiliário Técnico</h3>
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {['Balcões de Receção', 'Estantes de Biblioteca', 'Mesas de Reunião', 'Aparadores', 'Escadarias', 'Lambrins'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                                            <CheckCircle2 size={14} className="text-[#C19A6B]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Categoria 3: Materiais & Acabamentos */}
                            <div className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-full text-[#C19A6B]">
                                        <PenTool size={24} />
                                    </div>
                                    <h3 className="font-serif text-2xl text-white">Materiais & Acabamentos</h3>
                                </div>
                                <div className="bg-white/5 p-6 rounded-sm border border-white/5">
                                    <p className="text-sm text-gray-400 leading-loose">
                                        Trabalhamos com todo o espectro de materiais modernos:
                                        <span className="text-white"> Madeira Maciça</span> (Nogueira, Carvalho, Faia),
                                        <span className="text-white"> Derivados</span> (MDF Hidrófugo, Contraplacado Marítimo, Valchromat),
                                        e acabamentos de topo como <span className="text-white">Lacados</span> (Mate/Alto-Brilho),
                                        <span className="text-white">Vernizes</span> acrílicos e <span className="text-white">Folhas Naturais</span>.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            { }
            <section className="h-[50vh] relative">
                <Image
                    src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=2670&auto=format&fit=crop"
                    alt="Mãos a trabalhar madeira"
                    fill
                    className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-serif text-4xl text-white tracking-widest text-center">
                        "Feito em Portugal,<br />para durar."
                    </h3>
                </div>
            </section>

            <Footer />
        </main>
    )
}
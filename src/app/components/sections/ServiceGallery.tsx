'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const services = [
    {
        id: 1,
        title: "Interiores & Cozinhas",
        description: "Espaços desenhados para a vida moderna com o calor da madeira.",
        // Podes trocar por imagens locais depois: "/imgs/cozinha.jpg"
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop",
        span: "md:col-span-2"
    },
    {
        id: 2,
        title: "Mobiliário à Medida",
        description: "Peças únicas que contam uma história.",
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000&auto=format&fit=crop",
        span: "md:col-span-1"
    },
    {
        id: 3,
        title: "Restauro & Conservação",
        description: "Respeitar o passado, construindo o futuro.",
        image: "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&w=1000&auto=format&fit=crop",
        span: "md:col-span-1"
    },
    {
        id: 4,
        title: "Caixilharia & Portas",
        description: "A primeira impressão da sua casa.",
        image: "https://images.unsplash.com/photo-1506376579899-733d02633054?q=80&w=1000&auto=format&fit=crop",
        span: "md:col-span-2"
    }
]

export default function ServicesGallery() {
    return (
        // Alteração 1: Fundo creme (bg-[#f4f1ea]) e margens ajustadas
        <section className="bg-[#f4f1ea] py-24 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl">

                {/* Cabeçalho da Secção (Agora com texto escuro) */}
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <span className="text-[#8B5A2B] text-xs font-bold tracking-widest uppercase mb-2 block">
                            Especialidades
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4">
                            O Nosso Ofício
                        </h2>
                        <p className="text-gray-600 max-w-md font-light text-sm leading-relaxed">
                            Não fazemos apenas carpintaria. Criamos soluções completas de design e construção em madeira para clientes exigentes.
                        </p>
                    </div>

                    {/* Botão Escuro para contraste com o fundo claro */}
                    <Link href="/portfolio" className="text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 text-xs uppercase tracking-widest hover:text-[#8B5A2B] hover:border-[#8B5A2B] transition-colors flex items-center gap-2">
                        Ver Todo o Portfólio <ArrowUpRight size={16} />
                    </Link>
                </div>

                {/* Grelha Bento */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            // Alteração 2: Removida a border-white/5, adicionado shadow suave
                            className={`${service.span} group relative h-[400px] bg-[#e5e0d8] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500`}
                        >
                            {/* Imagem */}
                            <div className="absolute inset-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    // A imagem começa a preto e branco (grayscale) para ser elegante, e ganha cor no hover
                                    className="object-cover opacity-90 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                                />
                                {/* Gradiente preto por cima da imagem para o texto branco ser legível */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            </div>

                            {/* Texto (Dentro do cartão continua Branco porque está sobre a imagem escura) */}
                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-[#C19A6B] text-[0.65rem] uppercase tracking-[0.2em] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    0{service.id} — {service.title}
                                </span>
                                <h3 className="font-serif text-2xl text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-xs font-light max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Ícone Canto Superior (Branco sobre imagem) */}
                            <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <ArrowUpRight className="text-white w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
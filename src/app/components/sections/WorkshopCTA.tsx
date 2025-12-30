'use client'
import Image from 'next/image'
import { Hammer, MessageSquare, FileText } from 'lucide-react'
import Link from 'next/link'

export default function WorkshopCTA() {
    return (
        <section className="bg-[#f4f1ea] py-24 px-6 md:px-20 text-[#1a1a1a]">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Lado Esquerdo: Imagem */}
                <div className="relative h-[500px] w-full bg-[#e5e0d8] shadow-xl overflow-hidden group">
                    <Image
                        src="/imgs/pages/workshop-cta.jpg"
                        alt="Carpintaria em producao"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-4 border border-white/30 pointer-events-none"></div>
                </div>

                {/* Lado Direito: Novo Texto focado em CONTACTO */}
                <div className="space-y-8">
                    <div>
                        <span className="text-[#8B5A2B] text-xs font-bold tracking-widest uppercase mb-2 block">
                            O Processo
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">
                            Vamos dar vida <br /> ao seu projeto?
                        </h2>
                        <p className="text-gray-600 font-light leading-relaxed mb-8">
                            Cada peça começa com uma conversa. Quer tenha um projeto de arquitetura pronto ou apenas uma ideia num guardanapo, estamos aqui para aconselhar e orçamentar.
                        </p>
                    </div>

                    {/* Passos do Processo (Atualizados) */}
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start group">
                            <div className="p-3 bg-white border border-gray-200 rounded-full group-hover:border-[#8B5A2B] transition-colors">
                                <MessageSquare size={20} className="text-gray-400 group-hover:text-[#8B5A2B]" />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg">1. Contacto Inicial</h4>
                                <p className="text-xs text-gray-500 font-light mt-1">Fale-nos do que procura. Respondemos em 24h.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start group">
                            <div className="p-3 bg-white border border-gray-200 rounded-full group-hover:border-[#8B5A2B] transition-colors">
                                <FileText size={20} className="text-gray-400 group-hover:text-[#8B5A2B]" />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg">2. Orçamento & Design</h4>
                                <p className="text-xs text-gray-500 font-light mt-1">Apresentamos uma proposta detalhada e materiais.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start group">
                            <div className="p-3 bg-white border border-gray-200 rounded-full group-hover:border-[#8B5A2B] transition-colors">
                                <Hammer size={20} className="text-gray-400 group-hover:text-[#8B5A2B]" />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg">3. Produção & Entrega</h4>
                                <p className="text-xs text-gray-500 font-light mt-1">Fabricamos em Arouca e instalamos na sua casa.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <Link href="/contactos">
                            <button className="bg-[#1a1a1a] text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-[#8B5A2B] transition-colors shadow-lg">
                                Pedir Orçamento Gratuito
                            </button>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    )
}
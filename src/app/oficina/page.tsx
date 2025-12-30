import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Image from 'next/image'
import { Cpu, PaintBucket, Ruler, Users } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Oficina | A.M. Brito - Carpintaria de Excelencia',
    description: 'Conheca a nossa oficina em Arouca. Equipamentos CNC, cabine de lacagem, orlacao tecnica e uma equipa especializada em carpintaria de precisao.',
    openGraph: {
        title: 'A Nossa Oficina | A.M. Brito Carpintaria',
        description: 'Visite a nossa oficina equipada com tecnologia de ponta para carpintaria de excelencia.',
    },
}

export default function Oficina() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[80vh] w-full flex flex-col justify-center items-center overflow-hidden">
                {/* Imagem de Fundo (Ambiente Industrial Escuro) */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imgs/pages/oficina-hero.jpg"
                        alt="Oficina de Carpintaria Moderna"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    {/* Gradiente para garantir leitura do texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-black/30"></div>
                </div>

                <div className="z-10 text-center px-6 max-w-4xl mt-20">
                    <span className="text-[#C19A6B] text-xs font-bold tracking-[0.3em] uppercase block mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Bastidores
                    </span>
                    <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                        Precisão <br /> <span className="italic text-white/50">Industrial.</span>
                    </h1>
                    <p className="text-gray-300 font-light text-sm md:text-lg max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        A nossa oficina em Arouca combina a maquinaria mais avançada com o olhar atento dos nossos carpinteiros.
                    </p>
                </div>
            </section>

            {/* --- INTRODUÇÃO / INFRAESTRUTURA --- */}
            <section className="py-24 px-6 container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="space-y-8">
                        <h2 className="font-serif text-4xl text-white">
                            Capacidade Técnica
                        </h2>
                        <div className="w-12 h-[1px] bg-[#C19A6B]"></div>
                        <p className="text-gray-400 font-light leading-loose">
                            A nossa oficina está equipada para trabalhar com materiais contemporâneos com a precisão que a arquitetura de hoje exige.
                        </p>
                        <p className="text-gray-400 font-light leading-loose">
                            Operamos com <strong>MDFs hidrófugos</strong> , <strong>painéis fenólicos</strong>,  <strong>folha de madeira natural</strong> e lacagens de alto brilho, temos o equipamento certo para cada desafio.
                        </p>
                    </div>

                    {/* Grid de Equipamentos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="bg-[#0f0f0f] border border-white/5 p-8 group hover:border-[#C19A6B]/30 transition-colors">
                            <Cpu className="text-[#C19A6B] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white text-lg font-serif mb-2">Corte CNC</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Tecnologia de controlo numérico para cortes complexos e gravação de padrões com precisão absoluta.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-[#0f0f0f] border border-white/5 p-8 group hover:border-[#C19A6B]/30 transition-colors">
                            <PaintBucket className="text-[#C19A6B] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white text-lg font-serif mb-2">Cabine de Lacagem</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Acabamentos lacados (mate ou brilho) feitos em ambiente controlado, livres de poeiras e impurezas.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-[#0f0f0f] border border-white/5 p-8 group hover:border-[#C19A6B]/30 transition-colors">
                            <Ruler className="text-[#C19A6B] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white text-lg font-serif mb-2">Orlação Técnica</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Aplicação de orlas em PVC ou madeira maciça com colagem invisível para uma durabilidade extrema.
                            </p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-[#0f0f0f] border border-white/5 p-8 group hover:border-[#C19A6B]/30 transition-colors">
                            <Users className="text-[#C19A6B] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white text-lg font-serif mb-2">Pré-Montagem</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Todos os móveis são pré-montados na oficina para garantir que encaixam na perfeição antes de chegarem à sua casa.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- IMAGEM DE DESTAQUE GRANDE --- */}
            <section className="w-full h-[60vh] relative bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("/imgs/pages/oficina-quote.jpg")' }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h3 className="font-serif text-4xl md:text-6xl text-white mb-6">"Qualidade nao e um ato, <br /> e um habito."</h3>
                    <p className="text-[#C19A6B] uppercase tracking-widest text-xs">Aristoteles</p>
                </div>
            </section>

            {/* --- HISTÓRIA / TIMELINE SIMPLES --- */}
            <section className="bg-[#f4f1ea] py-24 px-6 text-[#1a1a1a]">
                <div className="container mx-auto max-w-4xl text-center">

                    <span className="text-[#8B5A2B] text-xs font-bold tracking-widest uppercase mb-4 block">
                        O Nosso Legado
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#1a1a1a] mb-16">
                        25 Anos de Evolução
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

                        {/* Linha conectora (Agora cinzenta para se ver no branco) */}
                        <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-gray-300 -z-10"></div>

                        {/* Marco 1: O Início */}
                        <div className="space-y-4 bg-[#f4f1ea] p-4">

                            <span className="text-4xl font-serif text-[#C19A6B]">2000</span>

                            <h4 className="text-black text-sm uppercase tracking-wide">Fundação</h4>

                            <p className="text-gray-500 text-xs font-light">

                                Início como pequena oficina familiar dedicada ao restauro e mobiliário maciço.

                            </p>

                        </div>

                        {/* Marco 2: A Tecnologia */}
                        <div className="space-y-4 bg-[#f4f1ea] p-4">

                            <span className="text-4xl font-serif text-[#C19A6B]">2005</span>

                            <h4 className="text-black text-sm uppercase tracking-wide">Expansão</h4>

                            <p className="text-gray-500 text-xs font-light">

                                Mudança para as novas instalações na Zona Industrial de São Domingos II e primeiras máquinas.

                            </p>

                        </div>

                        {/* Marco 3: O Presente */}
                        <div className="space-y-4 bg-[#f4f1ea] p-4">

                            <span className="text-4xl font-serif text-[#C19A6B]">2021</span>

                            <h4 className="text-black text-sm uppercase tracking-wide">Modernização</h4>

                            <p className="text-gray-500 text-xs font-light">

                                Foco total em design de interiores, parcerias com arquitetos e materiais contemporâneos.

                            </p>

                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
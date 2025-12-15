import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contactos() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col">
            {/* Navbar (Keeps the same logic, transparent on top of image) */}
            <Navbar />

            {/* HERO SECTION WITH FADE (The "Oohhh" part) */}
            <div className="relative w-full h-[60vh] lg:h-[70vh]">

                {/* The Image */}
                <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                    alt="Contact Hero"
                    fill
                    className="object-cover opacity-80"
                    priority
                />

                {/* The Magic Fade: Gradient from transparent to solid black at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#050505]"></div>

                {/* Hero Text (Centered over the image/fade) */}
                <div className="absolute bottom-0 w-full p-8 pb-20 z-10 text-center">
                    <span className="text-[#C19A6B] text-xs font-bold tracking-[0.3em] uppercase block mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Fale Connosco
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                        Vamos Iniciar o Seu Projeto
                    </h1>
                    <p className="text-gray-300 font-light max-w-xl mx-auto text-lg leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        Estamos prontos para ouvir as suas ideias. Visite a nossa oficina ou envie-nos uma mensagem.
                    </p>
                </div>
            </div>

            {/* CONTENT SECTION (Seamlessly flowing from the fade above) */}
            <div className="container mx-auto px-6 max-w-6xl pb-24 -mt-10 relative z-20">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* LEFT: Contact Info (Styled to float on the dark background) */}
                    <div className="lg:col-span-4 space-y-10 pt-10">

                        <div className="space-y-6">
                            <h3 className="text-[#C19A6B] text-xs font-bold tracking-widest uppercase mb-6 border-b border-[#C19A6B]/30 pb-2 inline-block">
                                Contactos Diretos
                            </h3>

                            <div className="space-y-1">
                                <div className="flex items-center gap-3 text-white">
                                    <Phone size={16} className="text-[#C19A6B]" />
                                    <span className="text-xs uppercase tracking-widest text-gray-500">Telefone</span>
                                </div>
                                <p className="font-serif text-xl pl-7">+351 919 204 718</p>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center gap-3 text-white">
                                    <Mail size={16} className="text-[#C19A6B]" />
                                    <span className="text-xs uppercase tracking-widest text-gray-500">Email</span>
                                </div>
                                <a href="mailto:a.britocarpintaria@gmail.com" className="font-serif text-xl pl-7 hover:text-[#C19A6B] transition-colors">
                                    a.britocarpintaria@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[#C19A6B] text-xs font-bold tracking-widest uppercase mb-6 border-b border-[#C19A6B]/30 pb-2 inline-block">
                                Localização
                            </h3>
                            <div className="space-y-1">
                                <div className="flex items-center gap-3 text-white">
                                    <MapPin size={16} className="text-[#C19A6B]" />
                                    <span className="text-xs uppercase tracking-widest text-gray-500">Morada</span>
                                </div>
                                <address className="not-italic text-gray-400 pl-7 leading-relaxed text-sm">
                                    Zona Industrial São Domingos II<br />
                                    Lote 20&21 <br />
                                    4540-177 Arouca, Portugal
                                </address>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[#C19A6B] text-xs font-bold tracking-widest uppercase mb-6 border-b border-[#C19A6B]/30 pb-2 inline-block">
                                Horário
                            </h3>
                            <div className="space-y-1">
                                <div className="flex items-center gap-3 text-white">
                                    <Clock size={16} className="text-[#C19A6B]" />
                                    <span className="text-xs uppercase tracking-widest text-gray-500">Aberto</span>
                                </div>
                                <p className="text-gray-400 pl-7 text-sm">
                                    Seg - Sex: 08:00 - 18:00
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT: The Form (Dark, Minimalist, Premium) */}
                    <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative">
                        {/* Subtle glow effect behind the form */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C19A6B] opacity-[0.05] blur-[80px] rounded-full pointer-events-none"></div>

                        <form className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold group-focus-within:text-[#C19A6B] transition-colors">Nome</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:border-[#C19A6B] focus:outline-none transition-colors placeholder:text-gray-700"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold group-focus-within:text-[#C19A6B] transition-colors">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:border-[#C19A6B] focus:outline-none transition-colors placeholder:text-gray-700"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold group-focus-within:text-[#C19A6B] transition-colors">Telefone</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:border-[#C19A6B] focus:outline-none transition-colors placeholder:text-gray-700"
                                        placeholder="+351..."
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold group-focus-within:text-[#C19A6B] transition-colors">Assunto</label>
                                    <select className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:border-[#C19A6B] focus:outline-none transition-colors [&>option]:bg-black text-gray-400">
                                        <option>Orçamento Geral</option>
                                        <option>Cozinha</option>
                                        <option>Mobiliário</option>
                                        <option>Outro</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold group-focus-within:text-[#C19A6B] transition-colors">Mensagem</label>
                                <textarea
                                    rows={6}
                                    className="w-full bg-white/5 border border-white/10 p-4 text-sm text-white focus:border-[#C19A6B] focus:outline-none transition-colors resize-none placeholder:text-gray-600 mt-2 rounded-sm"
                                    placeholder="Como podemos ajudar?"
                                ></textarea>
                            </div>

                            <div className="flex justify-end pt-4">
                                <button className="bg-[#C19A6B] text-black px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(193,154,107,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                    Enviar Mensagem
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    )
}
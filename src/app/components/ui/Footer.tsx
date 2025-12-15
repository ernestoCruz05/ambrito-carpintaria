import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/10 pt-24 pb-12 px-6 text-gray-300 text-sm font-sans">
            <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                {/* Coluna 1: Marca */}
                <div className="space-y-6">
                    <h4 className="font-serif text-2xl text-white tracking-widest uppercase border-b border-white/20 pb-2 inline-block">
                        A.M. Brito
                    </h4>
                    <p className="font-light text-sm leading-relaxed max-w-xs text-gray-400">
                        Carpintaria de precisão e marcenaria artesanal. <br />
                        Criamos peças que perduram gerações com a alma da madeira portuguesa.
                    </p>
                </div>

                {/* Coluna 2: Navegação */}
                <div className="space-y-6">
                    <h5 className="text-[#C19A6B] text-xs font-bold uppercase tracking-[0.2em]">Explorar</h5>
                    <nav className="flex flex-col gap-3 font-light text-sm">
                        <Link href="#" className="hover:text-[#C19A6B] transition-colors hover:translate-x-1 duration-300">Portfólio</Link>
                        <Link href="#" className="hover:text-[#C19A6B] transition-colors hover:translate-x-1 duration-300">A Oficina</Link>
                        <Link href="#" className="hover:text-[#C19A6B] transition-colors hover:translate-x-1 duration-300">Sobre Nós</Link>
                        <Link href="#" className="hover:text-[#C19A6B] transition-colors hover:translate-x-1 duration-300">Imprensa</Link>
                    </nav>
                </div>

                {/* Coluna 3: Contactos */}
                <div className="space-y-6">
                    <h5 className="text-[#C19A6B] text-xs font-bold uppercase tracking-[0.2em]">Contacto</h5>
                    <div className="flex flex-col gap-3 font-light text-sm">
                        <a href="mailto:a.britocarpintaria@gmail.com" className="hover:text-white transition-colors">a.britocarpintaria@gmail.com</a>
                        <a href="tel:+351919204718" className="hover:text-white transition-colors">+351 919 204 718</a>
                        <address className="not-italic text-gray-400 mt-2 leading-relaxed">
                            Zona Industrial São Domingos II,<br />
                            Lote 20&21, <br />
                            4540-177 Arouca, Portugal
                        </address>
                    </div>
                </div>

                {/* Coluna 4: Newsletter */}
                <div className="space-y-6">
                    <h5 className="text-[#C19A6B] text-xs font-bold uppercase tracking-[0.2em]">Novidades</h5>
                    <p className="text-xs text-gray-400 mb-2">Receba os nossos projetos mais recentes.</p>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="O seu email"
                            className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C19A6B] transition-colors text-white placeholder:text-gray-600"
                        />
                        <button className="bg-[#e0e0e0] text-[#050505] px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#C19A6B] hover:text-white transition-colors">
                            Subscrever
                        </button>
                    </form>
                </div>

            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.7rem] uppercase tracking-widest text-gray-500">
                <p>&copy; {new Date().getFullYear()} A.M. Brito. Todos os direitos reservados.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
                    <Link href="#" className="hover:text-white transition-colors">Termos</Link>
                    <Link href="#" className="hover:text-white transition-colors">Livro de Reclamações</Link>
                </div>
            </div>
        </footer>
    )
}
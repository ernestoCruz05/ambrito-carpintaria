'use client'

import { useState, FormEvent } from 'react'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: 'Orcamento Geral',
        mensagem: '',
    })
    const [status, setStatus] = useState<FormStatus>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMessage('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Erro ao enviar mensagem')
            }

            setStatus('success')
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                assunto: 'Orcamento Geral',
                mensagem: '',
            })

            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000)
        } catch (error) {
            setStatus('error')
            setErrorMessage(error instanceof Error ? error.message : 'Erro desconhecido')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative">
            {/* Subtle glow effect behind the form */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C19A6B] opacity-[0.05] blur-[80px] rounded-full pointer-events-none"></div>

            {/* Success Message */}
            {status === 'success' && (
                <div className="absolute inset-0 bg-[#0a0a0a] z-20 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-2">Mensagem Enviada</h3>
                    <p className="text-gray-400 max-w-sm">
                        Obrigado pelo seu contacto. Responderemos o mais brevemente possivel.
                    </p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                        <label htmlFor="nome" className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold group-focus-within:text-[#C19A6B] transition-colors">
                            Nome *
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:border-[#C19A6B] focus:outline-none transition-colors placeholder:text-gray-700"
                            placeholder="Seu nome"
                        />
                    </div>
                    <div className="space-y-2 group">
                        <label htmlFor="email" className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold group-focus-within:text-[#C19A6B] transition-colors">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:border-[#C19A6B] focus:outline-none transition-colors placeholder:text-gray-700"
                            placeholder="seu@email.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                        <label htmlFor="telefone" className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold group-focus-within:text-[#C19A6B] transition-colors">
                            Telefone
                        </label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:border-[#C19A6B] focus:outline-none transition-colors placeholder:text-gray-700"
                            placeholder="+351..."
                        />
                    </div>
                    <div className="space-y-2 group">
                        <label htmlFor="assunto" className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold group-focus-within:text-[#C19A6B] transition-colors">
                            Assunto
                        </label>
                        <select
                            id="assunto"
                            name="assunto"
                            value={formData.assunto}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:border-[#C19A6B] focus:outline-none transition-colors [&>option]:bg-black"
                        >
                            <option value="Orcamento Geral">Orcamento Geral</option>
                            <option value="Cozinha">Cozinha</option>
                            <option value="Mobiliario">Mobiliario</option>
                            <option value="Roupeiros">Roupeiros</option>
                            <option value="Portas">Portas</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2 group">
                    <label htmlFor="mensagem" className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold group-focus-within:text-[#C19A6B] transition-colors">
                        Mensagem *
                    </label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-white/5 border border-white/10 p-4 text-sm text-white focus:border-[#C19A6B] focus:outline-none transition-colors resize-none placeholder:text-gray-600 mt-2 rounded-sm"
                        placeholder="Descreva o seu projeto ou questao..."
                    ></textarea>
                </div>

                {/* Error Message */}
                {status === 'error' && (
                    <div className="flex items-center gap-3 text-red-400 bg-red-900/20 p-4 rounded-sm">
                        <AlertCircle size={20} />
                        <span className="text-sm">{errorMessage}</span>
                    </div>
                )}

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="bg-[#C19A6B] text-black px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(193,154,107,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 size={16} className="animate-spin" />
                                A Enviar...
                            </>
                        ) : (
                            <>
                                <Send size={16} />
                                Enviar Mensagem
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

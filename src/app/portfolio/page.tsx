'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import portfolioData from './data/projects.json'
import { Project, Category } from './types'

const data = portfolioData as { categories: Category[]; projects: Project[] }

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('all')

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'all') return data.projects
        return data.projects.filter(project => project.category === activeCategory)
    }, [activeCategory])

    // Get category label for display
    const getCategoryLabel = (categoryId: string) => {
        const category = data.categories.find(c => c.id === categoryId)
        return category?.label || categoryId
    }

    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[50vh] flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#050505]">
                    {/* Subtle texture overlay */}
                    <div className="absolute inset-0 opacity-20 bg-[url('/textures/noise.png')] mix-blend-overlay"></div>
                </div>

                <div className="z-10 text-center px-6 mt-16">
                    <span className="text-[#C19A6B] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        Os Nossos Trabalhos
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
                        Portfólio
                    </h1>
                    <p className="text-gray-400 max-w-lg mx-auto font-light text-sm leading-relaxed">
                        Uma seleção dos nossos projetos mais recentes. Cada trabalho representa
                        o nosso compromisso com a qualidade e atenção ao detalhe.
                    </p>
                </div>
            </section>

            {/* --- CATEGORY FILTER --- */}
            <section className="sticky top-0 z-40 bg-[#050505]/95 backdrop-blur-sm border-b border-white/5">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {data.categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`
                                    px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300
                                    ${activeCategory === category.id
                                        ? 'text-[#C19A6B] border-b-2 border-[#C19A6B]'
                                        : 'text-gray-500 hover:text-white border-b-2 border-transparent'
                                    }
                                `}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PROJECTS GRID --- */}
            <section className="py-16 px-6 flex-grow">
                <div className="container mx-auto max-w-7xl">

                    {/* Results count */}
                    <p className="text-gray-600 text-xs uppercase tracking-widest mb-8">
                        {filteredProjects.length} {filteredProjects.length === 1 ? 'Projeto' : 'Projetos'}
                    </p>

                    {/* Masonry-style Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <Link
                                key={project.id}
                                href={`/portfolio/${project.id}`}
                                className={`
                                    group relative overflow-hidden bg-[#0a0a0a] border border-white/5
                                    hover:border-[#C19A6B]/30 transition-all duration-500
                                    ${project.featured && index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                                    ${project.featured && index !== 0 ? 'md:row-span-2' : ''}
                                `}
                            >
                                {/* Image Container */}
                                <div className={`
                                    relative w-full overflow-hidden
                                    ${project.featured && index === 0 ? 'h-[500px] md:h-[600px]' : ''}
                                    ${project.featured && index !== 0 ? 'h-[400px] md:h-[500px]' : ''}
                                    ${!project.featured ? 'h-[300px] md:h-[350px]' : ''}
                                `}>
                                    <Image
                                        src={`/portfolio/${project.id}/${project.cover}`}
                                        alt={project.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                    {/* Category Tag */}
                                    <span className="inline-block text-[#C19A6B] text-[0.6rem] uppercase tracking-[0.2em] mb-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                        {getCategoryLabel(project.category)}
                                    </span>

                                    {/* Title */}
                                    <h3 className="font-serif text-xl md:text-2xl text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        {project.title}
                                    </h3>

                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-gray-400 text-xs opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <span className="flex items-center gap-1">
                                            <MapPin size={12} />
                                            {project.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} />
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Description (only for featured) */}
                                    {project.featured && (
                                        <p className="text-gray-400 text-xs mt-3 max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-150">
                                            {project.description}
                                        </p>
                                    )}
                                </div>

                                {/* Arrow Icon */}
                                <div className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                                    <ArrowUpRight className="text-white w-4 h-4" />
                                </div>

                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#C19A6B]/20 backdrop-blur-sm text-[#C19A6B] text-[0.6rem] uppercase tracking-widest">
                                        Destaque
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-sm">
                                Nenhum projeto encontrado nesta categoria.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="bg-[#0a0a0a] border-t border-white/5 py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                        Tem um projeto em mente?
                    </h2>
                    <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
                        Estamos disponíveis para discutir o seu próximo projeto de carpintaria.
                    </p>
                    <Link
                        href="/contactos"
                        className="inline-block border border-[#C19A6B] text-[#C19A6B] px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C19A6B] hover:text-black transition-all duration-500"
                    >
                        Fale Connosco
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

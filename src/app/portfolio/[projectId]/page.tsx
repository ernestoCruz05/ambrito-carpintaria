import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'
import portfolioData from '../data/projects.json'
import { Project, Category } from '../types'
import ImageGallery from './ImageGallery'

const data = portfolioData as { categories: Category[]; projects: Project[] }

// Generate static params for all projects
export async function generateStaticParams() {
    return data.projects.map((project) => ({
        projectId: project.id,
    }))
}

// Get project by ID
function getProject(projectId: string): Project | undefined {
    return data.projects.find((p) => p.id === projectId)
}

// Get adjacent projects for navigation
function getAdjacentProjects(projectId: string) {
    const currentIndex = data.projects.findIndex((p) => p.id === projectId)
    const prevProject = currentIndex > 0 ? data.projects[currentIndex - 1] : null
    const nextProject = currentIndex < data.projects.length - 1 ? data.projects[currentIndex + 1] : null
    return { prevProject, nextProject }
}

// Get category label
function getCategoryLabel(categoryId: string) {
    const category = data.categories.find((c) => c.id === categoryId)
    return category?.label || categoryId
}

interface PageProps {
    params: Promise<{ projectId: string }>
}

export default async function ProjectPage({ params }: PageProps) {
    const { projectId } = await params
    const project = getProject(projectId)

    if (!project) {
        notFound()
    }

    const { prevProject, nextProject } = getAdjacentProjects(projectId)

    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col">
            <Navbar />

            {/* --- HERO IMAGE --- */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <Image
                    src={`/portfolio/${project.id}/${project.cover}`}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>

                {/* Back Button */}
                <Link
                    href="/portfolio"
                    className="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-widest transition-colors z-10"
                >
                    <ArrowLeft size={16} />
                    Voltar ao Portfólio
                </Link>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="container mx-auto max-w-6xl">
                        <span className="text-[#C19A6B] text-xs uppercase tracking-[0.3em] block mb-4">
                            {getCategoryLabel(project.category)}
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
                            <span className="flex items-center gap-2">
                                <MapPin size={14} className="text-[#C19A6B]" />
                                {project.location}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-[#C19A6B]" />
                                {project.year}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PROJECT DESCRIPTION --- */}
            <section className="py-16 px-6 border-b border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <h2 className="font-serif text-2xl text-white mb-6">Sobre o Projeto</h2>
                            <p className="text-gray-400 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <span className="text-[#C19A6B] text-xs uppercase tracking-widest block mb-2">
                                    Categoria
                                </span>
                                <p className="text-white">{getCategoryLabel(project.category)}</p>
                            </div>
                            <div>
                                <span className="text-[#C19A6B] text-xs uppercase tracking-widest block mb-2">
                                    Localização
                                </span>
                                <p className="text-white">{project.location}</p>
                            </div>
                            <div>
                                <span className="text-[#C19A6B] text-xs uppercase tracking-widest block mb-2">
                                    Ano
                                </span>
                                <p className="text-white">{project.year}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- IMAGE GALLERY --- */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="font-serif text-2xl text-white mb-8">Galeria</h2>
                    <ImageGallery
                        projectId={project.id}
                        images={project.images}
                        title={project.title}
                    />
                </div>
            </section>

            {/* --- PROJECT NAVIGATION --- */}
            <section className="border-t border-white/5">
                <div className="grid grid-cols-2">
                    {/* Previous Project */}
                    {prevProject ? (
                        <Link
                            href={`/portfolio/${prevProject.id}`}
                            className="group relative h-[200px] md:h-[300px] overflow-hidden border-r border-white/5"
                        >
                            <Image
                                src={`/portfolio/${prevProject.id}/${prevProject.cover}`}
                                alt={prevProject.title}
                                fill
                                className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12">
                                <span className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest mb-2">
                                    <ChevronLeft size={14} />
                                    Projeto Anterior
                                </span>
                                <span className="font-serif text-lg md:text-2xl text-white group-hover:text-[#C19A6B] transition-colors">
                                    {prevProject.title}
                                </span>
                            </div>
                        </Link>
                    ) : (
                        <div className="h-[200px] md:h-[300px] bg-[#0a0a0a] border-r border-white/5"></div>
                    )}

                    {/* Next Project */}
                    {nextProject ? (
                        <Link
                            href={`/portfolio/${nextProject.id}`}
                            className="group relative h-[200px] md:h-[300px] overflow-hidden"
                        >
                            <Image
                                src={`/portfolio/${nextProject.id}/${nextProject.cover}`}
                                alt={nextProject.title}
                                fill
                                className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-end p-8 md:p-12 text-right">
                                <span className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest mb-2">
                                    Próximo Projeto
                                    <ChevronRight size={14} />
                                </span>
                                <span className="font-serif text-lg md:text-2xl text-white group-hover:text-[#C19A6B] transition-colors">
                                    {nextProject.title}
                                </span>
                            </div>
                        </Link>
                    ) : (
                        <div className="h-[200px] md:h-[300px] bg-[#0a0a0a]"></div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}

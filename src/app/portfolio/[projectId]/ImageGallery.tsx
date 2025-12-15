'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageGalleryProps {
    projectId: string
    images: string[]
    title: string
}

export default function ImageGallery({ projectId, images, title }: ImageGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openLightbox = useCallback((index: number) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
        document.body.style.overflow = 'hidden'
    }, [])

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false)
        document.body.style.overflow = 'unset'
    }, [])

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }, [images.length])

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, [images.length])

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowLeft') goToPrevious()
        if (e.key === 'ArrowRight') goToNext()
    }, [closeLightbox, goToPrevious, goToNext])

    return (
        <>
            {/* Grid Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <button
                        key={image}
                        onClick={() => openLightbox(index)}
                        className="group relative aspect-[4/3] overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-[#C19A6B]/30 transition-all duration-300 cursor-pointer"
                    >
                        <Image
                            src={`/portfolio/${projectId}/${image}`}
                            alt={`${title} - Imagem ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                        {/* Image number indicator */}
                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {index + 1} / {images.length}
                        </div>
                    </button>
                ))}
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Galeria de imagens"
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 p-3 text-white/70 hover:text-white transition-colors z-10"
                        aria-label="Fechar galeria"
                    >
                        <X size={24} />
                    </button>

                    {/* Navigation - Previous */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            goToPrevious()
                        }}
                        className="absolute left-4 md:left-8 p-3 text-white/50 hover:text-white transition-colors z-10"
                        aria-label="Imagem anterior"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    {/* Navigation - Next */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            goToNext()
                        }}
                        className="absolute right-4 md:right-8 p-3 text-white/50 hover:text-white transition-colors z-10"
                        aria-label="Próxima imagem"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative w-full h-full max-w-5xl max-h-[85vh] mx-4 md:mx-16"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={`/portfolio/${projectId}/${images[currentIndex]}`}
                            alt={`${title} - Imagem ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                        {currentIndex + 1} / {images.length}
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 py-2">
                        {images.map((image, index) => (
                            <button
                                key={image}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentIndex(index)
                                }}
                                className={`
                                    relative w-16 h-12 flex-shrink-0 overflow-hidden border-2 transition-all duration-200
                                    ${index === currentIndex
                                        ? 'border-[#C19A6B] opacity-100'
                                        : 'border-transparent opacity-50 hover:opacity-80'
                                    }
                                `}
                            >
                                <Image
                                    src={`/portfolio/${projectId}/${image}`}
                                    alt={`Miniatura ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

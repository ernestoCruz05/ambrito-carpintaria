import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Portfolio | A.M. Brito - Carpintaria de Excelencia',
    description: 'Explore os nossos projetos de cozinhas, roupeiros, mobiliario por medida e restauro. Trabalhos realizados em Portugal com materiais de qualidade.',
    openGraph: {
        title: 'Portfolio | A.M. Brito Carpintaria',
        description: 'Galeria de projetos de carpintaria: cozinhas, mobiliario, roupeiros e muito mais.',
    },
}

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

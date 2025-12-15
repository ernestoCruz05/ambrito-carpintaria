export interface Category {
    id: string
    label: string
}

export interface Project {
    id: string
    title: string
    category: string
    location: string
    year: number
    description: string
    featured: boolean
    cover: string
    images: string[]
}

export interface PortfolioData {
    categories: Category[]
    projects: Project[]
}

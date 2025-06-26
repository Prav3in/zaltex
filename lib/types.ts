import { LucideIcon } from 'lucide-react'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  category: 'web' | 'mobile' | 'desktop' | 'backend' | 'devops' | 'architecture'
  status: 'completed' | 'in-progress' | 'planned'
  featured: boolean
  image: string
  gallery?: string[]
  demoUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  metrics?: {
    label: string
    value: string
    improvement?: string
  }[]
  challenges?: string[]
  solutions?: string[]
  results?: string[]
  teamSize?: number
  duration?: string
  year: number
  client?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  type: 'full-time' | 'contract' | 'freelance' | 'internship'
  startDate: string
  endDate?: string
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
  logo?: string
  companyUrl?: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'cloud' | 'tools' | 'soft-skills'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  years: number
  icon?: LucideIcon
  description?: string
}

export interface SkillCategory {
  name: string
  skills: Skill[]
  icon: LucideIcon
}

export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  image: string
  rating: number
  text: string
  projectId?: string
  featured: boolean
  linkedinUrl?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  category: string
  readingTime: number
  featured: boolean
  image?: string
  author: {
    name: string
    image: string
    bio: string
  }
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  technologies: string[]
  deliverables: string[]
  timeline: string
  pricing: {
    type: 'fixed' | 'hourly' | 'project'
    range: string
  }
  icon: LucideIcon
  popular?: boolean
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  project: 'consultation' | 'development' | 'architecture' | 'audit' | 'other'
  budget: 'under-10k' | '10k-25k' | '25k-50k' | '50k-100k' | 'over-100k'
  timeline: 'asap' | '1-month' | '3-months' | '6-months' | 'flexible'
  message: string
  newsletter: boolean
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'website' | 'medium' | 'dev'
  url: string
  username?: string
  icon: LucideIcon
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  type: 'certification' | 'award' | 'recognition' | 'milestone'
  issuer: string
  icon?: LucideIcon
  url?: string
  image?: string
}

export interface NavItem {
  title: string
  href: string
  icon?: LucideIcon
  submenu?: NavItem[]
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  author: {
    name: string
    email: string
    twitter: string
    linkedin: string
    github: string
  }
  keywords: string[]
  nav: NavItem[]
  social: SocialLink[]
}

export interface Analytics {
  googleId?: string
  umamiId?: string
  hotjarId?: string
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
} 
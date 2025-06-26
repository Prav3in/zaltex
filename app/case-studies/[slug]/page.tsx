import CaseStudyContent from './case-study-content'
import { projects } from '@/lib/config'
import { notFound } from 'next/navigation'

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = projects.find(p => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return <CaseStudyContent project={project} />
} 
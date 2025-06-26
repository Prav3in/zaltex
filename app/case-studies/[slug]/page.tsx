'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ThemeLogo } from '@/components/theme-logo'
import { 
  ArrowLeft, 
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Target,
  Lightbulb,
  Settings,
  BarChart3,
  Calendar,
  Users,
  Star
} from 'lucide-react'
import { projects } from '@/lib/config'
import { Project } from '@/lib/types'

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const [project, setProject] = useState<Project | null>(null)
  const [activeMetric, setActiveMetric] = useState(0)

  useEffect(() => {
    const foundProject = projects.find(p => p.id === params.slug)
    setProject(foundProject || null)
  }, [params.slug])

  useEffect(() => {
    if (project?.metrics) {
      const interval = setInterval(() => {
        setActiveMetric((prev) => (prev + 1) % project.metrics!.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen hero-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Button asChild className="glass-button-primary text-white hover:text-white">
            <Link href="/#work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen hero-gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="floating-nav-pill">
          <div className="flex items-center justify-between px-6 py-3">
            <Link href="/" className="mr-8 flex items-center">
              <ThemeLogo 
                width={50} 
                height={50} 
                className="object-contain max-w-[50px] max-h-[50px]"
              />
            </Link>
            
            <Button asChild size="sm" variant="outline" className="glass-button px-4">
              <Link href="/#work">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="glass-button mb-4">
              {project.client}
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {project.longDescription}
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="glass-button">
                  {tech}
                </Badge>
              ))}
            </div>

            {project.demoUrl && (
              <Button size="lg" className="glass-button-primary text-white hover:text-white">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Live Site
              </Button>
            )}
          </motion.div>

          {/* Animated Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {project.metrics?.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card p-8 text-center transition-all duration-300 ${
                  index === activeMetric ? 'ring-2 ring-brand-400/50 scale-105' : ''
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="text-4xl font-bold text-brand-600 mb-2"
                >
                  {metric.value}
                </motion.div>
                <div className="text-lg font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-green-600">{metric.improvement}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">The Problem</h2>
              </div>
              <div className="space-y-4">
                {project.challenges?.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-3 mr-4 flex-shrink-0" />
                    <p className="text-muted-foreground">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="text-center">
                <div className="text-6xl font-bold text-red-500 mb-4">
                  Before
                </div>
                <p className="text-muted-foreground">
                  The existing solution was outdated, slow, and failing to convert visitors into customers.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center mr-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Our Strategy</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We developed a comprehensive strategy focused on user experience, 
              performance optimization, and conversion rate improvement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.solutions?.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bento-card"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center mb-4">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <p className="text-muted-foreground">{solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mr-4">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Execution</h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-brand-500 mr-3" />
                  <h4 className="text-lg font-semibold">Team Size</h4>
                </div>
                <p className="text-2xl font-bold text-brand-600">{project.teamSize} specialists</p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-brand-500 mr-3" />
                  <h4 className="text-lg font-semibold">Timeline</h4>
                </div>
                <p className="text-2xl font-bold text-brand-600">{project.duration}</p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-brand-500 mr-3" />
                  <h4 className="text-lg font-semibold">Year Completed</h4>
                </div>
                <p className="text-2xl font-bold text-brand-600">{project.year}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h4 className="text-xl font-semibold mb-6">Technology Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bento-card text-center py-4"
                  >
                    <div className="font-medium">{tech}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center mr-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Results</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The new solution delivered exceptional results that exceeded our client's expectations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {project.results?.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center mr-6 flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg">{result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card-blue p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to achieve similar results for your eCommerce store? 
              Let's discuss your project and create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="glass-button-primary text-white hover:text-white group px-8"
                asChild
              >
                <Link href="/#contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Strategy Call
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-button group px-8"
                asChild
              >
                <Link href="/#work">
                  View More Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
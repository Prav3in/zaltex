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
import { Project } from '@/lib/types'

interface CaseStudyContentProps {
  project: Project
}

export default function CaseStudyContent({ project }: CaseStudyContentProps) {
  const [activeMetric, setActiveMetric] = useState(0)

  useEffect(() => {
    if (project?.metrics) {
      const interval = setInterval(() => {
        setActiveMetric((prev) => (prev + 1) % project.metrics!.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [project])

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
              <div className="aspect-video bg-gradient-to-br from-red-50 to-red-100 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-red-300 text-6xl">📉</div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Business Impact</h3>
              <p className="text-muted-foreground">
                These challenges were costing the business significant revenue and hampering growth potential.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-green-500 text-6xl">💡</div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <p className="text-muted-foreground">
                We developed a comprehensive solution that addressed each challenge systematically.
              </p>
            </motion.div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center mr-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">The Solution</h2>
              </div>
              <div className="space-y-4">
                {project.solutions?.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-4 flex-shrink-0" />
                    <p className="text-muted-foreground">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 flex items-center justify-center mr-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">The Results</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our solution delivered measurable improvements across all key metrics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {project.results?.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl mb-4">✨</div>
                <p className="text-muted-foreground">{result}</p>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with a custom solution designed for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass-button-primary text-white hover:text-white">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Strategy Call
              </Button>
              <Button asChild size="lg" variant="outline" className="glass-button">
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
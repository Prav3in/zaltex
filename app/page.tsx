"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeLogo } from '@/components/theme-logo'
import { ProcessTimeline } from '@/components/process-timeline'
import { 
  ArrowRight, 
  Calendar,
  CheckCircle,
  Star,
  Quote,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Play,
  ChevronRight,
  Sparkles,
  Users,
  TrendingUp,
  Code,
  Smartphone,
  Zap,
  Target,
  Search,
  BarChart3,
  ShoppingCart,
  Palette,
  Rocket
} from 'lucide-react'
import { 
  siteConfig, 
  valuePropositions, 
  projects, 
  testimonials, 
  services 
} from '@/lib/config'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  // Ensure page starts at top on load/reload
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            
            <div className="hidden md:flex items-center space-x-6">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3 ml-8">
              <ThemeToggle />
              <Button 
                asChild
                size="sm"
                className="glass-button-primary text-white hover:text-white px-4 blue-gradient-outline force-white-text"
              >
                <Link href="#contact">
                  Book Call
                  <Calendar className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-md relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-xl"
            >
              <h1 className="text-display mb-lg">
                Let's Build a Store That{' '}
                <span className="blue-gradient-text">Sells Itself</span>.
                </h1>
              
              <p className="text-h5 text-muted-foreground mb-2xl max-w-3xl mx-auto font-normal">
                Zaltex crafts high-converting eCommerce websites and apps with stunning design, 
                seamless dev handoff, and post-launch support — all starting with a free strategy call.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button 
                  size="lg" 
                  className="glass-button-primary text-white hover:text-white group px-xl py-lg text-h6 blue-gradient-outline force-white-text"
                  asChild
                >
                  <Link href="#contact">
                    <Calendar className="mr-sm h-6 w-6" />
                    Book Your Free Strategy Call
                    <ArrowRight className="ml-sm h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <p className="text-body text-muted-foreground mt-md">
                  30-minute call • No pressure • Just strategy
                </p>
              </motion.div>
            </motion.div>
          </div>
              </div>
      </section>

      {/* Our Process Section */}
      <section className="py-xl px-md" id="process">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-lg"
          >
            <h2 className="text-h1 mb-lg">
              Our <span className="blue-gradient-text">Process</span>
            </h2>
            <p className="text-h5 text-muted-foreground max-w-3xl mx-auto font-normal">
              From kick-off call to post-launch support, we guide you through every step 
              of building your dream eCommerce store.
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Value Propositions - Bento Grid */}
      <section className="py-xl px-md min-h-screen flex flex-col justify-center">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-xl"
          >
            <h2 className="text-h2 mb-md">
              Why Choose <span className="blue-gradient-text">Zaltex</span>
            </h2>
            <p className="text-h6 text-muted-foreground max-w-2xl mx-auto font-normal">
              We're not just another agency. We're your partners in building 
              eCommerce experiences that convert visitors into customers.
            </p>
          </motion.div>

                    {/* Perfect Rectangle Bento Grid - 3x2 Layout */}
          <div className="grid grid-cols-3 gap-md auto-rows-fr max-h-[60vh]">
            {valuePropositions.map((prop, index) => {
              const IconComponent = prop.icon
              
              // Perfect 3x2 rectangle layout
              const getGridClass = (index: number) => {
                switch(index) {
                  case 0: // "Work directly with developers" - Hero (spans 2 cells)
                    return "col-span-2 row-span-1"
                  case 1: // "Post-launch performance support" - Top right
                    return "col-span-1 row-span-1"
                  case 2: // "SEO & copywriting included" - Bottom left
                    return "col-span-1 row-span-1"
                  case 3: // "Sales-focused design" - Bottom center
                    return "col-span-1 row-span-1"
                  case 4: // "Lightning-fast loading" - Bottom right
                    return "col-span-1 row-span-1"
                  case 5: // "Mobile-first approach" - Hidden or rearranged
                    return "col-span-3 row-span-1" // Spans full bottom width
                  default:
                    return "col-span-1 row-span-1"
                }
              }

                             // Define content sizing and background colors
               const getContentClass = (index: number) => {
                 switch(index) {
                   case 0: // Hero item - larger everything
                     return {
                       icon: "w-12 h-12 mb-md",
                       iconSize: "h-6 w-6",
                       title: "text-h4 mb-sm",
                       description: "text-body-lg font-normal",
                       background: "bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg"
                     }
                   case 1: // Post-launch performance
                     return {
                       icon: "w-10 h-10 mb-sm", 
                       iconSize: "h-5 w-5",
                       title: "text-h5 mb-xs",
                       description: "text-body",
                       background: "bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg"
                     }
                   case 2: // SEO & copywriting
                     return {
                       icon: "w-8 h-8 mb-sm",
                       iconSize: "h-4 w-4", 
                       title: "text-h6 mb-xs",
                       description: "text-body-sm",
                       background: "bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg"
                     }
                   case 3: // Sales-focused design
                     return {
                       icon: "w-8 h-8 mb-sm",
                       iconSize: "h-4 w-4", 
                       title: "text-h6 mb-xs",
                       description: "text-body-sm",
                       background: "bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg"
                     }
                   case 4: // Lightning-fast loading
                     return {
                       icon: "w-8 h-8 mb-sm",
                       iconSize: "h-4 w-4", 
                       title: "text-h6 mb-xs",
                       description: "text-body-sm",
                       background: "bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg"
                     }
                   case 5: // Mobile-first approach
                     return {
                       icon: "w-8 h-8 mb-sm",
                       iconSize: "h-4 w-4", 
                       title: "text-h6 mb-xs",
                       description: "text-body-sm",
                       background: "bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg"
                     }
                   default:
                     return {
                       icon: "w-8 h-8 mb-sm",
                       iconSize: "h-4 w-4", 
                       title: "text-h6 mb-xs",
                       description: "text-body-sm",
                       background: "bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950/30 dark:to-slate-900/30"
                     }
                 }
               }

              const contentClasses = getContentClass(index)
              
              return (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group ${getGridClass(index)} ${contentClasses.background} flex flex-col justify-center rounded-2xl p-lg hover:scale-[1.05] hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 dark:hover:shadow-violet-400/30 cursor-pointer`}
                >
                  <div 
                    className={`${contentClasses.icon} rounded-xl ${[0, 3, 4].includes(index) ? '' : `bg-gradient-to-r ${prop.color}`} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    style={
                      index === 0 ? {
                        background: 'linear-gradient(to right, #3b82f6, transparent)' // Blue to transparent
                      } : index === 3 ? {
                        background: 'linear-gradient(to right, #f97316, transparent)' // Orange to transparent  
                      } : index === 4 ? {
                        background: 'linear-gradient(to right, #8b5cf6, transparent)' // Violet to transparent
                      } : {}
                    }
                  >
                    <IconComponent className={`${contentClasses.iconSize} text-white`} />
                  </div>
                  <h3 className={`${contentClasses.title} text-foreground`}>{prop.title}</h3>
                  <p className={`${contentClasses.description} text-muted-foreground`}>{prop.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects - Glass Shards */}
      <section className="py-xl px-md min-h-screen flex flex-col justify-center" id="work">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-xl"
          >
            <h2 className="text-h2 mb-md">
              Featured <span className="blue-gradient-text">Projects</span>
            </h2>
            <p className="text-h6 text-muted-foreground max-w-2xl mx-auto font-normal">
              Real results from real clients. Every project designed to maximize 
              conversions and deliver exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-md">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, rotate: Math.random() * 6 - 3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-shard p-md cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="space-y-sm">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="glass-button text-xs">
                      {project.client}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="text-h5 mb-xs">{project.title}</h3>
                    <p className="text-body text-muted-foreground mb-sm">{project.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-sm">
                    {project.metrics?.slice(0, 3).map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-h5 text-brand-600 mb-xs">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-xs">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs px-xs py-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <Badge variant="outline" className="text-xs px-xs py-xs">
                        +{project.technologies.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-xl"
          >
            <Button size="sm" variant="outline" className="glass-button group">
              View All Projects
              <ArrowRight className="ml-xs h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-xl px-md min-h-screen flex flex-col justify-center" id="services">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-xl"
          >
            <h2 className="text-h2 mb-md">
              Our <span className="blue-gradient-text">Services</span>
            </h2>
            <p className="text-h6 text-muted-foreground max-w-2xl mx-auto font-normal">
              From custom Shopify stores to complete eCommerce platforms, 
              we have the expertise to bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-md">
            {services.map((service, index) => {
              const IconComponent = service.icon
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass-card p-md ${service.popular ? 'ring-2 ring-brand-400/50' : ''}`}
                >
                  {service.popular && (
                    <Badge className="mb-sm bg-gradient-to-r from-brand-400 to-brand-600 text-white text-xs">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="flex items-center mb-md">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 flex items-center justify-center mr-sm">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-h5">{service.title}</h3>
                      <p className="text-sm text-brand-600 font-medium">{service.pricing.range}</p>
                    </div>
                  </div>

                  <p className="text-body text-muted-foreground mb-md">{service.description}</p>

                  <div className="space-y-xs mb-md">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-xs flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-muted-foreground">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-xs mb-md">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{service.timeline}</span>
                  </div>
                </div>

                  <Button size="sm" className="w-full glass-button-primary text-white hover:text-white">
                    Get Started
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-3xl px-md" id="testimonials">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-2xl"
          >
            <h2 className="text-h1 mb-lg">
              Client <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-h5 text-muted-foreground max-w-3xl mx-auto font-normal">
              Don't just take our word for it. Here's what our clients say 
              about working with Zaltex.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-xl">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-lg"
              >
                <div className="flex items-center mb-md">
                  <Quote className="h-8 w-8 text-brand-400 mr-sm" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-body-lg text-muted-foreground mb-lg italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-md">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-h6">{testimonial.name}</div>
                    <div className="text-body text-muted-foreground">
                      {testimonial.position} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3xl px-md" id="contact">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card-blue p-2xl text-center max-w-4xl mx-auto"
          >
            <div className="space-y-xl">
              <div>
                <h2 className="text-h1 mb-lg">
                  Let's Build Your Next Store
                </h2>
                <p className="text-h5 text-muted-foreground max-w-2xl mx-auto font-normal">
                  Ready to transform your eCommerce experience? Let's discuss 
                  your project and create something amazing together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-md justify-center">
                <Button 
                  size="lg" 
                  className="glass-button-primary text-white hover:text-white group px-xl"
                >
                  <Calendar className="mr-xs h-5 w-5" />
                  Book Free Call
                  <ArrowRight className="ml-xs h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
          <Button
            size="lg"
                  variant="outline" 
                  className="glass-button group px-xl"
          >
                  <Mail className="mr-xs h-5 w-5" />
                  Send Message
          </Button>
              </div>

              <p className="text-body text-muted-foreground">
                Free call. No pressure. Just strategy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-2xl px-md border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Logo and Zaltex Text */}
            <div className="w-full h-full min-h-[300px] flex flex-col justify-center items-center md:items-start space-y-lg p-xl">
              <div className="flex items-center justify-center md:justify-start">
                <img 
                  src="/ZaltexX.png" 
                  alt="Zaltex" 
                  className="h-64 object-contain" 
                />
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-md md:space-y-0 md:space-x-lg">
                <span className="text-body-lg font-semibold text-muted-foreground">CONNECT:</span>
                <div className="flex space-x-md">
                  {siteConfig.social.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <Link
                        key={social.platform}
                        href={social.url}
                        className="p-xs rounded-lg glass-button-primary hover:scale-110 transition-transform"
                      >
                        <IconComponent className="h-5 w-5 text-white" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Services, Company, Contact Columns */}
            <div className="w-full h-full min-h-[300px] flex items-center p-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-xl w-full">
                <div>
                  <h4 className="text-h5 mb-md">Services</h4>
                  <div className="space-y-xs">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`#${service.id}`}
                        className="block text-body text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-h5 mb-md">Company</h4>
                  <div className="space-y-xs">
                    <Link href="#about" className="block text-body text-muted-foreground hover:text-foreground transition-colors">
                      About Us
                    </Link>
                    <Link href="#work" className="block text-body text-muted-foreground hover:text-foreground transition-colors">
                      Our Work
                    </Link>
                    <Link href="#process" className="block text-body text-muted-foreground hover:text-foreground transition-colors">
                      Our Process
                    </Link>
                    <Link href="#contact" className="block text-body text-muted-foreground hover:text-foreground transition-colors">
                      Contact
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-h5 mb-md">Contact</h4>
                  <div className="space-y-xs text-body text-muted-foreground">
                    <p>hello@zaltex.agency</p>
                    <p>Book a free strategy call</p>
                    <p>Response within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-2xl pt-xl text-center">
            <p className="text-body text-muted-foreground">&copy; 2024 Zaltex Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                             onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {projects.find(p => p.id === selectedProject) && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{projects.find(p => p.id === selectedProject)?.client}</Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedProject(null)}
                    >
                      ×
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {projects.find(p => p.id === selectedProject)?.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {projects.find(p => p.id === selectedProject)?.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {projects.find(p => p.id === selectedProject)?.metrics?.map((metric, idx) => (
                      <div key={idx} className="text-center glass-card p-4">
                        <div className="text-2xl font-bold text-brand-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                        <div className="text-xs text-green-600 mt-1">
                          {metric.improvement}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects.find(p => p.id === selectedProject)?.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="glass-button-primary text-white hover:text-white flex-1">
                      View Live Site
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ThemeLogo } from '@/components/theme-logo'
import { 
  ArrowLeft,
  Calendar,
  Clock,
  Video,
  CheckCircle,
  Users,
  MessageSquare,
  Zap
} from 'lucide-react'

export default function BookCallPage() {
  const [selectedService, setSelectedService] = useState<string>('')

  const serviceOptions = [
    {
      id: 'shopify-plus',
      name: 'Shopify Plus Development',
      price: '$8,000 - $25,000',
      description: 'Custom enterprise Shopify solutions',
      icon: Users
    },
    {
      id: 'custom-ecommerce', 
      name: 'Custom eCommerce Platform',
      price: '$15,000 - $50,000',
      description: 'Bespoke eCommerce solutions',
      icon: Zap
    },
    {
      id: 'optimization',
      name: 'Conversion Optimization',
      price: '$3,000 - $12,000', 
      description: 'Optimize existing stores',
      icon: MessageSquare
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We discuss your goals, challenges, and vision for your eCommerce store.',
      duration: '30 minutes'
    },
    {
      step: '02', 
      title: 'Strategy Proposal',
      description: 'Receive a custom strategy and detailed project proposal within 48 hours.',
      duration: '2 days'
    },
    {
      step: '03',
      title: 'Project Kickoff',
      description: 'Once approved, we begin development with weekly progress updates.',
      duration: '4-16 weeks'
    }
  ]

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
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="glass-button mb-4">
              Free Strategy Call
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project. We'll guide you from idea to launch 
              with a custom strategy designed to maximize your conversions.
            </p>
          </motion.div>

          {/* Call Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">30 Minutes</h3>
              <p className="text-sm text-muted-foreground">Focused discussion about your project goals</p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Video Call</h3>
              <p className="text-sm text-muted-foreground">Meet face-to-face with our development team</p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">No Pressure</h3>
              <p className="text-sm text-muted-foreground">Just strategy, insights, and honest advice</p>
            </div>
          </motion.div>

          {/* Service Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-center mb-8">What type of project are you considering?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {serviceOptions.map((service) => {
                const IconComponent = service.icon
                const isSelected = selectedService === service.id
                
                return (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bento-card cursor-pointer transition-all duration-300 ${
                      isSelected ? 'ring-2 ring-brand-400/50 bg-brand-50/10' : ''
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-400 to-brand-600 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      {isSelected && (
                        <CheckCircle className="h-5 w-5 text-brand-600" />
                      )}
                    </div>
                    <h3 className="font-semibold mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                    <div className="text-sm font-medium text-brand-600">{service.price}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Calendly Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card p-8 mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Schedule Your Free Call</h2>
              <p className="text-muted-foreground">
                Choose a time that works best for you. We'll send a calendar invite with video call details.
              </p>
            </div>

            {/* Placeholder for Calendly - In production, you'd embed the actual Calendly widget */}
            <div className="aspect-video bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl border-2 border-dashed border-brand-300 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="h-12 w-12 text-brand-400 mx-auto mb-4" />
                <p className="text-brand-600 font-medium mb-2">Calendly Widget</p>
                <p className="text-sm text-muted-foreground max-w-sm">
                  In production, this would be replaced with the actual Calendly embedded widget
                </p>
                <Button className="mt-4 glass-button-primary text-white hover:text-white">
                  Book Your Call Now
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Process Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-center mb-12">What happens next?</h2>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 glass-card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <Badge variant="outline" className="glass-button">
                        {step.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-3">Is the strategy call really free?</h3>
              <p className="text-muted-foreground">
                Yes, absolutely. We believe in providing value upfront. The call is completely free with no obligations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-3">Who will I be speaking with?</h3>
              <p className="text-muted-foreground">
                You'll speak directly with our senior developers and strategists - the same people who will build your project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-3">What if I'm not ready to start immediately?</h3>
              <p className="text-muted-foreground">
                No problem! We're happy to discuss your future plans and provide strategic guidance for when you're ready.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-3">Do you work with small businesses?</h3>
              <p className="text-muted-foreground">
                We work with businesses of all sizes, from startups to enterprise. Our solutions scale with your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card-blue p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your free strategy call today and let's discuss how we can 
              transform your eCommerce vision into reality.
            </p>
            
            <Button 
              size="lg" 
              className="glass-button-primary text-white hover:text-white group px-8"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Free Call
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              No sales pressure • Just honest strategy • 30-minute commitment
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
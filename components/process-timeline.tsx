"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { workflowSteps } from '@/lib/config'

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0)
  const [selectedStep, setSelectedStep] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(true)

  // Auto-animate through steps
  useEffect(() => {
    if (!isAnimating || selectedStep !== null) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAnimating, selectedStep])

  const handleStepClick = (index: number) => {
    setIsAnimating(false)
    setSelectedStep(index)
    setActiveStep(index)
  }

  const closeModal = () => {
    setSelectedStep(null)
    setIsAnimating(true)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Background blur overlay */}
      <AnimatePresence>
        {selectedStep !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-md z-40"
            onClick={closeModal}
          />
        )}
      </AnimatePresence>

      {/* Steps */}
      <div className="space-y-3 relative">
        {/* Vertical line - positioned to connect first to last step */}
        <div 
          className="absolute left-[12px] w-0.5 bg-gradient-to-b from-brand-400/30 via-brand-400/60 to-brand-400/30"
          style={{
            top: '12px', // Start at center of first icon (24px/2)
            bottom: '12px' // End at center of last icon (24px/2)
          }}
        />
        
        {workflowSteps.map((step, index) => {
          const IconComponent = step.icon
          const isActive = index === activeStep
          const isSelected = index === selectedStep

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="relative flex items-center"
            >
              {/* Step indicator - positioned absolutely to align with line */}
              <motion.div
                className={`relative w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md border border-white/20 z-20 ${
                  isActive ? 'scale-110 shadow-lg' : 'scale-100'
                } ${
                  index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  index === 1 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                  index === 2 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  index === 3 ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                  index === 4 ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                  'bg-gradient-to-r from-pink-500 to-pink-600'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStepClick(index)}
              >
                <IconComponent className="h-3 w-3 text-white drop-shadow-sm" />
                
                {/* Animated arrow - positioned to the left of the icon */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute -left-8 top-1/2 -translate-y-1/2 z-10"
                  >
                    <div className="flex items-center">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-0 h-0 border-l-[6px] border-l-brand-500 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Step content - positioned with proper spacing */}
              <motion.div
                className={`ml-5 flex-1 glass-card p-3 cursor-pointer transition-all duration-300 ${
                  isActive ? 'border-brand-400/30 bg-brand-50/5 dark:bg-brand-950/10' : ''
                }`}
                whileHover={{ scale: 1.01 }}
                onClick={() => handleStepClick(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold mb-0.5 text-foreground">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-xs text-brand-600 dark:text-brand-400 font-medium ml-3 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>

              {/* Detailed popup modal */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-96 max-w-[90vw] glass-card bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-2xl shadow-2xl">
                    <div className="p-6 text-center">
                      {/* Close button */}
                      <button
                        onClick={closeModal}
                        className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors group"
                      >
                        <X className="h-4 w-4 text-black/60 dark:text-white/60 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors" />
                      </button>

                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center shadow-lg ${
                          index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                          index === 1 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                          index === 2 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                          index === 3 ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                          index === 4 ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                          'bg-gradient-to-r from-pink-500 to-pink-600'
                        }`}
                      >
                        <IconComponent className="h-6 w-6 text-white drop-shadow-sm" />
                      </motion.div>

                      {/* Content */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                          Step {index + 1} of {workflowSteps.length}
                        </div>
                                              </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Control hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 1 : 0.5 }}
        className="text-center mt-4 text-xs text-muted-foreground"
      >
        {isAnimating ? (
          <p>Click any step to explore • Auto-advancing every 3 seconds</p>
        ) : (
          <p>Animation paused • Click anywhere to resume</p>
        )}
      </motion.div>
    </div>
  )
} 
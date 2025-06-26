"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useRef, useEffect } from "react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        ref={buttonRef}
        variant="outline" 
        size="icon" 
        className="relative glass-button border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Custom Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 glass-card border-white/20 bg-white/10 backdrop-blur-md rounded-lg shadow-lg z-[99999] animate-in slide-in-from-top-2 fade-in-0 duration-200">
          <div className="p-1">
            <button
              onClick={() => handleThemeChange("light")}
              className="w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-white/20 focus:bg-white/20 transition-colors cursor-pointer text-left"
            >
              <Sun className="mr-2 h-4 w-4" />
              Light
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className="w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-white/20 focus:bg-white/20 transition-colors cursor-pointer text-left"
            >
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </button>
            <button
              onClick={() => handleThemeChange("system")}
              className="w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-white/20 focus:bg-white/20 transition-colors cursor-pointer text-left"
            >
              <div className="mr-2 h-4 w-4 rounded-full bg-gradient-to-r from-orange-400 to-blue-500" />
              System
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 
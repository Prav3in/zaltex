"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"

interface ThemeLogoProps {
  width?: number
  height?: number
  className?: string
  alt?: string
}

export function ThemeLogo({ 
  width = 50, 
  height = 50, 
  className = "object-contain", 
  alt = "Logo" 
}: ThemeLogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Always render the same structure, but control visibility with opacity
  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <div className="relative" suppressHydrationWarning>
      {/* Light theme logo */}
      <Image
        src="/ISP_Centered.png"
        alt={alt}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-300 ${
          isDark ? 'opacity-0' : 'opacity-100'
        }`}
        priority
      />
      
      {/* Dark theme logo - positioned absolutely to overlay */}
      <Image
        src="/ISP_Filled_White.png"
        alt={alt}
        width={width}
        height={height}
        className={`${className} absolute inset-0 transition-opacity duration-300 ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`}
        priority
      />
    </div>
  )
} 
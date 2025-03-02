"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

import { Particles } from "@/components/ui/particles"

interface ParticlesBackgroundProps {
  children: React.ReactNode
}

export function ParticlesBackground({ children }: ParticlesBackgroundProps) {
  const { theme, resolvedTheme } = useTheme()
  const [color, setColor] = useState("#000000")
  const [mounted, setMounted] = useState(false)
  const observerRef = useRef<MutationObserver | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      // Initial check for dark mode
      const checkDarkMode = () => {
        const isDark = 
          resolvedTheme === "dark" || 
          theme === "dark" || 
          document.documentElement.classList.contains('dark')
        
        setColor(isDark ? "#ffffff" : "#000000")
        console.log("Theme updated:", { isDark, color: isDark ? "#ffffff" : "#000000" })
      }

      // Run initial check
      checkDarkMode()

      // Set up observer to watch for class changes on html element
      if (!observerRef.current) {
        observerRef.current = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (
              mutation.type === 'attributes' && 
              mutation.attributeName === 'class'
            ) {
              checkDarkMode()
            }
          })
        })

        // Start observing
        observerRef.current.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class']
        })
      }

      // Clean up observer
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect()
        }
      }
    }
  }, [theme, resolvedTheme, mounted])

  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 min-h-screen">
        <Particles
          className="h-full w-full min-h-screen"
          quantity={50}
          staticity={30}
          ease={50}
          size={0.6}
          color={color}
          refresh={mounted}
        />
      </div>
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  )
} 
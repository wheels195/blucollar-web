"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxElement({ children, speed = 0.1, className = "" }: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate normalized coordinates (-1 to 1)
      const normalizedX = (clientX / innerWidth) * 2 - 1
      const normalizedY = (clientY / innerHeight) * 2 - 1

      // Apply parallax effect
      const moveX = normalizedX * speed * 30
      const moveY = normalizedY * speed * 30

      elementRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [speed])

  return (
    <div ref={elementRef} className={`parallax-element ${className}`}>
      {children}
    </div>
  )
}

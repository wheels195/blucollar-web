"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export function WebDesign3D() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return

      const rect = canvasRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      // Calculate the rotation based on mouse position
      const rotateX = 10 - y * 20 // -10 to 10 degrees
      const rotateY = -10 + x * 20 // -10 to 10 degrees

      // Apply the rotation to the elements
      const elements = canvasRef.current.querySelectorAll(".layer")
      elements.forEach((el, index) => {
        const depth = index + 1
        const translateZ = -depth * 10
        const element = el as HTMLElement
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={canvasRef}
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl border border-border bg-muted/30"
    >
      {/* Website Mockup Layers */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background Layer */}
        <div className="layer absolute w-[80%] h-[80%] bg-background rounded-lg shadow-lg transition-transform duration-200 ease-out">
          {/* Browser Chrome */}
          <div className="h-8 bg-muted rounded-t-lg flex items-center px-3 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="ml-4 h-5 w-[60%] bg-background rounded-full"></div>
          </div>

          {/* Website Content */}
          <div className="p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 w-24 bg-primary/20 rounded"></div>
              <div className="flex gap-3">
                <div className="h-4 w-12 bg-muted rounded"></div>
                <div className="h-4 w-12 bg-muted rounded"></div>
                <div className="h-4 w-12 bg-muted rounded"></div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <div className="h-8 w-3/4 bg-primary/30 rounded mb-2"></div>
                <div className="h-4 w-full bg-muted rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-muted rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-primary rounded"></div>
                  <div className="h-8 w-24 bg-muted rounded"></div>
                </div>
              </div>
              <div className="w-1/2 h-40 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded"></div>
            </div>
          </div>
        </div>

        {/* UI Elements Layer */}
        <div className="layer absolute w-[40%] h-[30%] bg-white rounded-lg shadow-lg right-[15%] top-[15%] transition-transform duration-200 ease-out">
          <div className="p-3">
            <div className="h-4 w-1/2 bg-primary/30 rounded mb-2"></div>
            <div className="h-3 w-full bg-muted/50 rounded mb-2"></div>
            <div className="h-3 w-5/6 bg-muted/50 rounded mb-3"></div>
            <div className="h-6 w-1/3 bg-primary rounded"></div>
          </div>
        </div>

        {/* Code Layer */}
        <div className="layer absolute w-[35%] h-[40%] bg-gray-900 rounded-lg shadow-lg left-[10%] bottom-[10%] transition-transform duration-200 ease-out overflow-hidden">
          <div className="p-3 text-xs font-mono text-green-400">
            <div className="text-pink-400">.header {`{`}</div>
            <div className="pl-4">display: flex;</div>
            <div className="pl-4">justify-content: space-between;</div>
            <div className="text-pink-400">{`}`}</div>
            <div className="text-pink-400">.hero {`{`}</div>
            <div className="pl-4">background: linear-gradient(...);</div>
            <div className="text-pink-400">{`}`}</div>
            <div className="text-blue-400">.button {`{`}</div>
            <div className="pl-4">border-radius: 4px;</div>
            <div className="pl-4">background-color: #3b82f6;</div>
            <div className="text-blue-400">{`}`}</div>
          </div>
        </div>

        {/* Mobile View Layer */}
        <div className="layer absolute w-[20%] h-[50%] bg-background rounded-[24px] shadow-lg right-[20%] bottom-[15%] transition-transform duration-200 ease-out overflow-hidden border-4 border-gray-700">
          <div className="h-4 bg-black rounded-b-lg w-1/3 mx-auto"></div>
          <div className="p-2">
            <div className="h-3 w-3/4 bg-primary/30 rounded mb-2"></div>
            <div className="h-20 w-full bg-gradient-to-br from-primary/20 to-purple-500/20 rounded mb-2"></div>
            <div className="h-2 w-full bg-muted rounded mb-1"></div>
            <div className="h-2 w-5/6 bg-muted rounded mb-1"></div>
            <div className="h-2 w-4/6 bg-muted rounded mb-2"></div>
            <div className="h-6 w-1/2 bg-primary rounded mx-auto"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ top: "20%", left: "20%" }}
        />

        <motion.div
          className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 shadow-lg"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{ bottom: "25%", right: "15%" }}
        />

        <motion.div
          className="absolute w-6 h-6 rounded-md bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg"
          animate={{
            x: [0, 10, 0],
            y: [0, 10, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ top: "30%", right: "30%" }}
        />
      </div>
    </div>
  )
}

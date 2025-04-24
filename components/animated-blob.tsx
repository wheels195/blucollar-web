"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedBlob() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation variables
    let animationFrameId: number
    const points = []
    const numPoints = 8
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(canvas.width, canvas.height) * 0.2

    // Create initial points in a circle
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2
      points.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        originX: centerX + Math.cos(angle) * radius,
        originY: centerY + Math.sin(angle) * radius,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
        scale: 1,
      })
    }

    // Simplex noise function (simplified for this example)
    const noise = (x: number, y: number) => {
      return Math.sin(x * 0.01) * Math.cos(y * 0.01) * 2
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points
      for (let i = 0; i < numPoints; i++) {
        const point = points[i]
        const nX = noise(point.noiseOffsetX, point.noiseOffsetY)
        const nY = noise(point.noiseOffsetY, point.noiseOffsetX)

        point.x = point.originX + nX * 20
        point.y = point.originY + nY * 20

        point.noiseOffsetX += 0.005
        point.noiseOffsetY += 0.005
      }

      // Draw blob
      ctx.fillStyle = "rgba(59, 130, 246, 0.2)" // Blue with transparency
      ctx.strokeStyle = "rgba(59, 130, 246, 0.5)"
      ctx.lineWidth = 1

      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)

      for (let i = 0; i < numPoints; i++) {
        const point = points[i]
        const nextPoint = points[(i + 1) % numPoints]

        const xc = (point.x + nextPoint.x) / 2
        const yc = (point.y + nextPoint.y) / 2

        ctx.quadraticCurveTo(point.x, point.y, xc, yc)
      }

      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.div
      className="w-64 h-64 mx-auto mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ filter: "blur(2px)" }} />
    </motion.div>
  )
}

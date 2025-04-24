"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function TechCodeAnimation() {
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
    const codeBlocks: CodeBlock[] = []
    const connections: Connection[] = []
    const numBlocks = 12

    // Colors
    const colors = [
      "rgba(59, 130, 246, 0.8)", // Blue
      "rgba(99, 102, 241, 0.8)", // Indigo
      "rgba(139, 92, 246, 0.8)", // Purple
      "rgba(236, 72, 153, 0.8)", // Pink
    ]

    // Create code blocks
    for (let i = 0; i < numBlocks; i++) {
      const x = Math.random() * canvas.width * 0.8 + canvas.width * 0.1
      const y = Math.random() * canvas.height * 0.8 + canvas.height * 0.1
      const width = 30 + Math.random() * 60
      const height = 20 + Math.random() * 30
      const color = colors[Math.floor(Math.random() * colors.length)]
      const targetX = canvas.width / 2 + (Math.random() - 0.5) * canvas.width * 0.6
      const targetY = canvas.height / 2 + (Math.random() - 0.5) * canvas.height * 0.6

      codeBlocks.push({
        x,
        y,
        width,
        height,
        color,
        targetX,
        targetY,
        progress: 0,
        speed: 0.005 + Math.random() * 0.01,
        lines: Math.floor(Math.random() * 3) + 1,
      })
    }

    // Create connections between blocks
    for (let i = 0; i < numBlocks; i++) {
      for (let j = i + 1; j < numBlocks; j++) {
        if (Math.random() > 0.7) {
          connections.push({
            from: i,
            to: j,
            progress: 0,
            speed: 0.01 + Math.random() * 0.02,
            color: "rgba(255, 255, 255, 0.2)",
          })
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw connections
      connections.forEach((connection) => {
        connection.progress = Math.min(1, connection.progress + connection.speed)

        const fromBlock = codeBlocks[connection.from]
        const toBlock = codeBlocks[connection.to]

        const fromX = fromBlock.x + fromBlock.width / 2
        const fromY = fromBlock.y + fromBlock.height / 2
        const toX = toBlock.x + toBlock.width / 2
        const toY = toBlock.y + toBlock.height / 2

        const currentX = fromX + (toX - fromX) * connection.progress
        const currentY = fromY + (toY - fromY) * connection.progress

        ctx.beginPath()
        ctx.moveTo(fromX, fromY)
        ctx.lineTo(currentX, currentY)
        ctx.strokeStyle = connection.color
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw pulse
        if (connection.progress < 1) {
          ctx.beginPath()
          ctx.arc(currentX, currentY, 2, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
          ctx.fill()
        }
      })

      // Update and draw code blocks
      codeBlocks.forEach((block) => {
        block.progress = Math.min(1, block.progress + block.speed)

        block.x = block.x + (block.targetX - block.x) * 0.02
        block.y = block.y + (block.targetY - block.y) * 0.02

        // Draw block
        ctx.fillStyle = block.color
        ctx.fillRect(block.x, block.y, block.width, block.height)

        // Draw code lines
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        for (let i = 0; i < block.lines; i++) {
          const lineWidth = block.width * 0.7 * Math.min(1, block.progress * 3)
          ctx.fillRect(
            block.x + block.width * 0.15,
            block.y + (i + 1) * (block.height / (block.lines + 1)),
            lineWidth,
            1,
          )
        }
      })

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
      className="w-full h-64 md:h-80 mx-auto mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}

// Types
interface CodeBlock {
  x: number
  y: number
  width: number
  height: number
  color: string
  targetX: number
  targetY: number
  progress: number
  speed: number
  lines: number
}

interface Connection {
  from: number
  to: number
  progress: number
  speed: number
  color: string
}

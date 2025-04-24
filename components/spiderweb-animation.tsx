"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function SpiderwebAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with proper scaling
    const setCanvasDimensions = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.scale(dpr, dpr)
    }

    // Initial setup
    setCanvasDimensions()

    // Handle resize
    const handleResize = () => {
      setCanvasDimensions()
      setupAnimation() // Recreate the animation when resized
    }

    window.addEventListener("resize", handleResize)

    // Animation variables
    let nodes: Node[] = []
    let connections: Connection[] = []

    // Setup animation
    function setupAnimation() {
      // Clear previous state
      nodes = []
      connections = []

      if (!canvas || !ctx) return

      // Colors
      const colors = [
        "rgba(59, 130, 246, 0.8)", // Blue
        "rgba(99, 102, 241, 0.8)", // Indigo
        "rgba(139, 92, 246, 0.8)", // Purple
      ]

      // Calculate scale factor based on container size
      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)
      const scaleFactor = Math.min(width, height) / 500

      // Determine number of nodes based on screen size - more nodes for larger screens
      const baseNodeCount = 30
      const screenSizeFactor = Math.max(1, Math.min(3, width / 1000))
      const numNodes = Math.max(30, Math.min(80, Math.floor(baseNodeCount * screenSizeFactor)))

      // Create center node
      nodes.push({
        x: width / 2,
        y: height / 2,
        radius: 4 * scaleFactor,
        color: "rgba(255, 255, 255, 0.8)",
        vx: 0,
        vy: 0,
        fixed: true,
      })

      // Create concentric rings of nodes - more rings for larger screens
      const rings = Math.max(3, Math.min(5, Math.floor(3 * screenSizeFactor)))
      for (let ring = 1; ring <= rings; ring++) {
        const ringRadius = (Math.min(width, height) / 2) * (ring / rings)
        const nodesInRing = Math.floor(8 * ring * screenSizeFactor)

        for (let i = 0; i < nodesInRing; i++) {
          const angle = (i / nodesInRing) * Math.PI * 2
          const x = width / 2 + Math.cos(angle) * ringRadius
          const y = height / 2 + Math.sin(angle) * ringRadius

          // Add some randomness to position
          const randomOffset = ringRadius * 0.15
          const randomX = x + (Math.random() - 0.5) * randomOffset
          const randomY = y + (Math.random() - 0.5) * randomOffset

          nodes.push({
            x: randomX,
            y: randomY,
            radius: (2 + Math.random() * 2) * scaleFactor,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 0.2 * scaleFactor,
            vy: (Math.random() - 0.5) * 0.2 * scaleFactor,
            fixed: false,
          })
        }
      }

      // Add some random nodes
      for (let i = nodes.length; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: (1 + Math.random() * 2) * scaleFactor,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 0.3 * scaleFactor,
          vy: (Math.random() - 0.5) * 0.3 * scaleFactor,
          fixed: false,
        })
      }

      // Create connections between nodes (spiderweb style)
      // Connect to center
      for (let i = 1; i < nodes.length; i++) {
        if (i <= 15 * screenSizeFactor) {
          // More connections for larger screens
          // First ring always connects to center
          connections.push({
            from: 0,
            to: i,
            width: 0.5 * scaleFactor,
            color: "rgba(255, 255, 255, 0.15)",
            pulse: {
              active: Math.random() > 0.7,
              position: 0,
              speed: 0.005 + Math.random() * 0.01,
              color: colors[Math.floor(Math.random() * colors.length)],
            },
          })
        }
      }

      // Connect nodes in same ring and adjacent rings
      // More connections for larger screens
      const maxConnections = Math.max(3, Math.min(6, Math.floor(3 * screenSizeFactor)))
      for (let i = 1; i < nodes.length; i++) {
        let connectionsCount = 0

        // Connect to nearby nodes
        for (let j = 1; j < nodes.length; j++) {
          if (i !== j && connectionsCount < maxConnections) {
            const dx = nodes[i].x - nodes[j].x
            const dy = nodes[i].y - nodes[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Connect if within range and not too many connections
            const connectionDistance = 120 * scaleFactor * screenSizeFactor
            if (distance < connectionDistance && Math.random() > 0.5) {
              connections.push({
                from: i,
                to: j,
                width: (0.3 + Math.random() * 0.5) * scaleFactor,
                color: "rgba(255, 255, 255, 0.1)",
                pulse: {
                  active: Math.random() > 0.8,
                  position: 0,
                  speed: 0.003 + Math.random() * 0.007,
                  color: colors[Math.floor(Math.random() * colors.length)],
                },
              })
              connectionsCount++
            }
          }
        }
      }
    }

    // Initial setup
    setupAnimation()

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return

      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update node positions with gentle movement
      nodes.forEach((node, index) => {
        if (!node.fixed) {
          // Add slight movement
          node.x += node.vx
          node.y += node.vy

          // Bounce off edges
          if (node.x < 0 || node.x > width) node.vx *= -1
          if (node.y < 0 || node.y > height) node.vy *= -1

          // Keep within bounds
          node.x = Math.max(0, Math.min(width, node.x))
          node.y = Math.max(0, Math.min(height, node.y))

          // Add slight wobble to simulate web movement
          const scaleFactor = Math.min(width, height) / 500
          node.x += Math.sin(Date.now() * 0.001 + index) * 0.2 * scaleFactor
          node.y += Math.cos(Date.now() * 0.001 + index) * 0.2 * scaleFactor
        }
      })

      // Draw connections (web threads)
      connections.forEach((connection) => {
        const fromNode = nodes[connection.from]
        const toNode = nodes[connection.to]

        // Draw line
        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.lineTo(toNode.x, toNode.y)
        ctx.strokeStyle = connection.color
        ctx.lineWidth = connection.width
        ctx.stroke()

        // Draw pulse if active
        if (connection.pulse.active) {
          connection.pulse.position += connection.pulse.speed
          if (connection.pulse.position > 1) {
            connection.pulse.position = 0
          }

          const pulseX = fromNode.x + (toNode.x - fromNode.x) * connection.pulse.position
          const pulseY = fromNode.y + (toNode.y - fromNode.y) * connection.pulse.position

          const scaleFactor = Math.min(width, height) / 500
          ctx.beginPath()
          ctx.arc(pulseX, pulseY, 1.5 * scaleFactor, 0, Math.PI * 2)
          ctx.fillStyle = connection.pulse.color
          ctx.fill()
        }
      })

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </motion.div>
  )
}

// Types
interface Node {
  x: number
  y: number
  radius: number
  color: string
  vx: number
  vy: number
  fixed: boolean
}

interface Connection {
  from: number
  to: number
  width: number
  color: string
  pulse: {
    active: boolean
    position: number
    speed: number
    color: string
  }
}

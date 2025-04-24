"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"
import * as THREE from "three"

export function ThreeDCube() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })

    renderer.setSize(200, 200)
    containerRef.current.innerHTML = ""
    containerRef.current.appendChild(renderer.domElement)

    // Create cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)

    // Materials for each face with different colors
    const isDark = theme === "dark"

    const materials = [
      new THREE.MeshBasicMaterial({ color: isDark ? 0x3b82f6 : 0x2563eb }), // Primary
      new THREE.MeshBasicMaterial({ color: isDark ? 0x34d399 : 0x10b981 }), // Secondary
      new THREE.MeshBasicMaterial({ color: isDark ? 0xa78bfa : 0x8b5cf6 }), // Accent
      new THREE.MeshBasicMaterial({ color: isDark ? 0x60a5fa : 0x3b82f6 }), // Light blue
      new THREE.MeshBasicMaterial({ color: isDark ? 0x818cf8 : 0x6366f1 }), // Indigo
      new THREE.MeshBasicMaterial({ color: isDark ? 0xf472b6 : 0xec4899 }), // Pink
    ]

    const cube = new THREE.Mesh(geometry, materials)
    scene.add(cube)

    camera.position.z = 2.5

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()

    // Handle mouse movement for parallax effect
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const { innerWidth, innerHeight } = window

      // Calculate normalized coordinates (-1 to 1)
      const normalizedX = (clientX / innerWidth) * 2 - 1
      const normalizedY = (clientY / innerHeight) * 2 - 1

      // Apply subtle rotation based on mouse position
      cube.rotation.x = normalizedY * 0.5
      cube.rotation.y = normalizedX * 0.5
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [theme])

  return <div ref={containerRef} className="w-[200px] h-[200px] mx-auto" aria-hidden="true" />
}

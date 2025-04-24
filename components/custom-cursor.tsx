"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.innerWidth < 768) {
      return
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hoverable")

      setIsHovering(isHoverable)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", updateHoverState)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", updateHoverState)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className={`custom-cursor ${isHovering ? "hover" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isHovering ? "scale(1.5)" : "scale(1)"}`,
      }}
    />
  )
}

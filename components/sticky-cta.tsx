"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the CTA after scrolling down 300px
      const scrollY = window.scrollY || document.documentElement.scrollTop
      setIsVisible(scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`sticky-cta ${isVisible ? "visible" : ""}`}>
      <Button size="lg" className="rounded-full shadow-lg">
        Get a Free Quote
      </Button>
    </div>
  )
}

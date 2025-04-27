"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, MessageCircle, DollarSign } from "lucide-react"

export function StickyContactCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const cta = document.getElementById('sticky-contact-cta')
    function checkWidth() {
      if (window.innerWidth > 400) {
        cta && (cta.style.display = 'flex')
      } else {
        cta && (cta.style.display = 'none')
      }
    }
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="sticky-cta"
        >
          <a
            href="#contact"
            className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-primary text-white rounded-full shadow-lg px-6 py-4 flex items-center gap-2 text-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            style={{ minWidth: 180, display: 'none', pointerEvents: 'auto' }}
            id="sticky-contact-cta"
          >
            <DollarSign className="w-6 h-6 mr-2" />
            Get a Free Quote
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare } from "lucide-react"

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
            className="flex items-center gap-2 bg-primary-light dark:bg-primary-dark text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageSquare size={18} />
            <span className="font-medium">Get a Quote</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

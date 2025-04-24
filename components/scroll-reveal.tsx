"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  threshold?: number
}

export function ScrollReveal({ children, delay = 0, threshold = 0.1 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

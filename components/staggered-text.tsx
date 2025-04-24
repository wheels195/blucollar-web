"use client"

import { motion } from "framer-motion"

interface StaggeredTextProps {
  text: string
  className?: string
  delay?: number
  staggerDuration?: number // Added parameter for letter stagger timing
  springConfig?: {
    // Added parameter for spring physics
    damping?: number
    stiffness?: number
    mass?: number
  }
}

export function StaggeredText({
  text,
  className = "",
  delay = 0,
  staggerDuration = 0.03, // Default stagger duration between letters
  springConfig = {
    // Default spring physics
    damping: 12,
    stiffness: 100,
    mass: 1,
  },
}: StaggeredTextProps) {
  // Create an array of letters from the text
  const letters = Array.from(text)

  // Animation variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
      },
    }),
  }

  // Animation variants for each letter
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: springConfig.damping,
        stiffness: springConfig.stiffness,
        mass: springConfig.mass,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: springConfig.damping,
        stiffness: springConfig.stiffness,
        mass: springConfig.mass,
      },
    },
  }

  return (
    <motion.span className={className} variants={container} initial="hidden" animate="visible" aria-label={text}>
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="inline-block" aria-hidden="true">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

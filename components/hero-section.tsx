"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { StaggeredText } from "./staggered-text"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [animationComplete, setAnimationComplete] = useState(false)

  // Trigger animations after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 1500) // Shorter delay to start text animations sooner after web appears

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-start pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 flex-1 flex items-center">
        <div className="flex flex-col items-center">
          {/* Text content */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationComplete ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Staggered text headline - appears after animation */}
            <div className="mb-6">
              <motion.span
                className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: animationComplete ? 1 : 0,
                  y: animationComplete ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Web Design & Development
              </motion.span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                {/* Slower, more dramatic title animation */}
                <StaggeredText
                  text="BluCollar Web"
                  className="gradient-text block"
                  delay={0.8} // Increased delay
                  staggerDuration={0.08} // Slower stagger between letters
                  springConfig={{
                    damping: 8, // Lower damping for more oscillation
                    stiffness: 70, // Lower stiffness for slower movement
                    mass: 1.2, // Higher mass for more momentum
                  }}
                />
                {/* Fixed subtitle to prevent word breaks */}
                <span className="block">
                  <StaggeredText
                    text="Websites for the"
                    delay={2.2} // Longer delay after first line
                    staggerDuration={0.06} // Slightly faster than first line but still slow
                    springConfig={{
                      damping: 10,
                      stiffness: 80,
                      mass: 1.1,
                    }}
                  />
                </span>
                <span className="block">
                  <StaggeredText
                    text="Everyday Businesses"
                    delay={2.8} // Longer delay after first line
                    staggerDuration={0.06} // Slightly faster than first line but still slow
                    springConfig={{
                      damping: 10,
                      stiffness: 80,
                      mass: 1.1,
                    }}
                  />
                </span>
              </h1>
              <motion.p
                className="text-lg text-foreground/80 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: animationComplete ? 1 : 0,
                  y: animationComplete ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 3.5 }} // Increased delay
              >
                We create modern, minimal, and high-performance websites that elevate your brand and drive results.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: animationComplete ? 1 : 0,
                y: animationComplete ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 4 }} // Increased delay
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
              >
                Get a Free Quote
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: animationComplete ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 4.2 }} // Increased delay
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary ring-2 ring-background"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-sm text-foreground/60">
                Guaranteed to provide you and your customers with the best experience
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

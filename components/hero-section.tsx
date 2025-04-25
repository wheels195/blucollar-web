"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Paintbrush, Laptop, Blocks } from "lucide-react"
import Link from "next/link"
import { HeroMockup } from "./hero-mockup"

const FloatingIcon = ({ icon: Icon, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 0.5, y: 0 }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className={`absolute hidden sm:block text-white/20 ${className}`}
  >
    <Icon size={24} />
  </motion.div>
)

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-start pt-16 overflow-hidden"
    >
      {/* Enhanced background with animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-1/3 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating tech icons */}
      <FloatingIcon icon={Code2} className="top-32 left-[15%]" delay={0} />
      <FloatingIcon icon={Paintbrush} className="top-48 right-[20%]" delay={0.5} />
      <FloatingIcon icon={Laptop} className="bottom-32 left-[20%]" delay={1} />
      <FloatingIcon icon={Blocks} className="bottom-48 right-[15%]" delay={1.5} />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          {/* Title with blur animation */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4"
            >
              <span className="px-4 py-1 text-lg bg-[#1d4ed8]/10 rounded-full text-[#3b82f6]">
                Website Design
              </span>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-[0.02em] text-white [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
              BluCollar Web
            </h1>
            <motion.div
              className="h-[2px] bg-gradient-to-r from-white/10 via-white to-white/10 mt-6 mx-auto max-w-[80%]"
              initial={{ width: "0%", opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 1.3, duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            />

            {/* Secondary tagline */}
            <motion.p
              className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Transform your business with a professional online presence that stands out from the competition
            </motion.p>
          </motion.div>

          {/* Hero Mockup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="w-full scale-125 mb-20"
          >
            <HeroMockup />
          </motion.div>

          {/* Enhanced CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 6.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 items-center"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
            >
              Get a Free Quote
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <span className="text-white/60">or</span>
            <Link
              href="#gallery"
              className="text-white/90 hover:text-white underline underline-offset-4 transition-colors"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

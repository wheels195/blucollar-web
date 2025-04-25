"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Code2, Paintbrush, Laptop, Blocks, Layout, Palette, Smartphone, Monitor, Figma, Code, Layers, Zap, Sparkles, Compass, Rocket, Eye, Wand2, Lightbulb } from "lucide-react"
import Link from "next/link"
import { HeroMockup } from "./hero-mockup"

// Design elements that float in the background
const DesignElement = ({ className, icon: Icon }: { className: string; icon?: any }) => (
  <div className={`absolute w-8 h-8 border border-white/10 rounded-lg backdrop-blur-sm ${className}`}>
    {Icon && <Icon className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/30" />}
  </div>
)

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

// Process step component
const ProcessStep = ({ icon: Icon, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="relative flex items-start gap-4 bg-black/20 backdrop-blur-lg rounded-xl p-6 hover-lift"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm text-blue-300">
      {index + 1}
    </div>
  </motion.div>
)

// Interactive design tip component
const DesignTip = ({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="glass-panel px-4 py-2 rounded-xl flex items-center gap-3 hover-glow cursor-pointer group"
  >
    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
      <Icon className="w-4 h-4 text-blue-400" />
    </div>
    <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">{text}</p>
  </motion.div>
)

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const processOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const processScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-start pt-16 overflow-hidden"
    >
      {/* Design Tips Panel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 8 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20"
      >
        <DesignTip
          icon={Eye}
          text="We focus on user-centered design"
          delay={8.2}
        />
        <DesignTip
          icon={Wand2}
          text="Custom animations & interactions"
          delay={8.4}
        />
        <DesignTip
          icon={Lightbulb}
          text="Creative solutions for your brand"
          delay={8.6}
        />
      </motion.div>
      
      {/* Enhanced background with animated gradient mesh, dot pattern, and design grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-repeat" />
        <div className="absolute inset-0 design-grid" />
      </div>

      {/* Design-focused floating elements with icons */}
      <DesignElement className="top-40 left-[10%] rotate-12 animate-float" icon={Figma} />
      <DesignElement className="top-60 right-[15%] -rotate-12 animate-float-delayed" icon={Code} />
      <DesignElement className="bottom-40 left-[20%] rotate-45 animate-float" icon={Layers} />
      <DesignElement className="bottom-60 right-[25%] -rotate-45 animate-float-delayed" icon={Zap} />

      {/* Enhanced floating tech icons */}
      <FloatingIcon icon={Layout} className="top-32 left-[15%]" delay={0} />
      <FloatingIcon icon={Palette} className="top-48 right-[20%]" delay={0.5} />
      <FloatingIcon icon={Smartphone} className="bottom-32 left-[20%]" delay={1} />
      <FloatingIcon icon={Monitor} className="bottom-48 right-[15%]" delay={1.5} />

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-1/3 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

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
          <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 6.2 }}
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/25 hover:shadow-primary/50"
              >
                <span className="relative z-10 flex items-center">
                  Get a Free Quote
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight size={20} />
                  </span>
                </span>
              </Link>
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 6.3 }}
              className="text-white/60 select-none"
            >
              or
            </motion.span>

            <motion.a
              href="#gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 6.4 }}
              className="group flex items-center text-lg text-white/60 hover:text-white/90 transition-colors duration-300 cursor-pointer"
            >
              View Our Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Design Process Preview */}
          <motion.div 
            style={{ opacity: processOpacity, scale: processScale }}
            className="w-full max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 parallax-deep"
          >
            {[
              {
                icon: Compass,
                title: "Discovery & Strategy",
                description: "We dive deep into your business goals and user needs to craft the perfect strategy.",
                depth: -20
              },
              {
                icon: Palette,
                title: "Design & UX",
                description: "Creating beautiful, intuitive interfaces that delight your users.",
                depth: -40
              },
              {
                icon: Code,
                title: "Development",
                description: "Building with cutting-edge technology for performance and scalability.",
                depth: -60
              },
              {
                icon: Rocket,
                title: "Launch & Growth",
                description: "Continuous optimization and support to help your business thrive.",
                depth: -80
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="relative flex items-start gap-4 glass-morphism rounded-xl p-6 hover-glow spotlight noise"
                style={{ "--depth": `${step.depth}px` } as any}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = ((e.clientX - rect.left) / rect.width) * 100
                  const y = ((e.clientY - rect.top) / rect.height) * 100
                  e.currentTarget.style.setProperty("--x", `${x}%`)
                  e.currentTarget.style.setProperty("--y", `${y}%`)
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center depth-layer" style={{ "--depth": "20px" } as any}>
                  <step.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 depth-layer" style={{ "--depth": "10px" } as any}>{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm text-blue-300 depth-layer" style={{ "--depth": "30px" } as any}>
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Design Expertise Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 7.6 }}
            className="absolute bottom-32 w-full overflow-hidden pointer-events-none"
          >
            <div className="flex justify-center gap-8 animate-shimmer">
              <div className="flex items-center gap-2 text-white/40">
                <Figma className="w-5 h-5" />
                <span className="text-sm">Design</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <Code className="w-5 h-5" />
                <span className="text-sm">Develop</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <Rocket className="w-5 h-5" />
                <span className="text-sm">Deploy</span>
              </div>
            </div>
          </motion.div>

          {/* Tech stack with enhanced effects */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6">
            {[
              { icon: Sparkles, text: "Next.js", delay: 7 },
              { icon: Sparkles, text: "React", delay: 7.2 },
              { icon: Sparkles, text: "Tailwind", delay: 7.4 }
            ].map((tech, index) => (
              <motion.div
                key={tech.text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: tech.delay }}
                className="glass-morphism px-4 py-2 rounded-full flex items-center gap-2 text-white/60 text-sm hover-glow spotlight animated-underline"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = ((e.clientX - rect.left) / rect.width) * 100
                  const y = ((e.clientY - rect.top) / rect.height) * 100
                  e.currentTarget.style.setProperty("--x", `${x}%`)
                  e.currentTarget.style.setProperty("--y", `${y}%`)
                }}
              >
                <tech.icon className="w-4 h-4" />
                <span>{tech.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Background Enhancements */}
          <div className="absolute inset-0 animated-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

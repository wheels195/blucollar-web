"use client"

import { motion } from "framer-motion"

export function HeroMockup() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 1.2,
        delayChildren: 1.7,
      },
    },
  }

  const panelVariants = {
    initial: {
      x: -100,
      y: 20,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const wordVariants = {
    initial: {
      x: -30,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
        duration: 0.5,
      },
    },
  }

  const AnimatedWord = ({ children, className = "" }) => (
    <motion.span
      variants={wordVariants}
      className={`inline-block mr-2 ${className}`}
    >
      {children}
    </motion.span>
  )

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-20" style={{ perspective: "2000px" }}>
      <motion.div
        className="w-full bg-black/20 backdrop-blur-sm rounded-2xl p-12 shadow-2xl"
        style={{
          transform: "rotate3d(5, -8, 0, 30deg)",
          transformOrigin: "center center",
        }}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="bg-black/40 backdrop-blur rounded-xl p-8 mb-8"
          variants={panelVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-relaxed">
            <AnimatedWord>Websites</AnimatedWord>
            <AnimatedWord>for</AnimatedWord>
            <AnimatedWord>the</AnimatedWord>
            <AnimatedWord className="text-blue-400">Everyday</AnimatedWord>
            <AnimatedWord className="text-purple-400">Business</AnimatedWord>
          </h2>
        </motion.div>

        <motion.div
          className="bg-black/40 backdrop-blur rounded-xl p-8 mb-8"
          variants={panelVariants}
        >
          <p className="text-xl leading-relaxed">
            <AnimatedWord>We</AnimatedWord>
            <AnimatedWord>create</AnimatedWord>
            <AnimatedWord className="text-emerald-400">modern,</AnimatedWord>
            <AnimatedWord className="text-amber-400">minimal,</AnimatedWord>
            <AnimatedWord>and</AnimatedWord>
            <AnimatedWord className="text-rose-400">high-performance</AnimatedWord>
            <AnimatedWord>websites</AnimatedWord>
            <AnimatedWord>that</AnimatedWord>
            <AnimatedWord className="text-cyan-400">elevate</AnimatedWord>
            <AnimatedWord className="text-cyan-400">your</AnimatedWord>
            <AnimatedWord className="text-cyan-400">brand</AnimatedWord>
            <AnimatedWord>and</AnimatedWord>
            <AnimatedWord className="text-indigo-400">drive</AnimatedWord>
            <AnimatedWord className="text-indigo-400">results.</AnimatedWord>
          </p>
        </motion.div>

        <motion.div
          className="bg-black/40 backdrop-blur rounded-xl p-8"
          variants={panelVariants}
        >
          <p className="text-xl leading-relaxed">
            <AnimatedWord className="text-green-400">Guaranteed</AnimatedWord>
            <AnimatedWord>to</AnimatedWord>
            <AnimatedWord>provide</AnimatedWord>
            <AnimatedWord>you</AnimatedWord>
            <AnimatedWord>and</AnimatedWord>
            <AnimatedWord>your</AnimatedWord>
            <AnimatedWord>customers</AnimatedWord>
            <AnimatedWord>with</AnimatedWord>
            <AnimatedWord>the</AnimatedWord>
            <AnimatedWord className="text-orange-400">best</AnimatedWord>
            <AnimatedWord className="text-orange-400">experience.</AnimatedWord>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
} 
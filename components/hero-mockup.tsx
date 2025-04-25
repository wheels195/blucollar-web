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
      className={`inline-block mr-3 ${className}`}
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
          <h2 className="text-3xl md:text-4xl font-medium leading-relaxed">
            <AnimatedWord className="text-blue-400/90 italic mr-3">Websites</AnimatedWord>
            <AnimatedWord className="mr-3">for</AnimatedWord>
            <AnimatedWord className="mr-3">the</AnimatedWord>
            <AnimatedWord className="mr-3">Everyday</AnimatedWord>
            <AnimatedWord>Business.</AnimatedWord>
          </h2>
        </motion.div>

        <motion.div
          className="bg-black/40 backdrop-blur rounded-xl p-8 mb-8"
          variants={panelVariants}
        >
          <p className="text-3xl md:text-4xl font-medium leading-relaxed">
            <AnimatedWord className="mr-3">Delivers</AnimatedWord>
            <AnimatedWord className="mr-3">the</AnimatedWord>
            <AnimatedWord className="mr-3">experience</AnimatedWord>
            <AnimatedWord className="text-blue-400/90 italic mr-3">your</AnimatedWord>
            <AnimatedWord className="text-blue-400/90 italic mr-3">customers</AnimatedWord>
            <AnimatedWord>expect.</AnimatedWord>
          </p>
        </motion.div>

        <motion.div
          className="bg-black/40 backdrop-blur rounded-xl p-8"
          variants={panelVariants}
        >
          <p className="text-3xl md:text-4xl font-medium leading-relaxed">
            <AnimatedWord>Your</AnimatedWord>
            <AnimatedWord className="mr-0">business.</AnimatedWord>
            <AnimatedWord className="mx-3">Their</AnimatedWord>
            <AnimatedWord className="text-blue-400/90 italic mr-0">experience.</AnimatedWord>
            <AnimatedWord className="mx-3">Nailed</AnimatedWord>
            <AnimatedWord className="mr-3">every</AnimatedWord>
            <AnimatedWord>time.</AnimatedWord>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
} 
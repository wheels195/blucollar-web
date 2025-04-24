"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function AnimatedLogo({
  className = "",
  size = "default",
}: { className?: string; size?: "small" | "default" | "large" }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const sizeClasses = {
    small: "h-8",
    default: "h-10",
    large: "h-12",
  }

  const textSizeClasses = {
    small: "text-lg",
    default: "text-xl",
    large: "text-2xl",
  }

  const subTextSizeClasses = {
    small: "text-xs",
    default: "text-sm",
    large: "text-base",
  }

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const webVariants = {
    animate: {
      rotate: [0, 5, 0, -5, 0],
      scale: [1, 1.02, 1, 0.98, 1],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const isDark =
    mounted &&
    (theme === "dark" ||
      (!theme && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches))

  return (
    <motion.div
      className={`flex items-center ${className}`}
      initial="initial"
      animate="animate"
      variants={logoVariants}
    >
      <div className="flex items-center">
        {/* Animated SVG version of the spider web */}
        <motion.svg
          viewBox="0 0 100 100"
          className={`${sizeClasses[size]} w-auto mr-3`}
          style={{
            filter: `drop-shadow(0 0 2px ${isDark ? "rgba(59, 130, 246, 0.5)" : "rgba(37, 99, 235, 0.3)"})`,
          }}
          variants={webVariants}
          animate="animate"
        >
          <g fill="none" stroke={isDark ? "#a5b4fc" : "#3b82f6"} strokeWidth="1.5" strokeLinecap="round">
            {/* Outer circle */}
            <circle cx="50" cy="50" r="45" opacity="0.8" />

            {/* Radial lines */}
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="5" y1="50" x2="95" y2="50" />
            <line x1="14.64" y1="14.64" x2="85.36" y2="85.36" />
            <line x1="14.64" y1="85.36" x2="85.36" y2="14.64" />

            {/* Concentric web circles */}
            <circle cx="50" cy="50" r="35" opacity="0.9" />
            <circle cx="50" cy="50" r="25" opacity="0.9" />
            <circle cx="50" cy="50" r="15" opacity="0.9" />

            {/* Web connections */}
            <path d="M50,5 Q60,20 65,25" />
            <path d="M50,5 Q40,20 35,25" />
            <path d="M95,50 Q80,60 75,65" />
            <path d="M95,50 Q80,40 75,35" />
            <path d="M50,95 Q60,80 65,75" />
            <path d="M50,95 Q40,80 35,75" />
            <path d="M5,50 Q20,60 25,65" />
            <path d="M5,50 Q20,40 25,35" />

            <path d="M85.36,14.64 Q70,30 65,35" />
            <path d="M85.36,85.36 Q70,70 65,65" />
            <path d="M14.64,85.36 Q30,70 35,65" />
            <path d="M14.64,14.64 Q30,30 35,35" />
          </g>

          {/* Center point */}
          <circle cx="50" cy="50" r="3" fill={isDark ? "#a5b4fc" : "#3b82f6"} />
        </motion.svg>

        {/* Text */}
        <div className="flex flex-col">
          <span
            className={`font-bold ${textSizeClasses[size]} bg-clip-text text-transparent bg-gradient-to-r ${
              isDark ? "from-blue-300 to-indigo-200" : "from-blue-600 to-indigo-500"
            }`}
            style={{ letterSpacing: "0.02em" }}
          >
            BluCollar
          </span>
          <span
            className={`${subTextSizeClasses[size]} ${isDark ? "text-blue-300" : "text-blue-500"} font-medium -mt-1`}
            style={{ letterSpacing: "0.05em" }}
          >
            Web
          </span>
        </div>
      </div>
    </motion.div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import { Laptop, Smartphone, Tablet, Monitor, Check } from "lucide-react"

const devices = [
  { id: "desktop", icon: <Monitor className="h-5 w-5" />, label: "Desktop" },
  { id: "laptop", icon: <Laptop className="h-5 w-5" />, label: "Laptop" },
  { id: "tablet", icon: <Tablet className="h-5 w-5" />, label: "Tablet" },
  { id: "mobile", icon: <Smartphone className="h-5 w-5" />, label: "Mobile" },
]

const themes = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "blue", label: "Blue" },
  { id: "green", label: "Green" },
]

export function InteractiveDemo() {
  const [selectedDevice, setSelectedDevice] = useState("desktop")
  const [selectedTheme, setSelectedTheme] = useState("dark")
  const [isAnimating, setIsAnimating] = useState(false)

  // Simulate loading state when changing device or theme
  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [selectedDevice, selectedTheme])

  // Get theme colors
  const getThemeColors = () => {
    switch (selectedTheme) {
      case "light":
        return { bg: "bg-white", text: "text-gray-900", accent: "bg-blue-500" }
      case "dark":
        return { bg: "bg-gray-900", text: "text-white", accent: "bg-blue-500" }
      case "blue":
        return { bg: "bg-blue-900", text: "text-white", accent: "bg-yellow-400" }
      case "green":
        return { bg: "bg-green-900", text: "text-white", accent: "bg-pink-500" }
      default:
        return { bg: "bg-gray-900", text: "text-white", accent: "bg-blue-500" }
    }
  }

  // Get device dimensions
  const getDeviceDimensions = () => {
    switch (selectedDevice) {
      case "desktop":
        return { width: "w-full", height: "h-[400px]", radius: "rounded-lg" }
      case "laptop":
        return { width: "w-[90%]", height: "h-[350px]", radius: "rounded-md" }
      case "tablet":
        return { width: "w-[70%]", height: "h-[400px]", radius: "rounded-xl" }
      case "mobile":
        return { width: "w-[40%]", height: "h-[450px]", radius: "rounded-2xl" }
      default:
        return { width: "w-full", height: "h-[400px]", radius: "rounded-lg" }
    }
  }

  const themeColors = getThemeColors()
  const deviceDimensions = getDeviceDimensions()

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary-light dark:text-primary-dark bg-primary-light/10 dark:bg-primary-dark/10 rounded-full mb-4">
              Interactive Demo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              See Your Website <span className="gradient-text">Come to Life</span>
            </h2>
            <p className="text-lg text-foreground-light/80 dark:text-foreground-dark/80">
              Explore how your website will look across different devices and themes.
            </p>
          </div>
        </ScrollReveal>

        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 md:p-10 border border-border-light dark:border-border-dark shadow-xl">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="flex rounded-full bg-background-light dark:bg-background-dark p-1 border border-border-light dark:border-border-dark">
              {devices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => setSelectedDevice(device.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedDevice === device.id
                      ? "bg-primary-light dark:bg-primary-dark text-white"
                      : "hover:bg-surface-light dark:hover:bg-surface-dark"
                  }`}
                >
                  <span className="mr-2">{device.icon}</span>
                  {device.label}
                </button>
              ))}
            </div>

            <div className="flex rounded-full bg-background-light dark:bg-background-dark p-1 border border-border-light dark:border-border-dark">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTheme === theme.id
                      ? "bg-primary-light dark:bg-primary-dark text-white"
                      : "hover:bg-surface-light dark:hover:bg-surface-dark"
                  }`}
                >
                  {theme.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className={`relative ${deviceDimensions.width} ${deviceDimensions.height} ${deviceDimensions.radius} overflow-hidden border border-border-light dark:border-border-dark shadow-2xl transition-all duration-500`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedDevice}-${selectedTheme}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-full ${themeColors.bg} ${themeColors.text} overflow-hidden`}
                >
                  {isAnimating ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="w-10 h-10 border-4 border-primary-light dark:border-primary-dark border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : (
                    <div className="p-4 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="font-bold text-lg">WebStudio</div>
                        <div className="flex space-x-4">
                          {["Home", "Services", "Work", "Contact"].map((item, i) => (
                            <div key={i} className="hidden sm:block text-sm opacity-80">
                              {item}
                            </div>
                          ))}
                          <div className={`${themeColors.accent} text-white text-xs px-3 py-1 rounded-full`}>
                            Get Started
                          </div>
                        </div>
                      </div>

                      {/* Hero */}
                      <div className="mb-6">
                        <h1 className="text-xl sm:text-2xl font-bold mb-2">Beautiful Websites for Your Business</h1>
                        <p className="text-sm opacity-80">
                          Modern, responsive designs that convert visitors into customers
                        </p>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="p-3 rounded-lg bg-white/10 flex items-start">
                            <div
                              className={`w-6 h-6 rounded-full ${themeColors.accent} flex items-center justify-center mr-2 flex-shrink-0`}
                            >
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <div>
                              <div className="text-xs font-medium">Feature {i}</div>
                              <div className="text-xs opacity-70">Short description</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-auto">
                        <div className={`${themeColors.accent} text-white text-center py-2 rounded-lg w-full`}>
                          Get Started Today
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

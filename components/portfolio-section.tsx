"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All" },
  { id: "business", label: "Business Services" },
  { id: "construction", label: "Construction" },
  { id: "electrician", label: "Electrician" },
  { id: "handyman", label: "Handyman" },
  { id: "landscaper", label: "Landscaper" },
  { id: "plumber", label: "Plumber" },
  { id: "real-estate", label: "Real Estate" },
  { id: "restaurant", label: "Restaurant" },
]

interface PortfolioItem {
  id: number
  category: string
  title: string
  description: string
  images: string[]
  liveUrl?: string  // Optional URL to live site
  sourceUrl?: string // Optional URL to source code/template
  type: 'website' | 'template' // Distinguish between real sites and templates
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "service",
    title: "Landscapers",
    description: "Professional landscaping service template with project showcase and service booking features for garden and outdoor maintenance.",
    images: ["/images/portfolio-assets/landscapers-template.png"],
    liveUrl: "https://landscapers.framer.website/",
    type: "template"
  },
  {
    id: 2,
    category: "service",
    title: "Plumber",
    description: "Professional plumbing service template with 24/7 emergency booking and comprehensive service scheduling system.",
    images: ["/images/portfolio-assets/plumber-template.png"],
    liveUrl: "https://plumbing.framer.media/",
    type: "template"
  },
  {
    id: 3,
    category: "service",
    title: "Handyman",
    description: "Professional handyman service template with 24/7 availability, project scheduling, and comprehensive home repair solutions.",
    images: ["/images/portfolio-assets/handyman-template.png"],
    liveUrl: "https://handyman.framer.photos/",
    type: "template"
  },
  {
    id: 4,
    category: "business",
    title: "Nextspace",
    description: "Modern coworking space and office rental template with sleek design.",
    images: ["/images/portfolio-assets/nextspace.png"],
    liveUrl: "https://nextspace.framer.website/",
    sourceUrl: "https://framer.com/templates/nextspace",
    type: "template"
  },
  {
    id: 5,
    category: "restaurant",
    title: "Pepper",
    description: "Elegant restaurant and cafe template with online ordering and reservations.",
    images: ["/images/portfolio-assets/pepper-template.png"],
    liveUrl: "https://pepper.framer.website/",
    sourceUrl: "https://framer.com/templates/pepper",
    type: "template"
  },
  {
    id: 6,
    category: "restaurant",
    title: "Qitchen",
    description: "Modern restaurant template with menu showcase, online reservations, and beautiful food galleries.",
    images: ["/images/portfolio-assets/qitchen-template.png"],
    liveUrl: "https://qitchen.framer.website/",
    sourceUrl: "https://framer.com/templates/qitchen",
    type: "template"
  },
  {
    id: 7,
    category: "service",
    title: "Refit",
    description: "Professional template perfect for contractors, repair services, and home improvement businesses.",
    images: ["/images/portfolio-assets/refit-template.png"],
    liveUrl: "https://refit.framer.website/",
    sourceUrl: "https://framer.com/templates/refit",
    type: "template"
  },
  {
    id: 8,
    category: "service",
    title: "Gardener",
    description: "Professional gardening and landscaping service template with project showcase and seasonal service scheduling.",
    images: ["/images/portfolio-assets/gardener-template.png"],
    liveUrl: "https://gardener.framer.media/",
    type: "template"
  },
  {
    id: 9,
    category: "construction",
    title: "Renova",
    description: "Professional template for construction companies and renovation services.",
    images: ["/images/portfolio-assets/renova-template.png"],
    liveUrl: "https://renova.framer.website/",
    sourceUrl: "https://framer.com/templates/renova",
    type: "template"
  }
]

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)
  const scrollInterval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isHovered && imageRef.current) {
      // Start at the top when hover begins
      imageRef.current.scrollTop = 0
      
      // Calculate scroll parameters
      const totalHeight = imageRef.current.scrollHeight - imageRef.current.clientHeight
      const duration = 15000 // 15 seconds to scroll full page (slowed down from 10s)
      const steps = 100 // Number of steps for smooth scrolling
      const stepSize = totalHeight / steps
      let currentStep = 0

      scrollInterval.current = setInterval(() => {
        if (imageRef.current && currentStep < steps) {
          imageRef.current.scrollTop += stepSize
          currentStep++
        } else if (imageRef.current) {
          // Reset to top when reaching bottom
          imageRef.current.scrollTop = 0
          currentStep = 0
        }
      }, duration / steps)
    } else if (scrollInterval.current) {
      clearInterval(scrollInterval.current)
    }

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current)
      }
    }
  }, [isHovered])

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative group rounded-2xl overflow-hidden w-full aspect-[4/3] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsExpanded(true)}
      >
        <div 
          ref={imageRef}
          className="absolute inset-0 overflow-auto scrollbar-hide"
        >
          <Image
            src={item.images[0]}
            alt={`${item.title} screenshot`}
            width={1200}
            height={5000}
            className="w-full"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block rounded bg-primary px-2 py-1 text-xs font-semibold uppercase tracking-wider mb-2">
            {item.category}
          </span>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-sm text-white/80">{item.description}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-background"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={item.images[0]}
                alt={`${item.title} screenshot`}
                width={1920}
                height={5000}
                className="w-full"
                priority
              />
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredItems = selectedCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Our Templates
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Templates</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Browse our collection of professional website templates designed for various industries and business needs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className={cn(
                "px-4 py-2 rounded-full border",
                category.id === selectedCategory
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border"
              )}
            >
              {category.label}
            </div>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[2000px] mx-auto"
        >
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

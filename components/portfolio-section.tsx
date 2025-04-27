"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Rocket } from "lucide-react"

const categories = [
  { id: "all", label: "All" },
  { id: "construction", label: "Construction" },
  { id: "electrician", label: "Electrician" },
  { id: "handyman", label: "Handyman" },
  { id: "landscaper", label: "Landscaper" },
  { id: "plumber", label: "Plumber" },
  { id: "pool", label: "Pool" },
  { id: "real-estate", label: "Real Estate" },
  { id: "restaurant", label: "Restaurant" },
  { id: "services", label: "Services" }
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
    category: "electrician",
    title: "Electrician",
    description: "Professional electrician service template with modern design, service booking, and 24/7 emergency response features.",
    images: ["/images/portfolio-assets/electrician-template.png"],
    liveUrl: "https://electrician-template.framer.website/",
    type: "template"
  },
  {
    id: 2,
    category: "landscaper",
    title: "Landscapers",
    description: "Professional landscaping service template with project showcase and service booking features for garden and outdoor maintenance.",
    images: ["/images/portfolio-assets/landscapers-template.png"],
    liveUrl: "https://landscapers.framer.website/",
    type: "template"
  },
  {
    id: 3,
    category: "plumber",
    title: "Plumber",
    description: "Professional plumbing service template with 24/7 emergency booking and comprehensive service scheduling system.",
    images: ["/images/portfolio-assets/plumber-template.png"],
    liveUrl: "https://plumbing.framer.media/",
    type: "template"
  },
  {
    id: 4,
    category: "handyman",
    title: "Handyman",
    description: "Professional handyman service template with 24/7 availability, project scheduling, and comprehensive home repair solutions.",
    images: ["/images/portfolio-assets/handyman-template.png"],
    liveUrl: "https://handyman.framer.photos/",
    type: "template"
  },
  {
    id: 5,
    category: "services",
    title: "Nextspace",
    description: "Modern coworking space and office rental template with sleek design.",
    images: ["/images/portfolio-assets/nextspace.png"],
    liveUrl: "https://nextspace.framer.website/",
    sourceUrl: "https://framer.com/templates/nextspace",
    type: "template"
  },
  {
    id: 6,
    category: "restaurant",
    title: "Pepper",
    description: "Elegant restaurant and cafe template with online ordering and reservations.",
    images: ["/images/portfolio-assets/pepper-template.png"],
    liveUrl: "https://pepper.framer.website/",
    sourceUrl: "https://framer.com/templates/pepper",
    type: "template"
  },
  {
    id: 7,
    category: "services",
    title: "Cleaner",
    description: "Award-winning cleaning service template for professional cleaning businesses, featuring service booking, testimonials, and a modern gallery.",
    images: ["/images/portfolio-assets/cleaner-template.png"],
    liveUrl: "https://cleaner.framer.website/?via=framerbite",
    type: "template"
  },
  {
    id: 8,
    category: "construction",
    title: "Refit",
    description: "Professional template perfect for contractors, repair services, and home improvement businesses.",
    images: ["/images/portfolio-assets/refit-template.png"],
    liveUrl: "https://refit.framer.website/",
    sourceUrl: "https://framer.com/templates/refit",
    type: "template"
  },
  {
    id: 9,
    category: "landscaper",
    title: "Gardener",
    description: "Professional gardening and landscaping service template with project showcase and seasonal service scheduling.",
    images: ["/images/portfolio-assets/gardener-template.png"],
    liveUrl: "https://gardener.framer.media/",
    type: "template"
  },
  {
    id: 10,
    category: "construction",
    title: "Renova",
    description: "Professional template for construction companies and renovation services.",
    images: ["/images/portfolio-assets/renova-template.png"],
    liveUrl: "https://renova.framer.website/",
    sourceUrl: "https://framer.com/templates/renova",
    type: "template"
  },
  {
    id: 11,
    category: "electrician",
    title: "Electria",
    description: "Modern electrician service template with 24/7 availability, emergency response, and comprehensive electrical solutions.",
    images: ["/images/portfolio-assets/electriciann-template.png"],
    liveUrl: "https://electria.framer.website/",
    type: "template"
  },
  {
    id: 12,
    category: "pool",
    title: "Aqua Dream",
    description: "Professional aquarium design and installation template with stunning visuals for custom aquatic environments.",
    images: ["/images/portfolio-assets/aqua-template.png"],
    liveUrl: "https://aqua-dream.framer.website/",
    type: "template"
  },
  {
    id: 13,
    category: "construction",
    title: "RoofShield",
    description: "Best Roofing Service in Texas. Protect your home with the highest quality roofing services, from installation to repairs. Includes free estimates, emergency repairs, and a modern, trustworthy design.",
    images: ["/images/portfolio-assets/roofing2-template.png"],
    liveUrl: "https://roofshiield.framer.website/",
    type: "template"
  },
  {
    id: 14,
    category: "plumber",
    title: "QuickFix",
    description: "Fast and reliable plumbing service template. 24/7 availability, expert team, customer testimonials, and modern appointment booking for plumbing businesses.",
    images: ["/images/portfolio-assets/plumber2-template.png"],
    liveUrl: "https://quickfix.framer.website/?via=framerbite",
    type: "template"
  },
  {
    id: 15,
    category: "services",
    title: "HomeMaster",
    description: "Multipurpose local business & service website template. Includes 6 unique homepages (cleaning, plumbing, pest control, renovation, elderly care, roofing) and 15 essential inner pages. Build and launch your business website fast!",
    images: ["/images/portfolio-assets/services-template.png"],
    liveUrl: "https://homemaster.framer.website/?via=framerbite",
    type: "template"
  },
  {
    id: 16,
    category: "construction",
    title: "North Architecture",
    description: "Modern architecture and design firm template. Perfect for residential, commercial, and interior design studios. Clean, professional, and ready for any creative business.",
    images: ["/images/portfolio-assets/construction-template.png"],
    liveUrl: "https://northarch.framer.website/",
    type: "template"
  },
  {
    id: 17,
    category: "real-estate",
    title: "Swaarg",
    description: "Luxury real estate and architecture template. Perfect for showcasing premium residential and commercial projects, elegant living, and modern design. Includes blog, project highlights, and more.",
    images: ["/images/portfolio-assets/services2-template.png"],
    liveUrl: "https://swaarg.framer.website/?via=remixframer",
    type: "template"
  },
  {
    id: 18,
    category: "services",
    title: "GreenStone",
    description: "Eco-friendly kitchen and interior design template. Perfect for sustainable businesses, green contractors, and eco-conscious brands. Features custom green designs, recycled materials, and energy-efficient solutions.",
    images: ["/images/portfolio-assets/greenstone-template.png"],
    liveUrl: "https://greenstone.framer.website/",
    type: "template"
  }
]

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)
  const scrollInterval = useRef<NodeJS.Timeout | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (isHovered && imageRef.current && !isTouchDevice) {
      // Start at the top when hover begins
      imageRef.current.scrollTop = 0
      
      // Calculate scroll parameters
      const totalHeight = imageRef.current.scrollHeight - imageRef.current.clientHeight
      const duration = 15000 // 15 seconds to scroll full page
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
  }, [isHovered, isTouchDevice])

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative group rounded-2xl overflow-hidden w-full aspect-[4/3] cursor-pointer min-h-[340px] md:min-h-[420px] lg:min-h-[500px] xl:min-h-[560px]"
        onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
        onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
        onClick={() => setIsExpanded(true)}
        onTouchStart={() => isTouchDevice && setIsHovered(true)}
        onTouchEnd={() => isTouchDevice && setIsHovered(false)}
      >
        <div 
          ref={imageRef}
          className="absolute inset-0 overflow-auto scrollbar-hide"
        >
          {!imgError ? (
            <Image
              src={item.images[0]}
              alt={`${item.title} screenshot`}
              width={1200}
              height={5000}
              className="w-full"
              priority={false}
              loading="lazy"
              quality={isTouchDevice ? 60 : 80}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-red-200 text-red-800 font-bold">Image not found</div>
          )}
        </div>
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isTouchDevice ? (isHovered ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100'}`} />
        <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 ${isTouchDevice ? (isHovered ? 'translate-y-0' : 'translate-y-8') : 'translate-y-8 group-hover:translate-y-0'}`}>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 touch-none"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-h-[90vh] rounded-2xl overflow-hidden bg-background"
              style={{ maxWidth: isTouchDevice ? '100%' : '1200px' }}
              onClick={e => e.stopPropagation()}
            >
              <div className="overflow-auto max-h-[90vh] touch-pan-y">
                <Image
                  src={item.images[0]}
                  alt={`${item.title} screenshot`}
                  width={1920}
                  height={5000}
                  className="w-full"
                  priority
                />
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                style={{ 
                  padding: isTouchDevice ? '12px' : '8px',
                  transform: isTouchDevice ? 'scale(1.2)' : 'scale(1)'
                }}
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768)
      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const filteredItems = selectedCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section className={`w-full py-10 sm:py-16 md:py-32 ${isMobile ? 'bg-background' : ''}`}>
      <div className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Our <span className="gradient-text">Templates</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 px-2 sm:px-0">
            Browse our collection of professional website templates designed for various industries and business needs. Any template can work for any business or industry.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6 sm:mb-8 md:mb-12">
          <div className="w-full overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 min-w-max px-2 md:px-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-4 py-3 text-base rounded-full border whitespace-nowrap transition-colors duration-200 hover:bg-primary/90 hover:text-primary-foreground touch-manipulation min-w-[100px] min-h-[44px]",
                    category.id === selectedCategory
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary"
                  )}
                  style={{ fontSize: '1rem' }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
        {/* CTA below grid */}
        <div className="flex justify-center mt-10">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-primary hover:bg-primary/90 transition-colors duration-200 shadow-xl shadow-primary/25 hover:shadow-primary/50 gap-2">
            <Rocket className="w-6 h-6 mr-1" />
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

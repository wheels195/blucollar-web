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
  console.log('PortfolioCard item:', item);
  return (
    <div style={{background: 'lightblue', padding: 20, margin: 10, textAlign: 'center'}}>
      <strong>{item.title}</strong>
      <div>{item.description}</div>
      <div>{item.images && item.images[0]}</div>
      {item.images && item.images[0] && (
        <img src={item.images[0]} alt={item.title} style={{maxWidth: 200, marginTop: 10}} />
      )}
    </div>
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
    <>
      <div style={{background: 'red', color: 'white', padding: 20, textAlign: 'center'}}>
        TEST: PortfolioSection is rendering (step 6)
      </div>
      {portfolioItems.map((item) => (
        <PortfolioCard
          key={item.id}
          item={item}
        />
      ))}
    </>
  )
}

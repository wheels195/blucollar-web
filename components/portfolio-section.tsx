"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    category: "E-commerce",
    image: "/sleek-product-showcase.png",
    description: "A high-converting e-commerce platform with seamless checkout and product filtering.",
  },
  {
    id: 2,
    title: "Corporate Brand Website",
    category: "Corporate",
    image: "/sleek-corporate-darkmode.png",
    description: "Sleek corporate website with interactive elements and brand storytelling.",
  },
  {
    id: 3,
    title: "Real Estate Listing Platform",
    category: "Real Estate",
    image: "/modern-real-estate-homepage.png",
    description: "Property listing platform with advanced search and virtual tours.",
  },
  {
    id: 4,
    title: "Health & Wellness App",
    category: "Health",
    image: "/holistic-health-dashboard.png",
    description: "Wellness platform with appointment booking and health tracking features.",
  },
  {
    id: 5,
    title: "Creative Agency Portfolio",
    category: "Portfolio",
    image: "/vibrant-agency-showcase.png",
    description: "Stunning portfolio site with case studies and interactive project showcases.",
  },
  {
    id: 6,
    title: "Restaurant Ordering System",
    category: "Food",
    image: "/placeholder.svg?height=600&width=800&query=restaurant%20website%20ordering%20system",
    description: "Online ordering system with menu management and reservation features.",
  },
]

const categories = ["All", "E-commerce", "Corporate", "Real Estate", "Health", "Portfolio", "Food"]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="work" className="py-20 md:py-32 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary-light dark:text-primary-dark bg-primary-light/10 dark:bg-primary-dark/10 rounded-full mb-4">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-foreground-light/80 dark:text-foreground-dark/80">
              Explore our portfolio of successful projects across various industries.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary-light dark:bg-primary-dark text-white"
                    : "bg-surface-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <ScrollReveal key={project.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-xl transition-all duration-300"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-white/80 text-sm mb-4">{project.description}</p>
                        <a
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-white hover:text-primary-light dark:hover:text-primary-dark"
                        >
                          View Project <ArrowRight size={16} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors duration-200 hoverable"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

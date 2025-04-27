"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import { PortfolioCard } from "@/components/PortfolioCard"
import { portfolioItems } from "@/data/portfolioItems"

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

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredItems = selectedCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section className="w-full py-10 sm:py-16 md:py-32 bg-background">
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
                  style={{ fontSize: "1rem" }}
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

        {/* CTA Button Below Grid */}
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

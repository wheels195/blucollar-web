"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Updated for deployment: April 25, 2024

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  }

  const headlineVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0, 1],
      }
    }
  }

  const fadeUpVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0, 1],
      }
    }
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0, 1],
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 40,
    },
    visible: index => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 1 + (index * 0.2),
        ease: [0.25, 0.1, 0, 1],
      }
    })
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      
      <motion.div 
        className="container relative mx-auto px-4 pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            variants={headlineVariants}
          >
            Modern Websites for Local Businesses — Built Fast. Built to Grow.
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8"
            variants={fadeUpVariants}
          >
            We create high-performance, mobile-ready websites that turn visitors into customers — without the tech headaches.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-colors duration-300 shadow-xl shadow-primary/25 hover:shadow-primary/50"
            >
              Get a Free Website Mockup
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[95rem] mx-auto">
          {[
            {
              image: "/images/hero/landscaper.png",
              alt: "Professional landscaper at work",
              tagline: "Doubled Monthly Leads with New Website",
              business: "Green Thumb Landscaping"
            },
            {
              image: "/images/hero/roofer.png",
              alt: "Experienced roofer on residential project",
              tagline: "Booking 3 Months Ahead After Launch",
              business: "Peak Roofing Solutions"
            },
            {
              image: "/images/hero/dentist.png",
              alt: "Modern dental practice interior",
              tagline: "New Patients Up 40% This Quarter",
              business: "Bright Smile Dental"
            },
            {
              image: "/images/hero/pool.png",
              alt: "Professional pool cleaning service",
              tagline: "Service Contracts Up 75% This Season",
              business: "Crystal Clear Pools"
            }
          ].map((item, index) => (
            <motion.div
              key={item.business}
              className="relative group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              custom={index}
              variants={imageVariants}
            >
              <div className="aspect-[3/4] relative">
                {item.business === "Crystal Clear Pools" ? (
                  <img 
                    src="/images/hero/pool.png"
                    alt="Professional pool cleaning service"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                ) : (
                  <Image 
                    src={item.image}
                    alt={item.alt}
                    fill
                    quality={100}
                    priority={true}
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 23vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 transition-opacity duration-500 group-hover:from-black/90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white transform transition-transform duration-500">
                  <p className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 transform transition-transform duration-500 group-hover:translate-y-[-4px]">{item.tagline}</p>
                  <p className="text-sm sm:text-base text-white/80 transform transition-transform duration-500 group-hover:translate-y-[-4px]">{item.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

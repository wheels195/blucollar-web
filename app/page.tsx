"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { GallerySection } from "@/components/gallery-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TechTicker } from "@/components/tech-ticker"

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 20 }, // Reduced y offset for smoother animation
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Faster animation
      ease: "easeOut",
    },
  },
}

// Section wrapper component for optimized loading
function Section({ id, children, priority = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    margin: "50% 0px -10% 0px", // Start loading earlier
    amount: priority ? 0 : 0.1 // Lower threshold for non-priority sections
  })

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll({
    tolerance: 0.2, // Add tolerance for smoother progress bar
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    mass: 0.5 // Lighter mass for smoother animation
  })

  useEffect(() => {
    // Ensure smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    // Optimize for mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile) {
      document.body.classList.add("no-custom-cursor")
      // Disable smooth scrolling on mobile for better performance
      document.documentElement.style.scrollBehavior = "auto"
    }

    // Enable passive scroll listeners
    const opts = { passive: true }
    document.addEventListener('touchstart', () => {}, opts)
    document.addEventListener('touchmove', () => {}, opts)

    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
      document.documentElement.style.scrollBehavior = ""
      document.removeEventListener('touchstart', () => {})
      document.removeEventListener('touchmove', () => {})
    }
  }, [])

  return (
    <main className="min-h-screen relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <SiteHeader />

      {/* Priority sections (above the fold) */}
      <Section id="top" priority>
        <HeroSection />
        <TrustSection />
      </Section>

      <Section id="tech" priority>
        <TechTicker />
      </Section>

      {/* Regular sections */}
      <Section id="services">
        <ServicesSection />
      </Section>

      <Section id="gallery">
        <GallerySection />
      </Section>

      <Section id="process">
        <ProcessSection />
      </Section>

      <Section id="pricing">
        <PricingSection />
      </Section>

      <Section id="faq">
        <FAQSection />
      </Section>

      <Section id="contact">
        <ContactSection />
      </Section>

      <SiteFooter />
    </main>
  )
}

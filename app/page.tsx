"use client"

import { useEffect, useRef, useState } from "react"
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
import { PortfolioSection } from "@/components/portfolio-section"

// Animation variants for sections
const sectionVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0, 1],
    }
  }
}

// Section wrapper component for optimized loading
function Section({ id, children, priority = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    margin: priority ? "-10% 0px -10% 0px" : "-15% 0px -15% 0px", // Start animation when section is closer
    amount: priority ? 0.1 : 0.15 // Trigger when more of the section is visible
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
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Ensure smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"
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
      <Section id="top" priority>
        <HeroSection />
      </Section>
      <Section id="trust" priority>
        <TrustSection />
      </Section>
      <Section id="tech" priority>
        <TechTicker />
      </Section>
      <Section id="services" priority>
        <ServicesSection />
      </Section>
      <Section id="portfolio" priority>
        <PortfolioSection />
      </Section>
      <Section id="gallery" priority>
        <GallerySection />
      </Section>
      <Section id="process" priority>
        <ProcessSection />
      </Section>
      <Section id="pricing" priority>
        <PricingSection />
      </Section>
      <Section id="faq" priority>
        <FAQSection />
      </Section>
      <Section id="contact" priority>
        <ContactSection />
      </Section>
      <SiteFooter />
    </main>
  )
}

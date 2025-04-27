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

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768)
      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    // Ensure smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    // Optimize for mobile
    if (isMobile) {
      document.body.classList.add("no-custom-cursor")
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
  }, [isMobile])

  return (
    <main className="min-h-screen relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <SiteHeader />

      {isMobile ? (
        <>
          <div id="top" className="mb-10">
            <HeroSection />
          </div>
          <div id="trust" className="mb-10">
            <TrustSection />
          </div>
          <div id="tech" className="mb-10">
            <TechTicker />
          </div>
          <div id="services" className="mb-10">
            <ServicesSection />
          </div>
          <div id="portfolio" className="mb-10">
            <PortfolioSection />
          </div>
          <div id="gallery" className="mb-10">
            <GallerySection />
          </div>
          <div id="process" className="mb-10">
            <ProcessSection />
          </div>
          <div id="pricing" className="mb-10">
            <PricingSection />
          </div>
          <div id="faq" className="mb-10">
            <FAQSection />
          </div>
          <div id="contact" className="mb-10">
            <ContactSection />
          </div>
          <SiteFooter />
        </>
      ) : (
        <>
          {/* Priority sections (above the fold) */}
          <Section id="top" priority>
            <HeroSection />
          </Section>

          <Section id="trust" priority>
            <TrustSection />
          </Section>

          <Section id="tech">
            <TechTicker />
          </Section>

          {/* Regular sections */}
          <Section id="services">
            <ServicesSection />
          </Section>

          <Section id="portfolio">
            <PortfolioSection />
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
        </>
      )}
    </main>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { AnimatedLogo } from "./animated-logo"

const navItems = [
  { name: "Home", href: "/#top" },
  { name: "Why Us", href: "/#why-us" },
  { name: "Our Services", href: "/#services" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Our Process", href: "/#process" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("top")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Get the current scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Find which section we're in
      const sections = ["top", "why-us", "services", "gallery", "process", "pricing", "faq", "contact"]
      let currentSection = sections[0]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          if (scrollPosition >= offsetTop) {
            currentSection = section
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    // Only handle internal hash links
    if (href.startsWith("/#")) {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Close mobile menu if open
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false)
        }

        // Scroll to the target element
        window.scrollTo({
          top: targetId === "top" ? 0 : targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/#top" onClick={(e) => handleNavClick(e, "/#top")} className="flex items-center">
            <AnimatedLogo size="default" />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-foreground/80 hover:text-primary transition-colors relative group ${
                  activeSection === item.href.replace("/#", "") ? "text-primary" : ""
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transition-transform origin-left ${
                    activeSection === item.href.replace("/#", "") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-background/10 text-foreground hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Link
                  href="/#top"
                  className="flex items-center"
                  onClick={(e) => {
                    handleNavClick(e, "/#top")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <AnimatedLogo size="default" />
                </Link>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 text-foreground hover:bg-primary/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-xl font-medium transition-colors ${
                      activeSection === item.href.replace("/#", "")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={(e) => {
                      handleNavClick(e, item.href)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                <Link
                  href="/#contact"
                  className="block w-full py-3 px-4 rounded-lg bg-primary text-white text-center font-medium hover:bg-primary/90 transition-colors"
                  onClick={(e) => {
                    handleNavClick(e, "/#contact")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

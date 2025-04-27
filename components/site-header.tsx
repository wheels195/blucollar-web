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
  { name: "Templates", href: "/#portfolio" },
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

      // Use a fixed nav offset for more accurate section detection
      const navOffset = 80; // Adjust if your nav is taller/shorter
      const scrollPosition = window.scrollY + navOffset;

      // Find which section we're in
      const sections = ["top", "why-us", "services", "portfolio", "gallery", "process", "pricing", "faq", "contact"]
      let currentSection = sections[0]

      // If at the very top, always highlight 'Home'
      if (window.scrollY < 10) {
        setActiveSection("top")
        return
      }

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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Standard scroll lock
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'contain';
      document.documentElement.style.overscrollBehavior = 'contain';
      // iOS fallback
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.overscrollBehavior = '';
      document.documentElement.style.overscrollBehavior = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.overscrollBehavior = '';
      document.documentElement.style.overscrollBehavior = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen])

  const handleNavClick = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetElement = document.getElementById(targetId);
      console.log("[NavClick] href:", href, "targetId:", targetId, "found:", !!targetElement);
      if (targetElement) {
        const navOffset = window.innerWidth < 768 ? 64 : 80; // Responsive offset
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: "smooth",
        });
      } else if (targetId === "top") {
        // Fallback: scroll to top if Home/logo is clicked and no element found
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      // Always close the mobile menu after navigation
      setTimeout(() => setIsMobileMenuOpen(false), 200);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/#top" onClick={(e) => handleNavClick(e, "/#top")} className="flex items-center cursor-pointer" aria-label="Go to top">
              <AnimatedLogo size="default" />
            </Link>
          </div>

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
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-background/10 text-foreground hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            type="button"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            <Menu className="h-6 w-6" />
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
            className="fixed inset-0 z-[100] bg-black md:hidden shadow-2xl"
            style={{ color: 'white', background: 'rgba(0,0,0,0.97)' }}
          >
            <div className="flex flex-col min-h-screen h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <Link href="/#top" onClick={(e) => handleNavClick(e, "/#top")} className="flex items-center cursor-pointer" aria-label="Go to top">
                    <AnimatedLogo size="default" />
                  </Link>
                </div>
                <button
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-background/10 text-foreground hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ minWidth: 48, minHeight: 48 }}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-8 mt-8" style={{ color: 'white', WebkitTextFillColor: 'white', textShadow: 'none', fontWeight: 'bold' }}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-2xl font-bold py-4 px-2 rounded-lg transition-colors ${
                      activeSection === item.href.replace("/#", "")
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary"
                    }`}
                    style={{ minHeight: 48 }}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

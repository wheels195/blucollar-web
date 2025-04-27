import Link from "next/link"
import { Shield, Lock, Handshake } from "lucide-react"
import { Logo } from "./logo"

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col items-center mb-8">
          <span className="text-xl font-bold mb-4 text-white text-center">Ready to grow your business? Let's talk!</span>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-primary hover:bg-primary/90 transition-colors duration-200 shadow-xl shadow-primary/25 hover:shadow-primary/50 gap-2">
            <Handshake className="w-6 h-6 mr-1" />
            Contact Us
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="inline-block">
              <Logo size="default" />
            </Link>
            <p className="mt-4 text-foreground/70">
              We create modern, minimal, and high-performance websites that elevate your brand and drive results.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {["Web Design", "Mobile Optimization", "Performance Optimization", "SEO", "Analytics"].map(
                (service, i) => (
                  <li key={i}>
                    <a
                      href="#services"
                      className="text-foreground/70 hover:text-primary transition-colors button-hover-effect"
                    >
                      {service}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Our Work", "Process", "Pricing", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-foreground/70 hover:text-primary transition-colors button-hover-effect"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-foreground/70">
              <li>hello@blucollarweb.com</li>
              <li>(555) 123-4567</li>
              <li>
                123 Web Design St.
                <br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">© {new Date().getFullYear()} BluCollar Web. All rights reserved.</p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-foreground/60">
              <Shield className="h-4 w-4" />
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service & Legal Disclaimer
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-sm text-foreground/60">
              <Lock className="h-4 w-4" />
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

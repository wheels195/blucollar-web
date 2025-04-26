"use client"
import { ScrollReveal } from "./scroll-reveal"
import { Code, Layout, Zap, Search, Smartphone, BarChart } from "lucide-react"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Web Design",
    description: "Beautiful, responsive websites that engage visitors and reflect your brand identity.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Mobile Optimization",
    description: "Seamless experiences across all devices with mobile-first design principles.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance Optimization",
    description: "Lightning-fast loading times and smooth interactions for better user experience.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "SEO",
    description: "Search engine optimization to improve visibility and drive organic traffic.",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Analytics",
    description: "Data-driven insights to understand user behavior and optimize conversions.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Website Maintenance",
    description: "Regular updates, security monitoring, and technical support to keep your site running smoothly.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-14 sm:py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <span className="inline-block px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Our Services
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-foreground/80">
              We offer a comprehensive range of web design and development services to help your business thrive online.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 card-hover h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                  onClick={() => {
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

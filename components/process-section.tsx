"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import { Search, Paintbrush, Code, TestTube, Rocket, HeartHandshake, ArrowRight } from "lucide-react"

const steps = [
  {
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience to create a tailored strategy.",
    icon: Search,
  },
  {
    title: "Design",
    description: "Our designers create beautiful, user-friendly mockups that align with your brand identity.",
    icon: Paintbrush,
  },
  {
    title: "Development",
    description: "We build your website using modern technologies and best practices for optimal performance.",
    icon: Code,
  },
  {
    title: "Testing",
    description: "Rigorous testing ensures your website works flawlessly across all devices and browsers.",
    icon: TestTube,
  },
  {
    title: "Launch",
    description: "We deploy your website and provide training so you can manage your content with confidence.",
    icon: Rocket,
  },
  {
    title: "Support",
    description: "Ongoing support and maintenance to ensure your website continues to perform at its best.",
    icon: HeartHandshake,
  },
]

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="process" className="py-14 sm:py-20 md:py-32 bg-muted/30">
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
                Our Process
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-foreground/80">
              A streamlined approach to delivering exceptional websites that meet your business needs.
            </p>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Animated flow diagram for larger screens */}
          <div className="hidden md:block relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-muted/50 -translate-y-1/2 rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary rounded-full"
                style={{ width: progressWidth }}
              />
            </div>

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <ScrollReveal key={index} threshold={0.1}>
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="relative mb-8">
                      <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center shadow-lg border border-border z-10 relative transition-all duration-300 group-hover:border-primary/50 group-hover:bg-background/90 group-hover:shadow-primary/20">
                        <step.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute top-1/2 left-full -translate-y-1/2 text-primary w-8">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">{step.title}</h3>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Process steps with detailed descriptions */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index}>
                <div className="bg-background/80 rounded-xl p-6 border border-border shadow-sm transition-all duration-300 group hover:bg-background hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    {/* Mobile icon display */}
                    <div className="md:hidden flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div style={{
          color: 'green',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          padding: '1rem',
          background: '#fff',
          border: '2px solid green',
          borderRadius: '8px',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          TEST: This should always show on all devices
        </div>
      </div>
    </section>
  )
}

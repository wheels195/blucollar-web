"use client"

import { useEffect, useState } from "react"
import { Check, X, Shield, BarChart } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"

const websitePlans = [
  {
    name: "Basic",
    price: "$1,299",
    description: "Perfect for businesses just getting started or preparing to sell without an online presence",
    features: [
      { name: "Professional website build", included: true },
      { name: "Mobile-friendly design", included: true },
      { name: "Contact form", included: true },
      { name: "Basic SEO setup", included: true },
      { name: "Custom design", included: false },
      { name: "Advanced contact forms", included: false },
      { name: "Comprehensive SEO setup", included: false },
      { name: "Social media integration", included: false },
      { name: "Monthly analytics reports", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$1,999",
    description: "Ideal for established businesses looking to grow. Everything in Basic plus:",
    features: [
      { name: "Custom design tailored to your brand", included: true },
      { name: "Advanced contact forms with spam protection", included: true },
      { name: "Comprehensive SEO setup", included: true },
      { name: "Google Business Profile setup", included: true },
      { name: "Social media integration", included: true },
      { name: "Monthly performance & analytics report", included: true },
      { name: "Mobile-optimized and tested", included: true },
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Website Rebuild",
    price: "$2,499",
    description: "Already have a website that needs updating?",
    features: [
      { name: "Complete Website Redesign", included: true },
      { name: "Custom-Branded Design", included: true },
      { name: "Mobile Optimization", included: true },
      { name: "SEO Revamp", included: true },
      { name: "Content Migration & Cleanup", included: true },
      { name: "Google Analytics & Tracking Setup", included: true },
      { name: "Conversion-Focused Layout", included: true },
      { name: "Basic Security & Performance Boost", included: true },
      { name: "Google Business Profile Linking", included: true },
    ],
    cta: "Get Started",
    popular: false,
  },
]

const maintenancePlans = [
  {
    name: "Care Plan",
    icon: <Shield className="h-6 w-6 text-primary" />,
    price: "$99",
    period: "/month",
    description: "Keep your website secure, up-to-date, and editable",
    features: [
      "Hosting & SSL",
      "Daily backups",
      "Security monitoring",
      "Software/plugin updates",
      "1 hour of content updates per month",
      "Email support",
    ],
    notIncluded: [
      "Monthly SEO optimization",
      "SEO performance reporting",
      "Local listing monitoring",
      "Google Business Profile updates",
      "Quarterly site performance audit",
    ],
    popular: false,
  },
  {
    name: "SEO Growth Plan",
    icon: <BarChart className="h-6 w-6 text-primary" />,
    price: "$129",
    period: "/month",
    description: "Rank higher in Google and stay visible. Includes everything in Care Plan, plus:",
    features: [
      "Hosting & SSL",
      "Daily backups",
      "Security monitoring",
      "Software/plugin updates",
      "Monthly SEO optimization (keywords, meta, speed)",
      "SEO performance reporting",
      "Local listing monitoring",
      "Google Business Profile updates",
      "Up to 2 hours of monthly content/SEO edits",
      "Quarterly site performance audit",
    ],
    notIncluded: [],
    popular: true,
  },
]

export function PricingSection() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: 0,
      }
    }
  }

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.8,
        ease: [0.25, 0.1, 0, 1],
      }
    }
  }

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mb-4"
            >
              <span className="inline-block px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Pricing
              </span>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Transparent <span className="gradient-text">Pricing</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="text-lg text-foreground/80"
            >
              Choose the perfect plan for your business needs with our straightforward pricing options.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Website Development Plans */}
        <div className="mb-20">
          <motion.h3 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-10"
          >
            Website Development
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {websitePlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`relative rounded-xl border ${
                  plan.popular ? "border-primary" : "border-border"
                } bg-background shadow-sm overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/70 hover:z-10 ${
                  prefersReducedMotion ? "" : "hover:scale-[1.02]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-foreground/60"> /one-time</span>
                  </div>
                  <p className="text-foreground/80 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-foreground/50 line-through"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href="#contact"
                    className={`inline-block w-full text-center py-3 px-4 rounded-lg border ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border-primary/80 text-primary hover:bg-primary/10"
                    } font-medium transition-colors duration-200`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Monthly Website Support Plans */}
        <div>
          <ScrollReveal>
            <motion.h3 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-bold text-center mb-4"
            >
              Monthly Website Support Plans
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center text-foreground/80 max-w-3xl mx-auto mb-10"
            >
              Keep your website up-to-date, secure, and performing at its best with our monthly subscription plans.
            </motion.p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`relative rounded-xl border ${
                  plan.popular ? "border-primary" : "border-border"
                } bg-background shadow-sm overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/70 hover:z-10 ${
                  prefersReducedMotion ? "" : "hover:scale-[1.02]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Recommended
                  </div>
                )}
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">{plan.icon}</div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-foreground/60">{plan.period}</span>
                  </div>
                  <p className="text-foreground/80 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                        <span className="text-foreground/50 line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href="#contact"
                    className={`inline-block w-full text-center py-3 px-4 rounded-lg border ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border-primary/80 text-primary hover:bg-primary/10"
                    } font-medium transition-colors duration-200`}
                  >
                    Subscribe
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { AlertCircle, Search, Gauge, BarChart, ShieldCheck, LineChart, ArrowRight } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    icon: <Search className="w-6 h-6" />,
    value: 85,
    label: "of consumers search online before visiting local businesses",
    suffix: "%",
    source: "BrightLocal Survey 2023"
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    value: 70,
    label: "of local businesses lose customers due to outdated websites",
    suffix: "%",
    source: "Google Consumer Insights"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    value: 94,
    label: "of first impressions relate to website design",
    suffix: "%",
    source: "Northumbria University"
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    value: 75,
    label: "of users judge credibility based on website design",
    suffix: "%",
    source: "Stanford Web Credibility"
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    value: 53,
    label: "of mobile users leave slow-loading sites",
    suffix: "%",
    source: "Google Speed Study"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    value: 200,
    label: "Businesses with modern websites get 2x more customer inquiries",
    suffix: "%",
    source: "Industry Marketing Reports"
  }
]

export function TrustStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-15% 0px -15% 0px",
    amount: 0.2 // Trigger animation when 20% of the section is visible
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
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

  return (
    <div className="relative py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-4 space-y-3"
        >
          <motion.p variants={itemVariants} className="text-3xl text-foreground">
            Most customers will visit your website before they ever call you.
          </motion.p>
          <motion.p variants={itemVariants} className="text-3xl text-foreground">
            If it looks outdated, loads slow, or doesn't work on mobile — they move on.
          </motion.p>
          <motion.p variants={itemVariants} className="text-3xl text-foreground">
            Here are what the numbers tell us.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group relative bg-background/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/15 text-primary mb-4 lg:mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-3 text-foreground">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {hasAnimated ? stat.value : 0}
                  {stat.suffix}
                </motion.span>
              </div>
              <p className="text-base lg:text-lg text-foreground/80 font-medium mb-2">{stat.label}</p>
              <p className="text-xs text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity">
                Source: {stat.source}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.05 }}
          className="text-center"
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
    </div>
  )
} 
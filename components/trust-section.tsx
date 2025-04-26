"use client"

import { motion } from "framer-motion"
import { Rocket, Smartphone, MessageSquare, DollarSign } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Fast Turnaround",
    description: "Launch your new website in 7 days or less — guaranteed.",
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Over 70% of customers find you on mobile. We make sure you look great everywhere.",
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent"
  },
  {
    icon: MessageSquare,
    title: "Done-for-You Content",
    description: "No need to write a word — we create all your site copy, headlines, and service pages.",
    gradient: "from-green-500/20 via-green-500/10 to-transparent"
  },
  {
    icon: DollarSign,
    title: "Flat, Transparent Pricing",
    description: "One flat rate. No hidden fees. No surprises.",
    gradient: "from-orange-500/20 via-orange-500/10 to-transparent"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0, 1],
    },
  },
}

export function TrustSection() {
  return (
    <section id="why-us" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <span className="px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full inline-block">
                Why Choose Us
              </span>
            </motion.div>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Why <span className="gradient-text">Choose Us</span>
            </motion.h2>
            <p className="text-lg text-foreground/80">
              Professional websites built for businesses that mean business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="relative group"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="relative z-10 bg-white/[0.03] rounded-2xl p-8 h-full backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/0 mb-6 group-hover:scale-110 group-hover:rotate-[3deg] transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">{feature.description}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-b ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
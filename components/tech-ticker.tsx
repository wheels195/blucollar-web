"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const technologies = [
  { 
    name: "Vercel", 
    category: "Deployment",
    logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
  },
  {
    name: "Next.js",
    category: "Framework",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"
  },
  {
    name: "React",
    category: "Frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
  },
  {
    name: "GitHub",
    category: "Version Control",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    name: "OpenAI",
    category: "AI Technology",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png"
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/512px-Figma-logo.svg.png"
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"
  },
  {
    name: "TypeScript",
    category: "Development",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
  },
  {
    name: "VS Code",
    category: "Development",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png"
  },
  {
    name: "Node.js",
    category: "Backend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png"
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png"
  },
  {
    name: "Google",
    category: "Technology",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png"
  },
  {
    name: "Docker",
    category: "DevOps",
    logo: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
  },
  {
    name: "Stripe",
    category: "Payments",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png"
  },
  {
    name: "Prisma",
    category: "ORM",
    logo: "https://www.prisma.io/images/favicon-32x32.png"
  }
]

export function TechTicker() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Create two sets for smooth loop
  const tickerItems = [...technologies, ...technologies]

  return (
    <div className="bg-white py-4 md:py-8 overflow-hidden border-y border-gray-200">
      <div className="container mx-auto px-4 mb-2 md:mb-3">
        <h2 className="text-lg md:text-2xl font-bold text-center text-gray-900">
          Powered with <span className="gradient-text">Modern Technology</span>
        </h2>
      </div>
      
      <div className="relative mt-1 md:mt-2">
        <motion.div
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: isMobile ? 25 : 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
          }}
          className="flex whitespace-nowrap items-center justify-start md:justify-center gap-3 md:gap-8"
          style={{
            width: "200%" // Make room for two sets
          }}
        >
          {tickerItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="shrink-0 flex flex-col items-center px-1.5 md:px-4"
              style={{
                width: `${100 / technologies.length}%` // Ensure even spacing
              }}
            >
              <div className="relative w-9 h-9 md:w-12 md:h-12 mb-1 md:mb-2 bg-gray-50 rounded-lg p-1.5 md:p-2 shadow-sm">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  unoptimized
                  priority={index < 8} // Prioritize loading first 8 images
                />
              </div>
              <span className="text-[11px] md:text-sm text-gray-700 font-medium text-center leading-tight md:leading-normal">
                {tech.name}
              </span>
              <span className="text-[9px] md:text-xs text-gray-500 text-center leading-tight md:leading-normal">
                {tech.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 
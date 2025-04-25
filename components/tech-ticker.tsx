"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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
  }
]

export function TechTicker() {
  // Duplicate the technologies array for seamless loop
  const tickerItems = [...technologies, ...technologies, ...technologies]

  return (
    <div className="bg-white py-8 overflow-hidden border-y border-gray-200">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Powered by <span className="gradient-text">Modern Technology</span>
        </h2>
      </div>
      
      <div className="relative">
        <motion.div
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="flex whitespace-nowrap items-center justify-center"
        >
          {tickerItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center mx-6 group"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-12 h-12 mb-2 bg-gray-50 rounded-lg p-2 shadow-sm">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    fill
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    unoptimized
                  />
                </div>
                <span className="text-sm text-gray-700 font-medium group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
                <span className="text-xs text-gray-500">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 
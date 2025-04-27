"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import "@/styles/tech-ticker.css";
import { Hammer } from "lucide-react";
import Link from "next/link";

const technologies = [
  { 
    name: "Vercel", 
    category: "Deployment",
    logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    url: "https://vercel.com/"
  },
  {
    name: "Next.js",
    category: "Framework",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
    url: "https://nextjs.org/"
  },
  {
    name: "React",
    category: "Frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    url: "https://react.dev/"
  },
  {
    name: "GitHub",
    category: "Version Control",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    url: "https://github.com/"
  },
  {
    name: "OpenAI",
    category: "AI Technology",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png",
    url: "https://openai.com/"
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/512px-Figma-logo.svg.png",
    url: "https://figma.com/"
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png",
    url: "https://tailwindcss.com/"
  },
  {
    name: "TypeScript",
    category: "Development",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
    url: "https://www.typescriptlang.org/"
  },
  {
    name: "VS Code",
    category: "Development",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
    url: "https://code.visualstudio.com/"
  },
  {
    name: "Node.js",
    category: "Backend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png",
    url: "https://nodejs.org/"
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png",
    url: "https://www.mongodb.com/"
  },
  {
    name: "Google",
    category: "Technology",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
    url: "https://www.google.com/"
  },
  {
    name: "Docker",
    category: "DevOps",
    logo: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
    url: "https://www.docker.com/"
  },
  {
    name: "Stripe",
    category: "Payments",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png",
    url: "https://stripe.com/"
  },
  {
    name: "Prisma",
    category: "ORM",
    logo: "https://www.prisma.io/images/favicon-32x32.png",
    url: "https://www.prisma.io/"
  },
  { name: "AWS", category: "Cloud", logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png", url: "https://aws.amazon.com/" },
  { name: "Sass", category: "Styling", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg", url: "https://sass-lang.com/" },
  { name: "Jest", category: "Testing", logo: "https://jestjs.io/img/opengraph.png", url: "https://jestjs.io/" },
  { name: "Redux", category: "State Management", logo: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png", url: "https://redux.js.org/" },
  { name: "Netlify", category: "Deployment", logo: "https://www.netlify.com/v3/img/components/logomark.png", url: "https://www.netlify.com/" },
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

  return (
    <div className="bg-background py-4 md:py-8 overflow-hidden border-y border-border">
      <div className="container mx-auto px-4 mb-2 md:mb-3">
        <h2 className="text-lg md:text-2xl font-bold text-center text-white">
          Powered with <span className="gradient-text">Modern Technology</span>
        </h2>
      </div>
      <div className="relative mt-1 md:mt-2 tech-ticker-outer">
        <div className="tech-ticker-inner">
          <div className="ticker-track flex items-center gap-8">
            {technologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="shrink-0 flex flex-col items-center px-1.5 md:px-4"
              >
                {tech.url ? (
                  <a href={tech.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} className="focus:outline-none">
                    <div className="relative w-9 h-9 md:w-12 md:h-12 mb-1 md:mb-2 bg-muted rounded-lg p-1.5 md:p-2 shadow-sm">
                      <Image
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        unoptimized
                        priority={index < 8}
                      />
                    </div>
                  </a>
                ) : (
                  <div className="relative w-9 h-9 md:w-12 md:h-12 mb-1 md:mb-2 bg-muted rounded-lg p-1.5 md:p-2 shadow-sm">
                    <Image
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      fill
                      className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      unoptimized
                      priority={index < 8}
                    />
                  </div>
                )}
                <span className="text-[11px] md:text-sm text-white font-medium text-center leading-tight md:leading-normal">
                  {tech.name}
                </span>
                <span className="text-[9px] md:text-xs text-gray-400 text-center leading-tight md:leading-normal">
                  {tech.category}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {technologies.map((tech, index) => (
              <div
                key={`dup-${tech.name}-${index}`}
                className="shrink-0 flex flex-col items-center px-1.5 md:px-4"
              >
                {tech.url ? (
                  <a href={tech.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} className="focus:outline-none">
                    <div className="relative w-9 h-9 md:w-12 md:h-12 mb-1 md:mb-2 bg-muted rounded-lg p-1.5 md:p-2 shadow-sm">
                      <Image
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        unoptimized
                        priority={index < 8}
                      />
                    </div>
                  </a>
                ) : (
                  <div className="relative w-9 h-9 md:w-12 md:h-12 mb-1 md:mb-2 bg-muted rounded-lg p-1.5 md:p-2 shadow-sm">
                    <Image
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      fill
                      className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      unoptimized
                      priority={index < 8}
                    />
                  </div>
                )}
                <span className="text-[11px] md:text-sm text-white font-medium text-center leading-tight md:leading-normal">
                  {tech.name}
                </span>
                <span className="text-[9px] md:text-xs text-gray-400 text-center leading-tight md:leading-normal">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Button below ticker */}
      <div className="flex justify-center mt-10">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-primary hover:bg-primary/90 transition-colors duration-200 shadow-xl shadow-primary/25 hover:shadow-primary/50 gap-2"
        >
          <Hammer className="w-6 h-6 mr-1 text-white" />
          Begin Your Build
        </a>
      </div>
    </div>
  )
} 
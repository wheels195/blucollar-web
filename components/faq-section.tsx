"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

interface FAQItem {
  question: string
  answer: React.ReactNode
}

const faqs: FAQItem[] = [
  {
    question: "What's included in your web design service?",
    answer: (
      <div className="space-y-4">
        <p>Our web design service is a comprehensive package that includes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Custom website design tailored to your brand identity</li>
          <li>Responsive layouts that adapt to all screen sizes</li>
          <li>User experience (UX) optimization for better engagement</li>
          <li>Modern design elements and animations</li>
          <li>Content strategy and organization</li>
          <li>Contact forms and lead generation features</li>
          <li>Social media integration</li>
          <li>Basic SEO setup</li>
        </ul>
        <p className="mt-4">
          <span className="font-medium">Why this matters: </span>
          A professionally designed website serves as your business's digital storefront. It's often the first impression potential customers have of your business, and a well-designed website can significantly impact their decision to engage with your services.
        </p>
      </div>
    ),
  },
  {
    question: "How do you ensure mobile optimization?",
    answer: (
      <div className="space-y-4">
        <p>Our mobile optimization process includes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mobile-first design approach (designing for smartphones first, then scaling up)</li>
          <li>Touch-friendly navigation with appropriate button sizes</li>
          <li>Responsive images that load efficiently on mobile networks</li>
          <li>Optimized font sizes and spacing for mobile readability</li>
          <li>Compressed media files for faster mobile loading</li>
          <li>Mobile-specific features like click-to-call buttons</li>
        </ul>
        <p className="mt-4">
          <span className="font-medium">Why this matters: </span>
          Over 60% of web traffic comes from mobile devices. If your website isn't optimized for mobile users, you're potentially losing more than half of your potential customers. Google also prioritizes mobile-friendly websites in search results.
        </p>
      </div>
    ),
  },
  {
    question: "What performance optimization techniques do you use?",
    answer: (
      <div className="space-y-4">
        <p>We employ various technical optimizations to ensure your website loads quickly and runs smoothly:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Image compression and next-gen formats</li>
          <li>Code minification (reducing file sizes)</li>
          <li>Browser caching setup</li>
          <li>Content Delivery Network (CDN) implementation</li>
          <li>Database optimization</li>
          <li>Server response time optimization</li>
        </ul>
        <div className="mt-4 space-y-3">
          <p>
            <span className="font-medium">Key Terms Explained:</span>
          </p>
          <ul className="list-none space-y-2">
            <li><span className="font-medium">CDN (Content Delivery Network): </span>A network of servers worldwide that delivers your website content faster by serving it from locations closer to your visitors.</li>
            <li><span className="font-medium">Browser Caching: </span>A technique that stores website files on visitors' devices, making subsequent visits much faster.</li>
            <li><span className="font-medium">Code Minification: </span>The process of removing unnecessary characters from code without changing functionality, resulting in faster loading times.</li>
          </ul>
          <p>
            <span className="font-medium">Why this matters: </span>
            Website speed directly impacts user experience and conversion rates. Studies show that 40% of visitors abandon websites that take more than 3 seconds to load, and Google uses site speed as a ranking factor.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "What SEO services do you provide?",
    answer: (
      <div className="space-y-4">
        <p>
          <span className="font-medium">What is SEO? </span>
          Search Engine Optimization (SEO) is the practice of optimizing your website to rank higher in search engine results like Google, making it easier for potential customers to find your business online.
        </p>
        <p>Our comprehensive SEO services include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Keyword research and strategy development</li>
          <li>On-page SEO optimization</li>
          <li>Technical SEO improvements</li>
          <li>Local SEO setup and optimization</li>
          <li>Content strategy and optimization</li>
          <li>Link building and outreach</li>
          <li>Regular performance tracking and reporting</li>
        </ul>
        <div className="mt-4 space-y-3">
          <p>
            <span className="font-medium">Key Terms Explained:</span>
          </p>
          <ul className="list-none space-y-2">
            <li><span className="font-medium">Keywords: </span>The specific terms and phrases your potential customers use when searching for your products or services.</li>
            <li><span className="font-medium">On-page SEO: </span>Optimizing individual web pages to rank higher and earn more relevant traffic (includes title tags, meta descriptions, headers, and content).</li>
            <li><span className="font-medium">Local SEO: </span>Optimization strategies that help your business appear in local search results, including Google Maps and "near me" searches.</li>
            <li><span className="font-medium">Link Building: </span>The process of getting other reputable websites to link to yours, which helps establish authority and improve rankings.</li>
          </ul>
          <p>
            <span className="font-medium">Why this matters: </span>
            93% of online experiences begin with a search engine, and 75% of users never scroll past the first page of search results. Effective SEO ensures your business appears where your potential customers are looking.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "How can analytics help my business?",
    answer: (
      <div className="space-y-4">
        <p>We provide comprehensive analytics services that include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Setup and configuration of analytics tools</li>
          <li>User behavior tracking and analysis</li>
          <li>Conversion rate monitoring</li>
          <li>Traffic source analysis</li>
          <li>Custom report creation</li>
          <li>Goal tracking and funnel analysis</li>
        </ul>
        <div className="mt-4 space-y-3">
          <p>
            <span className="font-medium">Key Terms Explained:</span>
          </p>
          <ul className="list-none space-y-2">
            <li><span className="font-medium">Conversion Rate: </span>The percentage of website visitors who take a desired action (like making a purchase or filling out a contact form).</li>
            <li><span className="font-medium">Traffic Sources: </span>The different channels through which visitors find your website (search engines, social media, direct visits, etc.).</li>
            <li><span className="font-medium">User Behavior: </span>How visitors interact with your website, including which pages they visit, how long they stay, and where they click.</li>
          </ul>
          <p>
            <span className="font-medium">Why this matters: </span>
            Analytics provide data-driven insights that help you understand your customers better and make informed decisions about your website and marketing strategies. This information is crucial for improving your website's effectiveness and increasing conversions.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "What does website maintenance include?",
    answer: (
      <div className="space-y-4">
        <p>Our website maintenance service provides comprehensive care for your website:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Regular software and plugin updates</li>
          <li>Security monitoring and threat prevention</li>
          <li>Daily website backups</li>
          <li>Uptime monitoring</li>
          <li>Performance optimization</li>
          <li>Content updates and modifications</li>
          <li>Technical support and troubleshooting</li>
        </ul>
        <div className="mt-4 space-y-3">
          <p>
            <span className="font-medium">Key Terms Explained:</span>
          </p>
          <ul className="list-none space-y-2">
            <li><span className="font-medium">Uptime: </span>The amount of time your website is accessible and functioning properly.</li>
            <li><span className="font-medium">Website Backup: </span>A complete copy of your website's files and data that can be restored if something goes wrong.</li>
            <li><span className="font-medium">Security Monitoring: </span>Continuous surveillance of your website for potential security threats, malware, or unauthorized access attempts.</li>
          </ul>
          <p>
            <span className="font-medium">Why this matters: </span>
            Regular maintenance is crucial for keeping your website secure, fast, and functioning properly. Without proper maintenance, your website can become vulnerable to security threats, experience technical issues, or become outdated, potentially harming your business's reputation and bottom line.
          </p>
        </div>
      </div>
    ),
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-10 sm:py-20 md:py-32 bg-background">
      <div className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <span className="inline-block px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full">
                FAQ
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Answers to common questions about our web design services, process, and results.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-muted/30 p-4 sm:p-6 shadow-md"
            >
              <button
                className="flex items-center justify-between w-full text-left text-lg sm:text-xl font-semibold py-4 px-2 sm:px-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                style={{ minHeight: 56 }}
              >
                <span>{faq.question}</span>
                <span className="ml-4">
                  {openIndex === i ? (
                    <Minus className="h-6 w-6" />
                  ) : (
                    <Plus className="h-6 w-6" />
                  )}
                </span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openIndex === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {openIndex === i && (
                  <div className="pt-4 text-base sm:text-lg text-foreground/80">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
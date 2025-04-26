"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import { Send, Mail, Phone, MapPin, Check } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong. Please try again.')
      }

      setIsSubmitted(true)
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (err) {
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-32 bg-background">
      <div className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Ready to elevate your online presence? Contact us today for a free consultation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal direction="right">
            <div className="bg-muted/30 rounded-xl p-6 md:p-8 border border-border shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a
                      href="mailto:hello@blucollarweb.com"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      hello@blucollarweb.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-foreground/70 hover:text-primary transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Office</p>
                    <p className="text-foreground/70">
                      123 Web Design St.
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((platform, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:border-primary transition-colors"
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="bg-muted/30 rounded-xl p-6 md:p-8 border border-border shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-foreground/70 mb-8">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                          placeholder="Your email"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="Tell us about your project"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-colors duration-200 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

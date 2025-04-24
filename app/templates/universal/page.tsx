"use client"

import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function UniversalContent() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">Universal</span>
            </Link>
            <nav className="hidden md:flex md:items-center md:space-x-6">
              <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Services
              </Link>
              <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Testimonials
              </Link>
              <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Your Vision, Our Expertise</h1>
            <p className="mb-8 text-lg text-indigo-100">
              We create tailored solutions that help your unique business stand out and succeed online.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="w-full bg-white text-indigo-600 hover:bg-gray-100 sm:w-auto">Explore Services</Button>
              <Button variant="outline" className="w-full border-white bg-transparent hover:bg-white/10 sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Customized solutions designed to meet the unique needs of your business, whatever industry you're in.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <div className="h-3 bg-indigo-600"></div>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-indigo-100 p-3 text-indigo-600 inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Custom Web Design</h3>
                <p className="text-gray-600">
                  Stunning, responsive websites that capture your brand's unique identity and connect with your
                  audience.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <div className="h-3 bg-purple-600"></div>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-purple-100 p-3 text-purple-600 inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Content Creation</h3>
                <p className="text-gray-600">
                  Compelling copy and visual content that tells your story and engages your target audience.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <div className="h-3 bg-pink-600"></div>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-pink-100 p-3 text-pink-600 inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Digital Marketing</h3>
                <p className="text-gray-600">
                  Strategic campaigns that increase visibility, drive traffic, and convert visitors into loyal
                  customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">About Us</h2>
              <p className="mb-6 text-gray-600">
                We're a team of passionate digital experts dedicated to helping businesses of all types and sizes
                succeed online. With years of experience across various industries, we understand that every business
                has unique needs and challenges.
              </p>
              <p className="mb-6 text-gray-600">
                Our approach is simple: we listen, we understand, and we deliver solutions that work for your specific
                situation. Whether you're a solo entrepreneur, a niche service provider, a creative professional, or a
                growing startup, we have the skills and expertise to help you thrive in the digital landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-indigo-600" />
                  <span className="text-gray-700">Personalized Service</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-indigo-600" />
                  <span className="text-gray-700">Industry Experience</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-indigo-600" />
                  <span className="text-gray-700">Results-Driven</span>
                </div>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-xl md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-90"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                <p className="mb-6">
                  To empower businesses of all sizes with digital solutions that drive growth, enhance visibility, and
                  create meaningful connections with their audience.
                </p>
                <Button variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-500"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  "Universal completely transformed our online presence. Their team took the time to understand our
                  unique business model and created a website that perfectly represents our brand and connects with our
                  audience."
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <div className="flex h-full items-center justify-center bg-indigo-100 text-indigo-600">
                      <span className="text-lg font-bold">JD</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Jane Doe</h4>
                    <p className="text-sm text-gray-500">Startup Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-500"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  "As a nonprofit with limited resources, we needed a partner who could deliver maximum impact within
                  our budget. Universal exceeded our expectations, creating a beautiful website that has significantly
                  increased our donations."
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <div className="flex h-full items-center justify-center bg-purple-100 text-purple-600">
                      <span className="text-lg font-bold">MS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Michael Smith</h4>
                    <p className="text-sm text-gray-500">Nonprofit Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-500"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  "I was worried my niche business wouldn't translate well online, but Universal really got it. They
                  created a digital presence that perfectly captures what makes my services special and has helped me
                  reach clients I never would have found otherwise."
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <div className="flex h-full items-center justify-center bg-pink-100 text-pink-600">
                      <span className="text-lg font-bold">AL</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Alex Lee</h4>
                    <p className="text-sm text-gray-500">Independent Professional</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
              <p className="mb-8 text-gray-300">
                Ready to take your business to the next level? Contact us today to discuss how we can help you achieve
                your goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-indigo-400" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-indigo-400" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-300">hello@universaldigital.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-indigo-400" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-300">
                      123 Business Ave, Suite 100
                      <br />
                      Anytown, USA 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Universal</h3>
              <p className="text-sm">
                Creating digital solutions for businesses of all types and sizes. Your success is our mission.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Content Creation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    SEO Optimization
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Universal Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Blue Collar Websites */}
      <div className="fixed bottom-6 left-6">
        <Link
          href="/"
          className="flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-indigo-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blue Collar Websites
        </Link>
      </div>
    </div>
  )
}

export default function UniversalPage() {
  return (
    <Suspense fallback={null}>
      <UniversalContent />
    </Suspense>
  )
}

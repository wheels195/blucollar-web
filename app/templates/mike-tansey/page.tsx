import Link from "next/link"
import {
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  RouteIcon as Road,
  ChevronRight,
  Zap,
  Award,
  PenToolIcon as Tool,
  Truck,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MikeTanseyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-blue-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-xl shadow-md">
                <Road className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Mike Tansey Driveways
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#"
                className="font-medium text-blue-900 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="font-medium text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="#services"
                className="font-medium text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="font-medium text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="#testimonials"
                className="font-medium text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="font-medium text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-medium">(631) 555-1234</span>
              </div>
              <Button
                asChild
                className="hidden md:flex bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="#contact">Get a Quote</Link>
              </Button>
              <Button variant="outline" size="icon" className="md:hidden rounded-full border-blue-200">
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
                  className="h-5 w-5 text-blue-600"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full"></div>
          </div>
          <div className="container relative mx-auto px-4 md:px-6 py-12 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-1.5 text-sm rounded-full">
                  #1 Driveway Contractor in Long Island
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Transform Your Property With <span className="text-yellow-300">Stunning Driveways</span>
                </h1>
                <p className="text-xl text-blue-50 max-w-lg">
                  Elevate your home's curb appeal with premium driveway solutions designed to impress and built to last
                  for decades.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Get a Free Design Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 rounded-full"
                  >
                    View Our Projects <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-blue-50">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-blue-500 bg-blue-200 flex items-center justify-center text-blue-700 font-bold"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                    <p className="text-sm">Trusted by 1000+ Long Island homeowners</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl rotate-3 scale-105 opacity-30 blur-xl"></div>
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1617720356637-6264c1c0b4bb?q=80&w=1200&auto=format&fit=crop"
                    alt="Stunning driveway transformation by Mike Tansey Driveways"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold text-blue-900">Project completed in just 3 days</p>
                        <p className="text-sm text-blue-700">Huntington, Long Island</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-blue-50 hover:shadow-md">
                <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <p className="text-blue-700">Years Experience</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-blue-50 hover:shadow-md">
                <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center">
                  <Truck className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">1000+</div>
                <p className="text-cyan-700">Projects Completed</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-blue-50 hover:shadow-md">
                <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                  <Check className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
                <p className="text-indigo-700">Licensed & Insured</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-blue-50 hover:shadow-md">
                <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
                <p className="text-teal-700">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
                <div className="relative bg-white p-3 rounded-3xl shadow-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop"
                    alt="Mike Tansey Driveways Team"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Tool className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Expert Craftsmen</p>
                      <p className="text-sm text-blue-700">25+ years of experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 px-3 py-1 rounded-full">
                  About Us
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
                  Transforming Long Island Driveways Since 1998
                </h2>
                <p className="text-blue-700 mb-4 text-lg">
                  For over 25 years, Mike Tansey Driveways has been Long Island's trusted name in driveway installation
                  and repair. Based in Huntington, we serve residential and commercial clients throughout Nassau and
                  Suffolk counties.
                </p>
                <p className="text-blue-700 mb-4">
                  Our team of experienced professionals is dedicated to delivering exceptional quality and customer
                  service on every project. We use only the finest materials and latest techniques to ensure your
                  driveway is beautiful, durable, and built to last.
                </p>
                <p className="text-blue-700 mb-6">
                  As a family-owned business with deep roots in the Long Island community, we take pride in enhancing
                  the curb appeal and value of local properties with our expert craftsmanship.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-blue-700">Premium Materials</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-blue-700">10-Year Warranty</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-blue-700">Free Consultations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-blue-700">Financing Available</span>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  Learn More About Our Process
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 px-3 py-1 rounded-full">
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Premium Driveway Solutions</h2>
              <p className="text-blue-700 max-w-2xl mx-auto">
                We offer a complete range of driveway services designed to enhance your property's beauty,
                functionality, and value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=384&auto=format&fit=crop"
                    alt="Asphalt Driveways"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-blue-500/80 text-white mb-2">Most Popular</Badge>
                    <h3 className="text-2xl font-bold text-white">Asphalt Driveways</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-blue-700 mb-4">
                    Premium asphalt driveways built to withstand Long Island's harsh winters and hot summers. Durable,
                    beautiful, and cost-effective.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="bg-blue-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">25-year lifespan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-blue-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Low maintenance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-blue-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Quick installation</span>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1597218868981-1b68e15f0065?q=80&w=384&auto=format&fit=crop"
                    alt="Concrete Driveways"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-cyan-500/80 text-white mb-2">Premium Choice</Badge>
                    <h3 className="text-2xl font-bold text-white">Concrete Driveways</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-blue-700 mb-4">
                    Elegant and durable concrete driveways customized for Long Island's most beautiful homes. Endless
                    design possibilities.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="bg-blue-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">30+ year lifespan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-blue-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Custom designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-blue-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Stamped options</span>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=384&auto=format&fit=crop"
                    alt="Commercial Paving"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-indigo-500/80 text-white mb-2">Commercial</Badge>
                    <h3 className="text-2xl font-bold text-white">Commercial Paving</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-blue-700 mb-4">
                    Complete commercial paving solutions for Long Island businesses and organizations. Built for heavy
                    traffic and durability.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="bg-blue-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">ADA compliant</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-blue-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Drainage solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-blue-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Line striping</span>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 px-3 py-1 rounded-full">
                Featured Projects
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Latest Transformations</h2>
              <p className="text-blue-700 max-w-2xl mx-auto">
                Browse our recent driveway projects across Long Island and get inspired for your own property
                transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=480&auto=format&fit=crop"
                    alt="Commercial Project in Nassau County"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <Badge className="bg-blue-100 text-blue-700 mb-2">Commercial</Badge>
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">Shopping Center in Syosset</h3>
                  <p className="text-blue-700 mb-4">
                    Complete parking lot renovation featuring our premium asphalt and expert drainage solutions. This
                    high-traffic commercial space was transformed in just 5 days with minimal disruption.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-blue-50 text-blue-700">Asphalt</Badge>
                    <Badge className="bg-blue-50 text-blue-700">Drainage</Badge>
                    <Badge className="bg-blue-50 text-blue-700">Line Striping</Badge>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    View Project Details <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=480&auto=format&fit=crop"
                    alt="Luxury Home in Suffolk County"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <Badge className="bg-cyan-100 text-cyan-700 mb-2">Residential</Badge>
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">Waterfront Property in the Hamptons</h3>
                  <p className="text-blue-700 mb-4">
                    Custom stamped concrete driveway and walkway installation for a waterfront property in the Hamptons.
                    This project features our premium decorative concrete with a natural stone appearance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-blue-50 text-blue-700">Stamped Concrete</Badge>
                    <Badge className="bg-blue-50 text-blue-700">Walkways</Badge>
                    <Badge className="bg-blue-50 text-blue-700">Landscaping</Badge>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    View Project Details <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                Explore Our Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 px-3 py-1 rounded-full">
                Transformations
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Before & After Gallery</h2>
              <p className="text-blue-700 max-w-2xl mx-auto">
                See the dramatic difference our expert craftsmanship makes with these stunning before and after
                transformations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-all duration-300"></div>
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=384&auto=format&fit=crop"
                      alt="Driveway Before"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full font-medium">
                      Before
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Cracked Asphalt Driveway in Huntington</h3>
                <p className="text-blue-700">
                  This 20-year-old driveway had extensive cracking, potholes, and drainage issues causing water to pool
                  near the garage.
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-all duration-300"></div>
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1617720356637-6264c1c0b4bb?q=80&w=384&auto=format&fit=crop"
                      alt="Driveway After"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full font-medium">
                      After
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900">New Premium Asphalt Installation</h3>
                <p className="text-blue-700">
                  Complete removal and replacement with our premium asphalt, proper grading for drainage, and sealed
                  edges for a clean, finished look.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-all duration-300"></div>
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1597047084993-bf337e09ede0?q=80&w=384&auto=format&fit=crop"
                      alt="Concrete Before"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full font-medium">
                      Before
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Damaged Concrete Driveway in Smithtown</h3>
                <p className="text-blue-700">
                  This plain concrete driveway had severe cracking and an outdated appearance that detracted from the
                  home's curb appeal.
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-all duration-300"></div>
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1597218868981-1b68e15f0065?q=80&w=384&auto=format&fit=crop"
                      alt="Concrete After"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full font-medium">
                      After
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Decorative Stamped Concrete Installation</h3>
                <p className="text-blue-700">
                  Custom stamped concrete with a cobblestone pattern, sealed for protection and enhanced with a subtle
                  color tint to complement the home.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full"
              >
                View Full Before & After Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-1.5 text-sm rounded-full">
                Client Feedback
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What Our Clients Say</h2>
              <p className="mx-auto max-w-[700px] text-blue-50 md:text-xl/relaxed">
                Don't just take our word for it. Here's what our satisfied customers across Long Island have to say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="bg-white/10 backdrop-blur-md border-none p-8 rounded-3xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white/50"
                  />
                  <div>
                    <h3 className="font-bold text-white">Robert & Lisa Johnson</h3>
                    <p className="text-sm text-blue-100">Residential Clients, Huntington</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <p className="text-blue-50 italic">
                  "Mike Tansey and his team exceeded our expectations with our new driveway. Their attention to detail
                  and professionalism were outstanding. The project was completed on time and within budget. We couldn't
                  be happier with the results!"
                </p>
              </Card>

              {/* Testimonial 2 */}
              <Card className="bg-white/10 backdrop-blur-md border-none p-8 rounded-3xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white/50"
                  />
                  <div>
                    <h3 className="font-bold text-white">James Wilson</h3>
                    <p className="text-sm text-blue-100">Business Owner, Smithtown</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <p className="text-blue-50 italic">
                  "As a business owner, I needed a contractor who understood my timeline and budget constraints. Mike
                  Tansey Driveways delivered on all fronts, completing our parking lot resurfacing on time and within
                  budget. The space looks amazing and has improved our customer experience."
                </p>
              </Card>

              {/* Testimonial 3 */}
              <Card className="bg-white/10 backdrop-blur-md border-none p-8 rounded-3xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white/50"
                  />
                  <div>
                    <h3 className="font-bold text-white">Jennifer Martinez</h3>
                    <p className="text-sm text-blue-100">Homeowner, Babylon</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <p className="text-blue-50 italic">
                  "Mike and his team transformed our outdated driveway into a stunning entrance that we love to show
                  off. Their craftsmanship is impeccable, and they were a pleasure to work with throughout the entire
                  process. I highly recommend them for any driveway project!"
                </p>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                Read More Reviews <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 px-3 py-1 rounded-full">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-blue-900">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-700">
                Find answers to common questions about our driveway and paving services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    How long does a typical driveway installation take?
                  </h3>
                  <p className="text-blue-700">
                    A standard residential driveway installation typically takes 2-3 days, depending on the size,
                    complexity, and weather conditions. This includes removal of the old driveway (if applicable),
                    grading, base preparation, asphalt installation, and cleanup. We'll provide a specific timeline for
                    your project during our initial consultation.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">Are you licensed and insured?</h3>
                  <p className="text-blue-700">
                    Yes, Mike Tansey Driveways is fully licensed, bonded, and insured. We carry comprehensive liability
                    insurance and workers' compensation coverage for all our employees and subcontractors. We're happy
                    to provide documentation upon request.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">What areas of Long Island do you serve?</h3>
                  <p className="text-blue-700">
                    We provide our services throughout Nassau and Suffolk counties, including Huntington, Smithtown,
                    Babylon, Islip, Brookhaven, and surrounding areas. If you're unsure if we service your area, please
                    contact us to confirm.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">Do you offer warranties on your work?</h3>
                  <p className="text-blue-700">
                    Yes, we stand behind our craftsmanship with a comprehensive warranty. We offer a 5-year warranty on
                    all workmanship and pass through manufacturers' warranties on materials and products. Details are
                    provided in our contract and at project completion.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">What payment terms do you offer?</h3>
                  <p className="text-blue-700">
                    Our payment schedule typically includes an initial deposit, followed by progress payments at
                    predetermined milestones, and a final payment upon completion. We accept checks, bank transfers, and
                    major credit cards for your convenience.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 px-3 py-1 rounded-full">
                Get In Touch
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-blue-900">
                Start Your Dream Project Today
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-700">
                Contact us for a free consultation and estimate on your driveway or paving project.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Request a Free Design Consultation</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-blue-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-blue-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-blue-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="asphalt">Asphalt Driveway</option>
                      <option value="concrete">Concrete Driveway</option>
                      <option value="stamped">Stamped Concrete</option>
                      <option value="commercial">Commercial Paving</option>
                      <option value="repair">Driveway Repair</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-1">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project, timeline, and any specific requirements"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 py-3"
                  >
                    Submit Request
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-blue-900">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-900">Phone</p>
                        <p className="text-blue-700 text-lg">(631) 555-1234</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-900">Email</p>
                        <p className="text-blue-700 text-lg">info@miketanseydriveways.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-900">Address</p>
                        <p className="text-blue-700 text-lg">
                          123 Construction Avenue
                          <br />
                          Huntington, NY 11743
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-900">Business Hours</p>
                        <p className="text-blue-700">
                          Monday - Friday: 7:00 AM - 5:00 PM
                          <br />
                          Saturday: By appointment
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-blue-900">Service Areas</h3>
                  <p className="text-blue-700 mb-6">
                    We proudly serve the following areas across Long Island and surrounding communities:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Huntington</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Smithtown</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Babylon</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Islip</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Brookhaven</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-blue-700">Nassau County</span>
                    </div>
                  </div>
                  <p className="text-blue-700 mt-6">Not sure if we service your area? Contact us to find out!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-1.5 text-sm rounded-full">
                Limited Time Offer
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Ready to Transform Your Property?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Get 10% off your driveway project when you schedule a consultation this month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link href="#contact">
                    Get a Free Design Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full"
                >
                  <Link href="#projects">View Our Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-xl shadow-md">
                  <Road className="h-6 w-6 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold">Mike Tansey Driveways</span>
              </div>
              <p className="text-blue-200 mb-6">
                Quality driveway and paving services with over 25 years of experience serving Long Island. Licensed,
                bonded, and insured.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-blue-200 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-blue-200 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-blue-200 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-blue-200 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-blue-200 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Asphalt Driveways
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Concrete Driveways
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Stamped Concrete
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Commercial Paving
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Driveway Repair
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Maintenance Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <p className="text-blue-200 mb-4">
                Subscribe to our newsletter for driveway tips, company updates, and special offers.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
            <p>© 2025 Mike Tansey Driveways. All rights reserved.</p>
            <p className="mt-2 text-sm">Licensed, Bonded, and Insured. License #ABC123456</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import Link from "next/link"
import { ArrowRight, Check, Leaf, Phone, Mail, MapPin, Menu, Calendar, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GreenScapePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-green-600 p-2 rounded-md">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">GreenScape</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="font-medium text-green-600">
                Home
              </Link>
              <Link href="#services" className="font-medium text-gray-600 hover:text-green-600">
                Services
              </Link>
              <Link href="#gallery" className="font-medium text-gray-600 hover:text-green-600">
                Gallery
              </Link>
              <Link href="#testimonials" className="font-medium text-gray-600 hover:text-green-600">
                Testimonials
              </Link>
              <Link href="#pricing" className="font-medium text-gray-600 hover:text-green-600">
                Pricing
              </Link>
              <Link href="#contact" className="font-medium text-gray-600 hover:text-green-600">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button asChild className="hidden md:flex bg-green-600 hover:bg-green-700">
                <Link href="#contact">Get a Quote</Link>
              </Button>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg?height=800&width=1600"
              alt="Beautiful landscaped garden"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <Badge className="bg-green-500 text-white hover:bg-green-600">Professional Landscaping</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Transform Your Outdoor Space
                  </h1>
                  <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Professional landscaping and lawn care services to create the outdoor environment you've always
                    dreamed of.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                    <Link href="#contact">
                      Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-green-800"
                  >
                    <Link href="#services">Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative hidden lg:block">
                {/* This div is intentionally empty to balance the grid */}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Landscapers</h3>
                <p className="text-gray-500">
                  Our team of certified landscaping professionals brings years of experience to every project.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Year-Round Service</h3>
                <p className="text-gray-500">
                  We provide seasonal maintenance and care to keep your landscape beautiful throughout the year.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-500">
                  We're not happy until you're happy. Our work is backed by our 100% satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="bg-green-500 text-white hover:bg-green-600">What We Offer</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Landscaping Services
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide comprehensive landscaping and lawn care services to keep your property looking its best.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Lawn Maintenance"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Lawn Maintenance</h3>
                  <p className="text-gray-500 mb-4">
                    Regular mowing, edging, and maintenance to keep your lawn healthy and beautiful.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Weekly or bi-weekly mowing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Edging and trimming</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Fertilization programs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Weed control</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Landscape Design"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Landscape Design</h3>
                  <p className="text-gray-500 mb-4">
                    Custom landscape design and installation to transform your outdoor space.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Professional design consultation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Plant selection and installation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Garden bed creation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Seasonal color planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 3 */}
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Hardscaping"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hardscaping</h3>
                  <p className="text-gray-500 mb-4">
                    Stone pathways, patios, retaining walls, and other hardscape elements.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Patio and walkway installation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Retaining walls</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Outdoor kitchens</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Fire pits and water features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 4 */}
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Irrigation Systems"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Irrigation Systems</h3>
                  <p className="text-gray-500 mb-4">
                    Efficient irrigation systems to keep your landscape properly watered.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>System design and installation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Drip irrigation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Smart controllers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Maintenance and repairs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 5 */}
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Tree & Shrub Care"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Tree & Shrub Care</h3>
                  <p className="text-gray-500 mb-4">Professional care for the trees and shrubs on your property.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Pruning and trimming</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Disease and pest management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Deep root fertilization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Tree removal and stump grinding</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 6 */}
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Seasonal Cleanup"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Seasonal Cleanup</h3>
                  <p className="text-gray-500 mb-4">
                    Spring and fall cleanup services to keep your property looking its best year-round.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Leaf removal</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Bed cleaning and mulching</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Debris removal</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                      <span>Seasonal planting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section with Before/After */}
        <section id="gallery" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="bg-green-500 text-white hover:bg-green-600">Our Work</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Before & After Gallery</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See the transformations we've created for our satisfied clients.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before/After 1 */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Before landscaping"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded">Before</div>
                  </div>
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="After landscaping"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded">After</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Backyard Transformation</h3>
                  <p className="text-gray-500">
                    Complete redesign with new patio, plantings, and a custom fire pit area.
                  </p>
                </div>
              </div>

              {/* Before/After 2 */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Before landscaping"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded">Before</div>
                  </div>
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="After landscaping"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded">After</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Front Yard Makeover</h3>
                  <p className="text-gray-500">
                    Enhanced curb appeal with new walkway, garden beds, and strategic plantings.
                  </p>
                </div>
              </div>

              {/* Before/After 3 */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Before landscaping"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded">Before</div>
                  </div>
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="After landscaping"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded">After</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Patio Installation</h3>
                  <p className="text-gray-500">
                    Custom stone patio with built-in seating and surrounding landscape design.
                  </p>
                </div>
              </div>

              {/* Before/After 4 */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Before landscaping"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded">Before</div>
                  </div>
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="After landscaping"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded">After</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Water Feature Addition</h3>
                  <p className="text-gray-500">
                    Custom waterfall and pond installation with surrounding landscape design.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="#">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="bg-green-500 text-white hover:bg-green-600">Client Feedback</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our satisfied customers have to say.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Homeowner</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "GreenScape transformed our backyard into a beautiful oasis. Their attention to detail and
                  professionalism exceeded our expectations. We now have the perfect outdoor space for entertaining!"
                </p>
              </Card>

              {/* Testimonial 2 */}
              <Card className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Michael Davis</h3>
                    <p className="text-sm text-gray-500">Business Owner</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "We've been using GreenScape for our commercial property maintenance for over 3 years. They are
                  reliable, professional, and always deliver exceptional results. Highly recommend their services!"
                </p>
              </Card>

              {/* Testimonial 3 */}
              <Card className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Jennifer Wilson</h3>
                    <p className="text-sm text-gray-500">Homeowner</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The hardscaping work they did on our patio and walkway is absolutely stunning. The craftsmanship and
                  quality of work is outstanding. Our neighbors keep asking who did our landscaping!"
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="bg-green-500 text-white hover:bg-green-600">Our Packages</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Landscaping Packages</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our service packages or contact us for a custom solution tailored to your needs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <Card className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6 bg-gray-50 border-b">
                  <h3 className="text-2xl font-bold">Basic Maintenance</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$149</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="text-gray-500 mt-2">Perfect for small residential properties</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Bi-weekly lawn mowing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Edging and trimming</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Seasonal cleanup (2x per year)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Basic fertilization</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-6 bg-green-600 hover:bg-green-700">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </div>
              </Card>

              {/* Premium Package */}
              <Card className="border-2 border-green-600 rounded-lg overflow-hidden shadow-lg relative">
                <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-medium">
                  Most Popular
                </div>
                <div className="p-6 bg-green-50 border-b border-green-200">
                  <h3 className="text-2xl font-bold">Premium Care</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$299</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="text-gray-500 mt-2">Comprehensive care for medium-sized properties</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Weekly lawn mowing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Edging, trimming, and blowing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Seasonal cleanup (4x per year)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Advanced fertilization program</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Weed control</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Shrub and tree trimming</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-6 bg-green-600 hover:bg-green-700">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </div>
              </Card>

              {/* Ultimate Package */}
              <Card className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6 bg-gray-50 border-b">
                  <h3 className="text-2xl font-bold">Ultimate Estate</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$499</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="text-gray-500 mt-2">Complete care for large properties</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Weekly lawn mowing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Complete edging and detailing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Monthly seasonal color rotation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Premium fertilization program</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Comprehensive pest control</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Irrigation system maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Priority scheduling</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-6 bg-green-600 hover:bg-green-700">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500 mb-4">Need a custom solution? Contact us for a personalized quote.</p>
              <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <Link href="#contact">Request Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="bg-green-500 text-white hover:bg-green-600">Get In Touch</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to transform your outdoor space? Contact us today for a free consultation and quote.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="lawn-maintenance">Lawn Maintenance</option>
                      <option value="landscape-design">Landscape Design</option>
                      <option value="hardscaping">Hardscaping</option>
                      <option value="irrigation">Irrigation Systems</option>
                      <option value="tree-care">Tree & Shrub Care</option>
                      <option value="seasonal-cleanup">Seasonal Cleanup</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Tell us about your project or questions"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-500">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-500">info@greenscape.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-500">
                          123 Landscape Drive
                          <br />
                          Greenville, USA 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-500">
                          Monday - Friday: 8:00 AM - 5:00 PM
                          <br />
                          Saturday: 9:00 AM - 2:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
                  <p className="text-gray-500 mb-4">
                    We proudly serve the following areas and surrounding communities:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Greenville</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Riverside</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Oakwood</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Maplewood</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Cedar Hills</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Pine Valley</span>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-4">Not sure if we service your area? Contact us to find out!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-green-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Outdoor Space?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today for a free consultation and quote.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Link href="#contact">
                    Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-green-600 p-1 rounded-md">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="ml-2 text-lg font-bold">GreenScape</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional landscaping and lawn care services with a commitment to quality and customer satisfaction.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-gray-400 hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Lawn Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Landscape Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Hardscaping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Irrigation Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tree & Shrub Care
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Seasonal Cleanup
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Get seasonal tips, special offers, and landscaping inspiration delivered to your inbox.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 GreenScape. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

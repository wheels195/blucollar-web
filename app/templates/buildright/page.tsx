import Link from "next/link"
import {
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  PenToolIcon as Tool,
  Home,
  Building,
  Ruler,
  HardHat,
  Truck,
  FileText,
  Hammer,
  Award,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BuildRightPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 p-2 rounded-md">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">BuildRight</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="font-medium text-yellow-600">
                Home
              </Link>
              <Link href="#about" className="font-medium text-gray-600 hover:text-yellow-600">
                About
              </Link>
              <Link href="#services" className="font-medium text-gray-600 hover:text-yellow-600">
                Services
              </Link>
              <Link href="#projects" className="font-medium text-gray-600 hover:text-yellow-600">
                Projects
              </Link>
              <Link href="#process" className="font-medium text-gray-600 hover:text-yellow-600">
                Process
              </Link>
              <Link href="#testimonials" className="font-medium text-gray-600 hover:text-yellow-600">
                Testimonials
              </Link>
              <Link href="#contact" className="font-medium text-gray-600 hover:text-yellow-600">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Phone className="h-5 w-5 text-yellow-600" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <Button asChild className="hidden md:flex bg-yellow-600 hover:bg-yellow-700">
                <Link href="#contact">Get a Quote</Link>
              </Button>
              <Button variant="outline" size="icon" className="md:hidden">
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
        <section className="relative py-20 md:py-28">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg?height=800&width=1600"
              alt="Construction site with workers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Licensed & Insured</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Building Excellence, Crafting Trust
                  </h1>
                  <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Quality construction, renovation, and remodeling services with over 25 years of experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                    <Link href="#contact">
                      Get a Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-yellow-800"
                  >
                    <Link href="#projects">View Our Projects</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative hidden lg:block">
                {/* This div is intentionally empty to balance the grid */}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">25+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">100%</div>
                <p className="text-gray-600">Licensed & Insured</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Contractor with team"
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-lg shadow-lg hidden md:block">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">About Us</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Legacy of Quality Construction</h2>
                <p className="text-gray-500">
                  BuildRight Construction was founded with a simple mission: to provide exceptional construction
                  services with integrity, quality, and attention to detail. For over 25 years, we've been serving our
                  community with pride.
                </p>
                <p className="text-gray-500">
                  Our team of skilled professionals brings decades of combined experience to every project. From small
                  renovations to large commercial builds, we approach each job with the same level of dedication and
                  craftsmanship.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Licensed & Insured</h3>
                      <p className="text-sm text-gray-500">Fully licensed, bonded, and insured for your protection</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Quality Materials</h3>
                      <p className="text-sm text-gray-500">We never compromise on the quality of materials we use</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Expert Team</h3>
                      <p className="text-sm text-gray-500">Skilled craftsmen with decades of combined experience</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">On-Time Completion</h3>
                      <p className="text-sm text-gray-500">We respect your time and stick to agreed timelines</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                  <Link href="#contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Our Services</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Construction Services
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From new construction to renovations and remodels, we offer a full range of construction services to
                meet your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="overflow-hidden border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                <div className="p-1 bg-yellow-500 w-full"></div>
                <CardContent className="p-6 pt-8 text-center">
                  <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Home className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">New Construction</h3>
                  <p className="text-gray-500 mb-4">
                    Custom home building and new construction services tailored to your vision and specifications.
                  </p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Custom home design and building</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Commercial construction</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Project management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Permit acquisition</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="overflow-hidden border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                <div className="p-1 bg-yellow-500 w-full"></div>
                <CardContent className="p-6 pt-8 text-center">
                  <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Tool className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Renovations & Remodeling</h3>
                  <p className="text-gray-500 mb-4">
                    Transform your existing space with our expert renovation and remodeling services.
                  </p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Kitchen and bathroom remodels</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Basement finishing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Home additions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Interior/exterior renovations</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Service 3 */}
              <Card className="overflow-hidden border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                <div className="p-1 bg-yellow-500 w-full"></div>
                <CardContent className="p-6 pt-8 text-center">
                  <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Building className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Commercial Construction</h3>
                  <p className="text-gray-500 mb-4">
                    Professional commercial construction services for businesses of all sizes.
                  </p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Office build-outs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Retail space construction</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Restaurant renovations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Industrial facilities</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Service 4 */}
              <Card className="overflow-hidden border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                <div className="p-1 bg-yellow-500 w-full"></div>
                <CardContent className="p-6 pt-8 text-center">
                  <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Ruler className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Design-Build Services</h3>
                  <p className="text-gray-500 mb-4">
                    Streamlined design and construction services under one roof for a seamless experience.
                  </p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Architectural design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Engineering solutions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Construction management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Single point of responsibility</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Service 5 */}
              <Card className="overflow-hidden border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                <div className="p-1 bg-yellow-500 w-full"></div>
                <CardContent className="p-6 pt-8 text-center">
                  <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <HardHat className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">General Contracting</h3>
                  <p className="text-gray-500 mb-4">
                    Expert management of your construction project from start to finish.
                  </p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Subcontractor management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Budget oversight</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Timeline management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Quality control</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Service 6 */}
              <Card className="overflow-hidden border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                <div className="p-1 bg-yellow-500 w-full"></div>
                <CardContent className="p-6 pt-8 text-center">
                  <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Truck className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Specialty Projects</h3>
                  <p className="text-gray-500 mb-4">
                    Custom solutions for unique construction needs and specialty projects.
                  </p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Historic renovations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Green building</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>Disaster recovery</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                      <span>ADA compliance upgrades</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Our Portfolio</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our portfolio of completed projects showcasing our quality craftsmanship and attention to detail.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="residential">Residential</TabsTrigger>
                  <TabsTrigger value="commercial">Commercial</TabsTrigger>
                  <TabsTrigger value="renovations">Renovations</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Project 1 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Custom Home Project"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Modern Farmhouse</h3>
                      <p className="text-gray-200">Custom home build with premium finishes</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Kitchen Remodel"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Luxury Kitchen Remodel</h3>
                      <p className="text-gray-200">Complete kitchen renovation with custom cabinetry</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Commercial Office"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Downtown Office Complex</h3>
                      <p className="text-gray-200">Modern commercial office space renovation</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Bathroom Renovation"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Master Bathroom Renovation</h3>
                      <p className="text-gray-200">Luxury bathroom remodel with custom tile work</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Project 5 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Restaurant Build"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Riverfront Restaurant</h3>
                      <p className="text-gray-200">New construction of waterfront dining establishment</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Project 6 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Home Addition"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Two-Story Addition</h3>
                      <p className="text-gray-200">Home expansion with master suite and family room</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="residential" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Residential Project 1 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Custom Home Project"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Modern Farmhouse</h3>
                      <p className="text-gray-200">Custom home build with premium finishes</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Residential Project 2 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Bathroom Renovation"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Master Bathroom Renovation</h3>
                      <p className="text-gray-200">Luxury bathroom remodel with custom tile work</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Residential Project 3 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Home Addition"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Two-Story Addition</h3>
                      <p className="text-gray-200">Home expansion with master suite and family room</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="commercial" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Commercial Project 1 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Commercial Office"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Downtown Office Complex</h3>
                      <p className="text-gray-200">Modern commercial office space renovation</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Commercial Project 2 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Restaurant Build"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Riverfront Restaurant</h3>
                      <p className="text-gray-200">New construction of waterfront dining establishment</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="renovations" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Renovation Project 1 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Kitchen Remodel"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Luxury Kitchen Remodel</h3>
                      <p className="text-gray-200">Complete kitchen renovation with custom cabinetry</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Renovation Project 2 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Bathroom Renovation"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Master Bathroom Renovation</h3>
                      <p className="text-gray-200">Luxury bathroom remodel with custom tile work</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 border-white text-white hover:bg-white hover:text-black w-fit"
                      >
                        <Link href="#">View Project</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-12">
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                <Link href="#">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Our Process</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Work</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our streamlined process ensures your project is completed on time, within budget, and to your
                satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute top-0 left-0 -mt-2 -ml-2 bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <Card className="pt-8 h-full">
                  <CardContent className="text-center p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Consultation</h3>
                    <p className="text-gray-500">
                      We meet to discuss your vision, requirements, and budget to understand your project needs.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute top-0 left-0 -mt-2 -ml-2 bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <Card className="pt-8 h-full">
                  <CardContent className="text-center p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <FileText className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Design & Planning</h3>
                    <p className="text-gray-500">
                      We develop detailed plans, obtain necessary permits, and create a comprehensive project timeline.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute top-0 left-0 -mt-2 -ml-2 bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <Card className="pt-8 h-full">
                  <CardContent className="text-center p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <HardHat className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Construction</h3>
                    <p className="text-gray-500">
                      Our skilled team executes the project with precision, keeping you informed throughout the process.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="absolute top-0 left-0 -mt-2 -ml-2 bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <Card className="pt-8 h-full">
                  <CardContent className="text-center p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Award className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Completion</h3>
                    <p className="text-gray-500">
                      Final walkthrough, quality inspection, and project handover with warranty information.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Our Team</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Experts</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of skilled professionals brings decades of experience to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold">John Smith</h3>
                  <p className="text-yellow-600 mb-4">Founder & Lead Contractor</p>
                  <p className="text-gray-500 text-sm">
                    With over 25 years of experience, John leads our team with expertise in all aspects of construction.
                  </p>
                </CardContent>
              </Card>

              {/* Team Member 2 */}
              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-yellow-600 mb-4">Project Manager</p>
                  <p className="text-gray-500 text-sm">
                    Sarah ensures every project runs smoothly, on time, and within budget with meticulous attention to
                    detail.
                  </p>
                </CardContent>
              </Card>

              {/* Team Member 3 */}
              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                  <p className="text-yellow-600 mb-4">Lead Carpenter</p>
                  <p className="text-gray-500 text-sm">
                    Michael's craftsmanship and attention to detail ensure the highest quality woodwork on every
                    project.
                  </p>
                </CardContent>
              </Card>

              {/* Team Member 4 */}
              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold">Emily Chen</h3>
                  <p className="text-yellow-600 mb-4">Interior Designer</p>
                  <p className="text-gray-500 text-sm">
                    Emily brings creative vision to our projects, helping clients transform spaces with beautiful
                    design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Client Feedback</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our satisfied customers have to say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Robert & Lisa Thompson</h3>
                    <p className="text-sm text-gray-500">Custom Home Build</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "BuildRight exceeded our expectations in every way. From the initial design consultation to the final
                  walkthrough, their attention to detail and commitment to quality was evident. Our dream home became a
                  reality thanks to their expertise."
                </p>
              </Card>

              {/* Testimonial 2 */}
              <Card className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">James Wilson</h3>
                    <p className="text-sm text-gray-500">Commercial Renovation</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "As a business owner, I needed a contractor who understood my timeline and budget constraints.
                  BuildRight delivered on all fronts, completing our office renovation on time and within budget. The
                  space looks amazing and has improved our team's productivity."
                </p>
              </Card>

              {/* Testimonial 3 */}
              <Card className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Jennifer Martinez</h3>
                    <p className="text-sm text-gray-500">Kitchen & Bath Remodel</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The team at BuildRight transformed our outdated kitchen and bathroom into stunning spaces that we
                  love to show off. Their craftsmanship is impeccable, and they were a pleasure to work with throughout
                  the entire process. I highly recommend them!"
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">FAQ</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our construction services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How long does a typical construction project take?</h3>
                  <p className="text-gray-500">
                    Project timelines vary based on scope and complexity. A bathroom remodel might take 3-4 weeks, while
                    a custom home build could take 6-12 months. During our initial consultation, we'll provide a
                    detailed timeline specific to your project.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Are you licensed and insured?</h3>
                  <p className="text-gray-500">
                    Yes, BuildRight is fully licensed, bonded, and insured. We carry comprehensive liability insurance
                    and workers' compensation coverage for all our employees and subcontractors. We're happy to provide
                    documentation upon request.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How do you handle project changes or additions?</h3>
                  <p className="text-gray-500">
                    We understand that changes sometimes occur during construction. We manage these through a formal
                    change order process that documents the requested changes, associated costs, and any timeline
                    adjustments. This ensures transparency and clear communication throughout the project.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you offer warranties on your work?</h3>
                  <p className="text-gray-500">
                    Yes, we stand behind our craftsmanship with a comprehensive warranty. We offer a 1-year warranty on
                    all workmanship and pass through manufacturers' warranties on materials and products. Details are
                    provided in our contract and at project completion.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">What payment terms do you offer?</h3>
                  <p className="text-gray-500">
                    Our payment schedule typically includes an initial deposit, followed by progress payments at
                    predetermined milestones, and a final payment upon completion. We accept checks, bank transfers, and
                    major credit cards for your convenience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Get In Touch</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Start Your Project Today</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us for a free consultation and estimate on your construction project.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Request a Quote</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="new-construction">New Construction</option>
                      <option value="renovation">Renovations & Remodeling</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="design-build">Design-Build Services</option>
                      <option value="general-contracting">General Contracting</option>
                      <option value="specialty">Specialty Projects</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Tell us about your project, timeline, and any specific requirements"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700">
                    Submit Request
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-500">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-500">info@buildright.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-500">
                          123 Construction Avenue
                          <br />
                          Builderville, USA 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-500">
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

                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
                  <p className="text-gray-500 mb-4">
                    We proudly serve the following areas and surrounding communities:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Builderville</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Constructiontown</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Hammersville</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Craftington</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Toolbox City</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Framington</span>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-4">Not sure if we service your area? Contact us to find out!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-yellow-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Construction Project?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today for a free consultation and estimate.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
                  <Link href="#contact">
                    Get a Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-yellow-600"
                >
                  <Link href="#projects">View Our Projects</Link>
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
                <div className="bg-yellow-500 p-1 rounded-md">
                  <Hammer className="h-6 w-6 text-white" />
                </div>
                <span className="ml-2 text-lg font-bold">BuildRight</span>
              </div>
              <p className="text-gray-400 mb-4">
                Quality construction services with over 25 years of experience. Licensed, bonded, and insured.
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
                  <Link href="#about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white">
                    Testimonials
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
                    New Construction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Renovations & Remodeling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Commercial Construction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Design-Build Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    General Contracting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Specialty Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for construction tips, company updates, and special offers.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 BuildRight Construction. All rights reserved.</p>
            <p className="mt-2 text-sm">Licensed, Bonded, and Insured. License #ABC123456</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

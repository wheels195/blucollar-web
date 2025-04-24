import Link from "next/link"
import { ArrowRight, Check, Home, Building, FileText, HardHat, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function NewConstructionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex items-center text-sm">
              <Link href="/templates/buildright" className="text-gray-500 hover:text-yellow-600">
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/templates/buildright#services" className="text-gray-500 hover:text-yellow-600">
                Services
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-yellow-600 font-medium">New Construction</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg?height=800&width=1600"
              alt="New home construction site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">New Construction</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Building Your Dream Home From The Ground Up
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Custom home building and new construction services tailored to your vision and specifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  <Link href="/templates/buildright#contact">
                    Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
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
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Our Approach</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Comprehensive New Construction Services
                </h2>
                <p className="text-gray-600 mb-6">
                  At BuildRight, we specialize in bringing your vision to life through our comprehensive new
                  construction services. Whether you're building your dream home, a multi-family residence, or a
                  commercial property, our experienced team guides you through every step of the process.
                </p>
                <p className="text-gray-600 mb-6">
                  We believe that successful construction projects begin with thorough planning and clear communication.
                  Our design-build approach streamlines the process, ensuring that your project is completed on time,
                  within budget, and to your exact specifications.
                </p>
                <p className="text-gray-600">
                  From initial concept to final walkthrough, we handle all aspects of your new construction project with
                  the highest level of craftsmanship and attention to detail.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <Home className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Residential Construction</h3>
                    <p className="text-gray-500 mb-4">
                      Custom homes, multi-family residences, and residential developments built to the highest
                      standards.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <Building className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Commercial Construction</h3>
                    <p className="text-gray-500 mb-4">
                      Office buildings, retail spaces, and commercial developments designed for functionality and
                      appeal.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Design-Build Services</h3>
                    <p className="text-gray-500 mb-4">
                      Streamlined process with a single point of responsibility for design and construction phases.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <HardHat className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Project Management</h3>
                    <p className="text-gray-500 mb-4">
                      Comprehensive oversight of all aspects of your construction project from start to finish.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Our Process</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                The BuildRight Construction Process
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our streamlined construction process ensures your project is completed efficiently, with clear
                communication at every stage.
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
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p className="text-gray-500">
                      We meet to discuss your vision, requirements, budget, and timeline to understand your project
                      needs.
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
                    <h3 className="text-xl font-bold mb-2">Completion & Handover</h3>
                    <p className="text-gray-500">
                      Final walkthrough, quality inspection, and project handover with warranty information.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Featured Projects</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Our New Construction Portfolio</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Browse our portfolio of completed new construction projects showcasing our quality craftsmanship and
                attention to detail.
              </p>
            </div>

            <Tabs defaultValue="residential" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="residential">Residential</TabsTrigger>
                  <TabsTrigger value="commercial">Commercial</TabsTrigger>
                  <TabsTrigger value="multi-family">Multi-Family</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="residential" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Project 1 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Modern Farmhouse"
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
                        <Link href="/templates/buildright/projects/modern-farmhouse">View Project</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Contemporary Home"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Contemporary Home</h3>
                      <p className="text-gray-200">Modern design with clean lines and open spaces</p>
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
                      alt="Craftsman Style Home"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Craftsman Style Home</h3>
                      <p className="text-gray-200">Traditional design with modern amenities</p>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Commercial Project 1 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Office Building"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Downtown Office Complex</h3>
                      <p className="text-gray-200">Modern commercial office space</p>
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
                      alt="Retail Space"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Retail Plaza</h3>
                      <p className="text-gray-200">Multi-tenant retail development</p>
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

                  {/* Commercial Project 3 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Restaurant Building"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Riverfront Restaurant</h3>
                      <p className="text-gray-200">Custom restaurant with waterfront views</p>
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

              <TabsContent value="multi-family" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Multi-Family Project 1 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Townhomes"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Oakwood Townhomes</h3>
                      <p className="text-gray-200">Luxury townhome development</p>
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

                  {/* Multi-Family Project 2 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Apartment Complex"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Riverside Apartments</h3>
                      <p className="text-gray-200">Modern apartment complex with amenities</p>
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

                  {/* Multi-Family Project 3 */}
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Duplex Homes"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Parkview Duplexes</h3>
                      <p className="text-gray-200">Custom duplex development near city park</p>
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
                <Link href="/templates/buildright#projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Construction team at work"
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
              <div>
                <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Why Choose Us</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">The BuildRight Difference</h2>
                <p className="text-gray-600 mb-6">
                  When you choose BuildRight for your new construction project, you're partnering with a team dedicated
                  to excellence in every aspect of the building process.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Quality Craftsmanship</h3>
                      <p className="text-sm text-gray-500">
                        Our skilled craftsmen take pride in their work, ensuring every detail meets our high standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Transparent Communication</h3>
                      <p className="text-sm text-gray-500">
                        We keep you informed throughout the process with regular updates and clear explanations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">On-Time, On-Budget Delivery</h3>
                      <p className="text-sm text-gray-500">
                        Our efficient project management ensures your project is completed as scheduled and within
                        budget.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Energy-Efficient Construction</h3>
                      <p className="text-sm text-gray-500">
                        We incorporate sustainable building practices and energy-efficient systems in all our projects.
                      </p>
                      <Button asChild variant="link" className="p-0 h-auto text-yellow-600 hover:text-yellow-700">
                        <Link href="/templates/buildright/services/energy-efficiency">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Comprehensive Warranties</h3>
                      <p className="text-sm text-gray-500">
                        We stand behind our work with industry-leading warranties and responsive after-service support.
                      </p>
                      <Button asChild variant="link" className="p-0 h-auto text-yellow-600 hover:text-yellow-700">
                        <Link href="/templates/buildright/warranties">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <Button asChild className="mt-8 bg-yellow-600 hover:bg-yellow-700">
                  <Link href="/templates/buildright#contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">FAQ</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our new construction services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-lg font-bold">
                    How long does a typical new construction project take?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-500">
                    The timeline for new construction varies based on the size and complexity of the project. A typical
                    custom home might take 6-12 months from design to completion, while larger commercial projects can
                    take 12-24 months. During our initial consultation, we'll provide a detailed timeline specific to
                    your project.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-lg font-bold">
                    What is the first step in the new construction process?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-500">
                    The first step is an initial consultation where we discuss your vision, requirements, budget, and
                    timeline. This helps us understand your needs and expectations before moving forward with design and
                    planning. We'll also visit the construction site to assess any potential challenges or
                    opportunities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-lg font-bold">
                    Do I need to hire an architect separately?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-500">
                    Not necessarily. As a design-build firm, we can handle both the architectural design and
                    construction phases of your project. This integrated approach streamlines the process and ensures
                    better communication between the design and construction teams. However, if you already have an
                    architect or plans, we're happy to work with them as well.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-lg font-bold">
                    How do you handle changes during construction?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-500">
                    We understand that changes sometimes occur during construction. We manage these through a formal
                    change order process that documents the requested changes, associated costs, and any timeline
                    adjustments. This ensures transparency and clear communication throughout the project.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-lg font-bold">
                    What warranties do you offer on new construction?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-500">
                    We provide a comprehensive warranty package for all new construction projects. This typically
                    includes a 1-year workmanship warranty, a 2-year systems warranty (covering electrical, plumbing,
                    and HVAC), and a 10-year structural warranty. We also pass through manufacturers' warranties on
                    materials and products used in your project.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-yellow-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Project?</h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                  Contact us today to schedule a consultation and bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
                  <Link href="/templates/buildright#contact">
                    Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-yellow-600"
                >
                  <Link href="/templates/buildright#projects">View Our Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

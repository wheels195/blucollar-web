import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, MapPin, User, Home, Ruler, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectDetailPage() {
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
              <Link href="/templates/buildright#projects" className="text-gray-500 hover:text-yellow-600">
                Projects
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-yellow-600 font-medium">Modern Farmhouse</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Residential</Badge>
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">New Construction</Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Modern Farmhouse</h1>
              <p className="text-gray-500 md:text-xl max-w-3xl">
                A custom-built modern farmhouse that blends traditional aesthetics with contemporary design and
                functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 row-span-2">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Modern Farmhouse Exterior"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Modern Farmhouse Kitchen"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Modern Farmhouse Living Room"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Modern Farmhouse Bathroom"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Modern Farmhouse Bedroom"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                View Full Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <div className="prose max-w-none">
                  <p>
                    This custom modern farmhouse was designed and built for a family of four looking to combine the
                    charm of traditional farmhouse aesthetics with modern amenities and energy efficiency. The 3,200
                    square foot home features an open floor plan, high ceilings, and large windows that flood the space
                    with natural light.
                  </p>
                  <p className="mt-4">
                    The exterior showcases classic farmhouse elements like board and batten siding, a metal roof, and a
                    welcoming front porch, while the interior blends rustic elements with contemporary finishes. Custom
                    cabinetry, hardwood floors, and exposed beams create a warm, inviting atmosphere throughout.
                  </p>
                  <p className="mt-4">
                    Energy efficiency was a priority, so we incorporated high-performance insulation, energy-efficient
                    windows, and a smart home system that controls lighting, heating, and cooling to minimize energy
                    consumption.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4">Challenges & Solutions</h3>
                  <p>
                    One of the main challenges was integrating modern systems into the traditional farmhouse design
                    without compromising the aesthetic. We worked closely with the homeowners and our design team to
                    conceal modern elements like HVAC vents and smart home technology while maintaining the rustic
                    charm.
                  </p>
                  <p className="mt-4">
                    The sloped lot presented drainage challenges, which we addressed with a comprehensive grading and
                    drainage plan that included French drains and strategic landscaping to direct water away from the
                    foundation.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4">Results</h3>
                  <p>
                    The completed home perfectly balances traditional farmhouse charm with modern functionality. The
                    family moved in on schedule and has been enjoying their custom home for over a year now. The
                    energy-efficient features have resulted in utility bills that are approximately 30% lower than
                    similarly sized homes in the area.
                  </p>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                  <Tabs defaultValue="exterior" className="w-full">
                    <TabsList className="bg-gray-100 mb-6">
                      <TabsTrigger value="exterior">Exterior</TabsTrigger>
                      <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
                      <TabsTrigger value="living">Living Areas</TabsTrigger>
                      <TabsTrigger value="bedrooms">Bedrooms</TabsTrigger>
                      <TabsTrigger value="bathrooms">Bathrooms</TabsTrigger>
                    </TabsList>

                    <TabsContent value="exterior" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Front Exterior"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Back Exterior"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Front Porch"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Backyard"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="kitchen" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Kitchen Overview"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Kitchen Island"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Custom Cabinetry"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Dining Area"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="living" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Living Room"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Family Room"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Fireplace"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Home Office"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="bedrooms" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Master Bedroom"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Guest Bedroom"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Kids Bedroom"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Bedroom Closet"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="bathrooms" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Master Bathroom"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Guest Bathroom"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Powder Room"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Shower Detail"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
                  <Card className="bg-gray-50 p-8 rounded-lg shadow-sm">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <img
                          src="/placeholder.svg?height=60&width=60"
                          alt="Client"
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-bold">The Johnson Family</h3>
                          <p className="text-sm text-gray-500">Homeowners</p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Working with BuildRight on our dream home was an exceptional experience from start to finish.
                        Their attention to detail, craftsmanship, and communication exceeded our expectations. They
                        listened to our ideas and brought them to life while offering valuable suggestions that improved
                        the final result. We couldn't be happier with our modern farmhouse and would highly recommend
                        BuildRight to anyone looking to build a custom home."
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Home className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Project Type</p>
                        <p className="text-gray-500">Custom Home Build</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-500">Oakwood Estates, Builderville</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Ruler className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Size</p>
                        <p className="text-gray-500">3,200 sq. ft.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Completion Date</p>
                        <p className="text-gray-500">June 2023</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Duration</p>
                        <p className="text-gray-500">9 months</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <User className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Project Manager</p>
                        <p className="text-gray-500">John Smith</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4">Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>4 bedrooms, 3.5 bathrooms</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Open concept floor plan</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Custom kitchen with island</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Hardwood floors throughout</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Energy-efficient windows</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Smart home technology</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Covered front and back porches</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Two-car attached garage</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Custom fireplace</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Landscaped yard with irrigation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Interested in a Similar Project?</h3>
                  <p className="text-gray-600 mb-4">
                    Contact us to discuss your custom home project. We'd love to bring your vision to life.
                  </p>
                  <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                    <Link href="/templates/buildright#contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Related Project 1 */}
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

              {/* Related Project 2 */}
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Luxury Renovation"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">Luxury Renovation</h3>
                  <p className="text-gray-200">Complete home transformation with high-end finishes</p>
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

              {/* Related Project 3 */}
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-yellow-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Dream Project?</h2>
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
                  <Link href="/templates/buildright#projects">View More Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <div className="bg-gray-100 py-6">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between">
              <Button asChild variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                <Link href="#">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous Project
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                <Link href="#">
                  Next Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

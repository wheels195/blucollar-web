import Link from "next/link"
import { ArrowRight, Calendar, User, Clock, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
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
              <span className="text-yellow-600 font-medium">Blog</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Our Blog</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Construction Insights & Updates
              </h1>
              <p className="text-gray-500 md:text-xl max-w-3xl">
                Stay informed with the latest trends, tips, and news from the construction industry and our projects.
              </p>
            </div>

            <div className="max-w-md mx-auto w-full mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Badge variant="outline" className="hover:bg-yellow-50 cursor-pointer">
                All
              </Badge>
              <Badge variant="outline" className="hover:bg-yellow-50 cursor-pointer">
                Construction Tips
              </Badge>
              <Badge variant="outline" className="hover:bg-yellow-50 cursor-pointer">
                Home Building
              </Badge>
              <Badge variant="outline" className="hover:bg-yellow-50 cursor-pointer">
                Renovations
              </Badge>
              <Badge variant="outline" className="hover:bg-yellow-50 cursor-pointer">
                Industry News
              </Badge>
              <Badge variant="outline" className="hover:bg-yellow-50 cursor-pointer">
                Project Spotlights
              </Badge>
              <Badge variant="outline" className="hover:bg-yellow-50 cursor-pointer">
                Design Trends
              </Badge>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=500&width=800"
                  alt="Featured article image"
                  className="rounded-lg shadow-md object-cover w-full h-auto"
                />
              </div>
              <div className="space-y-4">
                <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Home Building</Badge>
                <h3 className="text-2xl font-bold">5 Essential Considerations Before Building Your Custom Home</h3>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>June 15, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>John Smith</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>8 min read</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Building a custom home is an exciting journey, but it requires careful planning and consideration. In
                  this article, we explore the five essential factors you should consider before breaking ground on your
                  dream home project. From budgeting and site selection to design considerations and choosing the right
                  contractor, these insights will help ensure your custom home building experience is smooth and
                  successful.
                </p>
                <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                  <Link href="/templates/buildright/blog/5-essential-considerations">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <Card className="overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Article image"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="mb-2">Construction Tips</Badge>
                  <h3 className="text-xl font-bold mb-2">Understanding Construction Contracts: What to Look For</h3>
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>May 28, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>6 min read</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Construction contracts can be complex documents filled with legal terminology. This guide breaks
                    down the key elements you should understand before signing on the dotted line.
                  </p>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t bg-gray-50">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Article 2 */}
              <Card className="overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Article image"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="mb-2">Design Trends</Badge>
                  <h3 className="text-xl font-bold mb-2">Top Kitchen Design Trends for 2023</h3>
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>May 15, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Kitchens continue to be the heart of the home. Discover the latest design trends that are making
                    waves in kitchen renovations and new home construction this year.
                  </p>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t bg-gray-50">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Article 3 */}
              <Card className="overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Article image"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="mb-2">Project Spotlights</Badge>
                  <h3 className="text-xl font-bold mb-2">Modern Farmhouse Project: From Concept to Completion</h3>
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>April 30, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>7 min read</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Follow the journey of our recent Modern Farmhouse project, from the initial design phase through
                    construction to the final walkthrough with the delighted homeowners.
                  </p>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t bg-gray-50">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Article 4 */}
              <Card className="overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Article image"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="mb-2">Renovations</Badge>
                  <h3 className="text-xl font-bold mb-2">Bathroom Renovation: Maximizing Small Spaces</h3>
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>April 18, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Small bathrooms don't have to feel cramped. Learn innovative design strategies and storage solutions
                    to make the most of limited bathroom space in your renovation project.
                  </p>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t bg-gray-50">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Article 5 */}
              <Card className="overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Article image"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="mb-2">Industry News</Badge>
                  <h3 className="text-xl font-bold mb-2">How Supply Chain Issues Are Affecting Construction in 2023</h3>
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>April 5, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>6 min read</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Supply chain disruptions continue to impact the construction industry. We examine the current state
                    of materials availability, pricing trends, and strategies for mitigating delays.
                  </p>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t bg-gray-50">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Article 6 */}
              <Card className="overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Article image"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="mb-2">Home Building</Badge>
                  <h3 className="text-xl font-bold mb-2">Energy-Efficient Home Building: The Ultimate Guide</h3>
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>March 22, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>9 min read</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Building an energy-efficient home not only reduces your carbon footprint but also saves money on
                    utility bills. This comprehensive guide covers insulation, HVAC, windows, and more.
                  </p>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t bg-gray-50">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="#">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                <Link href="#">
                  Load More Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Stay Updated</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-8">
                Get the latest construction tips, industry news, and project updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button className="bg-yellow-600 hover:bg-yellow-700">Subscribe</Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
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

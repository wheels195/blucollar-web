import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProServicesTemplate() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
        <div className="container flex h-16 items-center">
          <div className="mr-auto">
            <Link
              href="/templates"
              className="flex items-center text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Templates
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(30,64,175,0.15),transparent)]"></div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                    ProServices Template
                  </h1>
                  <p className="text-gray-300 text-lg md:text-xl max-w-[600px]">
                    A premium website template designed specifically for realtors, lawyers, doctors, consultants, and
                    other professional service providers.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium shadow-lg"
                  >
                    <Link href="/contact">
                      Get This Template <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/templates/professional-services-template.jpg"
                    alt="Professional Services Website Template"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Template Features</h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
                  Our ProServices template includes everything you need to showcase your professional services and
                  attract new clients.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-blue-900/50 p-2">
                      <Check className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Professional Design</h3>
                  </div>
                  <p className="text-gray-300">
                    Clean, modern design that conveys professionalism and builds trust with potential clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-blue-900/50 p-2">
                      <Check className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Service Showcase</h3>
                  </div>
                  <p className="text-gray-300">
                    Dedicated sections to highlight your services, expertise, and unique value proposition.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-blue-900/50 p-2">
                      <Check className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Testimonials</h3>
                  </div>
                  <p className="text-gray-300">
                    Showcase client testimonials and success stories to build credibility and trust.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-blue-900/50 p-2">
                      <Check className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Appointment Booking</h3>
                  </div>
                  <p className="text-gray-300">
                    Integrated appointment booking system to convert visitors into scheduled consultations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-blue-900/50 p-2">
                      <Check className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Team Profiles</h3>
                  </div>
                  <p className="text-gray-300">
                    Highlight your team's expertise, qualifications, and specialties with professional profiles.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-blue-900/50 p-2">
                      <Check className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Blog & Resources</h3>
                  </div>
                  <p className="text-gray-300">
                    Share your expertise through blog posts and resources to establish thought leadership.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                  Ready to Elevate Your Professional Image?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
                  Get started with our ProServices template today and showcase your expertise to potential clients.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium shadow-lg"
                >
                  <Link href="/contact">
                    Get This Template <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-gray-600 text-white hover:bg-gray-700"
                >
                  <Link href="/templates">View Other Templates</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="flex flex-col gap-3 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">BluCollar Web</span>
            </div>
            <nav className="flex gap-4 md:gap-6">
              <Link href="/about" className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link
                href="/templates"
                className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
              >
                Templates
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:justify-between">
            <p className="text-sm text-gray-500">© 2025 BluCollar Web. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

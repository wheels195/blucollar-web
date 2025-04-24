import Link from "next/link"
import { ArrowRight, Check, CreditCard, FileText, DollarSign, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FinancingPage() {
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
              <span className="text-yellow-600 font-medium">Financing Options</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg?height=800&width=1600"
              alt="Home construction financing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Financing Solutions</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Flexible Financing Options for Your Project
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                We offer a variety of financing solutions to help make your construction or renovation project a
                reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  <Link href="#options">
                    Explore Financing Options <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-yellow-800"
                >
                  <Link href="#calculator">Payment Calculator</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Financing Overview</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Making Your Project Affordable</h2>
                <p className="text-gray-600 mb-6">
                  At BuildRight, we understand that financing a construction project can be a significant investment.
                  That's why we've partnered with trusted financial institutions to offer a range of financing options
                  that make your project more affordable and manageable.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're building a new home, renovating your current space, or undertaking a commercial
                  construction project, our financing solutions can be tailored to meet your specific needs and budget.
                </p>
                <p className="text-gray-600">
                  Our team will work with you to explore the best financing options available and help you navigate the
                  application process, ensuring a smooth and stress-free experience.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Competitive Rates</h3>
                    <p className="text-gray-500">
                      Access competitive interest rates through our network of financial partners.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Simple Process</h3>
                    <p className="text-gray-500">
                      Streamlined application process with guidance from our financing specialists.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Flexible Terms</h3>
                    <p className="text-gray-500">
                      Choose from various term lengths and payment options to fit your budget.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <Percent className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Special Offers</h3>
                    <p className="text-gray-500">
                      Take advantage of promotional rates and limited-time financing offers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section id="options" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Available Options</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Financing Solutions for Every Need
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our range of financing options designed to meet the unique needs of different construction and
                renovation projects.
              </p>
            </div>

            <Tabs defaultValue="home" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="home">Home Construction</TabsTrigger>
                  <TabsTrigger value="renovation">Renovation</TabsTrigger>
                  <TabsTrigger value="commercial">Commercial</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="home" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Option 1 */}
                  <Card className="overflow-hidden">
                    <div className="p-1 bg-yellow-500 w-full"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Construction-to-Permanent Loan</h3>
                      <p className="text-gray-600 mb-6">
                        A single loan that covers both the construction phase and converts to a permanent mortgage once
                        construction is complete, requiring only one closing.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Interest Rates From</span>
                          <span className="font-semibold">5.25%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Term Length</span>
                          <span className="font-semibold">15-30 years</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Down Payment</span>
                          <span className="font-semibold">10-20%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Single closing process</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Interest-only payments during construction</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Converts to traditional mortgage</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                        <Link href="#contact">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Option 2 */}
                  <Card className="overflow-hidden">
                    <div className="p-1 bg-yellow-500 w-full"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Construction-Only Loan</h3>
                      <p className="text-gray-600 mb-6">
                        A short-term loan specifically for the construction phase, which you'll refinance into a
                        permanent mortgage after completion.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Interest Rates From</span>
                          <span className="font-semibold">4.75%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Term Length</span>
                          <span className="font-semibold">12-18 months</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Down Payment</span>
                          <span className="font-semibold">20-25%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Potentially lower initial interest rate</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Flexibility to shop for permanent financing</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Draw schedule based on construction milestones</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                        <Link href="#contact">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Option 3 */}
                  <Card className="overflow-hidden">
                    <div className="p-1 bg-yellow-500 w-full"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">FHA Construction Loan</h3>
                      <p className="text-gray-600 mb-6">
                        Government-backed loan with lower down payment requirements, ideal for first-time homebuilders
                        with limited funds for down payment.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Interest Rates From</span>
                          <span className="font-semibold">5.50%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Term Length</span>
                          <span className="font-semibold">15-30 years</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Down Payment</span>
                          <span className="font-semibold">3.5%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Lower down payment requirements</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">More flexible credit requirements</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Government-backed security</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                        <Link href="#contact">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="renovation" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Renovation Option 1 */}
                  <Card className="overflow-hidden">
                    <div className="p-1 bg-yellow-500 w-full"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Home Equity Line of Credit (HELOC)</h3>
                      <p className="text-gray-600 mb-6">
                        A revolving line of credit that uses your home's equity as collateral, providing flexibility for
                        ongoing renovation projects.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Interest Rates From</span>
                          <span className="font-semibold">Variable, Prime + 1%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Term Length</span>
                          <span className="font-semibold">10-30 years</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Loan-to-Value</span>
                          <span className="font-semibold">Up to 85%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Flexible draw period</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Pay interest only on what you use</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Potential tax benefits (consult tax advisor)</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                        <Link href="#contact">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Renovation Option 2 */}
                  <Card className="overflow-hidden">
                    <div className="p-1 bg-yellow-500 w-full"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">FHA 203(k) Renovation Loan</h3>
                      <p className="text-gray-600 mb-6">
                        Government-backed loan that combines home purchase and renovation costs into a single mortgage,
                        ideal for fixer-uppers.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Interest Rates From</span>
                          <span className="font-semibold">5.75%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Term Length</span>
                          <span className="font-semibold">15-30 years</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Down Payment</span>
                          <span className="font-semibold">3.5%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Finance both purchase and renovation</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Low down payment requirement</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Covers structural and cosmetic renovations</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                        <Link href="#contact">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Renovation Option 3 */}
                  <Card className="overflow-hidden">
                    <div className="p-1 bg-yellow-500 w-full"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Personal Loan</h3>
                      <p className="text-gray-600 mb-6">
                        Unsecured loan option for smaller renovation projects that doesn't require using your home as
                        collateral.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Interest Rates From</span>
                          <span className="font-semibold">7.99%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Term Length</span>
                          <span className="font-semibold">1-7 years</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Loan Amount</span>
                          <span className="font-semibold">Up to $50,000</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">No collateral required</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Quick approval process</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Fixed monthly payments</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                        <Link href="#contact">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="commercial" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Commercial Option 1 */}
                  <Card className="overflow-hidden">
                    <div className="p-1 bg-yellow-500 w-full"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">SBA 504 Loan</h3>
                      <p className="text-gray-600 mb-6">
                        Government-backed loan program for small businesses to finance commercial real estate and major
                        equipment purchases.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Interest Rates From</span>
                          <span className="font-semibold">Fixed, below market</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Term Length</span>
                          <span className="font-semibold">10-25 years</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Down Payment</span>
                          <span className="font-semibold">10%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Low down payment requirement</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Fixed interest rate</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Long-term financing</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                        <Link href="#contact">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Commercial Option 2 */}
                  <Card className="overflow-hidden">
                    <div className="p-1 bg-yellow-500 w-full"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Commercial Construction Loan</h3>
                      <p className="text-gray-600 mb-6">
                        Short-term financing for the construction phase of commercial buildings, with interest-only
                        payments during construction.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Interest Rates From</span>
                          <span className="font-semibold">Variable, Prime + 1-2%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Term Length</span>
                          <span className="font-semibold">12-36 months</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Loan-to-Cost</span>
                          <span className="font-semibold">Up to 80%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Interest-only during construction</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Draw schedule based on milestones</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Converts to permanent financing</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                        <Link href="#contact">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Commercial Option 3 */}
                  <Card className="overflow-hidden">
                    <div className="p-1 bg-yellow-500 w-full"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Equipment Financing</h3>
                      <p className="text-gray-600 mb-6">
                        Specialized financing for purchasing construction equipment, with the equipment itself serving
                        as collateral.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Interest Rates From</span>
                          <span className="font-semibold">4.99%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Term Length</span>
                          <span className="font-semibold">2-7 years</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Financing</span>
                          <span className="font-semibold">Up to 100%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Quick approval process</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Equipment serves as collateral</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span className="text-sm">Potential tax benefits</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                        <Link href="#contact">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Payment Calculator */}
        <section id="calculator" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Calculate Payments</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Estimate Your Monthly Payments</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Use our payment calculator to get an idea of what your monthly payments might be based on your loan
                amount, interest rate, and term length.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-1">
                      Loan Amount
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        name="loan-amount"
                        id="loan-amount"
                        className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                        placeholder="250000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-1">
                      Interest Rate
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        name="interest-rate"
                        id="interest-rate"
                        className="block w-full pr-12 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                        placeholder="5.25"
                        step="0.01"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="term-length" className="block text-sm font-medium text-gray-700 mb-1">
                      Term Length (Years)
                    </label>
                    <select
                      id="term-length"
                      name="term-length"
                      className="block w-full py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    >
                      <option value="15">15 Years</option>
                      <option value="20">20 Years</option>
                      <option value="30" selected>
                        30 Years
                      </option>
                    </select>
                  </div>

                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Calculate Payment</Button>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Payment Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                      <span className="text-gray-600">Principal & Interest</span>
                      <span className="text-xl font-bold">$1,380.51</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                      <span className="text-gray-600">Estimated Taxes</span>
                      <span className="text-lg">$250.00</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                      <span className="text-gray-600">Estimated Insurance</span>
                      <span className="text-lg">$100.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-gray-800 font-medium">Estimated Monthly Payment</span>
                      <span className="text-2xl font-bold text-yellow-600">$1,730.51</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      This is an estimate only. Actual payment amounts may vary based on additional factors. Contact us
                      for a detailed quote.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Get Started</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Ready to Explore Your Financing Options?
                </h2>
                <p className="text-gray-600 mb-6">
                  Our financing specialists are ready to help you navigate the various options available and find the
                  solution that best fits your needs and budget.
                </p>
                <p className="text-gray-600 mb-6">
                  Fill out the form, and one of our team members will contact you to discuss your project and financing
                  needs in detail.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100 text-yellow-600">
                        <FileText className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Documentation Assistance</h3>
                      <p className="mt-1 text-gray-500">
                        We'll help you gather and prepare all necessary documentation for your financing application.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100 text-yellow-600">
                        <DollarSign className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Rate Comparison</h3>
                      <p className="mt-1 text-gray-500">
                        We'll compare rates from multiple lenders to ensure you get the best possible terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-6">Contact a Financing Specialist</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                        required
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
                      name="email"
                      className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    >
                      <option value="">Select Project Type</option>
                      <option value="new-construction">New Home Construction</option>
                      <option value="renovation">Home Renovation</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Submit Request</Button>

                  <p className="text-xs text-gray-500 mt-4">
                    By submitting this form, you agree to our privacy policy and consent to be contacted regarding your
                    request.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  ArrowRight,
  CheckCircle,
  Hammer,
  Laptop,
  Wrench,
  Check,
  ChevronRight,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Award,
  Briefcase,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InvestorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 font-sans">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(30,64,175,0.15),transparent)]"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-800 shadow-xl shadow-blue-900/10 ring-1 ring-blue-900"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center rounded-full border border-blue-900 bg-blue-900/30 px-3 py-1 text-sm text-blue-400 w-fit">
                  <span>Investment Opportunity</span>
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                    BluCollar Web: <span className="text-blue-500">Websites for the Everyday</span> Businesses
                  </h1>
                  <p className="text-gray-300 text-lg md:text-xl max-w-[600px]">
                    A high-growth opportunity in the underserved market of blue-collar business web development.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#opportunity"
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-blue-600 transition-colors shadow-lg"
                  >
                    <span className="mr-2">Explore the Opportunity</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Trusted by 100+ businesses across the country</p>
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
                    alt="Modern website design on laptop with clean workspace"
                    className="w-full h-auto object-cover"
                    width={600}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">High Growth</p>
                      <p className="text-xs text-gray-400">Market Opportunity</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Profitable Model</p>
                      <p className="text-xs text-gray-400">Recurring Revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity Section */}
        <section id="opportunity" className="py-20 md:py-28 bg-gray-800 scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-blue-900 bg-blue-900/30 px-3 py-1 text-sm text-blue-400">
                <span>Market Opportunity</span>
              </div>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  A $15B Underserved Market
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
                  Blue-collar businesses are significantly underserved in the web development space, creating a massive
                  opportunity.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-2xl">5.4 Million</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Blue-collar businesses in the US alone, with only 60% having a professional web presence
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-2xl">$15 Billion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Total addressable market for blue-collar business web development and maintenance
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-2xl">18% CAGR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Projected annual growth rate for specialized web services in the blue-collar sector
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="py-20 md:py-28 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-blue-900 bg-blue-900/30 px-3 py-1 text-sm text-blue-400">
                <span>Our Solution</span>
              </div>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Specialized Web Development for Blue-Collar Businesses
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
                  We've created a scalable platform that delivers high-quality websites at affordable prices with
                  recurring revenue.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
              <div className="group relative flex flex-col items-center rounded-2xl bg-gray-700 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 rounded-full bg-blue-900/50 p-3 group-hover:bg-blue-600 transition-colors">
                  <Hammer className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white text-center">Contractors</h3>
                <p className="mt-2 text-center text-gray-300">
                  Custom websites for general contractors, remodelers, and specialty trades.
                </p>
                <Link href="/templates" className="mt-4 inline-flex items-center text-blue-400 text-sm font-medium">
                  View templates <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="group relative flex flex-col items-center rounded-2xl bg-gray-700 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 rounded-full bg-blue-900/50 p-3 group-hover:bg-blue-600 transition-colors">
                  <Wrench className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white text-center">Service Providers</h3>
                <p className="mt-2 text-center text-gray-300">
                  Professional sites for plumbers, electricians, HVAC, and other service businesses.
                </p>
                <Link href="/templates" className="mt-4 inline-flex items-center text-blue-400 text-sm font-medium">
                  View templates <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="group relative flex flex-col items-center rounded-2xl bg-gray-700 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 rounded-full bg-blue-900/50 p-3 group-hover:bg-blue-600 transition-colors">
                  <Laptop className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white text-center">Small Businesses</h3>
                <p className="mt-2 text-center text-gray-300">
                  Affordable websites for local shops, auto repair, landscaping, and more.
                </p>
                <Link href="/templates" className="mt-4 inline-flex items-center text-blue-400 text-sm font-medium">
                  View templates <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="group relative flex flex-col items-center rounded-2xl bg-gray-700 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 rounded-full bg-blue-900/50 p-3 group-hover:bg-blue-600 transition-colors">
                  <Briefcase className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white text-center whitespace-nowrap">Professional Services</h3>
                <p className="mt-2 text-center text-gray-300">
                  Sites for realtors, lawyers, doctors, consultants, and other professionals.
                </p>
                <Link href="/templates" className="mt-4 inline-flex items-center text-blue-400 text-sm font-medium">
                  View templates <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Business Model Section */}
        <section className="py-20 md:py-28 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-blue-900 bg-blue-900/30 px-3 py-1 text-sm text-blue-400">
                <span>Business Model</span>
              </div>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Dual Revenue Streams
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
                  Our business model combines upfront project fees with high-margin recurring revenue.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Badge className="bg-blue-600 text-white w-fit mb-2">One-Time Revenue</Badge>
                  <CardTitle className="text-white text-2xl">Website Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    <p className="text-gray-300">$799 - $1,099 per website</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-green-500" />
                    <p className="text-gray-300">60% profit margin</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <p className="text-gray-300">Scalable with templated approach</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-green-500" />
                    <p className="text-gray-300">Competitive pricing for blue-collar market</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Badge className="bg-green-600 text-white w-fit mb-2">Recurring Revenue</Badge>
                  <CardTitle className="text-white text-2xl">Maintenance & Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    <p className="text-gray-300">$49 - $199 monthly subscription</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-green-500" />
                    <p className="text-gray-300">75% profit margin</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <p className="text-gray-300">70% customer conversion to subscription</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-green-500" />
                    <p className="text-gray-300">High retention rate (85% annual)</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 max-w-5xl mx-auto">
              <Card className="bg-blue-900/30 border-blue-900">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Projected Annual Revenue</h3>
                      <p className="text-gray-300">Based on our current growth trajectory and market penetration</p>
                    </div>
                    <div className="text-right">
                      <p className="text-5xl font-bold text-white">$2.4M</p>
                      <p className="text-gray-300">Year 3 projection</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Competitive Advantage Section */}
        <section className="py-20 md:py-28 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-blue-900 bg-blue-900/30 px-3 py-1 text-sm text-blue-400">
                <span>Competitive Advantage</span>
              </div>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">Why We Win</h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
                  Our specialized focus and efficient delivery model create significant competitive advantages.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-3 rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-900/30 p-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Industry-Specific Templates</h3>
                </div>
                <p className="text-gray-300 pl-10">
                  Pre-built templates designed specifically for blue-collar businesses, reducing development time by
                  60%.
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-900/30 p-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Affordable Price Point</h3>
                </div>
                <p className="text-gray-300 pl-10">
                  Pricing tailored to blue-collar business budgets while maintaining healthy profit margins.
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-900/30 p-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Recurring Revenue Model</h3>
                </div>
                <p className="text-gray-300 pl-10">
                  Subscription-based maintenance plans create predictable, high-margin recurring revenue.
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-900/30 p-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Scalable Operations</h3>
                </div>
                <p className="text-gray-300 pl-10">
                  Streamlined processes and templated solutions allow for rapid scaling with minimal overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Traction & Growth Section */}
        <section className="py-20 md:py-28 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-blue-900 bg-blue-900/30 px-3 py-1 text-sm text-blue-400">
                <span>Traction & Growth</span>
              </div>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Our Growth Trajectory
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
                  We've demonstrated strong market validation and are positioned for rapid expansion.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-8">
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-xl">Current Traction</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-blue-400" />
                      <p className="text-gray-300">
                        <span className="text-white font-bold">100+</span> active clients
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-blue-400" />
                      <p className="text-gray-300">
                        <span className="text-white font-bold">$350K</span> annual recurring revenue
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-blue-400" />
                      <p className="text-gray-300">
                        <span className="text-white font-bold">85%</span> year-over-year growth
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-blue-400" />
                      <p className="text-gray-300">
                        <span className="text-white font-bold">4.8/5</span> average client satisfaction
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-xl">Investment Opportunity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <p className="text-gray-300">
                        <span className="text-white font-bold">$1.5M</span> funding round
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-green-500" />
                      <p className="text-gray-300">
                        Expansion to <span className="text-white font-bold">5 new markets</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-green-500" />
                      <p className="text-gray-300">
                        Grow team from <span className="text-white font-bold">12 to 30</span> employees
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <BarChart3 className="h-5 w-5 text-green-500" />
                      <p className="text-gray-300">
                        <span className="text-white font-bold">5x revenue growth</span> over 3 years
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                    alt="Business growth chart on laptop screen"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">3-Year Growth Projection</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-3xl font-bold text-white">$2.4M</p>
                        <p className="text-sm text-gray-300">Annual Revenue</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">500+</p>
                        <p className="text-sm text-gray-300">Active Clients</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">75%</p>
                        <p className="text-sm text-gray-300">Gross Margin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-28 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-blue-900 bg-blue-900/30 px-3 py-1 text-sm text-blue-400">
                <span>Our Team</span>
              </div>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Experienced Leadership
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
                  Our team combines deep industry knowledge with technical expertise.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                      alt="CEO portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">John Smith</h3>
                  <p className="text-blue-400 mb-3">CEO & Founder</p>
                  <p className="text-gray-300 text-sm">
                    15+ years experience in web development and digital marketing for small businesses.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                      alt="CTO portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Sarah Johnson</h3>
                  <p className="text-blue-400 mb-3">CTO</p>
                  <p className="text-gray-300 text-sm">
                    Former tech lead at a major web agency with expertise in scalable web platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
                      alt="COO portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Michael Chen</h3>
                  <p className="text-blue-400 mb-3">COO</p>
                  <p className="text-gray-300 text-sm">
                    10+ years in operations and scaling service-based businesses in the digital sector.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment Opportunity Section */}
        <section className="py-20 md:py-28 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-blue-900 bg-blue-900/30 px-3 py-1 text-sm text-blue-400">
                <span>Investment Opportunity</span>
              </div>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Join Our Growth Journey
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
                  We're seeking $1.5M to accelerate our expansion and capture market share.
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="bg-blue-900/30 border-blue-900">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Use of Funds</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-blue-600 p-1 mt-1">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-white">Market Expansion</p>
                            <p className="text-gray-300 text-sm">Enter 5 new geographic markets</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-blue-600 p-1 mt-1">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-white">Team Growth</p>
                            <p className="text-gray-300 text-sm">Expand development and sales teams</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-blue-600 p-1 mt-1">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-white">Technology Development</p>
                            <p className="text-gray-300 text-sm">Enhance platform capabilities and automation</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-blue-600 p-1 mt-1">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-white">Marketing & Acquisition</p>
                            <p className="text-gray-300 text-sm">Scale customer acquisition channels</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Investment Terms</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <DollarSign className="h-5 w-5 text-blue-400" />
                          <p className="text-gray-300">
                            <span className="text-white font-bold">$1.5M</span> raise
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-blue-400" />
                          <p className="text-gray-300">
                            <span className="text-white font-bold">20%</span> equity
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <BarChart3 className="h-5 w-5 text-blue-400" />
                          <p className="text-gray-300">
                            <span className="text-white font-bold">$7.5M</span> pre-money valuation
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <TrendingUp className="h-5 w-5 text-blue-400" />
                          <p className="text-gray-300">
                            <span className="text-white font-bold">3-5x</span> projected return in 4 years
                          </p>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-blue-600 transition-colors shadow-lg"
                        >
                          <span className="mr-2">Request Investor Deck</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(30,64,175,0.15),transparent)]"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Ready to Discuss This Opportunity?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
                  Contact us to schedule a meeting and receive our detailed investor deck.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-blue-600 transition-colors shadow-lg"
                >
                  <span className="mr-2">Contact Us Today</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

import Link from "next/link"
import { ArrowRight, Briefcase, MapPin, Calendar, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CareersPage() {
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
              <span className="text-yellow-600 font-medium">Careers</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg?height=800&width=1600"
              alt="Construction team working together"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Join Our Team</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Build Your Career With BuildRight
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Join our team of skilled professionals and help us create exceptional spaces for our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  <Link href="#openings">
                    View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-yellow-800"
                >
                  <Link href="#benefits">Employee Benefits</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Why BuildRight</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Why Work With Us</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At BuildRight, we believe our team is our greatest asset. We're committed to creating a supportive,
                collaborative environment where skilled professionals can thrive and grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
                      className="h-8 w-8 text-yellow-600"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
                  <p className="text-gray-500">
                    We invest in our team's development through ongoing training, certification support, and
                    opportunities for advancement within the company.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
                      className="h-8 w-8 text-yellow-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Collaborative Culture</h3>
                  <p className="text-gray-500">
                    We foster a team-oriented environment where ideas are valued, collaboration is encouraged, and
                    everyone contributes to our success.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 transition-all hover:border-yellow-500 hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
                      className="h-8 w-8 text-yellow-600"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Diverse Projects</h3>
                  <p className="text-gray-500">
                    Work on a variety of challenging and rewarding projects, from custom homes to commercial buildings,
                    that showcase your skills and craftsmanship.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Employee Benefits</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">We Take Care of Our Team</h2>
                <p className="text-gray-600 mb-6">
                  At BuildRight, we believe in rewarding our team members with competitive compensation and
                  comprehensive benefits that support their well-being and work-life balance.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Competitive Compensation</h3>
                      <p className="text-sm text-gray-500">
                        Salary packages that recognize your skills, experience, and contributions to our success.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Health & Wellness</h3>
                      <p className="text-sm text-gray-500">
                        Comprehensive medical, dental, and vision insurance for you and your family.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Retirement Planning</h3>
                      <p className="text-sm text-gray-500">
                        401(k) retirement plan with company matching to help you build a secure future.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Paid Time Off</h3>
                      <p className="text-sm text-gray-500">
                        Generous vacation, sick leave, and holiday policies to ensure you have time to rest and
                        recharge.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Professional Development</h3>
                      <p className="text-sm text-gray-500">
                        Tuition assistance, certification support, and ongoing training opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Work-Life Balance</h3>
                      <p className="text-sm text-gray-500">
                        Flexible scheduling options and family-friendly policies to support your personal life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Happy construction team"
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">Join Our Team</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Current Job Openings</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our current opportunities and find the perfect role to match your skills and career goals.
              </p>
            </div>

            <Tabs defaultValue="construction" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="construction">Construction</TabsTrigger>
                  <TabsTrigger value="office">Office & Administration</TabsTrigger>
                  <TabsTrigger value="design">Design & Engineering</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="construction" className="mt-0">
                <div className="space-y-6">
                  {/* Job 1 */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">Project Manager</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" /> Full-Time
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Builderville, USA
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> Posted: June 1, 2023
                            </Badge>
                          </div>
                        </div>
                        <Button asChild className="mt-4 md:mt-0 bg-yellow-600 hover:bg-yellow-700">
                          <Link href="#">Apply Now</Link>
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        We're seeking an experienced Project Manager to oversee residential and commercial construction
                        projects from inception to completion. The ideal candidate will have a proven track record of
                        delivering projects on time and within budget while maintaining the highest quality standards.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>
                            Oversee all aspects of construction projects, including scheduling, budgeting, and quality
                            control
                          </li>
                          <li>Coordinate with subcontractors, suppliers, and clients to ensure project success</li>
                          <li>Manage project documentation, permits, and compliance requirements</li>
                          <li>Identify and resolve issues that arise during construction</li>
                        </ul>
                      </div>
                      <div className="space-y-2 mt-4">
                        <h4 className="font-semibold">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>5+ years of experience in construction project management</li>
                          <li>Bachelor's degree in Construction Management, Engineering, or related field</li>
                          <li>Strong leadership, communication, and problem-solving skills</li>
                          <li>Proficiency in construction management software</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button
                        asChild
                        variant="outline"
                        className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                      >
                        <Link href="#">View Full Job Description</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Job 2 */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">Site Supervisor</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" /> Full-Time
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Builderville, USA
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> Posted: May 15, 2023
                            </Badge>
                          </div>
                        </div>
                        <Button asChild className="mt-4 md:mt-0 bg-yellow-600 hover:bg-yellow-700">
                          <Link href="#">Apply Now</Link>
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        We're looking for an experienced Site Supervisor to oversee daily construction activities,
                        ensure safety protocols are followed, and maintain quality standards on our job sites.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Supervise construction crews and subcontractors on-site</li>
                          <li>Ensure compliance with safety regulations and company policies</li>
                          <li>Monitor project progress and report to Project Managers</li>
                          <li>Inspect work quality and address any deficiencies</li>
                        </ul>
                      </div>
                      <div className="space-y-2 mt-4">
                        <h4 className="font-semibold">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>3+ years of experience in construction supervision</li>
                          <li>Strong knowledge of construction methods and building codes</li>
                          <li>OSHA certification and safety training</li>
                          <li>Excellent leadership and communication skills</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button
                        asChild
                        variant="outline"
                        className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                      >
                        <Link href="#">View Full Job Description</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Job 3 */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">Skilled Carpenter</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" /> Full-Time
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Builderville, USA
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> Posted: May 10, 2023
                            </Badge>
                          </div>
                        </div>
                        <Button asChild className="mt-4 md:mt-0 bg-yellow-600 hover:bg-yellow-700">
                          <Link href="#">Apply Now</Link>
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Join our team as a Skilled Carpenter to work on custom residential and commercial projects.
                        We're looking for craftsmen who take pride in their work and deliver exceptional quality.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Perform rough and finish carpentry work on various construction projects</li>
                          <li>Read and interpret blueprints and construction documents</li>
                          <li>Install framing, trim, doors, windows, and cabinetry</li>
                          <li>Maintain tools and equipment in good working condition</li>
                        </ul>
                      </div>
                      <div className="space-y-2 mt-4">
                        <h4 className="font-semibold">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>3+ years of experience in residential or commercial carpentry</li>
                          <li>Knowledge of building codes and construction standards</li>
                          <li>Ability to work independently and as part of a team</li>
                          <li>Own reliable transportation and basic tools</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button
                        asChild
                        variant="outline"
                        className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                      >
                        <Link href="#">View Full Job Description</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="office" className="mt-0">
                <div className="space-y-6">
                  {/* Office Job 1 */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">Office Manager</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" /> Full-Time
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Builderville, USA
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> Posted: May 20, 2023
                            </Badge>
                          </div>
                        </div>
                        <Button asChild className="mt-4 md:mt-0 bg-yellow-600 hover:bg-yellow-700">
                          <Link href="#">Apply Now</Link>
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        We're seeking an organized and efficient Office Manager to oversee administrative operations and
                        ensure the smooth functioning of our office environment.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Manage office operations, including supplies, equipment, and facilities</li>
                          <li>Coordinate administrative support for project teams</li>
                          <li>Oversee filing systems and document management</li>
                          <li>Assist with HR functions and employee onboarding</li>
                        </ul>
                      </div>
                      <div className="space-y-2 mt-4">
                        <h4 className="font-semibold">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>3+ years of experience in office management</li>
                          <li>Strong organizational and multitasking abilities</li>
                          <li>Proficiency in Microsoft Office and administrative software</li>
                          <li>Excellent communication and interpersonal skills</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button
                        asChild
                        variant="outline"
                        className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                      >
                        <Link href="#">View Full Job Description</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Office Job 2 */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">Accounting Specialist</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" /> Full-Time
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Builderville, USA
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> Posted: May 5, 2023
                            </Badge>
                          </div>
                        </div>
                        <Button asChild className="mt-4 md:mt-0 bg-yellow-600 hover:bg-yellow-700">
                          <Link href="#">Apply Now</Link>
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        We're looking for an Accounting Specialist to join our finance team and assist with accounts
                        payable, accounts receivable, and project cost tracking.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Process invoices, payments, and expense reports</li>
                          <li>Maintain accurate financial records and documentation</li>
                          <li>Assist with monthly financial reporting and reconciliations</li>
                          <li>Track project costs and prepare job cost reports</li>
                        </ul>
                      </div>
                      <div className="space-y-2 mt-4">
                        <h4 className="font-semibold">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>2+ years of accounting experience, preferably in construction</li>
                          <li>Associate's or Bachelor's degree in Accounting or related field</li>
                          <li>Proficiency in accounting software and Microsoft Excel</li>
                          <li>Strong attention to detail and analytical skills</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button
                        asChild
                        variant="outline"
                        className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                      >
                        <Link href="#">View Full Job Description</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-0">
                <div className="space-y-6">
                  {/* Design Job 1 */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">Architectural Designer</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" /> Full-Time
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Builderville, USA
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> Posted: June 5, 2023
                            </Badge>
                          </div>
                        </div>
                        <Button asChild className="mt-4 md:mt-0 bg-yellow-600 hover:bg-yellow-700">
                          <Link href="#">Apply Now</Link>
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Join our design team as an Architectural Designer to create innovative and functional designs
                        for residential and commercial construction projects.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Develop architectural designs and construction documents</li>
                          <li>Collaborate with clients to understand their needs and preferences</li>
                          <li>Coordinate with engineering consultants and construction teams</li>
                          <li>Ensure designs comply with building codes and regulations</li>
                        </ul>
                      </div>
                      <div className="space-y-2 mt-4">
                        <h4 className="font-semibold">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Bachelor's or Master's degree in Architecture or related field</li>
                          <li>3+ years of experience in architectural design</li>
                          <li>Proficiency in AutoCAD, Revit, and 3D modeling software</li>
                          <li>Strong design portfolio demonstrating creativity and technical skills</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button
                        asChild
                        variant="outline"
                        className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                      >
                        <Link href="#">View Full Job Description</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Design Job 2 */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">Interior Designer</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" /> Full-Time
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Builderville, USA
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> Posted: May 25, 2023
                            </Badge>
                          </div>
                        </div>
                        <Button asChild className="mt-4 md:mt-0 bg-yellow-600 hover:bg-yellow-700">
                          <Link href="#">Apply Now</Link>
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        We're seeking a talented Interior Designer to create beautiful, functional interior spaces for
                        our residential and commercial projects.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Develop interior design concepts and space planning</li>
                          <li>Select finishes, materials, fixtures, and furnishings</li>
                          <li>Create presentation materials and design boards</li>
                          <li>Collaborate with clients and construction teams</li>
                        </ul>
                      </div>
                      <div className="space-y-2 mt-4">
                        <h4 className="font-semibold">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Bachelor's degree in Interior Design or related field</li>
                          <li>3+ years of experience in residential and/or commercial interior design</li>
                          <li>Proficiency in design software (AutoCAD, SketchUp, Adobe Creative Suite)</li>
                          <li>Strong portfolio demonstrating design skills and aesthetic sensibility</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-gray-50">
                      <Button
                        asChild
                        variant="outline"
                        className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                      >
                        <Link href="#">View Full Job Description</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Don't see the perfect position? We're always looking for talented individuals to join our team.
              </p>
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                <Link href="#">
                  Submit General Application <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 mb-4">How to Apply</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Our Application Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We've designed a straightforward application process to help you join our team quickly and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute top-0 left-0 -mt-2 -ml-2 bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <Card className="pt-8 h-full">
                  <CardContent className="text-center p-6">
                    <div className="rounded-full bg-yellow-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
                        className="h-8 w-8 text-yellow-600"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Apply Online</h3>
                    <p className="text-gray-500">
                      Submit your application through our online portal, including your resume and cover letter.
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
                        className="h-8 w-8 text-yellow-600"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Initial Review</h3>
                    <p className="text-gray-500">
                      Our HR team will review your application and reach out if your qualifications match our needs.
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
                        className="h-8 w-8 text-yellow-600"
                      >
                        <path d="M21 2H3v16h5v4l4-4h5l4-4V2z"></path>
                        <path d="M13 8h2"></path>
                        <path d="M9 12h6"></path>
                        <path d="M9 8h2"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Interview Process</h3>
                    <p className="text-gray-500">
                      Selected candidates will participate in interviews with hiring managers and team members.
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
                        className="h-8 w-8 text-yellow-600"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <polyline points="17 11 19 13 23 9"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Offer & Onboarding</h3>
                    <p className="text-gray-500">
                      Successful candidates will receive an offer and begin our comprehensive onboarding process.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-yellow-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team Today</h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                  Take the next step in your career and become part of the BuildRight family.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
                  <Link href="#openings">
                    View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-yellow-600"
                >
                  <Link href="/templates/buildright">Learn About Our Company</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

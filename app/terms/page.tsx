import type { Metadata } from "next"
import Link from "next/link"
import { NavigationButtons } from "@/components/navigation-buttons"
import { SiteFooter } from "@/components/site-footer"
import { Laptop } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | BluCollar Web",
  description:
    "Terms of Service for BluCollar Web - Understand the terms and conditions for using our web design services.",
  keywords: "terms of service, terms and conditions, web design, blue collar businesses",
}

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Laptop className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold text-white">BluCollar Web</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium text-gray-400 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="font-medium text-gray-400 hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/templates" className="font-medium text-gray-400 hover:text-blue-400 transition-colors">
              Templates
            </Link>
            <Link href="/pricing" className="font-medium text-gray-400 hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="font-medium text-gray-400 hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="ml-auto">
            <NavigationButtons />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Terms of Service
                </h1>
                <p className="text-gray-300">Last Updated: July 1, 2023</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p>
                Please read these Terms of Service ("Terms") carefully before using the BluCollar Web website or
                services.
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website and services, you agree to be bound by these Terms. If you do not
                agree to all the terms and conditions, you may not access or use our services.
              </p>

              <h2>2. Services</h2>
              <p>
                BluCollar Web provides web design, development, and related services primarily for blue collar
                businesses. Our services may include:
              </p>
              <ul>
                <li>Website design and development</li>
                <li>Website maintenance and updates</li>
                <li>Search engine optimization</li>
                <li>Content creation</li>
                <li>Hosting services</li>
                <li>Domain registration</li>
              </ul>

              <h2>3. Client Responsibilities</h2>
              <p>As a client, you are responsible for:</p>
              <ul>
                <li>Providing accurate and timely information required for your project</li>
                <li>Reviewing and approving work at designated project milestones</li>
                <li>Ensuring you have the rights to use any content you provide to us</li>
                <li>Making payments according to the agreed-upon schedule</li>
                <li>Maintaining your website after the project is complete (unless you have a maintenance plan)</li>
              </ul>

              <h2>4. Payment Terms</h2>
              <p>Payment terms are as follows:</p>
              <ul>
                <li>A non-refundable deposit of 50% is required to begin work</li>
                <li>The remaining balance is due upon project completion, before the website goes live</li>
                <li>For maintenance plans, payment is due monthly or annually, depending on the selected plan</li>
                <li>Late payments may incur additional fees</li>
              </ul>

              <h2>5. Project Timeline and Delivery</h2>
              <p>
                Project timelines will be established at the beginning of each project. Delays caused by the client
                (such as delayed feedback or content) may extend the project timeline. We are not responsible for delays
                outside our control.
              </p>

              <h2>6. Revisions and Changes</h2>
              <p>
                Our packages include a specified number of revisions. Additional revisions or changes to the project
                scope may incur additional charges. Major changes to the project scope after work has begun may require
                a new quote.
              </p>

              <h2>7. Intellectual Property</h2>
              <p>
                Upon full payment, you will own the rights to the custom elements of your website. However, third-party
                elements (such as stock photos, plugins, or themes) are subject to their respective licenses.
              </p>
              <p>
                We retain the right to display your website in our portfolio unless otherwise agreed upon in writing.
              </p>

              <h2>8. Termination</h2>
              <p>
                Either party may terminate the service agreement with written notice. If you terminate the agreement:
              </p>
              <ul>
                <li>Before work begins: Your deposit may be refunded, minus any administrative fees</li>
                <li>
                  After work begins: You are responsible for paying for all work completed up to the termination date
                </li>
              </ul>

              <h2>9. Limitation of Liability</h2>
              <p>
                We are not liable for any indirect, incidental, special, consequential, or punitive damages resulting
                from your use of our services. Our total liability shall not exceed the amount paid by you for the
                services.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify clients of any significant
                changes. Your continued use of our services after such modifications constitutes your acceptance of the
                updated Terms.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of New York,
                without regard to its conflict of law provisions.
              </p>

              <h2>12. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                Email: legal@blucollarweb.com
                <br />
                Phone: (555) 123-4567
                <br />
                Address: 123 Web Design Street, Suite 101, New York, NY 10001
              </p>

              <div className="mt-8">
                <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                  Back to Contact Page
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

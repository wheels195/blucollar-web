import type { Metadata } from "next"
import Link from "next/link"
import { NavigationButtons } from "@/components/navigation-buttons"
import { SiteFooter } from "@/components/site-footer"
import { Laptop } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | BluCollar Web",
  description: "Privacy Policy for BluCollar Web - Learn how we collect, use, and protect your personal information.",
  keywords: "privacy policy, data protection, web design, blue collar businesses",
}

export default function PrivacyPolicyPage() {
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
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">Privacy Policy</h1>
                <p className="text-gray-300">Last Updated: July 1, 2023</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p>
                At BluCollar Web, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Fill out forms on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a quote</li>
                <li>Contact us via email, phone, or social media</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <p>The personal information we collect may include:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name</li>
                <li>Website URL</li>
                <li>Messages or comments you send us</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing, maintaining, and improving our services</li>
                <li>Responding to your inquiries and fulfilling your requests</li>
                <li>Sending administrative information, such as updates or changes to our terms</li>
                <li>Sending marketing communications, if you have opted in</li>
                <li>Personalizing your experience on our website</li>
                <li>Analyzing usage patterns to improve our website and services</li>
              </ul>

              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. Cookies are files with small amounts of data that may include an anonymous unique
                identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                We may use third-party services such as Google Analytics to monitor and analyze the use of our website.
                These third parties may use cookies and other tracking technologies to collect information about your
                use of our website.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal
                information. However, please be aware that no method of transmission over the Internet or method of
                electronic storage is 100% secure.
              </p>

              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul>
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>
                Email: privacy@blucollarweb.com
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

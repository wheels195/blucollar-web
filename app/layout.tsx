import type React from "react"
import "./globals.css"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { StickyContactCTA } from "@/components/sticky-contact-cta"
import { ClientAnalytics } from "@/components/client-analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata = {
  title: "BluCollar Web | Websites for the Everyday Businesses",
  description:
    "We create modern, minimal, and high-performance websites that elevate your brand and drive results. Professional web design and development services for everyday businesses.",
  generator: 'v0.dev',
  metadataBase: new URL('https://blucollar-web.vercel.app'),
  openGraph: {
    title: 'BluCollar Web | Websites for the Everyday Businesses',
    description: 'We create modern, minimal, and high-performance websites that elevate your brand and drive results.',
    url: 'https://blucollar-web.vercel.app',
    siteName: 'BluCollar Web',
    images: [
      {
        url: '/images/spider-web-logo.png',
        width: 1200,
        height: 630,
        alt: 'BluCollar Web - Network Visualization Hero',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BluCollar Web | Websites for the Everyday Businesses',
    description: 'We create modern, minimal, and high-performance websites that elevate your brand and drive results.',
    images: ['/images/spider-web-logo.png'],
    creator: '@blucollarweb',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "BluCollar Web"
  },
  formatDetection: {
    telephone: true
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <StickyContactCTA />
          <ClientAnalytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

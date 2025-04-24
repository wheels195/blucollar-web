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
  title: "Modern Web Design Agency | High-Performance Websites",
  description:
    "We create sleek, high-performance websites with modern animations, clean design, and exceptional user experience for startups and established businesses.",
  generator: 'v0.dev',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Modern Web Design Agency"
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

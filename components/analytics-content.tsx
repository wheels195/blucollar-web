"use client"

import { Suspense, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function AnalyticsContentInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    try {
      // This is where you would normally initialize and track page views
      // with your analytics provider (Google Analytics, Plausible, etc.)
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

      // Example tracking call (replace with your actual analytics code)
      console.log(`Page view tracked: ${url}`)
    } catch (error) {
      // Silently handle any errors that might occur during analytics
      console.error('Analytics error:', error)
    }
  }, [pathname, searchParams])

  return null
}

export function AnalyticsContent() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContentInner />
    </Suspense>
  )
} 
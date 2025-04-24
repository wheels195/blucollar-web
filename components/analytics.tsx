"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would normally initialize and track page views
    // with your analytics provider (Google Analytics, Plausible, etc.)
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // Example tracking call (replace with your actual analytics code)
    console.log(`Page view tracked: ${url}`)
  }, [pathname, searchParams])

  return null
}

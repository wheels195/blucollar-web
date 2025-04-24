"use client"

import { Suspense } from "react"
import { usePathname } from "next/navigation"
import { AnalyticsContent } from "./analytics-content"

export function Analytics() {
  const pathname = usePathname()
  const is404 = pathname?.includes('not-found') || pathname === '/404' || pathname?.includes('(error)')

  if (is404) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  )
}

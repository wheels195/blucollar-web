"use client"

import { Suspense } from "react"
import { Analytics } from "./analytics"

export function ClientAnalytics() {
  return (
    <Suspense fallback={null}>
      <Analytics />
    </Suspense>
  )
} 
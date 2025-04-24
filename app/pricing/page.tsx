"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PricingPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page with pricing section parameter
    router.push("/?section=pricing")
  }, [router])

  return null
}

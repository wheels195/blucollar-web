"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page with about section parameter
    router.push("/?section=about")
  }, [router])

  return null
}

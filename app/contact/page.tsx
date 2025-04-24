"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page with contact section parameter
    router.push("/?section=contact")
  }, [router])

  return null
}

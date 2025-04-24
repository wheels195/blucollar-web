"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Suspense } from "react"

function TemplatesContent() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page with templates section parameter
    router.push("/?section=templates")
  }, [router])

  return null
}

export default function TemplatesPage() {
  return (
    <Suspense fallback={null}>
      <TemplatesContent />
    </Suspense>
  )
}

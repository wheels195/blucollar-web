"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

function TemplatesContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Redirect to home page with templates section parameter
    router.push("/?section=templates")
  }, [router])

  return null
}

export default function TemplatesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TemplatesContent />
    </Suspense>
  )
}

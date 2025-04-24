"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

export function NavigationButtons() {
  const router = useRouter()

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-white/70 text-gray-400 hover:text-white hover:border-gray-600"
        onClick={() => router.back()}
        aria-label="Go back"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-white/70 text-gray-400 hover:text-white hover:border-gray-600"
        aria-label="Go to home page"
        asChild
      >
        <Link href="/">
          <Home className="h-5 w-5" />
        </Link>
      </Button>
    </div>
  )
}

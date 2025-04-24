'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-lg text-muted-foreground mb-8">
        We apologize for the inconvenience. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-200"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-200"
        >
          Return Home
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  )
} 
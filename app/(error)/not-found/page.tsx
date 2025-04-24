import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-200"
      >
        Return Home
        <ArrowRight size={18} className="ml-2" />
      </Link>
    </div>
  )
} 
'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function SearchParamsContent() {
  // This component is only rendered on the client side
  const searchParams = useSearchParams()
  
  useEffect(() => {
    // Client-side only code
    if (searchParams) {
      // You can add any client-side logic here if needed
    }
  }, [searchParams])

  return null
} 
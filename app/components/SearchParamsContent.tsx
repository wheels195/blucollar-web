'use client'

import { useSearchParams } from 'next/navigation'

export default function SearchParamsContent() {
  const searchParams = useSearchParams()
  return null // We're not actually using the searchParams, so return null
} 
"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function BookDemo() {
  const router = useRouter()
  useEffect(() => {
    // forward users to the contact/send-query page
    router.push('/contact')
  }, [router])

  return (
    <div style={{padding:80, textAlign:'center'}}>
      <h2>Redirecting to contact…</h2>
      <p>If you are not redirected automatically, <Link href="/contact">click here</Link>.</p>
    </div>
  )
}

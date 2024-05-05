'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFoundComponent () {
  const path = usePathname()

  return (
    <main className='container text-center'>
      <h1>{`"${path}"`} Not Found 📖</h1>
      <h2 className='text-3xl'>There was a problem.</h2>
      <p className='text-lg'>The page you are looking for does not exist.</p>
      <p>Go back to the <Link href='/quizz'>Dashboard</Link></p>
    </main>
  )
}

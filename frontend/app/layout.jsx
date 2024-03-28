import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import CustomNavbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Digitla Hub',
  description: 'Le hub digital de MyDigitalSchool'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='fr' className='dark'>
      <body className={inter.className}>
        <Providers>
          <CustomNavbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}

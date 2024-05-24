import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { CustomNavbar } from '../components/Navbar'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Digital Hub',
  description: 'Le hub digital de MyDigitalSchool'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='fr' className='dark'>
      <body className={inter.className}>
        <Providers>
          <CustomNavbar />
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  )
}

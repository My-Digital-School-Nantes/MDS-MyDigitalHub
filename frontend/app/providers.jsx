'use client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { GamerProvider } from '@/context/GamerContext'

export function Providers ({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <SessionProvider>
          <GamerProvider>
            {children}
          </GamerProvider>
        </SessionProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'

import './globals.css'

import Navbar from '@/Components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stomp the World',
  description: 'DSC 2024 Project Cohort',
}

const theme = createTheme({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme='dark'>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}

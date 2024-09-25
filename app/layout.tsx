import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

// Import global css files to use standard styles
// If another layout.tsx overrides, must import standard styles again
import '../src/Styles/index.css'
// import '../src/Styles/app.css'
import '../src/Styles/spacing.css'
import '../src/Styles/standardFlex.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stomp the World',
  description: 'DSC 2024 Project Cohort',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

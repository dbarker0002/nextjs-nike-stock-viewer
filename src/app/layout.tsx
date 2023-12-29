import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swoosh Spy',
  description: 'Nike Product Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
        <nav>
            {/* <h1 className="pl-4">Nike Stock Viewer</h1> */}
        </nav>
        {children}
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

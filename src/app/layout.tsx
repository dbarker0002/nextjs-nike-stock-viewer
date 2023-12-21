import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nike SKU Manager',
  description: 'View and manage Nike products.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
            {/* <h1 className="pl-4">Nike Stock Viewer</h1> */}
        </nav>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

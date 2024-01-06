import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

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
    <section>
        {children}
    </section>
  )
}

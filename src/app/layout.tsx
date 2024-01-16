import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swoosh Spy',
  description: 'Nike Product Tracker',
  metadataBase: new URL("https://swooshspy.vercel.app"),
  openGraph: {
    title: "Swoosh Spy",
    description: "Nike Product Tracker",
    url: "Swoosh Spy",
    siteName: "Swoosh Spy",
    images: [{
      url: "",
      width: 800,
      height: 600,
    }],
    locale: "en-US",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    </ClerkProvider>
  )
}

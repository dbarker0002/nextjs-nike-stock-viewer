import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Swoosh Spy Dashboard',
  description: 'Nike Product Tracker',
  metadataBase: new URL("https://swooshspy.vercel.app/dashboard"),
  openGraph: {
    title: "Swoosh Spy Dashboard",
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
    <section>
        {children}
    </section>
  )
}

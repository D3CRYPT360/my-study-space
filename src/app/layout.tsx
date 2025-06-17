import type { Metadata } from 'next'
import './globals.css'
import { Libre_Baskerville, Poppins, Baskervville } from 'next/font/google'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer/'
import { MenuProvider } from './context/menu-context'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-libre-baskerville'
})

const baskervville = Baskervville({
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
  display: 'swap',
  preload: true,
  variable: '--font-baskervville-italic'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: "swap",
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mystudyspace.mv'),
  title: 'My Study Space',
  description: 'Welcome to My Study Space – your personal online Study Space! Learn from expert tutors across the Maldives with interactive lessons designed for engagement, convenience, and affordability',
  icons: {
    icon: '/Logos_Logomark - Orange.svg'
  },
  openGraph: {
    title: 'My Study Space',
    description: 'Welcome to My Study Space – your personal online Study Space! Learn from expert tutors across the Maldives with interactive lessons designed for engagement, convenience, and affordability',
    url: 'https://mystudyspace.mv',
    siteName: 'My Study Space',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/for just 249_Mobile.jpg',
        width: 1200,
        height: 630,
        alt: 'My Study Space - Online Learning Platform'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Study Space',
    description: 'Welcome to My Study Space – your personal online Study Space! Learn from expert tutors across the Maldives',
    images: ['/for just 249_Mobile.jpg'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${libreBaskerville.variable} ${baskervville.variable} font-poppins`}>
        <MenuProvider>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </MenuProvider>
      </body>
    </html>
  )
}
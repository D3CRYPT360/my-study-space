import type { Metadata } from 'next'
import './globals.css'
import { Libre_Baskerville, Poppins, Baskervville } from 'next/font/google'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer/'
import { MenuProvider } from './context/menu-context'

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
  title: 'My Study Space',
  description: 'Welcome to My Study Space – your personal online Study Space! Learn from expert tutors across the Maldives with interactive lessons designed for engagement, convenience, and affordability',
  icons: {
    icon: '/Logos_Logomark - Orange.svg'
  },
  openGraph: {
    title: 'My Study Space',
    description: 'Welcome to My Study Space – your personal online Study Space! Learn from expert tutors across the Maldives with interactive lessons designed for engagement, convenience, and affordability',
    images: [
      {
        url: '/for just 249_Desktop.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
      
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
          <Footer />
        </MenuProvider>
      </body>
    </html>
  )
}
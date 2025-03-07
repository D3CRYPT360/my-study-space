import type { Metadata } from 'next'
import './globals.css'
import { Libre_Baskerville, Poppins, Baskervville } from 'next/font/google'
import { Navbar } from './components/Navbar'
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
  description: 'Online Learning Platform for Students',
  icons: {
    icon: '/Logos_Logomark - Orange.svg'
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
        </MenuProvider>
      </body>
    </html>
  )
}
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
  title: 'MyStudySpace',
  description: 'Online Learning Platform for Students',
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
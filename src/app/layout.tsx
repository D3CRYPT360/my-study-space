import type { Metadata } from 'next'
import './globals.css'
import { Libre_Baskerville } from 'next/font/google'
import { Navbar } from './components/Navbar'
import { MenuProvider } from './context/menu-context'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
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
      <body className={libreBaskerville.className}>
        <MenuProvider>
          <Navbar />
          {children}
        </MenuProvider>
      </body>
    </html>
  )
}
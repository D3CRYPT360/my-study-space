import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { Navbar } from './components/Navbar'
import { MenuProvider } from './context/menu-context'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: "swap"
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
      <body className={poppins.className}>
        <MenuProvider>
          <Navbar />
          {children}
        </MenuProvider>
      </body>
    </html>
  )
}
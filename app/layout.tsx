import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import ToasterProvider from './providers/ToaserProvider'

export const metadata = {
  title: 'Vacation Homes & Condo Rentals - Airbnb - Airbnb',
  description: 'My Airbnb Clone!',
}

const font = Nunito({
  subsets: [
    "latin"
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}

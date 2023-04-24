import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'

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
          <Modal actionLabel="Submit" title="Title" isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}

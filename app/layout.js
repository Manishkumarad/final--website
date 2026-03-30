import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
})

export const metadata = {
  title: 'Deodha | Software Engineering & Product Developments',
  description: 'Software Engineering & Product Developments',
  icons: {
    icon: '/image.png',
    shortcut: '/image.png',
    apple: '/image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
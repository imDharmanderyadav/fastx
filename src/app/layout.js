import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FastX | Share Securely, Connect Freely',
  description: "Our peer-to-peer file-sharing platform redefines collaboration by providing a seamless and secure environment for users to connect and share files effortlessly. Combining intuitive interface design with robust security measures, our platform empowers users to exchange files in real-time, fostering efficient collaboration without the need for cumbersome logins or complex setups. With end-to-end encryption and one-time access codes, users experience a fluid and secure file-sharing experience, amplifying connectivity and productivity. Whether collaborating on projects, sharing resources, or exchanging ideas, our platform prioritizes user privacy and data integrity, streamlining file sharing while amplifying meaningful connections.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '../components/common/nav';
import { Footer } from '../components/common/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Duyou',
  description: 'Acelera tu negocio de manera eficiente con logística de China a México',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-avenir-book` }>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

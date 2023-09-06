import Navbar from './components/Navbar/page'
import Footer from './components/Footer/page'
import './globals.css'
import { Inter } from 'next/font/google'
import { ContextProvider } from './globals/context'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parth Prajapati',
  description: 'This is my Online store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  suppressHydrationWarning={true}>
      <ContextProvider>
        <Navbar />
        {children}
        <Footer/>
        </ContextProvider>
      </body>
    </html>
  )
}

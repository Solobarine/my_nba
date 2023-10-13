import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Dashboard from '@/components/dashboard'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Nba',
  description: 'Nba Team Information'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <section className={styles.main}>
          <Header />
          <Dashboard />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  )
}

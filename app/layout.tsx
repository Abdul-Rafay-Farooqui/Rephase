import type { Metadata } from 'next'
import { Bricolage_Grotesque, Montserrat } from 'next/font/google'
import './globals.css'

// ── Headings, wordmark, section numbers ──────────────────────────────────
const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

// ── Body text, labels, buttons, tags ────────────────────────────────────
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

// BankGothic Md BT is a commercial font — load it via @font-face in globals.css
// Place your BankGothic .woff2 file at:  public/fonts/BankGothicMdBT.woff2

export const metadata: Metadata = {
  title: 'Rephase Asset Recovery',
  description:
    'Unlocking the value of surplus industrial assets, electrical infrastructure, and high-value materials.',
  keywords: [
    'asset recovery',
    'electrical infrastructure',
    'data center decommission',
    'industrial surplus',
    'materials recycling',
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Rephase Asset Recovery',
    description: 'Recover value. Renew possibility.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}

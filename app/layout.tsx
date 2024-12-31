import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CEO Insurance | Southwest Business Insurance & Benefits Provider',
  description: "The Southwest's premier insurance benefit provider specializing in executive protection, business insurance, and comprehensive coverage solutions across Arizona, California, Colorado, New Mexico, Texas, and Nevada.",
  keywords: [
    'CEO Insurance',
    'Business Insurance',
    'Executive Protection',
    'Southwest Insurance Provider',
    'Commercial Insurance',
    'Employee Benefits',
    'Risk Management',
    'Arizona Insurance',
    'California Insurance',
    'Texas Insurance',
    'Nevada Insurance',
    'Colorado Insurance',
    'New Mexico Insurance'
  ],
  authors: [{ name: 'CEO Insurance' }],
  openGraph: {
    title: 'CEO Insurance | Southwest Business Insurance & Benefits Provider',
    description: "The Southwest's premier insurance benefit provider specializing in executive protection and comprehensive business coverage.",
    url: 'https://ceo-insurance.com',
    siteName: 'CEO Insurance',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CEO Insurance | Southwest Business Insurance',
    description: "The Southwest's premier insurance benefit provider for executives and businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`} suppressHydrationWarning={true}>
        <CustomCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = localFont({
  src: '../public/fonts/inter.woff2',
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Starpath Global — Driving Future Geospatial Intelligence',
  description: 'Starpath Global is a leading satellite customization and imagery technology company, providing optical satellites, SAR satellites, satellite imagery, and industry solutions.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={process.env.NODE_ENV === 'development' ? 'zh-CN' : 'en'} className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

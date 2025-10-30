import type { Metadata } from 'next'
import { cn } from '@/utilities/cn'
import { serif, sansSerif } from './fonts'
import { TopNavi } from '@/components/TopNavi'
import { Footer } from '@/components/Footer'
import 'lightgallery'

import './app.css'

export const metadata: Metadata = {
  title: {
    default: 'musings from munich',
    template: '%s | musings from munich',
  },
  description: 'Random musings from munich',
}

type RootLayoutProps = {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn(serif.variable, sansSerif.variable, 'container max-w-5xl min-w-sm mx-auto px-4')} suppressHydrationWarning>
        <TopNavi />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

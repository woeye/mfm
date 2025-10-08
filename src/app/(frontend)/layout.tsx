import type { Metadata } from 'next'
import { cn } from '@/utilities/cn'
import { serif, sansSerif } from './fonts'
import { TopNavi } from '@/components/TopNavi'
import { Footer } from '@/components/Footer'
import { ColorSchemeScript, Container, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core'

// import './app.css'
import '@mantine/core/styles.css'

export const metadata: Metadata = {
  title: {
    default: 'mfm',
    template: '%s | musings from munich',
  },
  description: 'Random musings from munich',
}

const theme = createTheme({
  fontFamily: sansSerif.style.fontFamily,
  headings: {
    fontFamily: serif.style.fontFamily,
  },
  colors: {
    // colors were generated using https://mantine.dev/colors-generator/
    // wenge: #695151
    // fawn: #E4AD78
    // rose-gold: #B87474
    // moonstone-blue: #7DB5C4
    // (color names were generated using https://www.color-name.com)
    'wenge': ['#f6f3f3', '#e6e6e6', '#cbc9c9', '#b2abab', '#9d9191', '#908080', '#8b7777', '#796565', '#6d5959', '#695151'],
    'fawn': ['#fff3e5', '#fae6d4', '#efccab', '#e4ad78', '#dd9958', '#d88a40', '#d68332', '#be7024', '#a9631d', '#945412'],
    'rose-gold': ['#ffeeee', '#f5dede', '#e0bcbc', '#cc9898', '#b87474', '#b16666', '#ad5c5c', '#984c4c', '#894242', '#7a3637'],
    'moonstone-blue': ['#e4faff', '#d8eef4', '#b7d9e2', '#93c3d0', '#7db5c4', '#60a5b7', '#539fb3', '#418b9e', '#337c8e', '#196c7e']
  }
})

type RootLayoutProps = {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={cn(serif.variable, sansSerif.variable)} suppressHydrationWarning>
        <MantineProvider theme={theme}>
          <Container>
            <TopNavi />
            <main>
              {children}
            </main>
            <Footer />
          </Container>
        </MantineProvider>
      </body>
    </html>
  )
}

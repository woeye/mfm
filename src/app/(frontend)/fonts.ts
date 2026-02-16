import { DM_Serif_Display, EB_Garamond, Noto_Sans, Playfair_Display } from 'next/font/google'

// const sansSerif = EB_Garamond({
//   weight: '400',
//   style: 'normal',
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-sans-serif',
// })

const sansSerif = Noto_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-serif',
})

const serif = DM_Serif_Display({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

// const serif = Playfair_Display({
//   weight: ['800', '600', '400'],
//   style: 'normal',
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-serif'
// })

// const serif = Noto_Serif({
//   weight: '700',
//   style: 'normal',
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-serif'
// })

// const nunito400 = Nunito({
//   weight: "400",
//   style: "normal",
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-sans-serif"
// });

// const nunito800 = Nunito({
//   weight: "800",
//   style: "normal",
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-nunito-800"
// });

export { serif, sansSerif }

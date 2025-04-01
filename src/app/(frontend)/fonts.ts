import { Inter, Playfair_Display } from "next/font/google"

const sansSerif = Inter({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-serif"
})

const serif = Playfair_Display({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif"
})

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

export {
  serif,
  sansSerif
}


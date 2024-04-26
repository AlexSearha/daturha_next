import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Daturha | Death Melodic Metal",
  description: "Daturha is a Death Melodic Metal band from France.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} bg-background overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}

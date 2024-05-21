import type { Metadata } from "next"
import { oswald } from "./lib/font"
import "./globals.css"

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
      <body
        className={`${oswald.className} bg-background text-text overflow-x-hidden flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}

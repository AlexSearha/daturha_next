import type { Metadata } from "next";
import { oswald } from "./lib/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daturha | Death Metal Melodic",
  description: "Daturha est un groupe de Death Metal Mélodique de France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${oswald.className} bg-background text-text overflow-x-hidden flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

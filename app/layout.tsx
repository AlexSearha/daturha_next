import type { Metadata } from "next";
import { oswald } from "./lib/font";
import "./globals.css";
import Head from "next/head";
import { googleEventMeta } from "./seo/googleEventMeta";
import { googleProductMeta } from "./seo/googleProductMeta";

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
    <html lang="fr">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(googleEventMeta) }}
        />
        {googleProductMeta.map((product, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
          />
        ))}
      </Head>
      <body
        className={`${oswald.className} bg-background text-text overflow-x-hidden flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

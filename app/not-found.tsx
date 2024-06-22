import Link from "next/link"
import { oswald } from "./lib/font"
import Footer from "./Footer"

export default function NotFound() {
  return (
    <html lang="fr">
      <body
        className={`${oswald.className} bg-background text-text overflow-x-hidden flex flex-col min-h-screen`}
      >
        <div className="flex-grow flex flex-col gap-3 justify-center items-center">
          <h1 className="text-4xl">Page non trouvée</h1>
          <p className="text-xl">
            La page que vous cherchez n&apos;existe pas{" "}
          </p>
          <button className="flex justify-center items-center h-12 shadow-lg w-auto border-2 border-black transition-colors p-4 hover:bg-black hover:text-white ">
            <Link className="uppercase" href="/">
              Retour à l&apos;accueil
            </Link>
          </button>
        </div>
        <Footer />
      </body>
    </html>
  )
}

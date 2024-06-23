"use client";
import Link from "next/link";
import Footer from "./Footer";

export default function NotFound() {
  return (
    <>
      <div className="flex-grow flex flex-col gap-3 justify-center items-center">
        <h1 className="text-4xl">ERREUR 404</h1>
        <h2 className="text-3xl">Page non trouvée</h2>
        <p className="text-xl">La page que vous cherchez n&apos;existe pas </p>
        <button className="flex justify-center items-center h-12 shadow-lg w-auto border-2 border-black transition-colors p-4 hover:bg-black hover:text-white ">
          <Link className="uppercase" href="/">
            Retour à l&apos;accueil
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
}

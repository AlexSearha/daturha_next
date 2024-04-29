"use client"
import Image from "next/image"
import DaturhaLogo from "@/public/daturhaLogo2020.png"
import DaturaTypo from "@/public/datlog01.png"
import NavMenu from "./ui/menu/NavMenu"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="flex flex-col justify-center items-center p-6">
      <div
        id="navbar-menu"
        className="flex gap-8 justify-between items-center w-full md:max-w-7xl"
      >
        <Link href={pathname}>
          <Image
            src={DaturhaLogo}
            alt="Daturha logo"
            height={100}
            width={100}
          />
        </Link>
        <NavMenu />
      </div>
      <div
        id="logo"
        className="flex flex-col w-full items-center justify-evenly gap-5 md:flex-row-reverse"
      >
        <Image
          src={DaturaTypo}
          className="drop-shadow-lg"
          alt="Daturha logo"
          height={700}
          width={700}
        />
        <div id="header-title" className="flex flex-col items-end">
          <h1 className="text-5xl font-bold tracking-tight">
            Death Melodic Metal
          </h1>
          <p className="text-3xl tracking-tight">
            Pour ceux qui aiment la bite
          </p>
        </div>
      </div>
    </header>
  )
}

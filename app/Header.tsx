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
            className="animate-spin-slow"
            alt="Daturha logo"
            height={100}
            width={100}
          />
        </Link>
        <NavMenu />
      </div>
      <div
        id="logo"
        className="flex flex-col w-full items-center justify-evenly gap-5 md:flex-row-reverse md:max-w-6xl"
      >
        <Image
          src={DaturaTypo}
          className="drop-shadow-lg md:w-3/5"
          alt="Daturha logo"
          height={700}
          width={700}
        />
        <div
          id="header-title"
          className="flex flex-col items-start md:w-2/5 md:items-end"
        >
          <h1 className="text-5xl font-bold tracking-tight">
            Death Melodic Metal
          </h1>
          <p className="text-3xl tracking-tight">
            Pour les hommes qui aiment les hommes
          </p>
        </div>
      </div>
    </header>
  )
}

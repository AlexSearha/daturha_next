"use client"
import Image from "next/image"
import DaturhaLogo from "@/public/daturhaLogo2020.jpg"
import NavMenu from "../ui/menu/NavMenu"
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
        className="flex flex-col w-full items-center justify-evenly md:flex-row-reverse"
      >
        <Image src={DaturhaLogo} alt="Daturha logo" height={500} width={500} />
        <div id="header-title" className="flex flex-col">
          <h1>Daturha</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </header>
  )
}

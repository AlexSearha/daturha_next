"use client"
import Image from "next/image"
import DaturhaLogo from "@/public/daturhaLogo2020.jpg"
import NavMenu from "../ui/menu/NavMenu"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="flex justify-center p-6">
      <div className="flex gap-8 justify-between items-center w-full md:max-w-7xl">
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
      <div></div>
    </header>
  )
}

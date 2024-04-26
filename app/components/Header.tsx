"use client"
import Image from "next/image"
// import varianceCover from "@/public/variances-cover.jpg"
import DaturhaLogo from "@/public/daturhaLogo2020.jpg"
import useScreenDetect from "../hooks/screenDetect"
import NavMenu from "../ui/menu/NavMenu"

export default function Header() {
  const isMobileSize = useScreenDetect()

  return (
    <header className="p-6">
      <div className="flex gap-8 justify-between items-center w-full">
        <Image src={DaturhaLogo} alt="Daturha logo" height={100} width={100} />
        <NavMenu />
      </div>
    </header>
  )
}

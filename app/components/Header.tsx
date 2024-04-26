"use client"
import Image from "next/image"
import varianceCover from "@/public/variances-cover.jpg"
import useScreenDetect from "../hooks/screenDetect"
import NavMenu from "../ui/menu/NavMenu"

export default function Header() {
  const isMobileSize = useScreenDetect()

  return (
    <header className="p-6">
      <div className="flex flex-col gap-8 justify-center w-full">
        <NavMenu />

        <Image
          src={varianceCover}
          alt="variance-Logo"
          width={500}
          height={500}
        />
      </div>
    </header>
  )
}

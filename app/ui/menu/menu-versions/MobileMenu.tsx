import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { useState } from "react"
import SocialsBar from "../../SocialsBar"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    console.log("close")
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="relative">
        <button onClick={handleClose} className="flex w-full justify-end p-2 ">
          <Bars3Icon
            className={`h-9 w-9 text-black  cursor-pointer hover:text-slate-400 transition-transform ease-in-out  duration-300 ${
              !isOpen ? "delay-1000" : "rotate-90 delay-0"
            }`}
          />
        </button>
      </div>
      <aside
        id="mobile-menu-modal"
        className={`fixed top-0 ${
          isOpen ? "right-0" : "-right-56"
        } w-56 h-screen bg-text text-background z-10 border-l-2 border-black/10 transition-all ease-in-out duration-1000 delay-200`}
      >
        <div className="flex flex-col items-center justify-start relative">
          <div
            onClick={handleClose}
            onBlur={handleClose}
            className="absolute top-0 right-0 p-1"
          >
            <XMarkIcon className="h-9 w-9 text-white transition cursor-pointer hover:text-slate-400" />
          </div>
          <div className="flex flex-col items-center gap-4 mt-12 mb-8">
            <Link
              onClick={handleClose}
              href="#music"
              className="transition hover:text-gray-400"
            >
              MUSIC
            </Link>
            <Link
              onClick={handleClose}
              href="#tour"
              className="transition hover:text-gray-400"
            >
              TOUR
            </Link>
            <Link
              onClick={handleClose}
              href="#band"
              className="transition hover:text-gray-400"
            >
              BAND
            </Link>
            <Link
              onClick={handleClose}
              href="#contact"
              className="transition hover:text-gray-400"
            >
              CONTACT
            </Link>
          </div>
          <div className="flex gap-2">
            <SocialsBar width="normal" />
          </div>
        </div>
      </aside>
    </>
  )
}

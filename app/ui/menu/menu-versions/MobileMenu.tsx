import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    console.log("close")
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div>
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
        className={`absolute top-0 ${
          isOpen ? "right-0" : "-right-56"
        } w-56 h-full bg-text text-background z-10 border-l-2 border-black/10 transition-all ease-in-out duration-1000 delay-200`}
      >
        <div className="flex flex-col items-center justify-start h-full relative">
          <div
            onClick={handleClose}
            onBlur={handleClose}
            className="absolute top-0 right-0 p-1"
          >
            <XMarkIcon className="h-9 w-9 text-white transition cursor-pointer hover:text-slate-400" />
          </div>
          <div className="flex flex-col items-center gap-4 mt-12">
            <Link onClick={handleClose} href="#">
              MUSIC
            </Link>
            <Link onClick={handleClose} href="#">
              TOUR
            </Link>
            <Link onClick={handleClose} href="#">
              BAND
            </Link>
            <Link onClick={handleClose} href="#">
              CONTACT
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}

import Image from "next/image"
import React from "react"
// img
import VinylImage from "@/public/vinyl.png"
import VarianceCover from "@/public/variances-cover.jpg"
import Link from "next/link"

export default function MennecyVariance() {
  return (
    <div
      id="variance-promo"
      className="relative text-white w-full px-6 py-36 h-auto gap-6 flex flex-col items-center"
    >
      <div className="absolute w-full h-full top-0 left-0 bg-varianceCover bg-cover bg-center brightness-50 blur-sm"></div>
      <div className="relative w-full">
        <div>
          <div className="relative flex w-full items-center justify-around">
            <div className="relative w-[450px] h-[450px] shadow-lg shadow-black flex">
              <Image
                src={VarianceCover}
                layout="fill"
                objectFit="contain"
                alt="variance cover"
                className="z-20"
              />
              <div className="absolute top-0 left-[200px] w-[450px] h-[450px] ">
                <Image
                  src={VinylImage}
                  layout="fill"
                  objectFit="contain"
                  alt="variance cover"
                  className="animate-spin-slow z-10"
                />
                <div className="absolute z-0 top-[125px] left-[125px] w-[250px] h-[250px] bg-black"></div>
              </div>
            </div>
            <div id="" className="text-center">
              <h2 className="font-bold text-5xl">
                GET PHYSICAL <br />
                <span className="text-[6rem] bg-gradient-to-r from-startVariancesColor to-endVariancesColor inline-block text-transparent bg-clip-text">
                  VARIANCES
                </span>
                <br />
                <span className="text-4xl">ONLY AT</span>
                <br />
                <Link
                  className="text-7xl animate-pulse bg-gradient-to-r from-startMennecyColor to-endMennecyColor inline-block text-transparent bg-clip-text transition-all hover:animate-none"
                  href="https://www.fnactickets.com/ticket-evenement/hard-rock-metal-mennecy-metal-fest-man64884-lt.htm"
                  target="_blank"
                >
                  MENNECY METAL FEST
                </Link>
                <br />
                <span className={`text-2xl`}>07/09/2024</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

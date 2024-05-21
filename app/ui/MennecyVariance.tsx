import Image from "next/legacy/image"
import React from "react"
// img
import VinylImage from "@/public/vinyl.png"
import VarianceCover from "@/public/variances-cover.jpg"
import Link from "next/link"

export default function MennecyVariance() {
  return (
    <div
      id="variance-promo"
      className="relative z-10 scale-[103%] text-white w-full px-6 py-12 h-auto gap-6 flex flex-col items-center md:py-36"
    >
      <div className="absolute w-full h-full top-0 left-0 bg-varianceCover bg-cover bg-center brightness-50 blur-sm"></div>
      <div className="relative w-full">
        <div>
          <div className="relative flex flex-col-reverse gap-10 w-full items-center justify-around xl:flex-row">
            <div className="w-auto h-[230px] -translate-x-[23%] shadow-lg shadow-black flex xl:translate-x-0 xl:h-[450px]">
              <Image
                src={VarianceCover}
                layout="fill"
                objectFit="contain"
                alt="variance cover"
                className="z-20"
              />
              <div className="w-[230px] h-[230px] translate-x-[50%] z-10 xl:w-[450px] xl:h-[450px]">
                <Image
                  src={VinylImage}
                  layout="fill"
                  objectFit="contain"
                  alt="variance cover"
                  className="animate-spin-slow z-10"
                />
                <div className="absolute z-0 top-[70px] left-[70px] w-[100px] h-[100px] bg-black xl:top-[125px] xl:left-[150px] xl:w-[200px] xl:h-[200px]"></div>
              </div>
            </div>
            <div className="text-center">
              <h2 className="font-bold text-5xl">
                GET PHYSICAL <br />
                <span id="text-variances" className="text-[4.5rem]">
                  VARIANCES
                </span>
                <br />
                <span className="text-4xl">ONLY AT</span>
                <br />
                <Link
                  className="text-5xl xl:text-7xl animate-pulse bg-gradient-to-r from-startMennecyColor to-endMennecyColor inline-block text-transparent bg-clip-text transition-all hover:animate-none"
                  href="https://www.fnactickets.com/ticket-evenement/hard-rock-metal-mennecy-metal-fest-man64884-lt.htm"
                  target="_blank"
                  id="link-mennecy"
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

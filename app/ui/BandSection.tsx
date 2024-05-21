import React from "react"
// photos
import MaxPhoto from "@/public/max.jpg"
import VincePhoto from "@/public/joe.jpg"
import AlexPhoto from "@/public/alex.jpg"
import LorisPhoto from "@/public/loris.jpg"
import Image from "next/image"

export default function BandSection() {
  return (
    <section
      id="band"
      className="flex flex-wrap w-full md:flex-row z-0 text-white"
    >
      <div className="relative h-auto w-1/2 md:w-1/4 border-black md:border-black/90 border-r-2">
        <Image src={MaxPhoto} alt="Max photo Singer" />
        <div className="absolute gap-4 flex-col top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all hover:opacity-100">
          <span className="md:text-5xl text-3xl">Max</span>
          <span className="md:text-2xl text-xl">Voice & Rythm Guitar</span>
        </div>
      </div>
      <div className="relative h-auto w-1/2 md:w-1/4 border-black md:border-black/90 border-r-2">
        <Image src={LorisPhoto} alt="Max photo Singer" />
        <div className="absolute gap-4 flex-col top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all hover:opacity-100">
          <span className="md:text-5xl text-3xl">Loris</span>
          <span className="md:text-3xl text-xl">Drums</span>
        </div>
      </div>
      <div className="relative h-auto w-1/2 md:w-1/4 border-black md:border-black/90 border-r-2">
        <Image src={VincePhoto} alt="Max photo Singer" />
        <div className="absolute gap-4 flex-col top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all hover:opacity-100">
          <span className="md:text-5xl text-3xl">Vince</span>
          <span className="md:text-3xl text-xl">Bass</span>
        </div>
      </div>
      <div className="relative h-auto w-1/2 md:w-1/4 border-black md:border-black/90 border-r-2">
        <Image src={AlexPhoto} alt="Max photo Singer" />
        <div className="absolute gap-4 flex-col top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all hover:opacity-100">
          <span className="md:text-5xl text-3xl">Alex</span>
          <span className="md:text-3xl text-xl">Lead Guitar</span>
        </div>
      </div>
    </section>
  )
}

import React from "react"
// photos
import MaxPhoto from "@/public/max.jpg"
import VincePhoto from "@/public/joe.jpg"
import AlexPhoto from "@/public/alex.jpg"
import LorisPhoto from "@/public/loris.jpg"
import Image from "next/image"

export default function BandSection() {
  return (
    <section className="flex flex-wrap w-full md:flex-row z-0">
      {/* <h2 className="text-4xl font-bold text-center mt-10 mb-8">BAND</h2> */}
      <Image
        src={MaxPhoto}
        alt="Max photo Singer"
        className="h-auto w-1/2 md:w-1/4 border-black/90 border-r-2 transition-all hover:brightness-50"
      />
      <Image
        src={AlexPhoto}
        alt="Max photo Singer"
        className="h-auto w-1/2 md:w-1/4 border-black/90 border-r-2 transition-all hover:brightness-50"
      />
      <Image
        src={VincePhoto}
        alt="Max photo Singer"
        className="h-auto w-1/2 md:w-1/4 border-black/90 border-r-2 transition-all hover:brightness-50"
      />
      <Image
        src={LorisPhoto}
        alt="Max photo Singer"
        className="h-auto w-1/2 md:w-1/4 transition-all hover:brightness-50"
      />
    </section>
  )
}

import dynamic from "next/dynamic"
import Image from "next/image"
import React from "react"
import DaturhaFlower from "@/public/daturhaLogo2020.png"

const UnearthVideoYoutube = dynamic(
  () => import("../ui/iframes/Iframes").then((mod) => mod.UnearthVideoIframe),
  {
    ssr: false,
  }
)

export default function VideoSection() {
  return (
    <section
      id="videos"
      className="bg-text w-full p-8 flex flex-col gap-4 justify-evenly items-center relative md:flex-row md:gap-0"
    >
      <div className="text-white flex flex-col items-start gap-1 z-10">
        <h2 className="text-4xl font-bold text-center">Last Video</h2>
        <p className="text-xl italic">Unearth - Cycle</p>
      </div>

      <UnearthVideoYoutube />
      <div className="absolute top-0 left-0">
        <Image
          src={DaturhaFlower}
          className="invert h-full"
          height={500}
          width={500}
          alt="Daturha flower"
        />
      </div>
    </section>
  )
}

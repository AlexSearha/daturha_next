import dynamic from "next/dynamic"
import React from "react"

const UnearthVideoYoutube = dynamic(
  () => import("../ui/iframes/Iframes").then((mod) => mod.UnearthVideoIframe),
  {
    ssr: false,
  }
)

export default function VideoSection() {
  return (
    <>
      <section
        id="videos"
        className="bg-text w-full p-8 md:py-16 flex flex-col gap-4 justify-evenly items-center relative  md:flex-row md:gap-0 overflow-x-hidden"
      >
        <div className="absolute w-full h-full top-0 left-0 bg-texturesPapyrus bg-repeat"></div>
        <div className="relative w-full z-10 flex flex-col items-center gap-4 md:flex-row md:justify-evenly ">
          <div className="text-white flex flex-col items-start gap-1">
            <h2 className="text-5xl font-bold text-center md:text-7xl">
              Last Video
            </h2>
            <p className="text-2xl italic">Unearth - Cycle</p>
          </div>
          <UnearthVideoYoutube />
        </div>
      </section>
    </>
  )
}

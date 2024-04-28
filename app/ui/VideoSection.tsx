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
    <section
      id="videos"
      className="bg-text w-full p-8 flex flex-col gap-4 justify-evenly items-center md:flex-row md-gap-0"
    >
      <div className="text-white flex flex-col items-start gap-1">
        <h2 className="text-4xl font-bold text-center">Last Video</h2>
        <p className="text-xl italic">Unearth - Cycle</p>
      </div>

      <UnearthVideoYoutube />
    </section>
  )
}

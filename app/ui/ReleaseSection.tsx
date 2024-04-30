import React from "react"
import dynamic from "next/dynamic"
import Link from "next/link"

const VarianceIframeComponent = dynamic(
  () => import("../ui/iframes/Iframes").then((mod) => mod.VariancesIframe),
  {
    ssr: false,
  }
)

const CycleIframeComponent = dynamic(
  () => import("../ui/iframes/Iframes").then((mod) => mod.CycleIframe),
  {
    ssr: false,
  }
)

const BeyondTheReasonComponent = dynamic(
  () =>
    import("../ui/iframes/Iframes").then((mod) => mod.BeyondTheReasonIframe),
  {
    ssr: false,
  }
)

export default function ReleaseSection() {
  return (
    <section id="music" className="flex flex-col gap-10 px-4 py-16">
      <h2 className="text-4xl font-bold text-center">RELEASES</h2>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex flex-col gap-2">
          <VarianceIframeComponent />
          <Link
            href="https://daturha.bandcamp.com/album/variances-part-i"
            target="_blank"
            className="text-center p-2 font-bold border-2 transition-colors border-black hover:text-white hover:bg-text"
          >
            GET &quot;VARIANCES&quot; NOW
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <CycleIframeComponent />
          <Link
            href="https://shop.season-of-mist.com/daturha-cycle-cd-digipak"
            target="_blank"
            className="text-center p-2 font-bold border-2 transition-colors border-black hover:text-white hover:bg-text"
          >
            GET &quot;CYCLE&quot; NOW
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <BeyondTheReasonComponent />
          <Link
            href="https://daturha.bandcamp.com/album/beyond-the-reason"
            target="_blank"
            className="text-center p-2 font-bold border-2 transition-colors border-black hover:text-white hover:bg-text"
          >
            GET &quot;BEYOND THE REASON&quot; NOW
          </Link>
        </div>
      </div>
    </section>
  )
}

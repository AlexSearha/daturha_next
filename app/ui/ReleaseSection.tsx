import React from "react"
import dynamic from "next/dynamic"

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
    <section id="music" className="flex flex-col px-4">
      <h2 className="text-4xl font-bold text-center">RELEASES</h2>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex flex-col gap-2">
          <VarianceIframeComponent />
          <p className="text-center">Variances</p>
        </div>
        <div className="flex flex-col gap-2">
          <CycleIframeComponent />
          <p className="text-center">Cycle</p>
        </div>
        <div className="flex flex-col gap-2">
          <BeyondTheReasonComponent />
          <p className="text-center">Beyond The Reason</p>
        </div>
      </div>
    </section>
  )
}

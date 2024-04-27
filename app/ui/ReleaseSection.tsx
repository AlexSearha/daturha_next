import React from "react"
import Image from "next/image"
import VariancesCover from "@/public/variances-cover.jpg"
import CycleCover from "@/public/daturhaCycleCover.jpg"
import BeyondTheReasonCover from "@/public/beyondTheReason.jpg"

export default function ReleaseSection() {
  return (
    <section id="releases" className="flex flex-col">
      <h2 className="text-4xl font-bold text-center mt-10 mb-8">
        LAST RELEASES
      </h2>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex flex-col gap-2">
          <Image
            className="shadow-lg"
            src={VariancesCover}
            alt="variances-logo"
            height={300}
            width={300}
          />
          <p className="text-center">Variances</p>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            className="shadow-lg border-2 border-black/50"
            src={CycleCover}
            alt="cycle-logo"
            height={300}
            width={300}
          />
          <p className="text-center">Cycle</p>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            className="shadow-lg border-2 border-black/50"
            src={BeyondTheReasonCover}
            alt="cycle-logo"
            height={300}
            width={300}
          />
          <p className="text-center">Beyond The Reason</p>
        </div>
      </div>
    </section>
  )
}

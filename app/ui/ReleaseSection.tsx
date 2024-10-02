"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import ButtonGeneric from "../components/ButtonGeneric";

const VarianceIframeComponent = dynamic(
  () => import("../ui/iframes/Iframes").then((mod) => mod.VariancesIframe),
  {
    ssr: false,
  }
);

const CycleIframeComponent = dynamic(
  () => import("../ui/iframes/Iframes").then((mod) => mod.CycleIframe),
  {
    ssr: false,
  }
);

const BeyondTheReasonComponent = dynamic(
  () =>
    import("../ui/iframes/Iframes").then((mod) => mod.BeyondTheReasonIframe),
  {
    ssr: false,
  }
);

export default function ReleaseSection() {
  return (
    <motion.section
      id="music"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {/** bandcamp Players */}
      <div
        id="bandcamp-player"
        className="flex flex-col gap-10 px-4 py-16 md:py-32"
      >
        <h2 className="text-4xl font-bold text-center">RELEASES</h2>
        <div className="flex flex-col gap-8 md:flex-row md:gap-8">
          <div className="flex flex-col gap-2">
            <VarianceIframeComponent />
            <ButtonGeneric
              href="https://daturha.bandcamp.com/album/variances-part-i"
              target="_blank"
              title='GET "VARIANCE" NOW'
            />
          </div>
          <div className="flex flex-col gap-2">
            <CycleIframeComponent />
            <ButtonGeneric
              href="https://daturha.bandcamp.com/album/cycle"
              target="_blank"
              title='GET "CYCLE" NOW'
            />
          </div>
          <div className="flex flex-col gap-2">
            <BeyondTheReasonComponent />
            <ButtonGeneric
              href="https://daturha.bandcamp.com/album/beyond-the-reason"
              target="_blank"
              title='GET "BEYOND THE REASON" NOW'
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

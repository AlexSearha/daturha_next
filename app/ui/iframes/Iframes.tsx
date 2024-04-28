"use client"
import useScreenDetect from "@/app/hooks/screenDetect"
import React from "react"

export function VariancesIframe() {
  const isMobileView = useScreenDetect()
  return (
    <iframe
      className="shadow-lg border-2 border-black/50"
      style={{
        border: 0,
        height: `${isMobileView ? "300px" : "320px"}`,
        width: `${isMobileView ? "100%" : "320px"}`,
      }}
      src="https://bandcamp.com/EmbeddedPlayer/album=16209402/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/"
      seamless
    >
      <a href="https://daturha.bandcamp.com/album/variances-part-i">
        Variances (Part I) by Daturha
      </a>
    </iframe>
  )
}

export function CycleIframe() {
  const isMobileView = useScreenDetect()
  return (
    <iframe
      className="shadow-lg border-2 border-black/50"
      style={{
        border: 1,
        height: `${isMobileView ? "300px" : "320px"}`,
        width: `${isMobileView ? "100%" : "320px"}`,
      }}
      src="https://bandcamp.com/EmbeddedPlayer/album=3064313179/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/"
      seamless
    >
      <a href="https://daturha.bandcamp.com/album/cycle">Cycle by DATURHA</a>
    </iframe>
  )
}

export function BeyondTheReasonIframe() {
  const isMobileView = useScreenDetect()
  return (
    <iframe
      className="shadow-lg border-2 border-black/50"
      style={{
        border: 0,
        height: `${isMobileView ? "300px" : "320px"}`,
        width: `${isMobileView ? "100%" : "320px"}`,
      }}
      src="https://bandcamp.com/EmbeddedPlayer/album=265237991/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/"
      seamless
    >
      <a href="https://daturha.bandcamp.com/album/beyond-the-reason">
        Beyond The Reason by Daturha
      </a>
    </iframe>
  )
}

export function UnearthVideoIframe() {
  const isMobileView = useScreenDetect()

  return (
    <iframe
      width={isMobileView ? "385" : "560"}
      height={isMobileView ? "216" : "315"}
      src="https://www.youtube.com/embed/uATRu9o3lwc?si=RooLwp5Cp_5AszZz"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  )
}

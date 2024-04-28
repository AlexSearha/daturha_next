"use client"
import React, { useEffect, useState } from "react"
import {
  BandcampIcon,
  IconFacebook,
  IconInstagram,
  IconYoutube,
} from "../lib/icons"

export default function SocialsBar({ width = "xl" }: { width?: string }) {
  const [iconSize, setIconSize] = useState<number>(6)

  useEffect(() => {
    if (width) {
      switch (width) {
        case "xl":
          setIconSize(24)
          break
        case "normal":
          setIconSize(18)
          break
        default:
          setIconSize(24)
          break
      }
    }
  }, [])

  return (
    <>
      <IconFacebook iconSize={iconSize} />
      <IconInstagram iconSize={iconSize} />
      <IconYoutube iconSize={iconSize} />
      <BandcampIcon iconSize={iconSize} />
    </>
  )
}

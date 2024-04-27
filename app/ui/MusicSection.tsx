import React from "react"
import { datesTour } from "../lib/dates"
import Link from "next/link"
import dynamic from "next/dynamic"

const ComponentC = dynamic(() => import("../ui/iframes/Iframes"), {
  ssr: false,
})

export default function MusicSection() {
  return (
    <section id="tour" className="w-full flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mt-10 mb-8">TOUR DATES</h2>
      {datesTour.map((liveEvent, key) => {
        return (
          <div
            key={key}
            className="flex w-full justify-between items-center gap-2 my-3 border-b-2 border-black/20 py-4 md:w-3/4"
          >
            <div>
              <h2>{liveEvent.date}</h2>
              <p>{liveEvent.placeName}</p>
              <p>{`${liveEvent.place} ${liveEvent.city} ${liveEvent.zipcode}`}</p>
            </div>
            <button className="flex justify-center items-center h-10 w-auto rounded bg-slate-800 text-white shadow-md transition-colors p-4 hover:bg-slate-950 ">
              <Link href={liveEvent.ticketWebsite} className="font-bold">
                GET TICKETS
              </Link>
            </button>
          </div>
        )
      })}
      <ComponentC />
    </section>
  )
}

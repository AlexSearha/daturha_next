import React from "react"
import { datesTour } from "../lib/dates"
import Link from "next/link"

const showDatesTour = () => {
  return datesTour.map((liveEvent, key) => {
    return (
      <div
        key={key}
        className="flex w-full justify-between items-center gap-2 my-3 border-b-2 border-black/20 py-4 md:w-3/4"
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-600">
            {liveEvent.placeName}
          </h2>
          <p className="uppercase">{liveEvent.date}</p>
          <p className="italic">{`${liveEvent.address} ${liveEvent.city} ${liveEvent.zipcode}`}</p>
        </div>
        <button className="flex justify-center items-center h-10 shadow-lg w-auto border-2 border-black transition-colors p-4 hover:bg-black hover:text-white ">
          <Link
            href={liveEvent.ticketWebsite}
            className="font-bold"
            target="_blank"
          >
            GET TICKETS
          </Link>
        </button>
      </div>
    )
  })
}

export default function TourSection() {
  return (
    <section id="tour" className="w-full flex flex-col items-center px-4 py-6">
      <h2 className="text-4xl font-bold text-center mb-8">TOUR DATES</h2>
      {showDatesTour().length !== 0 ? (
        showDatesTour()
      ) : (
        <p>No events for the moment !</p>
      )}
    </section>
  )
}

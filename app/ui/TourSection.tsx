import React from "react";
import { datesTour } from "../lib/dates";
import Link from "next/link";
import { googleEventMeta } from "../seo/googleEventMeta";

const ShowDatesTour = () => {
  return datesTour.map((liveEvent, key) => {
    return (
      <div
        key={key}
        className={`flex w-full justify-between items-center gap-2 py-4 px-2 md:w-3/4 ${
          key % 2 === 0 ? "bg-gray-200" : ""
        }`}
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-600">
            {liveEvent.placeName}
          </h2>
          <p className="uppercase">{liveEvent.date}</p>
          <p className="italic">{`${liveEvent.address}, ${liveEvent.zipcode} ${liveEvent.city}`}</p>
        </div>
        <button className="flex justify-center items-center h-12 shadow-lg w-auto border-2 border-black transition-colors p-4 hover:bg-black hover:text-white ">
          <Link
            href={liveEvent.ticketWebsite}
            className="font-bold"
            target="_blank"
          >
            GET TICKETS
          </Link>
        </button>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(googleEventMeta) }}
        />
      </div>
    );
  });
};

export default function TourSection() {
  return (
    <section
      id="tour"
      className="w-full flex flex-col items-center px-4 py-16 md:py-32 md:max-w-5xl"
    >
      <h2 className="text-4xl font-bold text-center mb-8">TOUR DATES</h2>
      {ShowDatesTour().length !== 0 ? (
        <ShowDatesTour />
      ) : (
        <p>No events for the moment !</p>
      )}
    </section>
  );
}

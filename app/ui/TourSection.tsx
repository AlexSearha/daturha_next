"use client";
import React from "react";
import { dateFormat, datesTour } from "../lib/dates";
import Link from "next/link";
import { googleEventMeta } from "../seo/googleEventMeta";
import { motion } from "framer-motion";
import moment from "moment";
import ButtonGeneric from "../components/ButtonGeneric";

const ShowDatesTour = () => {
  return datesTour.map((liveEvent, key) => {
    const liveDate = moment(liveEvent.date);
    const nowDate = moment();

    if (liveDate.isAfter(nowDate)) {
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
            <p className="uppercase">{dateFormat(liveEvent.date)}</p>
            <p className="italic">{`${liveEvent.address}, ${liveEvent.zipcode} ${liveEvent.city}`}</p>
          </div>
          <ButtonGeneric
            key={key}
            href={liveEvent.ticketWebsite}
            title="Buy Tickets"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(googleEventMeta),
            }}
          />
        </div>
      );
    } else {
      return (
        <div key={key} className="flex flex-col gap-2">
          <p>No dates planned for now</p>
          <ButtonGeneric
            href="/#contact"
            key={key}
            title="BOOK US !"
            target=""
          />
        </div>
      );
    }
  });
};

export default function TourSection() {
  return (
    <motion.section
      className="w-full flex flex-col items-center px-4 py-16 md:py-32 md:max-w-5xl"
      id="tour"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">TOUR DATES</h2>
      <ShowDatesTour />
    </motion.section>
  );
}

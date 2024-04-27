import Image from "next/image"
import Footer from "./Footer"
import Header from "./components/Header"
import VariancesCover from "@/public/variances-cover.jpg"
import CycleCover from "@/public/daturhaCycleCover.jpg"
import BeyondTheReasonCover from "@/public/beyondTheReason.jpg"
import { datesTour } from "./lib/dates"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow items-center justify-between overflow-auto px-4">
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

        <section id="tour" className="w-full flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mt-10 mb-8">
            TOUR DATES
          </h2>
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
        </section>
      </main>
      <Footer />
    </>
  )
}

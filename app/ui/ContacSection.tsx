import React from "react"

export default function ContactSection() {
  return (
    <section id="contact" className="my-8 px-4">
      <h2 className="text-4xl font-bold text-center mt-10 mb-8">CONTACT</h2>
      <div id="contact" className="flex flex-col gap-6">
        <div id="managment-container" className="flex flex-col items-center">
          <h3 className="text-xl text-gray-600">Managment</h3>
          <a
            href="mailto:managment@daturha.fr"
            className="transition hover:text-gray-600"
          >
            managment@daturha.fr
          </a>
        </div>
        <div id="booking-container" className="flex flex-col items-center">
          <h3 className="text-xl text-gray-600">Booking</h3>
          <a
            href="mailto:booking@daturha.fr"
            className="transition hover:text-gray-600"
          >
            booking@daturha.fr
          </a>
        </div>
      </div>
    </section>
  )
}

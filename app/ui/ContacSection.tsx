"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="flex flex-col w-full gap-10 px-4 py-16 md:py-32 md:max-w-5xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center">CONTACT</h2>
      <div
        id="contact"
        className="flex flex-col md:flex-row md:justify-evenly gap-6"
      >
        <div id="managment-container" className="flex flex-col items-center">
          <h3 className="text-2xl text-gray-600">Managment</h3>
          <a
            href="mailto:managment@daturha.com"
            className="transition text-xl hover:text-gray-600"
          >
            managment@daturha.com
          </a>
        </div>
        <div id="booking-container" className="flex flex-col items-center">
          <h3 className="text-2xl text-gray-600">Booking</h3>
          <a
            href="mailto:booking@daturha.com"
            className="transition text-xl hover:text-gray-600"
          >
            booking@daturha.com
          </a>
        </div>
      </div>
    </motion.section>
  );
}

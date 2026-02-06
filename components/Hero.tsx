"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-dark">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/seavideo.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text — bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-16 left-6 z-10 md:bottom-24 md:left-16"
      >
        <h1 className="font-display text-[14vw] font-bold leading-[0.9] tracking-tight text-light md:text-[10vw]">
          TRUE
          <br />
          MERIDIAN
        </h1>
        <p className="mt-4 max-w-md text-base text-light/60 md:mt-6 md:text-lg">
          Guiding organizations through uncharted territory
        </p>
      </motion.div>
    </section>
  );
}

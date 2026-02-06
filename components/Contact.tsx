"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-dark-alt px-6 py-24 md:px-16 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-7xl"
      >
        <h2 className="font-display text-5xl font-bold leading-[1.05] text-light md:text-8xl lg:text-9xl">
          Ready to find
          <br />
          your <span className="text-amber">bearing?</span>
        </h2>

        <div className="mt-12 flex flex-col gap-6 md:mt-20 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg text-muted md:text-xl">
            Let&apos;s chart a course together.
          </p>
          <a
            href="mailto:hello@truemeridian.com"
            className="inline-block border border-amber/40 px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-amber transition-colors duration-300 hover:border-amber hover:bg-amber/10"
          >
            Let&apos;s Talk
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="ml-2 inline-block"
            >
              <path
                d="M1 13L13 1M13 1H3M13 1V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mx-auto mt-32 max-w-7xl border-t border-light/10 pt-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span className="text-sm font-medium tracking-[0.15em] text-light/40">
            TRUE MERIDIAN
          </span>
          <span className="text-sm text-light/30">
            &copy; {new Date().getFullYear()} True Meridian. All rights
            reserved.
          </span>
        </div>
      </div>
    </section>
  );
}

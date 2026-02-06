"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bodyOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 1, 1]);
  const bodyY = useTransform(scrollYProgress, [0, 0.3, 0.8], [60, 0, 0]);

  return (
    <section id="who-we-are" className="bg-dark-alt">
      <div ref={containerRef} className="relative h-[200vh]">
        <div className="sticky top-0 flex h-screen items-start px-6 pt-24 md:px-16 md:pt-32">
          <div className="mx-auto w-full max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-display text-5xl font-bold leading-[1.05] text-light md:text-8xl lg:text-9xl"
            >
              A different kind
              <br />
              of <span className="text-amber">consulting</span>
            </motion.h2>

            <motion.div
              style={{ opacity: bodyOpacity, y: bodyY }}
              className="mt-12 md:mt-16"
            >
              <div className="max-w-4xl">
                <p className="text-lg leading-relaxed text-muted md:text-xl">
                  True Meridian was founded on the belief that technology should
                  serve as a compass, not a complication. We partner with
                  organizations to navigate complexity with clarity, blending
                  deep technical expertise with strategic vision to chart a
                  course toward lasting transformation.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
                  We are strategic and hands-on. Builders at heart. We
                  don&apos;t just advise, we roll up our sleeves and create
                  alongside you.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
                  Like the meridian line itself, we provide a fixed reference
                  point in an ever-shifting landscape, helping you find your
                  true bearing when it matters most.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

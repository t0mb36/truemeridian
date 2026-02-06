"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    name: "Artificial Intelligence",
    description: "Charting the course for intelligent systems",
  },
  {
    name: "Cybersecurity",
    description: "A steadfast beacon protecting your digital frontier",
  },
  {
    name: "Product Development",
    description: "Building vessels for the journey ahead",
  },
  {
    name: "Digital Transformation",
    description: "Navigating the passage to what\u2019s next",
  },
];

function ServiceSlide({
  service,
  index,
  scrollYProgress,
}: {
  service: (typeof services)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const total = services.length;
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;

  const opacity = useTransform(scrollYProgress, (v) => {
    const fadeIn = start;
    const solidStart = start + segment * 0.2;
    const solidEnd = end - segment * 0.2;
    const fadeOut = end;

    if (index === 0 && v <= solidStart) return 1;
    if (index === total - 1 && v >= solidEnd) return 1;
    if (v < fadeIn) return 0;
    if (v < solidStart) return (v - fadeIn) / (solidStart - fadeIn);
    if (v <= solidEnd) return 1;
    if (v <= fadeOut) return 1 - (v - solidEnd) / (fadeOut - solidEnd);
    return 0;
  });

  const y = useTransform(scrollYProgress, (v) => {
    const mid = start + segment * 0.5;
    if (v < start) return 40;
    if (v < mid) return 40 * (1 - (v - start) / (mid - start));
    return 0;
  });

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <span className="font-sans text-sm tracking-widest text-amber">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 font-display text-4xl font-bold text-light md:text-6xl lg:text-7xl">
        {service.name}
      </h3>
      <p className="mt-4 max-w-lg text-base text-muted md:text-lg">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="services" className="bg-dark">
      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex h-screen flex-col px-6 md:px-16">
          <div className="mx-auto w-full max-w-7xl pt-24 md:pt-32">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-display text-5xl font-bold text-light md:text-8xl lg:text-9xl"
            >
              What we do
            </motion.h2>
          </div>

          <div className="relative mx-auto w-full max-w-7xl flex-1">
            {services.map((service, i) => (
              <ServiceSlide
                key={service.name}
                service={service}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WireCarousel from "./WireCrousel";
import EmblaCarousel from "./EmblaCarousel";

const Wireframes = () => {
  const images = [
    "/case-studies/jetezee/r1.png",
    "/case-studies/jetezee/r2.png",
    "/case-studies/jetezee/r3.png",
    "/case-studies/jetezee/r4.png",
    "/case-studies/jetezee/r5.png",
    // "/case-studies/jetezee/r6.png",
  ];
const OPTIONS = { loop: true }
  const [index, setIndex] = useState(0);

  // AUTO-PLAY every 2.2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  // Get previous + next for left/right stacked previews
  const prev = (index - 1 + images.length) % images.length;
  const next = (index + 1) % images.length;

  return (
    <section className="w-full padding-x ">
      {/* Top Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.h2
          className="section-heading font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Wireframes
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We began with low-fidelity wireframes to validate structure and usability
          for both buyer and admin journeys. Once approved, we developed high-fidelity
          prototypes that showcased realistic interaction flows and visual hierarchy.
        </motion.p>
      </div>

      {/* Main Card Section */}
     {/* <WireCarousel images={images} /> */}
     <EmblaCarousel slides={images} color={"#000000"} />
    </section>
  );
};

export default Wireframes;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WireCarousel from "./WireCrousel";
import EmblaCarousel from "./EmblaCarousel";

const Wireframes = () => {
  const images = [
    "/case-studies/jetezee/e1.png",
    "/case-studies/jetezee/e2.png",
    "/case-studies/jetezee/e3.png",
    "/case-studies/jetezee/e4.png",
    "/case-studies/jetezee/e5.png",
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
          Final Outcome
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          The complex aviation marketplace was transformed into a user-friendly, visually striking product through the JetEzee prototype. The UX testing increased clarity, buyer confidence, and administrative efficiency. LaunchBox Global guaranteed that the personalized web app development services and UI/UX design services were prepared for development through minimal rework and total alignment, providing completely validated Web App and Admin Dashboard prototypes.
        </motion.p>
      </div>

      {/* Main Card Section */}
     {/* <WireCarousel images={images} /> */}
     <EmblaCarousel slides={images} color={"#E9B44C"} />
    </section>
  );
};

export default Wireframes;

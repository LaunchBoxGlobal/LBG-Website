"use client";

import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import EmblaCarousel from "./EmblaCarousel";
import Image from "next/image";

const FinalOutcome = () => {
  const images = [
    "/case-studies/usubz/p1.png",
    "/case-studies/usubz/p2.png",
    "/case-studies/usubz/p3.png",
    "/case-studies/usubz/p4.png",
    "/case-studies/usubz/p5.png",
    "/case-studies/usubz/p6.png",
    "/case-studies/usubz/p7.png",
    "/case-studies/usubz/p8.png",
    "/case-studies/usubz/p9.png",
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
    <section className="w-full padding-x pb-24">
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
      The final design successfully merged education, motivation, and employability into a unified platform. Usubz’s redesigned interface empowered users to learn, earn recognition, and stand out in one continuous journey. This approach positioned the platform among the best job portals, increasing engagement and building trust between learners and recruiters.
        </motion.p>
      </div>
      <div className="flex gap-10 md:gap-20 justify-center mt-20">
        <div className="space-y-10 md:space-y-20">
          {images.slice(0,3).map((im,i)=>(
            <Image src={im} alt="im" width={300} height={300} />
          ))}
        </div>
        <div className="mt-20 space-y-10 md:space-y-20">
          {images.slice(3,6).map((im,i)=>(
            <Image src={im} alt="im" width={300} height={300} />
          ))}
        </div>
        <div className="space-y-10 md:space-y-20">
          {images.slice(6,9).map((im,i)=>(
            <Image src={im} alt="im" width={300} height={300} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FinalOutcome;

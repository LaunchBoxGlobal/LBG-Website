"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ReinforceDepth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const [counts, setCounts] = useState({
    pages: 0,
    strategies: 0,
    templates: 0,
    interviews: 0,
  });

  useEffect(() => {
    if (isInView) {
      const targets = {
        pages: 100,
        strategies: 36,
        templates: 18,
        interviews: 12,
      };
      const duration = 3000;
      const frameRate = 30;
      const totalFrames = Math.round((duration / 1000) * frameRate);

      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        setCounts({
          pages: Math.floor((targets.pages / totalFrames) * frame),
          strategies: Math.floor((targets.strategies / totalFrames) * frame),
          templates: Math.floor((targets.templates / totalFrames) * frame),
          interviews: Math.floor((targets.interviews / totalFrames) * frame),
        });

        if (frame === totalFrames) clearInterval(counter);
      }, 1000 / frameRate);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="w-full py-20 padding-x flex justify-center items-center overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center">
     
        <div className="relative flex justify-center items-center">
      
          <motion.img
            src="/e-book/r2.png"
            alt="Back Card"
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
               whileHover={{
              rotate: 0,
              y: -10,
              scale: 1.03,
              transition: { type: "spring", stiffness: 200 },
            }}
            className="w-[280px] sm:w-[330px] rounded-2xl absolute top-10 -left-10"
          />

          <motion.img
            src="/e-book/r1.png"
            alt="Front Card"
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              rotate: 0,
              y: -10,
              scale: 1.03,
              transition: { type: "spring", stiffness: 200 },
            }}
            className="w-[280px] sm:w-[330px] rounded-2xl relative z-10 translate-x-20 translate-y-14"
          />
        </div>

        <div className="flex flex-col justify-center text-left ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            See the Value Before You <br />{" "}
            <span className="text-[#F40E00]">Download</span>
          </h2>

          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed max-w-lg">
            With 1900+ words of founder-focused lessons, multiple development
            strategies, and six chapters, this isn’t just an eBook; it’s your
            startup’s survival kit. it packs years of mobile app wisdom into one
            powerful roadmap. It’s a complete guide on mobile app development
            cost and the mobile app development process. Basically, it guides
            you from scratch on how to create a mobile app for bold founders
            who’d rather execute than overthink. Every page moves you closer
            from “someday I will” to “I already did.”
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-[#F40E00] hover:bg-[#d90d00] text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 w-fit"
          >
            Get the Proven Process
          </motion.button>
          <div className="p-2 text-sm opacity-65 ">
            <h2>
              
              <span>
                It’s the same process we use for million-dollar builds.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

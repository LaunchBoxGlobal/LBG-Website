"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const Branding = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  return (
    <section className="w-full pb-10">
      <section className="w-full padding-x flex flex-col items-center">
        <h2 className="section-heading">The Visuals of Fit 110</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7">
          For Fit 110, we chose a bold, energized palette to match the energy of
          the brand. The deep charcoal, teal, and vivid orange accents evoke
          strength. The logo is classic. The font gives the site a modern look.
          Images showcase high-intensity workouts and clean product shots. The
          overall look hits like a handshake: firm and unmistakably Fit 110.
        </p>

        <motion.div
          ref={ref1}
          initial={{ y: 100, scale: 0.4 }}
          animate={inView1 ? { y: 0, scale: 1 } : { y: 100, scale: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <Image
            src={"/case-studies/fit110/branding-fonts-image.png"}
            alt="branding-fonts-image"
            width={1280}
            height={881}
            className="mx-auto"
          />
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ y: 100, scale: 0.4 }}
          animate={inView2 ? { y: 0, scale: 1 } : { y: 100, scale: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <Image
            src={"/case-studies/fit110/fit110-branding-colors.png"}
            alt="fit110-branding-colors"
            width={1225}
            height={767}
            className="mx-auto mt-28"
          />
        </motion.div>

        {/* fit110-branding-colors */}
      </section>
    </section>
  );
};

export default Branding;

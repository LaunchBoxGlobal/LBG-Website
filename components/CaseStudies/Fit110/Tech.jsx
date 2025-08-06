"use client";
import { FIT110_TECHNOLOGIES } from "@/constants/case-studies/fit110/fit110-technologies";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // delay between each item
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Tech = () => {
  return (
    <section className="w-full pb-10">
      <section className="w-full padding-x flex flex-col items-center">
        <h2 className="section-heading">Powered to Perform</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7">
          We selected tools that made it possible for the website to perform
          well, load fast, be easy to manage. Just a clean, smart setup that
          runs like it should.
        </p>
      </section>

      <motion.section
        className="w-full mt-10 lg:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 padding-x gap-y-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {FIT110_TECHNOLOGIES?.map((tech, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center gap-2"
          >
            <Image
              src={tech?.icon}
              width={tech?.iconWidth}
              height={tech?.iconHeight}
              alt={`${tech?.title} icon`}
              loading="lazy"
            />
            <h3 className="font-semibold text-lg text-center leading-[1.2]">
              {tech?.title}
            </h3>
          </motion.div>
        ))}
      </motion.section>
    </section>
  );
};

export default Tech;

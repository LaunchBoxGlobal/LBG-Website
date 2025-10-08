"use client";
import { FITNESS_BY_FAITH_RESEARCH } from "@/constants/fitness-by-faith-content/fitness-by-faith-research";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const Research = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="w-full padding-x flex flex-col items-center relative">
      <h2 className="section-heading text-center z-10">Research</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        Through testing, questionnaires, and data tracking, our research
        approach examined user behavior to maximize Fitness by Faith with
        Laken's mobile experience in terms of engagement, preferences, and
        conversions.
      </p>

      <div
        ref={ref}
        className="w-full z-10 mt-10 flex flex-wrap justify-center gap-x-10 gap-y-10 xl:gap-y-20 lg:mt-20 relative"
      >
        {FITNESS_BY_FAITH_RESEARCH?.map((s, i) => {
          return (
            <motion.div
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.5 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={i}
              className={`w-full md:w-[40%] lg:w-[30%] flex flex-col items-center text-center gap-3 relative ${
                i === 4
                  ? "px-7 md:px-4 lg:pl-20 lg:-right-20 xl:right-0"
                  : "px-7 md:px-4 lg:px-7"
              }`}
            >
              {i === 1 && (
                <Image
                  src={
                    "/case-studies/fitness-by-faith/research-border-line.svg"
                  }
                  alt="research-border-line"
                  width={270}
                  height={500}
                  loading="lazy"
                  className="absolute left-[-8%] hidden lg:block top-8 midlg:top-0"
                />
              )}
              {i === 2 && (
                <Image
                  src={
                    "/case-studies/fitness-by-faith/research-border-line.svg"
                  }
                  alt="research-border-line"
                  width={270}
                  height={500}
                  loading="lazy"
                  className="absolute left-[-8%] hidden lg:block top-8 midlg:top-0"
                />
              )}
              <Image
                src={s?.image}
                width={s?.imageWidth}
                height={s?.imageWidth}
                loading="lazy"
                alt={`${s?.title} icon`}
              />
              <h3 className="font-bold text-[24px]">{s?.title}</h3>
              <p className="text-lg">{s?.description}</p>
            </motion.div>
          );
        })}
      </div>

      <Image
        src="/case-studies/fitness-by-faith/glow-right.webp"
        alt=""
        role="presentation"
        width={736}
        height={736}
        quality={70}
        loading="lazy"
        sizes="(max-width: 768px) 40vw,
         (max-width: 1280px) 30vw,
         736px"
        className="absolute right-0 -top-60 z-0 w-auto h-auto max-w-[736px]"
      />
    </section>
  );
};

export default Research;

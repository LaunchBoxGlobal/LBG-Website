"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const approach = [
  {
    icon: "/case-studies/fitness-by-faith/work-approach-icon-1.webp",
    title: "Foundation & UX",
    subtitle: "Structure",
  },
  {
    icon: "/case-studies/fitness-by-faith/work-approach-icon-2.webp",
    title: "Planning & Research",
    subtitle: "think tank",
  },
  {
    icon: "/case-studies/fitness-by-faith/work-approach-icon-3.webp",
    title: "UI Design",
    subtitle: "aesthetics",
  },
  {
    icon: "/case-studies/fitness-by-faith/work-approach-icon-4.webp",
    title: "Development & Coding",
    subtitle: "techy part",
  },
  {
    icon: "/case-studies/fitness-by-faith/work-approach-icon-5.webp",
    title: "Deployment & Go Live!",
    subtitle: "jackpot",
  },
  {
    icon: "/case-studies/fitness-by-faith/work-approach-icon-6.webp",
    title: "Testing & Evaluation",
    subtitle: "the excitement",
  },
];

const WorkApproach = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading z-10">Work Approach</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl my-7 z-10">
        We built Fitness by Faith with Laken step-by-step, testing each feature
        with real users first. Our mobile app development process focused on
        making workouts simple to track while keeping trainer tools powerful
        behind the scenes.
      </p>

      <div
        ref={ref}
        className="w-full grid grid-cols-2 md:grid-cols-6 gap-8 mt-10 lg:mt-16 md:h-[400px] relative"
      >
        <Image
          src="/case-studies/fitness-by-faith/work-approach-lines.webp"
          alt="Decorative background lines for Fitness by Faith work approach section"
          width={1277}
          height={495}
          quality={80}
          loading="lazy"
          sizes="(max-width: 1024px) 0vw, 1277px"
          className="absolute z-0 right-0 -left-4 -top-[16%] h-auto hidden lg:block"
          priority={false}
        />

        {approach?.map((a, i) => {
          return (
            <motion.div
              initial={{ scale: 0.4 }}
              animate={inView ? { scale: 1 } : { scale: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`w-full flex flex-col items-center gap-5 lg:gap-7 text-center relative ${
                i === 1
                  ? "md:top-[150px]"
                  : i === 3
                  ? "md:top-[150px]"
                  : i === 5
                  ? "md:top-[150px]"
                  : ""
              }`}
            >
              <div
                key={i}
                className="bg-white w-[147px] h-[147px] rounded-[33px] custom-shadow flex flex-col items-center gap-3 justify-center p-6"
              >
                <Image
                  src={a?.icon}
                  alt={a?.title}
                  width={72}
                  height={68}
                  className="object-contain h-[38px]"
                  loading="lazy"
                />
                <p className="uppercase fitnessText text-xs font-semibold">
                  {a?.subtitle}
                </p>
              </div>
              <h3 className="text-lg font-semibold leadiing-[1] px-2 lg:px-6 lg:bg-white">
                {a?.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkApproach;

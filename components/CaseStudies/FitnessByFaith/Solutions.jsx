"use client";
import { FITNESS_BY_FAITH_SOLUTIONS } from "@/constants/fitness-by-faith-content/fitness-by-faith-solutions";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const Solutions = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="w-full padding-x flex flex-col items-center relative">
      <h2 className="section-heading text-center z-10">
        Challenges & Solutions
      </h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7 z-10">
        Building Fitness by Faith with Laken wasn’t just about coding an app, it
        was about solving real headaches. From freemium upgrades that didn’t
        frustrate users to live sessions that didn’t crash under pressure, every
        feature had to work smoothly. The team needed mobile app development
        that could handle scale without making things complicated for trainers
        or admins.
      </p>
      <div
        ref={ref}
        className="w-full mt-10 lg:mt-14 border-2 border-[#64B5AC] border-dashed p-10 rounded-[15px] grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-0 z-10 bg-white"
      >
        {FITNESS_BY_FAITH_SOLUTIONS?.map((s, i) => {
          return (
            <div key={i} className={`w-full`}>
              <div
                className={`flex flex-col items-start gap-3 lg:px-5 h-auto lg:h-[414px] xl:h-[390px]  ${
                  i !== 4 && "lg:border-r-2 border-dashed border-[#64B5AC]"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0.5, scale: 0.5 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.5, scale: 0.5 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={"/case-studies/fitness-by-faith/problem-icon.svg"}
                    alt="problem icon"
                    width={35}
                    loading="lazy"
                    height={32}
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0.5, scale: 0.5 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.5, scale: 0.5 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="uppercase fitnessText text-lg font-semibold"
                >
                  problem 0{i + 1}
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0.5, scale: 0.5 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.5, scale: 0.5 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-[19px] font-semibold leading-[1.2]"
                >
                  {s?.problemTitle}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0.5, scale: 0.5 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.5, scale: 0.5 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-lg leading-[1.3]"
                >
                  {s?.problemDescription}
                </motion.p>
              </div>
              <div
                className={`bg-[#64B5AC] h-auto lg:h-[494px] xl:h-[450px] p-5 flex flex-col items-start gap-3 text-white mt-5 ${
                  i !== 4 && "lg:border-r-2 border-dashed border-[#fff]"
                } ${
                  i === 0
                    ? "rounded-[15px] lg:rounded-r-none"
                    : i === 4
                    ? "rounded-[15px] lg:rounded-l-none"
                    : "rounded-[15px] lg:rounded-none"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0.5, scale: 0.5 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.5, scale: 0.5 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={s?.solutionIcon}
                    alt="problem icon"
                    width={35}
                    height={32}
                    loading="lazy"
                  />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0.5, scale: 0.5 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.5, scale: 0.5 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-[19px] font-semibold leading-[1.2]"
                >
                  {s?.solutionTitle}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0.5, scale: 0.5 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.5, scale: 0.5 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-lg leading-[1.3]"
                >
                  {s?.solutionDescription}
                </motion.p>
              </div>
            </div>
          );
        })}
      </div>

      <Image
        src={"/case-studies/fitness-by-faith/shadow-solutions.webp"}
        alt="shadow-solutions"
        width={736}
        height={736}
        className="absolute left-0 top-0 z-0"
        loading="lazy"
      />
      <Image
        src={"/case-studies/fitness-by-faith/glow-right.webp"}
        alt="shadow-solutions"
        width={736}
        height={736}
        loading="lazy"
        className="absolute right-0 -top-[80%] z-0"
      />
    </section>
  );
};

export default Solutions;

"use client";
import { FIT110_RESEARCH_STEPS } from "@/constants/case-studies/fit110/fit110-research";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Research = () => {
  return (
    <section className="w-full pb-10 relative">
      <section className="w-full padding-x flex flex-col items-center z-10">
        <h2 className="section-heading text-center">
          The First Step: Research
        </h2>
        <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
          We followed a clear agile workflow. The plan was not to overcomplicate
          things; we planned to keep it simple. We made fast decisions, kept
          moving, and built without getting stuck in the usual mess.
        </p>
      </section>

      <section className="w-full padding-x mt-10 lg:mt-16 z-10">
        {FIT110_RESEARCH_STEPS?.map((step, index) => {
          return (
            <motion.div
              className="w-full flex flex-col lg:flex-row gap-y-4 items-center justify-between mt-4 z-10 relative"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.2, // 👈 Delay each item
              }}
            >
              <div className="bg-[#EBEBEB] rounded-full text-center p-2 w-full lg:min-w-[360px] lg:max-w-[360px] min-h-[100px] flex items-center justify-center">
                <h3 className="text-[22px] font-semibold text-[#212121] tracking-tight lg:w-[60%] leading-[1.2]">
                  {step?.title}
                </h3>
              </div>
              <div className="min-w-[207px] lg:flex items-center hidden">
                <div className="min-w-5 h-5 fit110-red-bg rounded-full" />
                <div
                  className="w-full h-1"
                  style={{
                    background:
                      "linear-gradient(to left, transparent, #FF0000)",
                  }}
                />
              </div>
              <div className="lg:pl-2">
                <p className="text-[18px] font-medium text-[#212121] leading-[1.2] text-center lg:text-start">
                  {step?.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </section>

      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 top-[-20%] z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 top-[-40%] z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 bottom-[-10%] z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 bottom-[-40%] z-0 h-[40vw] w-[50vw]"
      />

      {/* right */}
      <Image
        src={"/case-studies/fit110/fit110-glow-right.png"}
        alt="fit110-glow-right"
        width={536}
        height={563}
        className="absolute right-0 top-[10%] z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-right.png"}
        alt="fit110-glow-right"
        width={536}
        height={563}
        className="absolute right-0 bottom-[0%] z-0 h-[40vw] w-[50vw]"
      />
    </section>
  );
};

export default Research;

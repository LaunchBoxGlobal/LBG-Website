"use client";
import { SMART_PLANNING } from "@/constants/mobile-app-development/SmartPlanning";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { WATERFALL_WORKFLOW } from "@/constants/custom-software-development/WaterfallWorkflow";

const WaterfallWorkflow = () => {
  return (
    <section className="w-full mt-10 lg:mt-20 lg:mb-10 relative">
      <Image
        src={"/smart-planning-line.png"}
        width={1175}
        height={1580}
        className="h-[1740px] absolute left-1/2 -translate-x-1/2 top-12 hidden lg:block"
      />
      <Image
        src={"/rocket-mockup.png"}
        width={119}
        height={221}
        className="object-contain absolute bottom-[0.3%] right-[27%] w-[219px] h-[221px] hidden lg:block"
      />
      {WATERFALL_WORKFLOW?.map((plan, index) => {
        const isLeft = index % 2 === 0;
        const cardRef = useRef(null);
        const isInView = useInView(cardRef, { once: true, margin: "-100px" });
        return (
          <motion.div
            className={`w-full lg:w-[490px] h-[243px] rounded-2xl flex flex-col py-6 px-10 items-start border gap-1 relative z-10 bg-white mb-5 ${
              index === 4
                ? "lg:-top-20"
                : index === 5
                ? "xl:-top-24"
                : index === 6
                ? "xl:-top-40"
                : ""
            } ${
              isLeft
                ? `border-l-[17px] border-[#F40E00] lg:mr-auto`
                : `border-r-[17px] border-[#F40E00] lg:ml-auto top-0`
            }`}
            key={index}
            ref={cardRef}
            initial={{ opacity: 0.5, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="font-medium text-base lg:text-[17px]">
              {plan?.tag_line}
            </p>
            <h3 className="font-medium text-[22px] lg:text-[30px] red-text">
              {plan?.title}
            </h3>
            <p className="text-[16px] lg:text-lg">{plan?.description}</p>
            <div
              className={`w-[73px] h-[73px] bg-[#F40E00] rounded-full hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2 ${
                isLeft ? "right-[-8%]" : "left-[-8%]"
              }`}
            >
              <span className="text-white text-[47px] font-medium">{`0${
                index + 1
              }`}</span>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default WaterfallWorkflow;

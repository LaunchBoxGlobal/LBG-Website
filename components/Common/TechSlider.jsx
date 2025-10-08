"use client";
import Image from "next/image";
import { TECH_STACK } from "@/constants/techStack";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -1280],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const TechSlider = () => {
  return (
    <section className="w-full py-3 overflow-hidden bg-[#fff]">
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="flex items-center gap-x-2 w-max"
      >
        {[...TECH_STACK, ...TECH_STACK].map((platform, index) => (
          <div
            key={index}
            className="border px-3 py-2 rounded-xl flex items-center justify-center gap-3"
          >
            <div className="bg-white custom-shadow w-[29px] h-[29px] lg:w-[53px] lg:h-[53px] flex items-center justify-center p-1 lg:p-2.5 rounded-xl">
              <img
                key={index}
                src={platform?.image}
                width={20}
                height={20}
                alt={platform?.title}
                loading="lazy"
                priority={false}
                className="w-auto h-full object-contain"
              />
            </div>
            <h3 className="text-base lg:text-[25px] 2xl:text-[30px] text-gray-400 font-light">
              {platform?.title}
            </h3>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechSlider;

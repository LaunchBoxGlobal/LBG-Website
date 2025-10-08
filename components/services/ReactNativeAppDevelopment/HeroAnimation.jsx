"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

const HeroAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    // margin: "-30% 0px -30% -40px",
  });
  return (
    <div
      ref={ref}
      className="w-full flex justify-center h-[65vh] md:min-h-[861px]"
    >
      <div className="w-[95%] h-[300px] md:w-[90%] md:h-[650px] lg:w-[832px] lg:h-[732px] relative flex items-center justify-center rounded-full verflow-visible">
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute z-20 top-[20%] md:top-[20%] lg:top-[16%] lg:right-[8%] w-full md:w-[88%] lg:w-[88%]"
        >
          <Image
            src="/react-native/hero-mockup.webp"
            alt="React Native app development company showcasing cross-platform mobile application interface and features"
            width={761}
            height={653}
            priority
            sizes="(max-width: 768px) 90vw,
         (max-width: 1200px) 70vw,
         761px"
            className="z-10 object-contain"
          />
        </motion.div>
        <div className="w-[95%] h-[300px] md:w-[550px] md:h-[550px] lg:w-[632px] lg:h-[632px] border relative flex items-center justify-center rounded-full border-[#00A7D4] overflow-visible">
          <div className="w-[80%] h-[247px] md:w-[377px] md:h-[377px] lg:w-[457px] lg:h-[457px] bg-[#00A7D4] rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-0" />

          <motion.div
            initial={{ scale: 0.4 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="absolute top-[0%] right-[2%]"
          >
            <Image
              src={"/react-native/hero-card-1.webp"}
              width={223}
              height={65}
              alt="hero-card-1"
              className="hidden md:block"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.4 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="absolute top-[25%] right-[-20%] hidden md:block"
          >
            <Image
              src={"/react-native/hero-card-2.webp"}
              width={197}
              height={97}
              alt="react-native-app-hero-mockup-1"
              className="max-w-[240] w-[237px] object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.4 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="absolute top-[8%] left-[2%] z-20 hidden md:block"
          >
            <Image
              src={"/react-native/hero-card-3.webp"}
              width={245}
              height={40}
              alt="react-native-app-hero-mockup-1"
              className="z-20"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;

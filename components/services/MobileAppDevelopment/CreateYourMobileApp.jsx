"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CreateYourMobileApp = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section
      className="w-full padding-x py-10 lg:py-28 mt-6 relative"
      ref={ref}
    >
      <section className="w-full z-10 h-[410px] rounded-lg bg-[#212121] relative group overflow-visible">
        {/* Background Image */}
        <Image
          src={"/create-your-mobile-app-map.png"}
          alt="map image"
          width={600}
          height={410}
          className="w-[70%] h-full absolute inset-0 opacity-10 z-0"
        />

        {/* Text Section */}
        <section className="h-full text-white z-20 flex flex-col items-center text-center lg:items-start lg:text-start justify-center gap-5 w-full lg:w-[65%] px-4 lg:px-16">
          <h2 className="font-bold text-[36px] lg:text-[50px] leading-10">
            Let’s Create Your App
          </h2>
          <p className="text-lg lg:text-[22px] font-light">
            We follow a structured and client-focused development process to
            ensure the successful delivery of high-quality software solutions.
          </p>
          <Link
            href={"/contact-us"}
            className="w-[242px] h-[47px] mt-3 bg-white text-black flex items-center justify-center rounded-[11px] text-lg font-medium z-30 hover:bg-[#F40E00] hover:text-white transition-all duration-300"
          >
            Start Your App Today!
          </Link>
        </section>

        {/* Mockups with Sliding Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute right-[14%] bottom-[-4%] hidden lg:block z-0"
        >
          <Image
            src={"/create-your-mobile-app-mockup-01.webp"}
            alt="mobile app mockup 1"
            width={266}
            height={492}
            className="w-[266px] h-[492px] mockup2"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute right-0 bottom-[-3%] hidden lg:block z-0"
        >
          <Image
            src={"/create-your-mobile-app-mockup-02.webp"}
            alt="mobile app mockup 2"
            width={299}
            height={492}
            className="w-[299px] h-[492px] mockup"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default CreateYourMobileApp;

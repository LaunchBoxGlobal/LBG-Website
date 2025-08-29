"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="w-full relative overflow-hidden bg-white min-h-[100vh]">
      <section
        ref={ref}
        className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 overflow-hidden z-10"
      >
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-10 flex flex-wrap justify-center items-center gap-4">
          Leading Mobile App Development Company in{" "}
          <span className="red-bg inline-block py-4 px-10 text-white rounded-[17px]">
            Texas
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto z-10">
          Searching for a mobile app development company in Texas? We’ll build a
          high-performance mobile app just for you!
        </p>

        <section className="w-full mt-5 z-10">
          <Link
            href={`/contact-us`}
            className="max-w-[220px] bg-[#F40E00] hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white mx-auto z-10"
          >
            Get Started Today
          </Link>
        </section>
      </section>
      <section className="lg:h-[609px] w-full flex justify-center relative items-end mt-10">
        <motion.div
          initial={{ y: 600 }}
          animate={inView ? { y: 0 } : { y: 600 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto"
        >
          <img
            src={"/locations/mobile-app-dev-company-texas/mobile-mockup.webp"}
            width={1472}
            height={614}
            priority
            alt="Mobile App Development Company in Texas showcasing cross-platform banking app interface"
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1472px"
            className="mx-auto h-full object-contain z-10 relative"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default Hero;

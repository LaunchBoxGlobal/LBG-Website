"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CtaSection = () => {
  const { ref: ctaRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="w-full padding-x py-10 lg:py-28 mt-6">
      <section
        ref={ctaRef}
        className="w-full h-[410px] rounded-lg bg-[#212121] relative border group overflow-x-hidden overflow-y-hidden flex items-center justify-end"
      >
        {/* Text Section */}
        <section className="h-full text-white z-20 flex flex-col items-center text-center lg:items-start lg:text-start justify-center gap-5 w-full lg:w-[55%] px-4 lg:px-16 relative">
          {/* <Image
            src={"/create-your-mobile-app-map.webp"}
            alt="map image"
            width={600}
            height={410}
            className="w-[100%] h-full absolute inset-0 opacity-10 z-0 object-cover"
          /> */}
          <h2 className="font-bold text-[36px] lg:text-[50px] leading-[2.7rem] lg:leading-[52px]">
            Let’s Build Something That Sells
          </h2>
          <p className="text-lg lg:text-[22px] font-light">
            From custom ecommerce websites to mobile apps, our ecommerce web
            development company helps businesses grow with tailored,
            high-performance solutions.
          </p>
          <Link
            href={"/contact-us"}
            className="w-[242px] h-[47px] mt-3 bg-white text-black flex items-center justify-center rounded-[11px] text-lg font-medium z-30 hover:bg-[#F40E00] hover:text-white transition-all duration-300"
          >
            Build My Store Now
          </Link>
        </section>

        {/* Image with animation */}
        <motion.div
          initial={{ x: "100%" }}
          animate={inView ? { x: 0 } : { x: "100%" }} // Reset when out of view
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[45%] h-full z-10 relative hidden lg:flex justify-end"
        >
          <Image
            src={"/ecommerce-cta-mockup.png"}
            alt="ecommerce-cta-image"
            width={579}
            height={622}
            className="object-contain"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default CtaSection;

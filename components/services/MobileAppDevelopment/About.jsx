"use client";
import React, { useRef } from "react";
import Character from "./ScrollOpacityText";
import Link from "next/link";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const paragraph =
  "Constructing apps that are simple, fast, and accessible. We mainly offer mobile app development services, focusing on quality, design, and deployment. Experienced in iOS mobile app development. Developing apps that are fluent to implement. Each project is carefully planned to deliver a smooth experience for enterprises and companies. That solves the actual problems and involves users. Every step is taken with proper attention to detail. Making sure the final product is top-notch and straight forward.";

const About = () => {
  const buttonRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: buttonRef,
    offset: ["start end", "start center"],
  });

  // Animate fill width from 0% to 100% based on scroll progress
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section className="w-full py-12 lg:pb-20 flex flex-col items-center justify-center text-center gap-4 padding-x">
      <h2 className="red-text text-[25px] font-semibold">
        Reliable Mobile App Services for iOS and more
      </h2>
      <Character value={paragraph} />

      <section className="w-full flex items-start justify-end relative -top-10">
        <Link
          href={"/contact-us"}
          ref={buttonRef}
          className="relative w-[109px] lg:w-[156px] h-[109px] lg:h-[156px] rounded-full border text-base lg:text-[25px] flex flex-col gap-2 uppercase items-center justify-center border-[#f40e00] text-white overflow-hidden"
        >
          {/* Background fill animation */}
          <motion.div
            className="absolute inset-0 bg-[#f40e00] z-0"
            style={{
              width: fillWidth,
            }}
          />

          {/* Button Content (placed above animated bg) */}
          <span className="relative z-10 flex flex-col items-center justify-center">
            let's <br /> talk
            <Image
              src={"/footer-cta-icon.png"}
              width={28}
              height={24}
              className="w-[18px] h-[15px] lg:w-[28px] lg:h-[24px] mt-2"
            />
          </span>
        </Link>
      </section>
    </section>
  );
};

export default About;

{
  /* <Link
          href={"/contact-us"}
          className="w-[109px] lg:w-[156px] h-[109px] lg:h-[156px] rounded-full border text-base lg:text-[25px] flex flex-col gap-2 uppercase items-center justify-center border-[#f40e00] bg-[#f40e00] text-white transition-all duration-300"
        >
          let's <br /> talk
          <Image
            src={"/footer-cta-icon.png"}
            width={28}
            height={24}
            className="w-[18px] h-[15px] lg:w-[28px] lg:h-[24px]"
          />
        </Link> */
}

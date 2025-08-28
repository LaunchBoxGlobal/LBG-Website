"use client";
import React, { useRef } from "react";
// import Character, { TextMaskEffect } from "./ScrollOpacityText";
import Character from "@/components/Common/ServicesAboutSection";
import Link from "next/link";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import "./Styles.css";

const paragraph =
  "We are the top choice for startups seeking the best mobile app development company because we focus on providing mobile app development services that solve actual business problems. We create mobile apps that are reliable, secure, and ready to grow. Our mobile app development team makes sure that every project is carefully planned and provides a smooth experience for businesses. We even stay with you after the project is delivered to fix any bugs and keep your app updated.";

const About = () => {
  // const buttonRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: buttonRef,
  //   offset: ["start end", "start center"],
  // });

  // // Animate fill width from 0% to 100% based on scroll progress
  // const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section className="w-full py-10 lg:pt-32 lg:pb-20 flex flex-col items-center gap-6 padding-x">
      {/* <h2 className="red-text text-[25px] font-semibold">
        Building Apps That Work: Simple, Reliable, and User-Focused
      </h2> */}
      {/* <TextMaskEffect /> */}
      <h2
        className={
          "text-xl lg:text-[25px] text-[#f40e00] font-semibold text-center"
        }
      >
        About LaunchBox Global
      </h2>
      {/* <Character value={paragraph} /> */}
      <p className="text-[22px] lg:text-[2.8vw] text-center lg:leading-[56px] text-gray-400 tracking-tight">
        {paragraph}
      </p>

      {/* <section className="w-full flex items-start justify-end relative -top-10">
        <Link
          href={"/contact-us"}
          ref={buttonRef}
          className="relative w-[109px] lg:w-[156px] h-[109px] lg:h-[156px] rounded-full border text-base lg:text-[25px] flex flex-col gap-2 uppercase items-center justify-center border-[#f40e00] text-white overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-[#f40e00] z-0"
            style={{
              width: fillWidth,
            }}
          />

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
      </section> */}
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

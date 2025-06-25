"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20">
      <section className="w-full h-[410px] rounded-lg bg-[#212121]  overflow-y-visible relative border group flex items-center justify-end">
        <section className="h-full text-white z-20 flex flex-col items-center text-center lg:items-start lg:text-start justify-center gap-5 w-full lg:w-[55%] p-4 lg:px-16 relative">
          <Image
            src={"/create-your-mobile-app-map.webp"}
            alt="map image"
            width={600}
            height={410}
            loading="lazy"
            className="w-[100%] h-full absolute inset-0 opacity-10 z-0 object-cover"
          />
          <h2 className="font-bold text-[36px] lg:text-[50px] leading-[2.7rem] lg:leading-[52px]">
            Your Audience is Out There — Let’s Reach Them.
          </h2>
          <p className="text-lg lg:text-[22px] font-light">
            Struggling to get noticed? Our digital marketing services are built
            to drive real growth — more traffic, better leads, and higher ROI.
          </p>
          <Link
            href={"/contact-us"}
            className="w-[242px] h-[47px] mt-3 bg-white text-black flex items-center justify-center rounded-[11px] text-lg font-medium z-30 hover:bg-[#F40E00] hover:text-white transition-all duration-300"
          >
            Book a Free Strategy Call
          </Link>
        </section>

        <section className="w-[45%] h-[410px] z-10 relative hidden lg:block">
          <motion.img
            src={"/digital-marketing-cta-mockup.webp"}
            alt="digital-marketing-cta-mockup"
            width={249}
            height={474}
            loading="lazy"
            className="w-[329px] h-[464px] absolute right-[15%] bottom-[-1%]"
            animate={{ y: [0, -30, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <Image
            src={"/cta-plus-icon.webp"}
            alt="cta-plus-icon"
            width={14}
            height={14}
            loading="lazy"
            className="absolute left-[25%] top-[50%]"
          />
          <Image
            src={"/cta-plus-icon.webp"}
            alt="cta-plus-icon"
            width={14}
            height={14}
            loading="lazy"
            className="absolute right-[13%] top-[20%]"
          />
          <Image
            src={"/cta-plus-icon.webp"}
            alt="cta-plus-icon"
            width={14}
            height={14}
            loading="lazy"
            className="absolute right-[23%] top-[70%]"
          />
          {/* card */}
          <motion.img
            animate={{ y: [0, -30, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={"/digital-marketing-cta-card.webp"}
            alt="digital-marketing-cta-card"
            width={143}
            height={138}
            loading="lazy"
            className="w-[163px] h-[158px] absolute right-[50%] top-[16%]"
          />
          {/* digital-marketing-likes-card-01 */}
          <motion.img
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={"/digital-marketing-likes-card-01.webp"}
            alt="digital-marketing-likes-card-01"
            width={98}
            height={55}
            loading="lazy"
            className="wi-[100px] h-[45px] absolute top-[55%] left-[15%]"
          />
          {/* digital-marketing-likes-card-02 */}
          <motion.img
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={"/digital-marketing-likes-card-02.webp"}
            alt="digital-marketing-likes-card-02"
            width={98}
            height={55}
            loading="lazy"
            className="wi-[100px] h-[45px] absolute top-[40%] right-[11%]"
          />
          {/* digitla-marketing-cta-line */}
          {/* <Image
            src={"/digitla-marketing-cta-line.webp"}
            alt="digitla-marketing-cta-line"
            width={562}
            height={401}
            className="w-[592px] h-full relative right-0 z-0"
          /> */}
        </section>
      </section>
    </section>
  );
};

export default CTA;

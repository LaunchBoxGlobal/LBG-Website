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
      <Image
        src={"/create-your-mobile-app-map.png"}
        alt="map image"
        width={600}
        height={410}
        className="w-[70%] h-[90%] absolute inset-0 opacity-10 z-0"
      />
      <section className="w-full h-[410px] rounded-lg bg-[#212121] relative group overflow-visible z-10">
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
          <h2 className="font-bold text-[36px] lg:text-[50px] lg:leading-[52px] z-10">
            Let's Engineer Your Web App!
          </h2>
          <p className="text-lg lg:text-[22px] font-light z-10">
            We follow a transparent, agile-driven process to build scalable and
            high-performing web applications that solve real business problems.
          </p>
          <Link
            href={"/contact-us"}
            className="w-[242px] h-[47px] mt-3 bg-white text-black flex items-center justify-center rounded-[11px] text-lg font-medium z-30 hover:bg-[#F40E00] hover:text-white transition-all duration-300"
          >
            Start Your Web App Today!
          </Link>
        </section>

        <Image
          src={"/cta-laptop-mockup.png"}
          width={543}
          height={588}
          alt="cta-laptop-mockup"
          className="absolute right-[-0%] bottom-[7%] w-[503px] h-[438px] workFlowImage hidden lg:block"
        />
      </section>
    </section>
  );
};

export default CreateYourMobileApp;

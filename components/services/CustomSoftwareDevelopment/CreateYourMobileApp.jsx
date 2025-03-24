"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CreateYourMobileApp = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="w-full padding-x py-10 lg:py-28 mt-6" ref={ref}>
      <section className="w-full h-[410px] rounded-lg bg-[#212121] relative group overflow-x-hidden overflow-y-hidden flex items-center justify-end">
        {/* Background Image */}
        <Image
          src={"/create-your-mobile-app-map.png"}
          alt="map image"
          width={600}
          height={410}
          className="w-[70%] h-full absolute inset-0 opacity-10 z-0"
        />

        {/* Text Section */}
        <section className="h-full text-white z-20 flex flex-col items-center text-center lg:items-start lg:text-start justify-center gap-5 w-full lg:w-[55%] pl-4 lg:px-16">
          <h2 className="font-bold text-[36px] lg:text-[50px] lg:leading-[52px]">
            Tired of Software That Doesn’t Fit? <br /> Let’s Fix That.
          </h2>
          <p className="text-lg lg:text-[22px] font-light">
            Generic software comes with limitations. Custom software development
            gives you a solution built around your exact needs, efficient and
            scalable.
          </p>
          <Link
            href={"/contact-us"}
            className="w-[242px] h-[47px] mt-3 bg-white text-black flex items-center justify-center rounded-[11px] text-lg font-medium z-30 hover:bg-[#F40E00] hover:text-white transition-all duration-300"
          >
            Start Your Custom Build
          </Link>
        </section>

        <section className="w-[45%] h-full z-10 relative hidden lg:block">
          <Image
            src={"/create-your-software-mobile-mockup.png"}
            alt="create-your-software-mobile-mockup"
            width={148}
            height={321}
            className="w-[188px] h-[371px] absolute right-[24%] top-[9%]"
          />
          <Image
            src={"/create-your-mobile-app-mockup-03.png"}
            alt="create-your-software-mobile-mockup"
            width={148}
            height={321}
            className="w-[228px] h-[371px] absolute left-[-6%] top-[-10%]"
          />
          <Image
            src={"/create-your-software-icon-01.png"}
            alt="create-your-software-icon-01"
            width={121}
            height={28}
            className="w-[121px] h-[38px] absolute right-[-3%] top-[14%]"
          />
          <Image
            src={"/create-your-software-icon-03.png"}
            alt="create-your-software-icon-01"
            width={121}
            height={28}
            className="w-[132px] h-[68px] absolute left-[2%] bottom-[8%]"
          />

          <Image
            src={"/create-your-software-dashboard-mockup.png"}
            width={552}
            height={446}
            alt="custom-software-create-your-software"
            className="absolute right-[-8%] bottom-[-1.5%] w-[500px] h-[312px] hidden lg:block"
          />
        </section>
      </section>
    </section>
  );
};

export default CreateYourMobileApp;

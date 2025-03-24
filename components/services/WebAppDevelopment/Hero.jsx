import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import FlipText from "@/components/Global/FlipText";

const phrases = [
  "Empower Startups",
  "Scale Enterprises",
  "Streamline Operations",
  "Enhance Efficiency",
];

const Hero = () => {
  return (
    <section className="w-full relative mb-10 lg:mb-40 overflow-x-hidden">
      <section className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden">
        {/* <h1 className="font-bold text-[34px] lg:text-[64px] 2xl:text-[100px] text-center tracking-normal leading-10 lg:leading-[64px] 2xl:leading-[104px] w-[100%]">
          Web App Development Services That Truly{" "}
          <span className="red-text">Deliver Results</span>
        </h1> */}
        <p className="text-xl font-bold red-text">Your Success Partner In</p>
        <h1 className="font-bold text-[34px] lg:text-[54px] 2xl:text-[100px] text-center tracking-normal leading-10 lg:leading-[64px] 2xl:leading-[104px] w-full">
          Web App Development Services That{" "}
          <span className="relative inline-flex align-baseline text-center min-w-fit">
            <FlipText phrases={phrases} />
          </span>
        </h1>
        <p className="text-base lg:text-[22px] 2xl:text-[26px] font-medium text-gray-500 text-center lg:w-[75%] leading-8 my-2">
          Helping startups scale and enterprises operate smarter with reliable
          Web App Development Services that drive real results.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-8">
          <Link
            href={"/contact-us"}
            className={`bg-[#F40E00] text-white px-5 lg:px-7 py-4 md:py-5 2xl:py-8 font-bold rounded-xl flex items-center justify-center gap-2 text-sm lg:text-[18px] 2xl:text-[25px] hover:bg-[#000] transition-all duration-300 red-btn-shadow`}
          >
            Get A Free Consultation
          </Link>
        </div>
      </section>
      <div className="w-full bg-white">
        <ImageSlider />
      </div>
      {/* <Image
        src={"/mobile-app-dev-mobile-mockups.png"}
        className="w-full object-contain h-[220px] lg:hidden"
        width={380}
        height={280}
        style={{ width: "100%" }}
      /> */}
    </section>
  );
};

export default Hero;

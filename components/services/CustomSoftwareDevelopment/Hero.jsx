import React from "react";
import Link from "next/link";
import HeroAnimation from "./HeroAnimation";
import FlipText from "@/components/Global/FlipText";

const phrases = [
  "Deliver Results",
  "Advanced Infrastructure",
  "Seamless Data Flow",
  "Agile Workflows",
];
const Hero = () => {
  return (
    <section className="w-full relative overflow-x-hidden">
      <div className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-5 bg-white overflow-hidden">
        <h1 className="font-bold text-[34px] lg:text-[64px] 2xl:text-[100px] text-center tracking-normal leading-10 lg:leading-[64px] 2xl:leading-[104px] w-[100%]">
          Custom Software Development Services That Truly{" "}
          <span className="red-text">Deliver Results</span>
          {/* <div className="relative -top-1.5 md:-top-3 2xl:top-2 inline">
            <FlipText phrases={phrases} />
          </div> */}
        </h1>

        <p className="text-base lg:text-[22px] 2xl:text-[26px] font-medium text-gray-500 text-center lg:w-[75%] leading-8">
          We offer web app development services that solve real problems. As a
          trusted web application service agency. We build web apps that are
          simple, reliable and ready to grow.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1">
          <Link
            href={"/contact-us"}
            className={`bg-[#F40E00] text-white px-5 lg:px-7 py-4 md:py-5 2xl:py-8 font-bold rounded-xl flex items-center justify-center gap-2 text-sm lg:text-[18px] 2xl:text-[25px] hover:bg-[#000] transition-all duration-300 red-btn-shadow`}
          >
            Get A Free Consultation
          </Link>
        </div>
        <HeroAnimation />
      </div>
    </section>
  );
};

export default Hero;

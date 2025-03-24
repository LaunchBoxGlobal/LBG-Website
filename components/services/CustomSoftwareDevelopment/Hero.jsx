import React from "react";
import Link from "next/link";
import HeroAnimation from "./HeroAnimation";
import FlipText from "@/components/Global/FlipText";

const phrases = [
  "Advanced Infrastructure",
  "Scalable Architecture",
  "Optimized Performance",
  "Effortless Integrations",
];
const Hero = () => {
  return (
    <section className="w-full relative overflow-x-hidden">
      <div className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-5 bg-white overflow-hidden">
        <p className="text-xl font-bold red-text uppercase">
          Powering Innovation with
        </p>
        <h1 className="font-bold text-[34px] lg:text-[64px] 2xl:text-[100px] text-center tracking-normal leading-10 lg:leading-[64px] 2xl:leading-[104px] w-full">
          Custom Software Development That Delivers{" "}
          <span className="relative inline-flex align-baseline text-center -top-[2px] min-w-fit">
            <FlipText phrases={phrases} />
          </span>
        </h1>

        {/* <span className="red-text">Deliver </span> */}
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

import Link from "next/link";
import React from "react";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white padding-x">
      <section className="w-full relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 lg:gap-3 overflow-hidden z-10">
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-20 lg:w-[85%]">
          Expert Mobile App Development in{" "}
          <span className="red-text">Austin</span>
        </h1>
        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto z-20">
          Offering top-tier mobile app development in Austin, we design and
          build apps that simplify experiences and strengthen brands. Our
          process combines creativity, strategy, and technology to create
          flexible digital solutions.
        </p>

        <section className="w-full mt-5 z-20">
          <Link
            href={`/contact-us`}
            className="max-w-[260px] bg-[#F40E00] hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white mx-auto z-20"
          >
            Start Free Consultation
          </Link>
        </section>
      </section>

      <HeroAnimation />

      <div className="red-blurry-gradient absolute left-1/2 -translate-x-1/2 rounded-full bottom-[-60%] opacity-50" />
    </section>
  );
};

export default Hero;

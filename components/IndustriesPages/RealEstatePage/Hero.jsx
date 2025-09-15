import React from "react";
import ContactButton from "@/components/Global/ContactButton";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section className="w-full relative pt-36 2xl:pt-52 padding-x overflow-hidden">
      <section className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1] w-full">
          Trusted Real Estate App{" "}
          <span className="red-text">Development Company</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[85%] lg:leading-8">
          Get high-quality real estate solutions designed according to your
          business needs through our expert Real Estate App Development services
          tailored for growth, efficiency, and lasting success.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-10 z-20">
          <ContactButton text={"Start Your Project Today"} />
        </div>

        <HeroAnimation />
      </section>
    </section>
  );
};

export default Hero;

import React from "react";
import ContactButton from "@/components/Global/ContactButton";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section className="w-full relative pt-36 2xl:pt-52 padding-x">
      <section className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1] w-full">
          Leading Healthcare Software{" "}
          <span className="red-text">Development Company</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-8">
          We are a custom healthcare software development company creating
          secure and scalable solutions for healthcare teams and patients. We
          help simplify and streamline operations for healthcare providers,
          enhance patient care, and adopt digital tools to make daily tasks
          easier.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-10">
          <ContactButton text={"Explore Healthcare Solutions"} />
        </div>
      </section>
      <HeroAnimation />
    </section>
  );
};

export default Hero;

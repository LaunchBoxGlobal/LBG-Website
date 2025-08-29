import React from "react";
import ContactButton from "@/components/Global/ContactButton";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section className="w-full relative pt-36 2xl:pt-52 padding-x">
      <section className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white">
        <p className="text-xl font-bold red-text">Smart, Stunning, Strategic</p>
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1] w-full">
          Smart Design and Branding Services That Make You{" "}
          <span className="red-text">Stand Out</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-8">
          Our branding services and design approach craft memorable identities,
          logos, colors, and styles that stick in customers' minds and build
          trust.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-10">
          <ContactButton text={"Get A Free Consultation"} />
        </div>
      </section>
      <HeroAnimation />
    </section>
  );
};

export default Hero;

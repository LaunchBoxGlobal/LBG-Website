import React from "react";
import HeroAnimation from "./HeroAnimation";
import ContactButton from "@/components/Global/ContactButton";

const Hero = () => {
  return (
    <section className="w-full relative overflow-x-hidden pt-36 2xl:pt-52 padding-x">
      <div className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1] w-full">
          Custom Software Development Made{" "}
          <span className="red-text">Simple</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-8">
          Need a dedicated development team that meets your needs? We offer
          custom software development services that fit your workflow and save
          you time. Let’s create software that works for you.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1">
          <ContactButton text={"Get Custom Solution"} />
        </div>
        <HeroAnimation />
      </div>
    </section>
  );
};

export default Hero;

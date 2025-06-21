import React from "react";
import Image from "next/image";
import HeroSearchInput from "./HeroSearchInput";
import AnimatedText from "./AnimatedText";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <section className="w-full min-h-[87vh] relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden">
        <AnimatedText direction="left">
          <h1 className="font-extrabold z-10 text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1.1] w-full">
            <span>IT Staff Augmentation Your Shortcut To</span>{" "}
            <Image
              src={"/staff-augmentation/hero-profiles.png"}
              alt="hero profiles"
              width={175}
              height={65}
              className="m-0 p-0 inline-block object-contain h-[40px] lg:h-auto"
            />
            <span className="red-text"> Skilled Talents</span>
          </h1>
        </AnimatedText>
        <AnimatedText direction="right">
          <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-7 mx-auto">
            Get instant access to vetted IT staff augmentation services that
            match your budget and time zone. Scale your team in days zero
            hassle, maximum results.
          </p>
        </AnimatedText>
        {/* <HeroSearchInput /> */}
        <HeroAnimation />

        <Image
          src={"/staff-augmentation/hero-mask-1.png"}
          alt="hero-mask-1"
          width={467}
          height={138}
          className="absolute object-contain right-0 top-24 z-0"
        />
        <Image
          src={"/staff-augmentation/hero-mask-2.png"}
          alt="hero-mask-2"
          width={653}
          height={366}
          className="absolute object-contain left-0 bottom-0 z-0"
        />
      </section>
    </section>
  );
};

export default Hero;

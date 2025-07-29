import React from "react";
import Image from "next/image";
import MobileImageSlider from "./MobileImageSlider";
import ContactButton from "@/components/Global/ContactButton";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden pt-36 2xl:pt-52 mb-20 lg:mb-40">
      <section className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden padding-x">
        <p className="text-xl font-bold red-text">Your Reliable Partner</p>
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1] w-full">
          Mobile App Development Company that{" "}
          <span className="red-text">Business Growth</span>
        </h1>
        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-7">
          Expert Mobile App Development services tailored to create
          high-performing apps that fuel business growth.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-8">
          <ContactButton text={"Get a Free Consultation"} />
        </div>
      </section>
      <div className="w-full bg-white mt-0 lg:mt-5 hidden lg:block">
        <MobileImageSlider />
      </div>
      <HeroAnimation />
      <Image
        src={"/mobile-app-dev-mobile-mockups-min.webp"}
        className="w-full object-contain h-[220px] lg:hidden"
        alt="mobile-app-dev-mobile-mockups"
        width={380}
        height={280}
        priority
        style={{ width: "100%" }}
      />
    </section>
  );
};

export default Hero;

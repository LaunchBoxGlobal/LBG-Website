import React from "react";
import ContactButton from "@/components/Global/ContactButton";
import HeroAnimation from "./HeroAnimation";
import HeroMobileAnimation from "./HeroMobileAnimation";
import PageBreadcrumb from "@/components/Common/PageBreadcrumb";

const Hero = () => {
  return (
    <section className="w-full relative overflow-x-hidden pt-36 2xl:pt-52 padding-x">
      <div className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-10 md:leading-[54px] lg:leading-[84px] xl:leading-[104px] 2xl:leading-[104px] w-full">
          Providing Reliable Digital Marketing{" "}
          <span className="red-text">Services</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-8">
          Have you tried everything, but no one knows your existence? Let's step
          up and switch to digital marketing because it's time to fix what
          you've overlooked.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-12">
          <ContactButton text={"Schedule a Quick Consultation"} />
        </div>
      </div>
      <div className="w-full hidden md:block">
        <HeroAnimation />
      </div>
      <div className="w-full md:hidden">
        <HeroMobileAnimation />
      </div>
    </section>
  );
};

export default Hero;

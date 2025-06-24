import React from "react";
import HeroAnimation from "./HeroAnimation";
import ContactButton from "@/components/Global/ContactButton";
import PageBreadcrumb from "@/components/Common/PageBreadcrumb";

const Hero = () => {
  return (
    <section className="w-full relative overflow-x-hidden pt-36 2xl:pt-52 padding-x">
      <div className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden">
        <p className="text-xl font-bold red-text">Powering Innovation with</p>
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-10 md:leading-[54px] lg:leading-[84px] xl:leading-[104px] 2xl:leading-[104px] w-full">
          Custom Software Development that Delivers{" "}
          <span className="red-text">Excellence</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-8">
          Smart software starts with functionality. As a Leading Software
          Development Company, We build solutions that integrate seamlessly,
          scale effortlessly, and adapt with the agility your business demands.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1">
          <ContactButton text={"Get A Free Consultation"} />
        </div>
        <HeroAnimation />
      </div>
    </section>
  );
};

export default Hero;

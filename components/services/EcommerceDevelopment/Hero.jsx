import React from "react";
import ContactButton from "@/components/Global/ContactButton";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section className="w-full relative overflow-x-hidden padding-x pt-36 pb-10 2xl:pt-52">
      <div className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden">
        <h1 className="font-bold text-[34px] md:text-[48px] lg:text-[64px] xl:text-[84px] 2xl:text-[100px] text-center tracking-normal leading-10 md:leading-[54px] lg:leading-[84px] xl:leading-[104px] 2xl:leading-[104px] w-full">
          Transform Your Business with Ecommerce{" "}
          <span className="red-text">Development</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-8">
          <strong className="font-medium">
            Improve your brand's online presence and increase revenue with our
            expert ecommerce development services.
          </strong>
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-10">
          <ContactButton text={"Grow Your Business"} />
        </div>
      </div>
      <HeroAnimation />
    </section>
  );
};

export default Hero;

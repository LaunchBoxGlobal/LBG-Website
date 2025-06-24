import React from "react";
import ImageSlider from "./ImageSlider";
import ContactButton from "@/components/Global/ContactButton";
import PageBreadcrumb from "@/components/Common/PageBreadcrumb";

const Hero = () => {
  return (
    <section className="w-full relative mb-10 lg:mb-32 overflow-x-hidden pt-36 2xl:pt-52 padding-x">
      <section className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-1 bg-white overflow-hidden">
        <p className="text-xl font-bold red-text">Your Success Partner</p>
        <h1 className="font-bold text-[34px] md:text-[48px] lg:text-[64px] xl:text-[84px] text-center tracking-normal leading-10 md:leading-[54px] lg:leading-[84px] xl:leading-[104px] 2xl:leading-[104px] w-[100%]">
          Web App Development Services that{" "}
          <span className="red-text">Drive Results</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] 2xl:text-[26px] font-medium text-gray-500 text-center lg:w-[75%] leading-8 my-2">
          Helping startups scale and enterprises operate smarter with Reliable
          Web App Development Services that drive real results.
        </p>
        <div className="flex items-center justify-center gap-4 mt-3 mb-8">
          <ContactButton text={"Get A Free Consultation"} />
        </div>
      </section>
      <div className="w-full bg-white">
        <ImageSlider />
      </div>
    </section>
  );
};

export default Hero;

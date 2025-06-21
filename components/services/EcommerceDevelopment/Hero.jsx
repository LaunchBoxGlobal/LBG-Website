import React from "react";
import ContactButton from "@/components/Global/ContactButton";
import HeroAnimation from "./HeroAnimation";
import PageBreadcrumb from "@/components/Common/PageBreadcrumb";

const Hero = () => {
  return (
    <section className="w-full relative overflow-x-hidden padding-x pt-36 pb-10 2xl:pt-52">
      <PageBreadcrumb
        pageLink={"/services/ecommerce-development"}
        pageTitle={"Ecommerce Development"}
      />
      <div className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden">
        <p className="text-xl font-bold red-text">Powering Innovation with</p>
        <h1 className="font-bold text-[34px] md:text-[48px] lg:text-[64px] xl:text-[84px] 2xl:text-[100px] text-center tracking-normal leading-10 md:leading-[54px] lg:leading-[84px] xl:leading-[104px] 2xl:leading-[104px] w-full">
          Ecommerce Development that Helps Your{" "}
          <span className="red-text">Business Grow</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-8">
          Our Ecommerce Development company builds online stores that build
          fast, sell more and keep customers happy. We create shops that work
          smoothly.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1">
          <ContactButton text={"Get A Free Consultation"} />
        </div>
      </div>
      <HeroAnimation />
    </section>
  );
};

export default Hero;

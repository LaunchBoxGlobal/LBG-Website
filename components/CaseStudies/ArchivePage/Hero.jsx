import React from "react";
import ContactButton from "@/components/Global/ContactButton";
import HeroAnimation from "./HeroAnimation";
// import HeroAnimationMobile from "./HeroAnimationMobile";
import "./style.css";
import HeroAnimationMobile from "./HeroAnimationMobile";
import PageBreadcrumb from "@/components/Common/PageBreadcrumb";

const Hero = () => {
  return (
    <section className="w-full relative border-b border-gray-200 overflow-hidden pt-36 2xl:pt-52 padding-x">
      {/* <PageBreadcrumb pageLink={"/case-studies"} pageTitle={"Case Studies"} /> */}
      <div className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-10 md:leading-[54px] lg:leading-[84px] xl:leading-[104px] 2xl:leading-[104px] w-full">
          <span className="high-powered">Successful</span>
          <span className="red-text">Projects</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-8">
          Our branding and design approach crafts memorable identities, logos,
          colors, and styles that stick in customers' minds and build trust.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-10">
          <ContactButton text={"Get A Free Consultation"} />
        </div>
        {/* <div className="w-full"> */}

        {/* </div> */}
        <div className="w-full block lg:hidden">
          <HeroAnimationMobile />
        </div>
      </div>
      <div className="w-full hidden lg:block">
        <HeroAnimation />
      </div>
    </section>
  );
};

export default Hero;

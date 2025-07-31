import React from "react";
import ContactButton from "@/components/Global/ContactButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full relative pt-36 2xl:pt-52 padding-x">
      <section className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white">
        <h1 className="red-text text-[22px] font-semibold">
          Software Project Rescue Service
        </h1>
        <h2 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-tight leading-[1] w-full">
          Revive Your Project With Our Software Project{" "}
          <span className="red-text">Rescue Service</span>
        </h2>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-[1.1] mt-4">
          Our branding and design approach crafts memorable identities, logos,
          colors, and styles that stick in customers' minds and build trust.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-10">
          <ContactButton text={"Get A Free Consultation"} />
        </div>

        <div className="w-full relative flex items-center justify-center mb-10">
          <Image
            src={"/new-project/hero-section-icons-mobile.png"}
            alt="hero-section-icons-mobile"
            width={1081}
            height={402}
            className="mx-auto lg:hidden"
          />
          <Image
            src={"/new-project/hero-section-image.png"}
            alt="hero-section-image"
            width={1081}
            height={402}
            className="mx-auto z-0 hidden lg:block"
          />
          <div className="bg-white border border-[#F40E0073] rounded-[7px] w-[352px] h-[98px] absolute left-[33%] top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center lbg-shadow">
            <img
              src="/new-logo.svg"
              alt="launchbox global logo"
              width={277}
              height={58}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;

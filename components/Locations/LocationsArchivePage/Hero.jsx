import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full relative pt-36 2xl:pt-52">
      <section className="w-full relative pt-10 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-10 md:leading-[54px] lg:leading-[84px] xl:leading-[104px] 2xl:leading-[104px] w-full">
          Powering Success Across <span className="red-text">Regions</span>
        </h1>
      </section>
      <div className="w-full relative">
        <Image
          src={"/location-page-hero-mockup.png"}
          alt="location-page-hero-mockup"
          width={1920}
          height={766}
          className="w-full"
        />
        {/* <Image
          src={`/location-icon.png`}
          alt="location-icon"
          width={337}
          height={508}
          className="absolute bottom-10 right-20 z-10 object-contain max-h-[508px]"
        /> */}
      </div>
    </section>
  );
};

export default Hero;

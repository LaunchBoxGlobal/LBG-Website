import React from "react";
import ContactButton from "@/components/Global/ContactButton";

const Hero = () => {
  return (
    <section className="w-full relative pt-36 2xl:pt-52 padding-x overflow-hidden">
      <section className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1] w-full">
          Your Reliable Ecommerce Development{" "}
          <span className="red-text">Starts Here</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] lg:leading-8">
          Don’t let slow, unreliable, or outdated online stores cost you
          customers. Many businesses lose revenue daily due to weak ecommerce.
          Our expert development ensures fast, safe, and growth-ready stores
          that perform.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-10 z-20">
          <ContactButton text={"Increase Sales Today"} />
        </div>
      </section>
    </section>
  );
};

export default Hero;

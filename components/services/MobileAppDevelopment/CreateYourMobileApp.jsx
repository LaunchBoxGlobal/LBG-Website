import Image from "next/image";
import Link from "next/link";
import React from "react";

const CreateYourMobileApp = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-28 mt-6">
      <section className="w-full h-[410px] rounded-lg bg-[#212121] relative">
        <Image
          src={"/create-your-mobile-app-map.png"}
          alt="map image"
          width={600}
          height={410}
          className="w-[70%] h-full absolute inset-0 opacity-10 z-0"
        />
        <section className="h-full  text-white z-20 flex flex-col items-center text-center lg:items-start lg:text-start justify-center gap-5 w-full lg:w-[65%] px-4 lg:px-16">
          <h2 className="font-bold text-[36px] lg:text-[50px] leading-10">
            Let’s Create Your App
          </h2>
          <p className="text-lg lg:text-[22px] font-light">
            We follow a structured and client focused development process to
            ensure the successful delivery of high quality software solutions.
            Our workflow includes:
          </p>
          <Link
            href={"/contact-us"}
            className="w-[242px] h-[47px] mt-3 bg-white text-black flex items-center justify-center rounded-[11px] text-lg font-medium z-30"
          >
            Start Your App Today!
          </Link>
        </section>
        <Image
          src={"/create-your-mobile-app-mockup.png"}
          alt="mobile app mockups"
          width={434}
          height={492}
          className="w-[35%] h-[492px] absolute right-0 bottom-0 hidden lg:block z-0"
        />
      </section>
    </section>
  );
};

export default CreateYourMobileApp;

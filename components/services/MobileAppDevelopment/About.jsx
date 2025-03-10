import React from "react";
import Character from "./ScrollOpacityText";
import Link from "next/link";
import Image from "next/image";

const paragraph =
  "Constructing apps that are simple, fast, and accessible. We mainly offer mobile app development services, focusing on quality, design, and deployment. Experienced in iOS mobile app development. Developing apps that are fluent to implement. Each project is carefully planned to deliver a smooth experience for enterprises and companies. That solves the actual problems and involves users. Every step is taken with proper attention to detail. Making sure the final product is top-notch and straight forward.";

const About = () => {
  return (
    <section className="w-full py-12 lg:pb-20 flex flex-col items-center justify-center text-center gap-4 padding-x">
      <h2 className="red-text text-[25px] font-semibold">
        Reliable Mobile App Services for iOS and more
      </h2>
      {/* <p className="text-[22px] lg:text-[43px] text-center lg:leading-[53px] text-gray-400 lg:w-[92%]"></p> */}
      <Character value={paragraph} />

      <section className="w-full flex items-start justify-end relative -top-10">
        <Link
          href={"/contact-us"}
          className="w-[109px] lg:w-[156px] h-[109px] lg:h-[156px] rounded-full border text-base lg:text-[25px] flex flex-col gap-2 uppercase items-center justify-center border-[#f40e00] bg-[#f40e00] text-white transition-all duration-300"
        >
          let's <br /> talk
          <Image
            src={"/footer-cta-icon.png"}
            width={28}
            height={24}
            className="w-[18px] h-[15px] lg:w-[28px] lg:h-[24px]"
          />
        </Link>
      </section>
    </section>
  );
};

export default About;

import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="text-[25px] font-semibold red-text lg:w-[90%] mx-auto">
          Our Story
        </h2>

        <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-500 lg:w-[90%] mx-auto md:leading-[3] font-normal">
          We’re a team passionate about helping startups and growing businesses
          succeed through custom software development services. Being one of the
          leading software companies in Texas, we focus on understanding your
          vision and turning it into technology that actually works for you.
          Whether it’s optimizing daily workflows or creating software your
          users will love, our expert developers can get it done for you. We
          don’t do one-size-fits-all approaches. Every project is designed to
          fit your unique needs. We are your tech partners, guiding you through
          every step, solving problems together, and making sure your software
          grows with your business. With us, your startup isn’t just getting
          software, it’s getting a team that cares.
        </p>
      </section>
    </section>
  );
};

export default AboutSection;

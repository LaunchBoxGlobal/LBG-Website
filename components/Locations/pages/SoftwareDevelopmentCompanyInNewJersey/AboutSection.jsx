import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="text-[25px] font-semibold red-text lg:w-[90%] mx-auto">
            Meet LaunchBox Global
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-500 lg:w-[90%] mx-auto leading-[3] font-normal">
            LaunchBox Global is a top custom software development company in New
            Jersey, committed to empowering businesses with outstanding digital
            solutions. We specialize in mobile, web, and eCommerce development
            and offer customized services that deliver genuine results. As a
            leading name among software development companies in New Jersey, we
            combine local knowledge with a strong focus on quality. Explore our
            projects and insights in our{" "}
            <Link href={"/blogs"} className="red-text">
              blogs
            </Link>{" "}
            to discover how we can confidently improve your business and help
            you achieve your goals.
          </p>
        </AnimatedText>
      </section>
    </section>
  );
};

export default AboutSection;

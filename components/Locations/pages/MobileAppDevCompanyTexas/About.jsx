import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="text-[25px] font-semibold red-text lg:w-[90%] mx-auto">
            Introducing LaunchBox Global
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-500 lg:w-[90%] mx-auto leading-[3] font-normal">
            At LaunchBox Global, we are a dedicated partner for mobile, web, and
            eCommerce development, focused on helping businesses in Texas
            succeed. We specialize in mobile app development in Texas, turning
            your ideas into digital products that generate revenue. With our
            strong background in Dallas mobile development, we provide adaptable
            and scalable solutions developed to meet your specific needs. You
            can trust us to guide you through the digital landscape and assist
            you in reaching your business goals. Explore our{" "}
            <Link href={`/case-studies`} className="red-text">
              projects
            </Link>{" "}
            and{" "}
            <Link href={`/blogs`} className="red-text">
              blogs
            </Link>
            , or contact us to learn more about our services.
          </p>
        </AnimatedText>
      </section>
    </section>
  );
};

export default About;

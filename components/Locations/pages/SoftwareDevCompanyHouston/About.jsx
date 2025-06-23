import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="text-[25px] font-semibold red-text lg:w-[90%] mx-auto">
            About LaunchBox Global – Your Houston Custom Software Partner
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-500 lg:w-[90%] mx-auto leading-[3] font-normal">
            LaunchBox Global is a full-service custom software development
            company in Houston, specializing in mobile, web, and enterprise
            solutions. We help Texas businesses transform ideas into
            revenue-generating digital products with agile development and
            scalable technology. From startups to Fortune 500 companies, our
            Houston-based team delivers tailored software that solves real
            business challenges. Explore our{" "}
            <Link
              href={`/services/mobile-app-development`}
              className="red-text"
            >
              development services
            </Link>{" "}
            or see{" "}
            <Link href={`/case-studies`} className="red-text">
              case studies.
            </Link>
          </p>
        </AnimatedText>
      </section>
    </section>
  );
};

export default About;

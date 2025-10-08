import Link from "next/link";
import React from "react";

const AboutSection = ({ heading, description }) => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="text-[25px] font-semibold red-text lg:w-[90%] mx-auto">
          Software Development Company in Florida You Can Trust
        </h2>

        <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-500 lg:w-[90%] mx-auto leading-[3] font-normal">
          LaunchBox Global is a full-service software development company in
          Florida, specializing in mobile, web, and{" "}
          <Link href={`/services/ecommerce-development`} className="underline">
            eCommerce solutions.
          </Link>{" "}
          We partner with startups and enterprises across the state to transform
          ideas into high-performing digital products. Unlike generic software
          development companies in Florida, we focus on agile, scalable
          approaches tailored to your business goals whether it’s a
          customer-facing app, a productivity tool, or a revenue-driving
          platform. From Miami to Jacksonville, our Florida-based team delivers
          clarity, quality, and results at every stage.
        </p>
      </section>
    </section>
  );
};

export default AboutSection;

import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { projects } from "@/constants/mobile-app-development/Projects";
import React from "react";

const SwiftCaseStudies = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-6 text-center py-10 lg:pb-20 lg:pt-28">
      <h2 className="section-heading lg:w-[60%]">
        See What Our Swift Apps
        <span className="red-text"> Can Do</span>
      </h2>
      <p className="section-paragraph lg:w-[60%] text-center">
        We build Swift app development services that work. See how our Swift
        mobile app development company helped businesses launch faster iOS apps
        with better performance and happier users.
      </p>
      <PortfolioParallexCards projects={projects} />
    </section>
  );
};

export default SwiftCaseStudies;

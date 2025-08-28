import ServicesTechStack from "@/components/Common/ServicesTechStack";
import { MOBILE_APP_DEVELOPMENT_TECH_STACK } from "@/constants/mobile-app-development/mobile-app-development-tech-stack";
import React from "react";

const MobileAppTechStack = () => {
  return (
    <section className="w-full py-10 lg:py-20 bg-[#ffff]" id="teckstack">
      <section className="w-full padding-x flex flex-col items-center justify-center gap-5 mb-12">
        <h2 className={`section-heading text-center lg:w-[80%]`}>
          Smart Technology for Better <span className="red-text">Solution</span>
        </h2>
        <p className="section-paragraph text-center lg:w-[75%] w-full">
          Great apps need the right tools. As a mobile app development company,
          the best technologies are used to build apps that run fast, work
          smoothly, and last long.
        </p>
      </section>
      <ServicesTechStack techStack={MOBILE_APP_DEVELOPMENT_TECH_STACK} />
    </section>
  );
};

export default MobileAppTechStack;

import ServicesTechStack from "@/components/Common/ServicesTechStack";
import { CUSTOM_SOFTWARE_DEVELOPMENT_TECH_STACK } from "@/constants/custom-software-development/custom-software-tech-stack";
import React from "react";

const SoftwareDevelopmentTechStack = () => {
  return (
    <section className="w-full py-10 lg:py-20 bg-[#ffff]" id="teckstack">
      <section className="w-full padding-x flex flex-col items-center justify-center gap-5 mb-12">
        <h2 className={`section-heading text-center lg:w-[80%]`}>
          Built With Modern <span className="red-text">Technology</span>
        </h2>
        <p className="section-paragraph text-center lg:w-[75%] w-full">
          We leverage proven custom software development solutions using
          Flutter, React Native, and Firebase to create fast, scalable
          applications tailored to your business needs.
        </p>
      </section>
      <ServicesTechStack techStack={CUSTOM_SOFTWARE_DEVELOPMENT_TECH_STACK} />
    </section>
  );
};

export default SoftwareDevelopmentTechStack;

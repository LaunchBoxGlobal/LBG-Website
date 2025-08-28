import ServicesTechStack from "@/components/Common/ServicesTechStack";
import { ECOMMERCE_TECH_STACK } from "@/constants/ecommerce-develpment/ecommerce-tech-stack";
import React from "react";

const EcommerceTechStack = () => {
  return (
    <section className="w-full py-10 lg:py-20 bg-[#ffff]" id="teckstack">
      <section className="w-full padding-x flex flex-col items-center justify-center gap-5 mb-12">
        <h2 className={`section-heading text-center lg:w-[80%]`}>
          Our Technology <span className="red-text">Stack</span>
        </h2>
        <p className="section-paragraph text-center lg:w-[75%] w-full">
          As a trusted ecommerce development company, we utilize a carefully
          selected tech stack that ensures performance, security, and
          scalability. Our ecommerce development services are powered by modern
          tools that meet global standards, enabling us to deliver
          enterprise-grade solutions as a leading ecommerce web development
          company.
        </p>
      </section>
      <ServicesTechStack techStack={ECOMMERCE_TECH_STACK} />
    </section>
  );
};

export default EcommerceTechStack;

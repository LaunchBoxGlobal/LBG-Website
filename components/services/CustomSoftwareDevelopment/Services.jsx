"use client";
import React, { useState } from "react";
import { CUSTOM_SOFTWARE_SERVICES } from "@/constants/custom-software-development/CustomSoftwareServices";
import ServiceCard from "@/components/Global/ServiceCard";

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [modal, setModal] = useState({ active: false, index: 0 });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="w-full py-10 lg:pb-20 lg:pt-32 padding-x">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Custom Software <br /> Development{" "}
          <span className="red-text">Services</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Custom software development services build solutions for your needs.
          thoroughly tested and updated in response to user input. Together, we
          can develop software that genuinely strengthens your company.
        </p>
      </section>

      <section className="w-full flex flex-col flex-wrap items-start justify-center gap-y-4 mt-8 lg:mt-24 overflow-y-visible">
        {CUSTOM_SOFTWARE_SERVICES?.map((service, index) => (
          <ServiceCard
            service={service}
            index={index}
            key={index}
            setModal={setModal}
            openFaq={openFaq}
            setOpenFaq={setOpenFaq}
            toggleFaq={toggleFaq}
          />
        ))}
      </section>
    </section>
  );
};

export default Services;

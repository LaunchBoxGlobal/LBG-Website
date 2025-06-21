"use client";
import React, { useState } from "react";
import ServiceCard from "@/components/Global/ServiceCard";
import { DIGITAL_MARKETING_SERVICES } from "@/constants/digital-marketing/DigitalMarketingServices";

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [modal, setModal] = useState({ active: false, index: 0 });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="w-full pb-10 pt-14 lg:pb-20 lg:pt-32 padding-x">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Best Digital Marketing Services{" "}
          <span className="red-text">Guaranteed</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Need the best Digital Marketing Services? We help small businesses
          grow online with smart, affordable strategies. Get the Expert Advice
          and the real result.
        </p>
      </section>

      <section className="w-full flex flex-col flex-wrap items-start justify-center gap-y-4 mt-8 lg:mt-24 overflow-y-visible">
        {DIGITAL_MARKETING_SERVICES?.map((service, index) => (
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

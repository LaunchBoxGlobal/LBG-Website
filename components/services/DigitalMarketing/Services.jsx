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
          What We Can Do <span className="red-text">For You</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Certainly, we are not just good at words and promises; we've got what
          you need. Launchbox Global offers a variety of digital marketing
          services for all kinds of businesses. Let's review them.
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

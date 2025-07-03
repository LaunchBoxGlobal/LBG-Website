"use client";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { ECOMMERCE_DEVELOPMENT_SERVICES } from "@/constants/ecommerce-develpment/ecommerceDevelopmentServices";

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [modal, setModal] = useState({ active: false, index: 0 });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="w-full py-10 lg:pb-20 lg:pt-32 padding-x">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[80%]">
          Expert Ecommerce Development
          <span className="red-text"> Services</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          <strong className="font-light">
            As a trusted ecommerce development company, we deliver exceptional
            ecommerce development services. Our ecommerce web development
            company focuses on creating customized solutions to enhance your
            online presence.
          </strong>
        </p>
      </section>

      <section className="w-full flex flex-col flex-wrap items-start justify-center gap-y-4 mt-8 lg:mt-24 overflow-y-visible">
        {ECOMMERCE_DEVELOPMENT_SERVICES?.map((service, index) => (
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

"use client";
import { HOME_SERVICES } from "@/constants/HomeServices";
import React, { useState } from "react";
import ServiceCard from "../Global/ServiceCard";
import ServiceCardModal from "../Global/ServiceCardModal";
import "../Global/ServiceCard.css";

const HomeServices = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full padding-x py-12 bg-[#fff]">
      <section
        className="w-full flex flex-col items-center justify-center gap-5"
        id="services"
      >
        <h2 className="section-heading">
          What We <span className="red-text">Do?</span>
        </h2>
        <p className="section-paragraph text-center">
          We help you grow with clear software solutions <br /> created by
          skilled experts around the world.
        </p>
      </section>

      <section className="w-full flex flex-col flex-wrap items-start justify-center gap-y-4 mt-8 lg:my-20 overflow-y-visible">
        {HOME_SERVICES?.map((service, index) => (
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

export default HomeServices;

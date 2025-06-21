"use client";
import React, { useState } from "react";
import "../Global/ServiceCard.css";
import HomeServiceCard from "./HomeServiceCard";
import HorzontalScrollingCards from "../Common/HorizontalScrollCarousel";

const Services = ({
  heading,
  redText,
  description,
  services,
  descriptionWidth,
}) => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full py-12 lg:pt-32">
      <section
        className="w-full padding-x flex flex-col items-center justify-center gap-5"
        id="services"
      >
        <h2 className="section-heading">
          {heading} <span className="red-text">{redText}</span>
        </h2>
        <p className={`section-paragraph text-center ${descriptionWidth}`}>
          {description}
        </p>
      </section>

      <section className="w-full padding-x">
        <section className="w-full flex flex-col flex-wrap items-start justify-center gap-y-4 mt-8 lg:my-20 overflow-y-visible">
          {services?.map((service, index) => (
            <HomeServiceCard
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

      {/* <HorzontalScrollingCards /> */}
    </section>
  );
};

export default Services;

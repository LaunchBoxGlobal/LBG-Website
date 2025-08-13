"use client";
import React, { useState } from "react";
import { WEB_APP_DEVELOPMENT_SERVICES } from "@/constants/web-app-dvelopment/WebAppDevServices";
import ServiceCard from "@/components/Global/ServiceCard";

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [modal, setModal] = useState({ active: false, index: 0 });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="w-full pb-10 lg:py-20 padding-x">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Trusted Web App Development Services for{" "}
          <span className="red-text">Businesses</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Whether you're launching something new or upgrading your tech, our
          team of expert web app developers has got you covered. We specialize
          in web application development services, building everything from
          custom web apps to powerful web APIs that keep your business running
          smoothly & make 10X revenue quickly.
        </p>
      </section>

      <section className="w-full flex flex-col flex-wrap items-start justify-center gap-y-4 mt-8 lg:mt-24 overflow-y-visible">
        {WEB_APP_DEVELOPMENT_SERVICES?.map((service, index) => (
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

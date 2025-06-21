"use client";
import { MOBILE_APP_DEVELOPMENT_SERVICES } from "@/constants/mobile-app-development/MobileAppDevelopmentServices";
import React, { useState } from "react";
import ServiceCard from "@/components/Global/ServiceCard";

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [modal, setModal] = useState({ active: false, index: 0 });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Mobile App <br /> Development{" "}
          <span className="red-text">Services</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          We build apps that solve real-world problems and keep users coming
          back. Our mobile app development services focus on simple designs,
          fast performance, and updates that make sense. We work with you to
          create apps that grow as you do. Let’s make an app that truly works
          for your goals.
        </p>
      </section>

      <section className="w-full flex flex-col flex-wrap items-start justify-center gap-y-4 mt-8 lg:mt-24 overflow-y-visible">
        {MOBILE_APP_DEVELOPMENT_SERVICES?.map((service, index) => (
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

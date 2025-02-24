"use client";
import { HOME_SERVICES } from "@/constants/HomeServices";
import React, { useState } from "react";
import ServiceCard from "../Global/ServiceCard";
import ServiceCardModal from "../Global/ServiceCardModal";
import "../Global/ServiceCard.css";

const HomeServices = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="w-full padding-x py-12 lg:py-28 bg-[#fff]">
      <section
        className="w-full flex flex-col items-center justify-center gap-5"
        id="services"
      >
        <h2 className="section-heading">
          What We <span className="red-text">Do?</span>
        </h2>
        <p className="text-xl 2xl:text-[26px] mt-6 font-medium w-full lg:w-2/5 text-center lg:leading-[31px] text-gray-500">
          We help businesses grow with clear software solutions created by
          skilled experts from around the world.
        </p>
      </section>

      <section className="w-full flex flex-col flex-wrap items-start justify-center mt-20 overflow-y-visible">
        {HOME_SERVICES?.map((service, index) => (
          <ServiceCard
            service={service}
            index={index}
            key={index}
            setModal={setModal}
          />
        ))}
        {/* <ServiceCardModal modal={modal} projects={HOME_SERVICES} /> */}
      </section>
    </section>
  );
};

export default HomeServices;

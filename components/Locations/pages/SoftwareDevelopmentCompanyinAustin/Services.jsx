// import { SOFTWARE_DEV_AUSTIN_SERVICES } from "@/constants/locations/software-dev-company-austin/software-dev-company-austin-services";
import { SOFTWARE_DEV_AUSTIN_SERVICES } from "@/constants/locations/software-dev-company-austin/services";
import Image from "next/image";

import React from "react";

const Services = () => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x overflow-hidden">
      {/* Section Heading */}
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Services <span className="red-text">We Offer</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Our custom software development services in Austin help startups and
          businesses build apps, platforms, and tools that fit their unique
          needs. We focus on practical, user-friendly solutions that grow with
          your company.
        </p>
      </section>

      {/* Service Cards */}
      <section className="w-full flex items-start justify-center flex-wrap mt-14 gap-5 mx-auto">
        {SOFTWARE_DEV_AUSTIN_SERVICES.map((service, index) => (
          <div
            key={index}
            className="w-full md:w-[45%] lg:w-[32%] min-h-[300px]"
          >
            <div className="w-full rounded-[16px] p-8 min-h-[370px] flex flex-col items-start gap-3 group bg-[#f9f9f9] transition-all duration-300 hover:shadow-lg">
              <Image
                src={service.icon}
                width={service.iconWidth}
                height={service.iconHeight}
                alt={`${service.title} icon`}
                className="object-contain"
              />
              <h3 className="font-bold service-heading leading-[1.2]">
                {service.title}
              </h3>
              <p className="text-lg leading-[1.3] text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Services;

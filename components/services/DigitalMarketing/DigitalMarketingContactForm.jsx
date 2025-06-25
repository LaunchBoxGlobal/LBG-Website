import React from "react";
import Image from "next/image";
import LeadForm from "@/components/Common/LeadForm";

const DigitalMarketingContactForm = () => {
  return (
    <section className="w-full padding-x py-10 mb-5 lg:mb-14 relative overflow-hidden">
      <section className="w-full z-10 bg-[#212121] rounded-2xl p-8 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
        <Image
          src={"/create-your-mobile-app-map.webp"}
          alt="map image"
          width={600}
          height={410}
          loading="lazy"
          className="w-[70%] h-[90%] max-w-full object-cover lg:object-none opacity-10 absolute inset-0 z-0"
        />
        <div className="text-white w-full flex flex-col items-center text-center lg:text-start lg:items-start justify-center">
          <h2 className="text-[36px] lg:text-[70px] font-medium leading-10 lg:leading-[68px] z-10">
            Big Goals? You Need a Smart Plan.
          </h2>
          <p className="text-lg lg:text-[20px] font-medium z-10 lg:mt-5">
            Our experts are ready to guide you with proven digital marketing
            solutions. Just fill out the form to get started.
          </p>
        </div>
        <div className="w-full z-10">
          <LeadForm buttonTitle={"Talk to a Growth Expert Today"} />
        </div>
      </section>
    </section>
  );
};

export default DigitalMarketingContactForm;

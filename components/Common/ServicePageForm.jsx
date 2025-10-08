import React from "react";
import Image from "next/image";
import ServiceForm from "./ServiceForm";
import SlidingFormText from "./SlidingFormText";
// import LeadForm from "./LeadForm";

const ServicePageForm = () => {
  return (
    <section className="w-full padding-x py-10 mb-5 lg:mb-14 relative overflow-hidden">
      <section className="w-full z-10 bg-[#212121] rounded-2xl p-8 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 relative">
        <SlidingFormText />
        <div className="w-full z-10 lg:w-[45%]">
          <ServiceForm
            buttonTitle={"Get Free Consultation"}
            title={"Just share a few details, and we’ll handle the rest."}
          />
        </div>
      </section>
    </section>
  );
};

export default ServicePageForm;

import React from "react";
import LeadingForm from "./LeadingForm";

const MobileAppDevContactForm = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 mb-5 lg:mb-14">
      <section className="w-full bg-[#212121] rounded-2xl p-8 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="text-white w-full flex flex-col items-center text-center lg:text-start lg:items-start justify-center">
          <h2 className="text-[36px] lg:text-[70px] font-medium leading-10 lg:leading-[68px]">
            Frustrated with Limitations?
          </h2>
          <h3 className="text-[20px] font-medium leading-10 lg:leading-[38px] my-8">
            Let’s Build the Perfect Solution for You
          </h3>
          <p className="text-lg lg:text-[20px] font-medium">
            We build customized solutions that adapt to your workflow, eliminate
            inefficiencies, and give you complete control over your operations.
          </p>
        </div>
        <div className="w-full">
          <LeadingForm />
        </div>
      </section>
    </section>
  );
};

export default MobileAppDevContactForm;

import React from "react";
import LeadingForm from "./LeadingForm";

const MobileAppDevContactForm = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 mb-5 lg:mb-14">
      <section className="w-full bg-[#212121] rounded-2xl p-8 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="text-white w-full flex flex-col items-start justify-center">
          <h2 className="text-[36px] lg:text-[70px] font-medium leading-10 lg:leading-[68px] mb-7">
            Your App Idea Deserves Expert Execution
          </h2>
          <p className="text-lg lg:text-[20px] font-medium">
            We build powerful apps for startups & SMBs with fair pricing, no
            hidden fees, and complete support. Get the results your business
            deserves!
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

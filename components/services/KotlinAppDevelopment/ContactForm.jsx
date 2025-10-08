import React from "react";
import Image from "next/image";
import LeadForm from "./LeadForm";

const ContactForm = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 mb-5 lg:mb-14 relative">
      <section className="w-full z-20 bg-[#212121] rounded-2xl p-8 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
        <Image
          src={"/create-your-mobile-app-map.png"}
          alt="map image"
          width={600}
          height={410}
          className="w-full lg:w-[70%] h-[90%] absolute inset-0 opacity-10 z-0 object-cover lg:object-none"
        />
        <div className="text-white w-full flex flex-col items-center text-center lg:text-start lg:items-start justify-center">
          <h2 className="text-[36px] lg:text-[70px] font-medium leading-10 lg:leading-[68px] mb-7 z-10">
            Take the First Step Toward a Smarter Android App
          </h2>
          <p className="text-lg lg:text-[20px] font-medium z-10">
            We’ll help you validate your idea and map out the Kotlin development
            process.
          </p>
        </div>
        <div className="w-full z-10">
          <LeadForm buttonTitle={"Book My Free Call"} />
        </div>
      </section>
    </section>
  );
};

export default ContactForm;

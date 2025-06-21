import React from "react";
import Image from "next/image";
import LeadForm from "@/components/Common/LeadForm";

const Contact = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 mb-5 lg:mb-14 relative">
      <section className="w-full z-20 bg-[#212121] rounded-2xl p-8 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
        <Image
          src={"/create-your-mobile-app-map.png"}
          alt="map image"
          width={600}
          height={410}
          className="w-full lg:w-[70%] h-[90%] absolute inset-0 opacity-10 z-0"
        />
        <div className="text-white w-full flex flex-col items-center text-center lg:text-start lg:items-start justify-center">
          <h2 className="text-[36px] lg:text-[70px] font-medium leading-10 lg:leading-[68px] mb-7 z-10">
            Ready to Be Unforgettable?
          </h2>
          <p className="text-lg lg:text-[20px] font-medium z-10">
            Let’s Create a Brand That Turns Heads. We build bold, creative
            identities that demand attention and make a lasting impact.
          </p>
        </div>
        <div className="w-full z-10">
          <LeadForm buttonTitle={"Make My Brand Unforgettable"} />
        </div>
      </section>
    </section>
  );
};

export default Contact;

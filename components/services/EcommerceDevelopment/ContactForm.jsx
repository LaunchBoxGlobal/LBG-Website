import React from "react";
import Image from "next/image";
import LeadForm from "@/components/Common/LeadForm";

const ContactForm = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 mb-5 lg:mb-14 relative overflow-hidden">
      <section className="w-full z-10 bg-[#212121] rounded-2xl p-8 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
        <Image
          src={"/create-your-mobile-app-map.webp"}
          alt="map image"
          width={600}
          loading="lazy"
          height={410}
          className="w-[70%] h-[90%] max-w-full object-cover lg:object-none opacity-10 absolute inset-0"
        />
        <div className="text-white w-full flex flex-col items-center text-center lg:text-start lg:items-start justify-center">
          <h2 className="text-[36px] lg:text-[70px] font-medium leading-10 lg:leading-[68px] z-10">
            Your Perfect Ecommerce Store is Just a Step Away!
          </h2>

          <p className="text-lg lg:text-[20px] font-medium z-10 mt-6">
            A successful online store needs the right foundation. As a leading
            ecommerce web development company, we craft tailored solutions that
            boost sales and enhance customer experience.
          </p>
        </div>
        <div className="w-full z-10">
          <LeadForm buttonTitle={"Claim Your Free Consultation Now!"} />
        </div>
      </section>
    </section>
  );
};

export default ContactForm;

import React from "react";
import Image from "next/image";
import LeadForm from "@/components/Common/LeadForm";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 mb-5 lg:mb-14 relative">
      <section className="w-full z-20 bg-[#212121] rounded-2xl p-8 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
        <div className="w-full z-10">
          <ContactForm buttonTitle={"Make My Brand Unforgettable"} />
        </div>
        <div className="text-white w-full flex items-center justify-center">
          <div className="relative">
            <img
              src="/new-project/contact-form-icons.png"
              alt="contact-form-icons"
              width={363}
              height={450}
              className="z-10 relative"
            />

            <img
              src="/new-project/contact-form-icons-bg.png"
              alt="contact-form-icons-bg"
              width={456}
              height={446}
              className="absolute left-1/2 -translate-x-1/2 z-0 top-[2%]"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;

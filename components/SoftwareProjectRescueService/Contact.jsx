import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 mb-5 lg:mb-14 relative">
      <section className="w-full z-20 bg-[#212121] rounded-2xl p-8 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
        <div className="w-full z-10">
          <ContactForm buttonTitle={"Make My Brand Unforgettable"} />
        </div>
        <div className="w-full flex items-center justify-center pb-10">
          <div className="relative flex items-center justify-center w-full">
            {/* Animated Pulsing Circles */}
            <span className="absolute animate-ping h-[140px] w-[140px] rounded-full bg-[#E1E1E1] opacity-75 z-0"></span>
            <span className="absolute animate-ping h-[180px] w-[180px] rounded-full bg-[#E1E1E1] opacity-50 z-0"></span>
            <span className="absolute animate-ping h-[220px] w-[220px] rounded-full bg-[#E1E1E1] opacity-35 z-0"></span>

            {/* Center Image */}
            <img
              src="/new-project/contact-form-icons.png"
              alt="contact-form-icons"
              width={473}
              height={560}
              className="relative z-10 top-14"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;

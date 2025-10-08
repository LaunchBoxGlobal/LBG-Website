import React from "react";
import RealEstateContactForm from "./RealEstateContactForm";
import ContactFormAnimation from "./ContactFormAnimation";

const RealEstateContact = () => {
  return (
    <section className="w-full padding-x py-20">
      <div className="w-full bg-black text-white rounded-[17px] lg:h-[130vh] midlg:h-[110vh] max-w-[1260px] grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 lg:p-0 overflow-hidden">
        <div className="">
          <RealEstateContactForm />
        </div>
        <div className="hidden lg:block">
          <ContactFormAnimation />
        </div>
      </div>
    </section>
  );
};

export default RealEstateContact;

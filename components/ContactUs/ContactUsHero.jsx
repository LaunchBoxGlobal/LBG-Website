import React from "react";

const ContactUsHero = () => {
  return (
    <section
      className={`w-full py-20 lg:pt-44 flex flex-col items-center justify-center gap-6 padding-x`}
    >
      <h1 className="font-bold text-4xl lg:text-[64px] mb-1 text-center tracking-normal lg:leading-[78px]">
        Contact <span className="red-text">Us</span>
      </h1>
      <p className="section-paragraph text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
        Cupiditate, reprehenderit!
      </p>
    </section>
  );
};

export default ContactUsHero;

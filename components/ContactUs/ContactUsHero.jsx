import React from "react";

const ContactUsHero = () => {
  return (
    <section
      className={`w-full py-20 lg:pt-44 flex flex-col items-center justify-center gap-6 padding-x`}
    >
      <h1 className="font-bold text-4xl lg:text-[64px] mb-1 text-center tracking-normal lg:leading-[78px]">
        Great Things Start <br /> With a{" "}
        <span className="red-text">Conversation!</span>
      </h1>
      <p className="text-base lg:text-[24px] text-center 2xl:text-[30px] font-light lg:leading-[36px] text-gray-400 lg:w-2/3">
        Big things start with a simple action. Share your idea with us, <br />
        and We’ll help you turn it into something amazing.
      </p>
    </section>
  );
};

export default ContactUsHero;

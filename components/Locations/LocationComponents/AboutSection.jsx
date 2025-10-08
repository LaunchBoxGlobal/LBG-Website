import React from "react";

const AboutSection = ({ heading, description }) => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="text-[25px] font-semibold red-text lg:w-[90%] mx-auto">
          {heading}
        </h2>

        <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-500 lg:w-[90%] mx-auto leading-[3] font-normal">
          {description}
        </p>
      </section>
    </section>
  );
};

export default AboutSection;

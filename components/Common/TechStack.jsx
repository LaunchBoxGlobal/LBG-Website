import React from "react";
import TechSlider from "./TechSlider";
import TechSliderReverse from "./TechSliderReverse";

const TeckStack = ({ heading, redText, description }) => {
  return (
    <>
      <section className="w-full py-10 lg:py-20 bg-[#ffff]" id="teckstack">
        <section className="w-full padding-x flex flex-col items-center justify-center gap-5 mb-12">
          <h2 className="section-heading text-center lg:w-[60%]">
            {heading} <span className="red-text">{redText}</span>
          </h2>
          <p className="section-paragraph text-center lg:w-[75%] w-full">
            {description}
          </p>
        </section>
        <TechSlider />
        <TechSliderReverse />
      </section>
    </>
  );
};

export default TeckStack;

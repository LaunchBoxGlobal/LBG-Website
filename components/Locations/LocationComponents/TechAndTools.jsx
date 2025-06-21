import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
import React from "react";

const TechAndTools = ({ heading, redText, description, child }) => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center overflow-hidden">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            {heading} <span className="red-text">{redText}</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph lg:w-[70%] mx-auto">{description}</p>
        </AnimatedText>
      </section>

      {child && <section className="w-full mt-10 lg:mt-14">{child}</section>}
    </section>
  );
};

export default TechAndTools;

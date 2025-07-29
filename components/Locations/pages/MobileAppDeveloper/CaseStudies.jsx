import React from "react";

const CaseStudies = ({ heading, redText, description, child }) => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff]">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center padding-x overflow-hidden">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          {heading} <span className="red-text">{redText}</span>
        </h2>

        <p className="section-paragraph lg:w-[70%] mx-auto">{description}</p>
      </section>

      {child}
    </section>
  );
};

export default CaseStudies;

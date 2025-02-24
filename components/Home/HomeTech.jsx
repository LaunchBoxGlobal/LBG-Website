import React from "react";
import HomeTechnologiesSlider from "./HomeTechnologiesSlider";
import TechSlider2 from "./TechSlider2";

const HomeTech = () => {
  return (
    <>
      <section className="w-full padding-x py-10">
        <section className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="section-heading">
            Smart Technology <br /> For Better{" "}
            <span className="red-text">Solution</span>
          </h2>
          <p className="section-paragraph text-center">
            We carefully select the best tools and technologies to build strong,
            fast, <br /> and secure software solutions that perfectly fit your
            business needs.
          </p>
        </section>
      </section>
      <HomeTechnologiesSlider />
      <TechSlider2 />
    </>
  );
};

export default HomeTech;

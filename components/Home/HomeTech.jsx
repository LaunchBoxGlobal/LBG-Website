import React from "react";
import HomeTechnologiesSlider from "./HomeTechnologiesSlider";
import TechSlider2 from "./TechSlider2";

const HomeTech = () => {
  return (
    <>
      <section className="w-full py-10 lg:py-20 bg-[#F9F9F9]">
        <section className="w-full padding-x flex flex-col items-center justify-center gap-5 mb-8">
          <h2 className="section-heading text-center">
            Smart Technology For <br /> Better{" "}
            <span className="red-text">Solution</span>
          </h2>
          <p className="section-paragraph text-center">
            We carefully select the best tools and technologies to build strong,
            fast, <br /> and secure software solutions that perfectly fit your
            business needs.
          </p>
        </section>
        <HomeTechnologiesSlider />
        <TechSlider2 />
      </section>
    </>
  );
};

export default HomeTech;

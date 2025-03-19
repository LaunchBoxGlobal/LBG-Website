import HomeTechnologiesSlider from "@/components/Home/HomeTechnologiesSlider";
import TechSlider2 from "@/components/Home/TechSlider2";
import React from "react";
// import HomeTechnologiesSlider from "./HomeTechnologiesSlider";
// import TechSlider2 from "./TechSlider2";

const Technologies = () => {
  return (
    <>
      <section className="w-full py-10 lg:pb-20 bg-[#ffff]" id="teckstack">
        <section className="w-full padding-x flex flex-col items-center justify-center gap-5 mb-12">
          <h2 className="section-heading text-center lg:w-[60%]">
            Smart Technology for Better{" "}
            <span className="red-text">Solution</span>
          </h2>
          <p className="section-paragraph text-center lg:w-2/3 w-full">
            You get the best tools and technologies to build fast, secure, and
            reliable software that fits your business perfectly.
          </p>
        </section>
        <HomeTechnologiesSlider />
        <TechSlider2 />
      </section>
    </>
  );
};

export default Technologies;

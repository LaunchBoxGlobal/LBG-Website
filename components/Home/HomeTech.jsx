import React from "react";
import HomeTechnologiesSlider from "./HomeTechnologiesSlider";
import TechSlider2 from "./TechSlider2";
import HomeStats from "./HomeStats";

const HomeTech = () => {
  return (
    <>
      <section className="w-full py-10 lg:py-20 bg-[#ffff]">
        <section className="w-full padding-x flex flex-col items-center justify-center gap-5 mb-8">
          <h2 className="section-heading text-center">
            Smart Technology For <br /> Better{" "}
            <span className="red-text">Solution</span>
          </h2>
          <p className="section-paragraph text-center">
            You get the best tools and technologies to build fast, secure, and{" "}
            <br /> reliable software that fits your business perfectly.
          </p>
        </section>
        <HomeTechnologiesSlider />
        <TechSlider2 />
      </section>
      <HomeStats />
    </>
  );
};

export default HomeTech;

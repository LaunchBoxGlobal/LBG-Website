import HomeTechnologiesSlider from "@/components/Home/HomeTechnologiesSlider";
import TechSlider2 from "@/components/Home/TechSlider2";
import React from "react";

const Technologies = () => {
  return (
    <section className="w-full py-10 lg:pb-20 bg-[#ffff]" id="teckstack">
      <section className="w-full padding-x flex flex-col items-center justify-center gap-5 mb-12">
        <h2 className="section-heading text-center lg:w-[60%]">
          Tools We Use for <span className="red-text">Web Apps</span>
        </h2>
        <p className="section-paragraph text-center lg:w-[78%] w-full">
          From front-end frameworks to back-end solutions and databases, our
          carefully selected tech stack ensures seamless functionality,
          security, and efficiency for your business.
        </p>
      </section>
      <HomeTechnologiesSlider />
      <TechSlider2 />
    </section>
  );
};

export default Technologies;

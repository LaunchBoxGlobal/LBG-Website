import HomeTechnologiesSlider from "@/components/Home/HomeTechnologiesSlider";
import TechSlider2 from "@/components/Home/TechSlider2";
import React from "react";

const Technologies = () => {
  return (
    <section className="w-full py-10 lg:pb-20 bg-[#ffff]" id="teckstack">
      <section className="w-full padding-x flex flex-col items-center justify-center gap-5 mb-12">
        <h2 className="section-heading text-center lg:w-[60%]">
          Built with the Best <span className="red-text">Technologies</span>
        </h2>
        <p className="section-paragraph text-center lg:w-[75%] w-full">
          We leverage a modern tech stack to create scalable, secure, and
          high-performance custom software. From intuitive front-end frameworks
          to powerful back-end systems, our technologies ensure seamless
          functionality and future-ready solutions.
        </p>
      </section>
      <HomeTechnologiesSlider />
      <TechSlider2 />
    </section>
  );
};

export default Technologies;

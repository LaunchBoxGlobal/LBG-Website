import React from "react";
import Form from "./Form";
import AnimatedText from "./AnimatedText";

const BuildYourTechTeam = () => {
  return (
    <section
      id="buildmyteam"
      className="w-full py-20 midlg:py-32 xl:py-40 bg-[#F9F9F9] padding-x overflow-hidden"
    >
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            Build Your Ideal Tech Team In{" "}
            <span className="red-text">2 Minutes</span>
          </h2>
        </AnimatedText>
      </section>
      <Form />
    </section>
  );
};

export default BuildYourTechTeam;

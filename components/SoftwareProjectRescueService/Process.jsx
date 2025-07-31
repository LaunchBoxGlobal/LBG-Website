import React from "react";
import ProcessAnimation from "./ProcessAnimation";
// import OffShoreProcess from ".";

const Process = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Your Path to Offshore{" "}
          <span className="red-text">Development Success</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Our proven 5-step process ensures smooth offshore software development
          from start to finish. We handle the complexities so you get quality
          results.
        </p>
      </section>

      <ProcessAnimation />
    </section>
  );
};

export default Process;

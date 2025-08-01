import React from "react";
import ProcessAnimation from "./ProcessAnimation";
// import OffShoreProcess from ".";

const Process = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Code Rescue Process to Get You{" "}
          <span className="red-text">Back on Track</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          To help you with the projects that are built through AI assisted
          coding. With our project recovery services, we guide you from the
          first review to a finished, market‑ready product.
        </p>
      </section>

      <ProcessAnimation />
    </section>
  );
};

export default Process;

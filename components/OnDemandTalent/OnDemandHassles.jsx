import React from "react";
import AnimatedText from "../StaffAugmentation/AnimatedText";
import OnDemandHasslesTable from "./OnDemandHasslesTable";

const OnDemandHassles = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center gap-5">
        <AnimatedText>
          <h2 className="section-heading text-center mx-auto lg:w-[80%]">
            On-Demand Tech Talent <span className="red-text">Zero Hassle</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph text-center mx-auto lg:w-[65%]">
            Get pre-screened professionals who join your team in days, not
            months. Avoid hiring risks and project delays with flexible talent
            augmentation. Scale up or down instantly—only pay for what you need.
          </p>
        </AnimatedText>
      </section>

      <OnDemandHasslesTable />
    </section>
  );
};

export default OnDemandHassles;

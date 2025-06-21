import React from "react";
import WhyStaffAugmentationTable from "./WhyStaffAugmentationTable";
import AnimatedText from "./AnimatedText";

const WhyStaffAugmentation = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 padding-x bg-[#F9F9F9] overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            Why Staff Augmentation <span className="red-text">Wins</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph lg:w-[90%] mx-auto">
            Compare hiring models at a glance. Staff augmentation gives you the
            best balance of speed, control, and cost-effectiveness for tech team
            scaling.
          </p>
        </AnimatedText>
      </section>
      <WhyStaffAugmentationTable />
    </section>
  );
};

export default WhyStaffAugmentation;

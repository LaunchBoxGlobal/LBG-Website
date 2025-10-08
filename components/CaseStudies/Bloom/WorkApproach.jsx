import React from "react";
import WorkApproachAnimation from "./WorkApproachAnimation";

const WorkApproach = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center pb-20 midlg:pb-28">
      <h2 className="section-heading">Work Approach</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        We built Bloom step-by-step, starting with what church members needed
        most. Through careful mobile app development, we added devotionals,
        music, and prayer features one at a time, testing each part with real
        users before moving forward.
      </p>

      <WorkApproachAnimation />
    </section>
  );
};

export default WorkApproach;

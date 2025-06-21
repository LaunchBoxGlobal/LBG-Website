import Image from "next/image";
import React from "react";
import WorkApproachAnimation from "./WorkApproachAnimation";

const WORK_APPROACH = [
  {
    title: "Project Study",
    description: "Research, User Persona, & User Flow",
    image: "/case-studies/project-study-image.png",
    width: 47,
    height: 42,
  },
  {
    title: "Product Design",
    description: "Research, User Persona, & User Flow",
    image: "/case-studies/product-design.png",
    width: 51,
    height: 50,
  },
  {
    title: "Development",
    description: "Research, User Persona, & User Flow",
    image: "/case-studies/development-icon.png",
    width: 56,
    height: 50,
  },
];

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

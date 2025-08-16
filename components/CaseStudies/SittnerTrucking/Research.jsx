import { SITTNER_TRUCKING_RESEARCH } from "@/constants/case-studies/sittner-trucking-content/sittner-trucking-research";
import React from "react";
import ResearchCard from "./ResearchCard";
import Image from "next/image";

const Research = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center relative overflow-hidden pt-10 pb-40">
      <h2 className="section-heading text-center z-20">
        Understanding the Problem
      </h2>

      <div className="w-full mt-28 flex flex-col lg:flex-row justify-around z-10 relative">
        {SITTNER_TRUCKING_RESEARCH?.map((research, index) => {
          return <ResearchCard research={research} key={index} index={index} />;
        })}

        <Image
          src={
            "/case-studies/sittner-trucking/understanding-the-problem-green-line.png"
          }
          alt="understanding-the-problem-green-line"
          width={760}
          height={88}
          className="absolute left-1/2 -translate-x-1/2 bottom-[-25%] rotate-3"
        />
      </div>
      <div className="w-[100vw] h-[100vw] border-2 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 z-0 circle-fade">
        <div className="w-[80%] h-[80%] border-2 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0 circle-fade"></div>
        <div className="w-[60%] h-[60%] border-2 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0 circle-fade"></div>
      </div>
      <div className="sittner-glow absolute left-[20%] bottom-[30%] opacity-20" />
      <div className="sittner-glow absolute right-[10%] bottom-[40%] opacity-10" />
    </section>
  );
};

export default Research;

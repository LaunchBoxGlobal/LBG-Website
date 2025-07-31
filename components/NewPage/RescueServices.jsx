import { RESCUE_SERVICES } from "@/constants/ai-based-projects-content/rescue-services";
import Image from "next/image";
import React from "react";

const RescueServices = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Core Capabilities Of Our Project{" "}
          <span className="red-text">Rescue Services</span>
        </h2>
        <p className="section-paragraph lg:w-[90%] mx-auto">
          With our project recovery services, you get a thorough code audit and
          expert code rescue to refine apps, web apps, and software built using
          AI‑based coding. Here are the core capabilities we offer:
        </p>
      </section>

      <section className="w-full flex items-center justify-center gap-5 flex-wrap mt-10 lg:mt-16">
        {RESCUE_SERVICES?.map((r, i) => {
          return (
            <div
              className="w-full md:w-[48%] lg:max-w-[32%] border rounded-xl h-[534px] pb-8 pt-8 flex flex-col items-start justify-between"
              key={i}
            >
              <h3 className="text-[22px] px-8 font-semibold leading-[1] min-h-[80px]">
                {r?.title}
              </h3>
              <Image
                src={r?.image}
                width={r?.width}
                height={r?.height}
                className=""
                alt={`${r?.title}`}
              />
              <p className="text-lg pb-3 px-5 leading-[1.2]">
                {r?.description}
              </p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default RescueServices;

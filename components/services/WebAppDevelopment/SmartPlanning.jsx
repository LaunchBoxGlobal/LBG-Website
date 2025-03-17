import { SMART_PLANNING } from "@/constants/mobile-app-development/SmartPlanning";
import Image from "next/image";
import React from "react";

const SmartPlanning = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Powered by a Well-Defined <span className="red-text">Workflow</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          Struggling with slow, hard-to-use web apps? Our web app development
          services create fast, reliable, and easy-to-navigate apps. As a
          dependable web application development agency, we focus on solving
          real problems and delivering results that matter.
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-20 lg:mb-10 relative">
        <Image
          src={"/smart-planning-line.png"}
          width={1175}
          height={1580}
          className="h-[1740px] absolute left-1/2 -translate-x-1/2 top-12 hidden lg:block"
        />
        <Image
          src={"/rocket-mockup.png"}
          width={119}
          height={221}
          className="object-contain absolute bottom-[0.3%] right-[27%] w-[219px] h-[221px] hidden lg:block"
        />
        {SMART_PLANNING?.map((plan, index) => {
          // Logic to alternate between left and right
          const isLeft = index % 2 === 0;
          return (
            <div
              className={`w-full lg:w-[490px] h-[243px] rounded-2xl flex flex-col py-6 px-10 items-start border gap-1 relative z-10 bg-white mb-5 ${
                index === 4
                  ? "lg:-top-20"
                  : index === 5
                  ? "xl:-top-24"
                  : index === 6
                  ? "xl:-top-40"
                  : ""
              } ${
                isLeft
                  ? `border-l-[17px] border-[#F40E00] lg:mr-auto`
                  : `border-r-[17px] border-[#F40E00] lg:ml-auto top-0`
              }`}
              key={index}
            >
              <p className="font-medium text-base lg:text-[17px]">
                {plan?.tag_line}
              </p>
              <h3 className="font-medium text-[22px] lg:text-[34px] red-text">
                {plan?.title}
              </h3>
              <p className="text-[16px] lg:text-lg">{plan?.description}</p>
              <div
                className={`w-[73px] h-[73px] bg-[#F40E00] rounded-full hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2 ${
                  isLeft ? "right-[-8%]" : "left-[-8%]"
                }`}
              >
                <span className="text-white text-[47px] font-medium">{`0${
                  index + 1
                }`}</span>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default SmartPlanning;

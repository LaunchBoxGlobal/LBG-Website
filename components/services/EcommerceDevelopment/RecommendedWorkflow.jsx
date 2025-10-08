"use client";
import React from "react";
import Image from "next/image";

const RecommendedWorkflow = ({ workflow }) => {
  return (
    <section className="w-full mt-10 lg:mt-20 lg:mb-10 relative">
      <Image
        src={"/reasons-line.webp"}
        alt="workflow line image"
        width={1027.77}
        height={1414}
        loading="lazy"
        className="lg:h-[1500px] midlg:h-[1500px] absolute left-1/2 -translate-x-1/2 lg:top-10 xl:top-0 hidden lg:block"
      />
      <Image
        src={"/rocket-mockup.webp"}
        width={119}
        height={221}
        loading="lazy"
        className="object-contain absolute lg:bottom-[4.5%] midlg:bottom-[5%] xl:bottom-[5.5%] lg:right-[1%] xl:right-[4%] w-[219px] h-[221px] hidden lg:block"
      />
      {workflow?.map((plan, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            className={`w-full lg:w-[490px] h-[263px] rounded-2xl flex flex-col py-6 px-10 items-start justify-center border gap-1 relative z-10 bg-white mb-5 ${
              index === 4
                ? "lg:-top-20"
                : index === 5
                ? "lg:-top-8 lg:right-[30%]"
                : index === 6
                ? "lg:-top-40"
                : ""
            } ${
              isLeft
                ? `border-l-[17px] border-[#F40E00] lg:mr-auto`
                : `border-r-[17px] border-[#F40E00] lg:ml-auto top-0`
            }`}
            key={index}
          >
            <p className="font-medium text-sm md:text-base lg:text-[17px]">
              {plan?.tag_line}
            </p>
            <h3 className="font-medium text-[22px] lg:text-[30px] red-text xl:leading-7">
              {plan?.title}
            </h3>
            <p className="text-[16px] lg:text-lg leading-5">
              {plan?.description}
            </p>
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
  );
};

export default RecommendedWorkflow;

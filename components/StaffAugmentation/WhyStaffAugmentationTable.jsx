import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const benefits = [
  "Speed to hire",
  "Team control",
  "Quality assurance",
  "Cost efficiency",
  "Scalability",
];

const WhyStaffAugmentationTable = () => {
  return (
    <section className="w-full mt-10 lg:mt-14 flex items-start gap-0 lg:px-10 overflow-hidden">
      <div className="w-full flex flex-row gap-0 overflow-x-auto pb-10">
        <div className="w-[280px] lg:w-[35%] flex flex-col items-start">
          <p className="h-[62px] text-sm md:text-base lg:text-[22px] pt-4 px-4 font-semibold">
            Features / Metric
          </p>
          <div className="w-[280px] lg:w-full">
            {benefits?.map((b, i) => {
              return (
                <div
                  key={i}
                  className={`border px-4 rounded-l-xl w-full border-r-0 mb-1.5 flex items-start h-[74px] relative`}
                >
                  <p className="block absolute top-1/2 -translate-y-1/2 font-medium text-sm md:text-base lg:text-[22px]">
                    {b}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[300px] lg:w-[25%]">
          <div className="w-full px-3 h-[62px] bg-[#F40E00] flex items-center justify-center rounded-t-2xl">
            <p className="text-sm md:text-base lg:text-[22px] font-semibold text-white">
              Staff Augmentation
            </p>
          </div>
          {["Fast", "Full", "Yes", "High", "Flexible", ""]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`bg-white px-4 w-full flex items-center justify-center shadow z-10 border-none relative ${
                  i === 5 ? "rounded-b-2xl h-[70px]" : "h-[80px]"
                }`}
              >
                <span className="text-sm md:text-base lg:text-[22px]">{b}</span>
              </div>
            );
          })}
        </div>
        <div className="w-[300px] lg:w-[20%] flex flex-col justify-start items-center">
          <p className="h-[62px] text-sm md:text-base lg:text-[22px] flex items-center justify-center px-4 font-semibold text-center lg:leading-6 xl:pl-10">
            In-House
          </p>
          {["Slow", "Full", "Yes", "Low", "Rigid"]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b px-4 w-full border-r-0 mb-1.5 pl-10 flex items-center justify-center h-[74px] relative`}
              >
                <span className="text-sm md:text-base lg:text-[22px]">{b}</span>
              </div>
            );
          })}
        </div>
        <div className="w-[300px] lg:w-[20%] flex flex-col justify-start items-center">
          <p className="h-[62px] text-sm md:text-base lg:text-[22px] flex items-center px-4 justify-center font-semibold text-center lg:leading-6 lg:pl-[23%] xl:pl-[10%]">
            Freelancers
          </p>
          {["Fast", "Limited", "No", "Medium", "Limited"]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b px-4 w-full border-r-0 mb-1.5 h-[74px] relative flex items-center justify-center`}
              >
                <span className="text-sm md:text-base lg:text-[22px]">{b}</span>
              </div>
            );
          })}
        </div>
        <div className="w-[300px] lg:w-[15%] flex flex-col justify-start items-center">
          <p className="h-[62px] text-sm md:text-base lg:text-[22px] flex items-center justify-center px-4 font-semibold text-center lg:leading-6">
            Outsourcing
          </p>
          {["Medium", "Limited", "Yes", "High", "Flexible"]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b border-r rounded-r-xl px-4 w-full mb-1.5 h-[74px] relative flex items-center justify-center`}
              >
                <span className="text-sm md:text-base lg:text-[22px]">{b}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyStaffAugmentationTable;

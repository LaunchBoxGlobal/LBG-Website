import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const benefits = [
  "Flexible & Fast Development (Agile Workflow)",
  "Functionality-First Approach",
  "World Class Talents",
  "Rapid Prototyping (Test Ideas Faster)",
  "Real-Time Progress Tracking",
  "Industry-Specific Expertise",
  "Custom Build Solution",
  "Post Launch Support & Maintenance",
  "Latest Technologies & Best Practices",
  "Transparent Pricing (no hidden fees)",
  "24/7 Customer Support",
  "Always Affordable",
];

const BenefitsTable = () => {
  return (
    <section className="w-full flex items-start gap-0 lg:px-10 overflow-x-scroll">
      <div className="w-full flex flex-row gap-0 overflow-x-auto pb-10">
        <div className="w-[280px] lg:w-[40%] flex flex-col items-start">
          <p className="h-[62px] pt-4 px-4 text-lg font-semibold">
            Features / Metric
          </p>
          <div className="w-[280px] lg:w-full">
            {benefits?.map((b, i) => {
              return (
                <div
                  key={i}
                  className={`border px-4 rounded-l-xl w-full border-r-0 mb-1.5 flex items-start h-[74px] relative ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <p className="block absolute top-1/2 -translate-y-1/2 text-base lg:text-lg font-medium">
                    {b}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[300px] lg:w-[15%]">
          <div className="w-[110px] px-3 lg:w-[219px] h-[62px] bg-[#F40E00] flex items-center justify-center rounded-t-2xl">
            <Image
              src={"/lb-white-logo.png"}
              width={188}
              height={33}
              alt="launchbox global logo"
              loading="lazy"
            />
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]?.map((_, i) => {
            return (
              <div
                key={i}
                className={`bg-white px-4 w-[110px] lg:w-[219px] shadow z-10 border-none relative ${
                  i === 12 ? "rounded-b-2xl h-[70px]" : "h-[80px]"
                }`}
              >
                {i !== 12 && (
                  <div className="w-[40px] h-[40px] rounded-full bg-[#078F40] p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <FaCheck className="text-white w-full h-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="w-[300px] lg:w-[15%] flex flex-col justify-start items-center">
          <p className="h-[62px] flex items-center justify-center px-4 text-lg font-semibold text-center lg:leading-6 xl:pl-24">
            Local <br /> Companies
          </p>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b px-4 w-full border-r-0 mb-1.5 h-[74px] relative ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full lg:ml-[11%] xl:ml-[24%] ${
                    i === 0 || i === 5 || i === 6 || i === 8
                      ? "bg-[#078F40]"
                      : "bg-[#F40E00]"
                  } p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                >
                  {i === 0 || i === 5 || i === 6 || i === 8 ? (
                    <FaCheck className="text-white w-full h-full" />
                  ) : (
                    <IoClose className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[300px] lg:w-[15%] flex flex-col justify-start items-center">
          <p className="h-[62px] flex items-center px-4 justify-center text-lg font-semibold text-center lg:leading-6 lg:pl-[23%] xl:pl-[26%]">
            Traditional <br /> Firms
          </p>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b px-4 w-full border-r-0 mb-1.5 h-[74px] relative ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full lg:ml-[8%] xl:ml-[10%] ${
                    i === 5 || i === 6 || i === 7 || i === 10
                      ? "bg-[#078F40]"
                      : "bg-[#F40E00]"
                  } p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                >
                  {i === 5 || i === 6 || i === 7 || i === 10 ? (
                    <FaCheck className="text-white w-full h-full" />
                  ) : (
                    <IoClose className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[300px] lg:w-[15%] flex flex-col justify-start items-center">
          <p className="h-[62px] flex items-center justify-center px-4 text-lg font-semibold text-center lg:leading-6">
            Freelance <br /> Agencies
          </p>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b border-r rounded-r-xl px-4 w-full mb-1.5 h-[74px] relative ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full ${
                    i === 0 ||
                    i === 2 ||
                    i === 4 ||
                    i === 6 ||
                    i === 8 ||
                    i === 9 ||
                    i === 10 ||
                    i === 11
                      ? "bg-[#078F40]"
                      : "bg-[#F40E00]"
                  } p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                >
                  {i === 0 ||
                  i === 2 ||
                  i === 4 ||
                  i === 6 ||
                  i === 8 ||
                  i === 9 ||
                  i === 10 ||
                  i === 11 ? (
                    <FaCheck className="text-white w-full h-full" />
                  ) : (
                    <IoClose className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsTable;

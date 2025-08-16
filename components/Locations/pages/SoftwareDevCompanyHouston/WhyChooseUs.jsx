import {
  SOFTWARE_DEV_COMPANY_HOUSTON_WHY_CHOOSE_US_1,
  SOFTWARE_DEV_COMPANY_HOUSTON_WHY_CHOOSE_US_2,
} from "@/constants/locations/software-dev-company-houston/software-dev-company-houston-why-choose-us";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        <p className="red-text font-semibold text-[25px] lg:w-[60%] text-center mx-auto">
          Why U.S. Businesses Choose LaunchBox Global
        </p>

        <h2 className="section-heading text-center mx-auto">
          A Custom Software Development Company in{" "}
          <span className="red-text">Houston</span>
        </h2>
        <p className="section-paragraph text-center mx-auto lg:w-[70%]">
          At LaunchBox Global, we combine the flexibility of offshore
          development with the reliability and responsiveness local businesses
          in Houston expect. Here’s what sets us apart as a trusted custom
          software development company in Houston:
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {SOFTWARE_DEV_COMPANY_HOUSTON_WHY_CHOOSE_US_1?.map((c, i) => {
          return (
            <div
              className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-7 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r lg:border-b "
                  : i === 1
                  ? "lg:border-r lg:border-b"
                  : i === 2
                  ? "lg:border-b"
                  : ""
              }`}
              key={i}
            >
              <h3 className="font-semibold text-[20px] xl:text-[22px] w-[70%] text-center">
                {c?.title}
              </h3>
              <img
                src={c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
                className="transition duration-300 group-hover:invert group-hover:brightness-0"
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
        {SOFTWARE_DEV_COMPANY_HOUSTON_WHY_CHOOSE_US_2?.map((c, i) => {
          return (
            <div
              key={i}
              className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-7 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r"
                  : i === 1
                  ? "lg:border-r"
                  : i === 2
                  ? ""
                  : ""
              }`}
            >
              <h3 className="font-semibold text-[20px] xl:text-[22px] w-[70%] text-center">
                {c?.title}
              </h3>
              <img
                src={c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
                className="transition duration-300 group-hover:invert group-hover:brightness-0"
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;

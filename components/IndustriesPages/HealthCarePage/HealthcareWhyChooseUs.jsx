import {
  BRANDING_DESIGN_WHY_CHOOSE_US_1,
  BRANDING_DESIGN_WHY_CHOOSE_US_2,
} from "@/constants/branding-and-design/branding-and-design-why-choose-us";
import Image from "next/image";
import React from "react";

const HealthcareWhyChooseUs = () => {
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        <h2 className="section-heading text-center lg:w-[80%]">
          Why Choose LaunchBox<span className="red-text"> Global?</span>
        </h2>
        <p className="section-paragraph text-center mx-auto lg:w-[80%]">
          Clients pick LaunchBox Global because we make branding simple and
          effective. We listen first, then create designs that actually fit your
          business with clear logos, smart colors, and styles that help
          customers recognize and trust you. No flashy tricks, just real results
          that work.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {BRANDING_DESIGN_WHY_CHOOSE_US_1?.map((c, i) => {
          return (
            <div
              className={`w-full group flex flex-col items-center justify-start text-center gap-6 p-5 xl:p-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
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
              <h3 className="font-semibold text-[20px] xl:text-[22px]">
                {c?.title}
              </h3>
              <Image
                src={c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
                loading="lazy"
                className="transition duration-300 group-hover:invert group-hover:brightness-0"
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
        {BRANDING_DESIGN_WHY_CHOOSE_US_2?.map((c, i) => {
          return (
            <div
              className={`w-full group flex flex-col items-center justify-start text-center gap-6 p-5 xl:p-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r"
                  : i === 1
                  ? "lg:border-r"
                  : i === 2
                  ? ""
                  : ""
              }`}
              key={i}
            >
              <h3 className="font-semibold text-[20px] xl:text-[22px]">
                {c?.title}
              </h3>
              <Image
                src={c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
                loading="lazy"
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

export default HealthcareWhyChooseUs;

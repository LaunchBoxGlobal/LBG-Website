import React from "react";
import {
  AI_BASED_PROJECT_WHY_CHOOSE_US_1,
  AI_BASED_PROJECT_WHY_CHOOSE_US_2,
} from "@/constants/ai-based-projects-content/ai-based-project-why-choose-us";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 midlg:py-28 padding-x bg-[#fff] overflow-hidden">
      <section className="w-full flex flex-col items-center gap-5">
        <h2 className="section-heading text-center mx-auto">
          Why We’re the Right Team for{" "}
          <span className="red-text">Project Recovery</span>
        </h2>
        <p className="section-paragraph text-center mx-auto lg:w-[65%]">
          With our Project Recovery services, you’ll get your vibe coding
          projects refined, your vision rescued, and your project ready for the
          world.
        </p>
      </section>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {AI_BASED_PROJECT_WHY_CHOOSE_US_1?.map((c, i) => {
          return (
            <div
              className={`w-full group py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r lg:border-b "
                  : i === 1
                  ? "lg:border-r lg:border-b"
                  : i === 2
                  ? "lg:border-b"
                  : ""
              }`}
              key={i}
              // onMouseEnter={() => setIsHovered(i)}
              // onMouseLeave={() => setIsHovered(null)}
            >
              <div className="w-full flex flex-col items-center justify-start text-center gap-6">
                <h3 className="font-semibold text-[20px] xl:text-[22px]">
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
            </div>
          );
        })}
        {AI_BASED_PROJECT_WHY_CHOOSE_US_2?.map((c, i) => {
          return (
            <div
              className={`w-full group py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r"
                  : i === 1
                  ? "lg:border-r"
                  : i === 2
                  ? ""
                  : ""
              }`}
              key={i}
              // onMouseEnter={() => setIsCardHovered(i)}
              // onMouseLeave={() => setIsCardHovered(null)}
            >
              <div className="w-full flex flex-col items-center justify-start text-center gap-6">
                <h3 className="font-semibold text-[20px] xl:text-[22px]">
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;

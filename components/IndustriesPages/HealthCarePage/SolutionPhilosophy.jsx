import { DIGITAL_TRANSFORMATION } from "@/constants/industries/healthcare-page-content/digital-transformation";
import React from "react";

const SolutionPhilosophy = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Our Healthcare Development{" "}
          <span className="red-text">Philosophy</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          With our custom healthcare software development services, we handle
          every challenge that comes your way. Our medical software developer
          designs software that is user-friendly, secure, and scalable.
          Top-notch patient care is our top priority, so we make sure your
          digital tools are customized to your healthcare needs.
        </p>
      </section>

      <div className="w-full flex items-center justify-center flex-wrap gap-5 mt-16">
        {DIGITAL_TRANSFORMATION?.map((t, i) => {
          return (
            <div
              className="w-full lg:w-[30%] min-h-[540px] bg-[#F6F6F6] rounded-[21px] px-7 pb-7 pt-20 flex flex-col items-start gap-3 relative"
              key={i}
            >
              <div className="w-[52px] h-[52px] border-[8px] border-white rounded-full flex items-center justify-center absolute top-5 left-5">
                <span className="text-lg font-bold">0{i + 1}</span>
              </div>
              <div className="w-full min-h-[140px]">
                <img
                  src={t?.icon}
                  alt={t?.alt_tag}
                  width={t?.width}
                  height={t?.height}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-semibold text-[22px] leading-none">
                {t?.title}
              </h3>
              <p className="text-lg leading-[1.2]">{t?.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SolutionPhilosophy;

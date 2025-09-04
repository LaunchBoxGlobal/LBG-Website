import { HEALTHCARE_APP_DEVELOPMENT_CHALLENGES } from "@/constants/industries/healthcare-page-content/healthcare-app-development-challenges";
import React from "react";

const Challenges = () => {
  return (
    <section className="w-full py-20 bg-[#fff] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Major Challenges in Healthcare{" "}
          <span className="red-text">Software Development</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Being one of the top healthcare software development companies, our
          developers have to deal with multiple challenges when building
          healthcare software. We need to keep patient data safe and
          HIPAA-compliant, update outdated systems, etc, and still make the
          software easy for patients to use. Understanding these hurdles helps
          you create functional software.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16 max-w-[1270px]">
        {HEALTHCARE_APP_DEVELOPMENT_CHALLENGES?.map((t, i) => {
          return (
            <div
              className="w-full min-h-[440px] bg-[#F6F6F6] rounded-[21px] p-7 flex flex-col items-start gap-3 relative overflow-hidden"
              key={i}
            >
              <img
                src={t?.bg_image}
                alt={`${t?.title} image`}
                width={t?.bg_image_width}
                height={t?.bg_image_height}
                className="absolute z-0 top-0 right-0 object-contain opacity-75"
              />
              <img
                src={t?.icon}
                alt={`${t?.title} image`}
                width={t?.width}
                height={t?.height}
                className="z-10"
              />
              <h3 className="font-semibold text-[22px] leading-none z-10 mt-3 mb-10">
                {t?.title}
              </h3>
              <p className="text-lg leading-[1.2] z-10">{t?.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Challenges;

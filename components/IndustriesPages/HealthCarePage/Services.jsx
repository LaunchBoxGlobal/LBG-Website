import { HEALTHCARE_DEVELOPMENT_SERVICES } from "@/constants/industries/healthcare-page-content/healthcare-development-services";
import React from "react";

const Services = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Our Healthcare Software{" "}
          <span className="red-text">Development Services</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          We offer custom healthcare software development services designed to
          help startups and healthcare providers build secure and
          patient-centered platforms. We cover everything including strategy to
          launch. We focus on functionality, compliance, and growth so your
          solution delivers actual impact in healthcare.
        </p>
      </section>

      <div className="w-full flex items-center justify-center flex-wrap gap-5 mt-16">
        {HEALTHCARE_DEVELOPMENT_SERVICES?.map((t, i) => {
          return (
            <div
              className="w-full lg:w-[30%] midlg:w-[23%] min-h-[450px] bg-[#F6F6F6] rounded-[21px] p-7 flex flex-col items-start text-start gap-3 relative"
              key={i}
            >
              <div className="w-full">
                <img
                  src={t?.icon}
                  alt={t?.alt_tag}
                  width={t?.width}
                  height={t?.height}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-[22px] leading-none mt-5">
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

export default Services;

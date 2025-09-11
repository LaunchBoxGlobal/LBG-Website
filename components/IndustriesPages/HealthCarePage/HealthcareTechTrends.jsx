import { HEALTHCARE_TECH_TRENDS } from "@/constants/industries/healthcare-page-content/healthcare-tech-trends";
import React from "react";

const HealthcareTechTrends = () => {
  return (
    <section className="w-full py-20 midlg:py-32 midlg:pt-48 xl:pt-56 bg-[#fff] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          The Future-Ready Insights From a Healthcare App{" "}
          <span className="red-text">Development Company</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          As the leading provider of healthcare app development services, we
          help organizations to adopt the future-focused technologies that drive
          efficiency, innovation, and patient outcomes. These tech trends
          highlight where healthcare is headed, offering enterprises and
          startups valuable insights into the opportunities that will shape
          tomorrow's digital care systems.
        </p>
      </div>

      <div className="w-full flex items-start justify-center flex-wrap gap-5 mt-16 max-w-[1270px]">
        {HEALTHCARE_TECH_TRENDS?.map((t, i) => {
          return (
            <div
              className="w-full lg:w-[23%] min-h-[560px] border rounded-[21px] p-7 flex flex-col items-start gap-3 relative overflow-hidden hover:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] transition-all duration-300 hover:border-b-[6px] hover:border-b-[#F40E00]"
              key={i}
            >
              <img
                src={t?.icon}
                alt={`${t?.title} image`}
                width={t?.width}
                height={t?.height}
                className="z-10"
              />
              <h3 className="font-semibold text-[22px] leading-none z-10 mt-3 mb-5">
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

export default HealthcareTechTrends;

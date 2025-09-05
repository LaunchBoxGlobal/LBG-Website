import { HEALTHCARE_TECH_TRENDS } from "@/constants/industries/healthcare-page-content/healthcare-tech-trends";
import React from "react";

const HealthcareTechTrends = () => {
  return (
    <section className="w-full py-20 midlg:py-32 midlg:pt-48 xl:pt-56 bg-[#fff] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Healthcare Tech Trends for <span className="red-text">2025–26</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          The healthcare industry is entering a transformative era where
          technology will not only support care delivery but actively shape
          medical outcomes. Several key trends are set to redefine how
          providers, patients, and health systems operate over the next two
          years.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 midlg:grid-cols-4 gap-5 mt-16 max-w-[1270px]">
        {HEALTHCARE_TECH_TRENDS?.map((t, i) => {
          return (
            <div
              className="w-full min-h-[440px] border rounded-[21px] p-7 flex flex-col items-start gap-3 relative overflow-hidden hover:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] transition-all duration-300 hover:border-b-[6px] hover:border-b-[#F40E00]"
              key={i}
            >
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

export default HealthcareTechTrends;

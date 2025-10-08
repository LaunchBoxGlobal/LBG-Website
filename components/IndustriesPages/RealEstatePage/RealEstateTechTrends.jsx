import { REAL_ESTATE_TECH_TRENDS } from "@/constants/industries/real-estate-content/real-estate-tech-trends";
import React from "react";

const RealEstateTechTrends = () => {
  return (
    <section className="w-full py-20 midlg:py-32 midlg:pt-48 xl:pt-56 bg-[#fff] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[80%] mx-auto">
          Real Estate Tech Trends <span className="red-text">for 2025</span>
        </h2>

        <p className="section-paragraph lg:w-[85%] mx-auto">
          Stay ahead of the curve with the latest real estate tech trends for
          2025. These tech innovations are shaping how agents, buyers, and
          investors interact with the market.
        </p>
      </div>

      <div className="w-full flex items-start justify-center flex-wrap gap-5 mt-16 max-w-[1270px]">
        {REAL_ESTATE_TECH_TRENDS?.map((t, i) => {
          return (
            <div
              className="w-full md:w-[47%] lg:w-[31%] min-h-[460px] border rounded-[21px] p-7 flex flex-col items-start gap-3 relative overflow-hidden hover:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] transition-all duration-300 hover:border-b-[6px] hover:border-b-[#F40E00]"
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

export default RealEstateTechTrends;

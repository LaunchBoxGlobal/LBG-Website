import { MOBILE_APP_TECH_TRENDS } from "@/constants/mobile-app-development/mobile-app-tech-trends";
import React from "react";

const MobileAppTechTrends = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Emerging Tech Trends in <span className="red-text">Mobile Apps</span>
        </h2>
      </section>

      <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 midlg:grid-cols-5 gap-7 mt-10 lg:mt-16">
        {MOBILE_APP_TECH_TRENDS?.map((t, i) => {
          return <TechTrendsCard key={i} tech={t} />;
        })}
      </section>
    </section>
  );
};

export default MobileAppTechTrends;

export const TechTrendsCard = ({ tech }) => {
  return (
    <div className="w-full relative group">
      <div className="w-full h-[190px] bg-white group-hover:bg-[#F40E00] rounded-xl z-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:-rotate-6 transition-all duration-300"></div>
      <div className="w-full h-[190px] bg-[#F3F3F3] rounded-xl flex flex-col items-center justify-center gap-5 z-10 relative">
        <div className="min-h-[55px] flex items-center justify-center">
          <img
            src={tech?.icon}
            width={tech?.width}
            height={tech?.height}
            alt={`${tech?.title} icon`}
          />
        </div>
        <h3 className="font-medium text-xl leading-none text-center px-5">
          {tech?.title}
        </h3>
      </div>
    </div>
  );
};

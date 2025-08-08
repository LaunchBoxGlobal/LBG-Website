import { AI_BASED_ENGAGEMENT_MODELS } from "@/constants/ai-based-projects-content/ai-based-engagement-models";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EngagementModels = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Our Engagement <span className="red-text">Models</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Select between offshore, nearshore, or onshore based on your budget,
          timeline, and collaboration preferences.
        </p>
      </section>
      <section className="w-full mt-10 lg:mt-16 flex items-start justify-center flex-wrap gap-5">
        {AI_BASED_ENGAGEMENT_MODELS?.map((model, i) => {
          return (
            <div
              className={`w-full max-w-[380px] bg-[${model?.bgColor}] p-3 rounded-[47px]`}
            >
              <div className="w-full h-[366px] bg-white rounded-[47px] flex items-center justify-center px-4 overflow-hidden">
                <Image
                  src={model?.image}
                  alt={model?.title}
                  width={model?.width}
                  height={model?.height}
                  className=""
                />
              </div>
              <div className="w-full flex items-center justify-between gap-5 pb-8 mt-6 px-2">
                <h3 className="text-[32px] font-bold leading-[1] text-white">
                  {model?.title}
                </h3>
                <Link href={model?.link}>
                  <Image
                    src={model?.arrowIcon}
                    width={63}
                    height={55}
                    alt="arrow icon"
                    className=""
                  />
                </Link>
              </div>
            </div>
          );
        })}{" "}
      </section>
    </section>
  );
};

export default EngagementModels;

import { TECH_NEEDS } from "@/constants/StaffAugmentation/tech-needs";
import Image from "next/image";
import React from "react";
import AnimatedText from "./AnimatedText";

const TechNeed = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            Staff Augmentation for Every Tech{" "}
            <span className="red-text">Need</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph lg:w-[80%] mx-auto">
            Get skilled professionals for all your development projects. We
            provide expert talent across every major tech service to complement
            your team.
          </p>
        </AnimatedText>
      </section>
      <section className="w-full mt-10 lg:mt-14 flex flex-wrap items-start justify-center gap-5">
        {TECH_NEEDS?.map((t, i) => {
          return (
            <div key={i} className="w-full md:w-[318px]">
              <AnimatedText>
                <div
                  className={`w-full md:w-[318px] min-h-[330px] p-7 rounded-[16px] bg-[#F6F6F6] flex flex-col items-start gap-4`}
                >
                  <Image
                    src={t?.icon}
                    alt={t?.title}
                    width={t?.width}
                    height={t?.height}
                  />
                  <h3 className="text-[28px] font-bold leading-[1.1] mt-3">
                    {t?.title}
                  </h3>
                  <p className="text-lg text-[#212121] leading-[1.2]">
                    {t?.description}
                  </p>
                </div>
              </AnimatedText>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default TechNeed;

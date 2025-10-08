import React from "react";
import { TALENT_AUGMENTATION } from "@/constants/on-demand-talent-content/talent-augmentation";
import Image from "next/image";

const TalentAugmentation = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Expand Your Capabilities With{" "}
          <span className="red-text">Talent Augmentation</span>
        </h2>
        <p className="section-paragraph lg:w-[90%] mx-auto">
          Easily augment talent with skilled professionals ready to join your
          team. Get the right expertise quickly, no long-term commitments, just
          instant support when you need it.
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 pl-5 overflow-hidden">
        {TALENT_AUGMENTATION?.map((talent, index) => {
          return (
            <div key={index} className="w-full">
              <div className="w-full flex flex-col items-start justify-between gap-3 bg-[#F6F6F6] rounded-[29px] p-7 min-h-[558px] relative">
                <div className="w-[11px] h-[93px] red-bg rounded-l-2xl absolute left-[-10px]" />
                <div className="flex flex-col items-start gap-3">
                  <div className="rounded-full red-bg w-[71px] lg:w-[91px] h-[71px] lg:h-[91px] flex items-center justify-center">
                    <Image
                      src={talent?.icon}
                      width={talent?.width}
                      height={talent?.height}
                      alt={`${talent?.title} icon`}
                    />
                  </div>
                  <h3 className="text-[27px] font-semibold">{talent?.title}</h3>
                  <p className="text-xl lg:text-[23px] leading-[1.1] font-light">
                    {talent?.description}
                  </p>
                </div>
                <Image
                  src={talent?.techIcons}
                  width={talent?.iconWidth}
                  height={talent?.iconHeight}
                  alt={`${talent?.title} icon`}
                  className=""
                />
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default TalentAugmentation;

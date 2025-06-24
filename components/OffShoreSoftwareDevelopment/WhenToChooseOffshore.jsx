import React from "react";
import AnimatedText from "../StaffAugmentation/AnimatedText";
import Image from "next/image";
import { WHEN_TO_CHOOSE_OFFSHORE } from "@/constants/off-shore-development/when-to-choose-offshore";

const WhenToChooseOffshore = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            When to Consider Offshore{" "}
            <span className="red-text">Development</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph lg:w-[70%] mx-auto">
            Choose offshore development when you need skilled teams at lower
            costs, faster scaling, or 24/7 productivity across time zones
            without compromising quality.
          </p>
        </AnimatedText>
      </section>
      <section className="w-full mt-10 lg:mt-14 flex items-start flex-wrap justify-center gap-5">
        {WHEN_TO_CHOOSE_OFFSHORE?.map((model, index) => {
          return (
            <div key={index} className="w-full max-w-[380px]">
              <AnimatedText>
                <div className="w-full min-h-[319px] offshore-card bg-white border hover:border-white border-[#D9D9D9] rounded-[17px] p-7 lg:p-10 flex flex-col items-start gap-4">
                  <Image
                    src={model?.icon}
                    width={model?.iconWidth}
                    height={model?.iconHeight}
                    alt={model?.title}
                  />
                  <h3 className="text-start font-bold text-xl lg:text-[26px]">
                    {model?.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-[1.1]">
                    {model?.description}
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

export default WhenToChooseOffshore;

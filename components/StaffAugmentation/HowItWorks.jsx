import { HOW_IT_WORKS } from "@/constants/StaffAugmentation/how-it-works";
import Image from "next/image";
import React from "react";
import AnimatedText from "./AnimatedText";

const HowItWorks = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading mx-auto">
            How It <span className="red-text">Works</span>
          </h2>
        </AnimatedText>

        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          {HOW_IT_WORKS?.map((h, i) => {
            return (
              <AnimatedText>
                <div
                  key={i}
                  className={`w-full min-h-[273px] custom-shadow flex flex-col items-start gap-4 text-start bg-white relative p-9 rounded-[17px] hover:bg-[#F40E00] hover:text-white transition-all duration-300 group overflow-hidden`}
                >
                  <Image
                    src={h?.icon}
                    alt={h?.title}
                    width={h?.width}
                    height={h?.height}
                    className="group-hover:brightness-0 group-hover:invert transition-all duration-300 z-10"
                  />
                  <h3 className="text-[24px] font-semibold z-10">{h?.title}</h3>
                  <p className="text-[22px] leading-[1.2] z-10">
                    {h?.description}
                  </p>
                  <Image
                    src={h?.borderImage}
                    alt="borderImage"
                    width={363}
                    height={352}
                    className="object-contain absolute top-0 right-0 z-0 opacity-50 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
              </AnimatedText>
            );
          })}
          {/* className="group-hover:brightness-0 group-hover:invert" */}
        </section>
      </section>
    </section>
  );
};

export default HowItWorks;

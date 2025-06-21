import { FLUTTER_TECH_STACK } from "@/constants/flutter-app-development/techstack";
import { SWIFT_APP_TECH_STACK } from "@/constants/swift-app-development-content/swift-app-tech-stack";
import Image from "next/image";
import React from "react";

const SwiftTechStack = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Tools We Work
          <span className="orangeText"> With</span>
        </h2>
        <p className="section-paragraph lg:w-[93%]">
          We use Swift and Apple's latest structure to create solid iOS apps.
          Our tools ensure apps run smoothly on all devices while staying ready
          for future updates and new features.
        </p>
      </section>
      <section className="mt-10 w-full flex items-center flex-wrap justify-center gap-3">
        {SWIFT_APP_TECH_STACK?.map((t, i) => {
          return (
            <div
              className="px-[16px] py-[14px] lg:py-[24px] rounded-[10px] flex items-center justify-center gap-2 group tech-stack-card"
              key={i}
            >
              <Image
                src={t?.icon}
                width={t?.width}
                height={t?.height}
                alt={t?.title}
                className="grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="text-sm md:text-lg lg:text-[22px] font-medium text-gray-500">
                {t?.title}
              </span>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default SwiftTechStack;

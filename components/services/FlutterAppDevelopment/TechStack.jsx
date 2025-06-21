import { FLUTTER_TECH_STACK } from "@/constants/flutter-app-development/techstack";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Smart Tools, Smoother <span className="blueText"> Apps</span>
        </h2>
        <p className="section-paragraph lg:w-[93%]">
          We use Flutter's best tools to build apps that just work. As a Flutter
          app development company, our services include everything from sleek
          designs to seamless performance—so your app feels right, every time.
        </p>
      </section>
      <section className="mt-10 w-full flex items-center flex-wrap gap-2">
        {FLUTTER_TECH_STACK?.map((t, i) => {
          return (
            <div
              className="border px-[16px] py-[14px] lg:py-[24px] rounded-[10px] flex items-center justify-center gap-2 group"
              key={i}
              style={{ width: t?.boxWidth }}
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

export default TechStack;

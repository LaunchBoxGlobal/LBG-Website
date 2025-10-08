import { IONIC_TECH_STACK } from "@/constants/ionic-app-development-content/ionic-tech-stack";
import { KOTLIN_TECH_STACK } from "@/constants/kotlin-app-development-content/KotlinTechStack";
import Image from "next/image";
import React from "react";

const IonicTechStack = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Tools We Rely
          <span className="kotlin-text"> On</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Our ionic app development company uses Angular, Capacitor, and Ionic
          Framework to build apps for all platforms. These tools help create
          apps that work properly on any device.
        </p>
      </section>
      <section className="w-full flex flex-wrap justify-center gap-3 mt-10 lg:mt-14 lg:px-10">
        {IONIC_TECH_STACK?.map((t, i) => {
          return (
            <div
              className="border px-4 py-4 rounded-lg flex items-center justify-center gap-2 group hover:border-[#00AEFF] hover:shadow-xl shadow-[#00AEFF40] transition-all duration-300"
              key={i}
            >
              <img
                src={t?.icon}
                width={t?.iconWidth}
                height={t?.iconHeight}
                alt={t?.title}
                className="h-[30px] grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-sm lg:text-xl font-medium">{t?.title}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default IonicTechStack;

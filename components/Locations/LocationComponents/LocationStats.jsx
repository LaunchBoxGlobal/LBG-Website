"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: "/global-talent-icon-stats.webp",
    value: 100,
    label: "Global Talents",
  },
  {
    icon: "/projects-icon-stats.webp",
    value: 50,
    label: "Projects Delivered",
  },
  {
    icon: "/happy-clients-stats.webp",
    value: 40,
    label: "Happy Clients",
  },
  {
    icon: "/location-icon-stats.webp",
    value: 7,
    label: "Global Presence",
  },
];

const LocationStats = ({ heading, redText, description }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full py-20 midlg:py-32 xl:py-40 flex flex-col items-center gap-6"
    >
      <section className="w-full flex flex-col items-center justify-center gap-5 text-center lg:text-start padding-x">
        <h2 className="section-heading text-center mx-auto">
          {heading} <span className="text-[#F40E00]">{redText}</span>
        </h2>
        <p className="section-paragraph text-center w-full md:w-2/3 lg:w-[70%] mx-auto">
          {description}
        </p>
      </section>

      <section className="w-full bg-[#fff] padding-x mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-10 mt-8">
        {stats.map((stat, index) => (
          <div className="w-full relative">
            <div
              key={index}
              className="w-full flex flex-col items-center justify-center gap-0"
            >
              <div className="w-14 h-14 bg-[#F9F9F9] flex items-center justify-center rounded-xl p-3">
                <img
                  src={stat.icon}
                  width={37}
                  height={45}
                  alt={`${stat.label} icon`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-2 mt-1">
                <h3 className="text-[70px] md:text-[50px] 2xl:text-[60px] font-bold text-[#F40E00]">
                  {inView ? (
                    <CountUp end={stat.value} duration={3} suffix="+" />
                  ) : (
                    "0+"
                  )}
                </h3>
                <p className="text-xl lg:text-xl font-light text-gray-400 transition-all duration-300 relative -mt-3">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default LocationStats;

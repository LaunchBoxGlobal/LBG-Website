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

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full py-20 lg:py-28 xl:py-40 bg-[#F9F9F9] flex flex-col items-center gap-6"
    >
      <section className="w-full flex flex-col items-center justify-center gap-5 text-center lg:text-start padding-x">
        <h2 className="section-heading mx-auto text-center">
          The Launchbox Global{" "}
          <span className="text-[#F40E00]">Advantages</span>
        </h2>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-10 mt-8 padding-x py-20">
        {stats.map((stat, index) => (
          <section
            key={index}
            className="w-full flex flex-col items-center justify-center gap-0"
          >
            <div className="w-14 h-14 bg-white flex items-center justify-center rounded-xl p-3">
              <Image
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
          </section>
        ))}
      </section>
    </section>
  );
};

export default Stats;

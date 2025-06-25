"use client";
import Image from "next/image";
import React, { useState } from "react";

const TechnologyServices = ({
  services,
  heading,
  color,
  colorfulText,
  description,
  hoverBg,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="w-full py-10 lg:py-20">
      <section className="w-full padding-x flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          {heading} <span style={{ color }}>{colorfulText}</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">{description}</p>
      </section>

      <section className="w-full flex items-start justify-center gap-8 flex-wrap mt-14 padding-x mx-auto">
        {services?.map((s, i) => {
          return (
            <div
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: hoveredIndex === i ? hoverBg : "#F6F6F6",
              }}
              className={`w-full  rounded-[16px] p-8 md:w-[45%] lg:w-[30%] min-h-[400px] h-[450px] flex flex-col items-start gap-3 group hover:text-white transition-all duration-300`}
              key={i}
            >
              <Image
                src={s?.image}
                width={s?.width}
                height={s?.height}
                alt={s?.title}
                className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
              <h3 className="font-bold service-heading leading-[1.2]">
                {s?.title}
              </h3>
              <p className="text-lg leading-[1.3]">{s?.description}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default TechnologyServices;

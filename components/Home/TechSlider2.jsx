"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { TECH_STACK } from "@/constants/techStack";

const TechSlider2 = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    gsap.to(marquee, {
      xPercent: 50,
      duration: 30,
      ease: "linear",
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(0, -50),
      },
    });
  }, []);

  return (
    <section className="w-full py-3 overflow-hidden bg-[#fff]">
      <div className="flex items-center gap-x-2 w-max" ref={marqueeRef}>
        {[...TECH_STACK, ...TECH_STACK].map((platform, index) => (
          <div
            className="border px-3 py-2 rounded-xl flex items-center justify-center gap-3"
            key={index}
          >
            <div className="bg-white custom-shadow w-[29px] h-[29px] lg:w-[53px] lg:h-[53px] flex items-center justify-center p-1 lg:p-2.5 rounded-xl">
              <Image
                src={platform?.image}
                width={20}
                height={20}
                alt={platform?.title}
                className="w-auto h-full object-contain"
              />
            </div>
            <h3 className="text-base lg:text-[25px] 2xl:text-[30px] text-gray-400 font-light">
              {platform?.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSlider2;

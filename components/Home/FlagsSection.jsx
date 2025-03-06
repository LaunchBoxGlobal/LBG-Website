"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const flags = [
  "/flag-01.png",
  "/flag-02.png",
  "/flag-03.png",
  "/flag-04.png",
  "/flag-05.png",
  "/flag-06.png",
  "/flag-09.png",
  "/flag-07.png",
  "/flag-08.png",
  "/white-flag.png",
  "/white-flag.png",
  "/white-flag.png",
];

const FlagsSection = () => {
  const flagsRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    if (!flagsRef.current || !rightDivRef.current) return;

    // Animate flags: Move left & Rotate
    gsap.to(".flag-item", {
      rotation: -360, // Full rotation like car wheels
      x: "-100%", // Move left
      // ease: "none",
      scrollTrigger: {
        trigger: flagsRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0,
      },
    });

    // Animate right div: Expand width ONLY (No left movement)
    gsap.to(rightDivRef.current, {
      width: "80%", // Expands smoothly (Min: 20%, Max: 60%)
      // ease: "none",
      scrollTrigger: {
        trigger: flagsRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0,
      },
    });
  }, []);

  return (
    <section
      ref={flagsRef}
      className="w-full h-[70px] lg:h-[172px] overflow-hidden flex items-center relative"
    >
      {/* Flags container */}
      <div className="w-[80%] flex items-center justify-center h-full gap-1.5 lg:gap-3 xl:pr-2">
        {flags.map((flag, index) => (
          <Image
            key={index}
            src={flag}
            width={179}
            height={179}
            className="h-[63px] lg:h-[149px] w-[63px] lg:w-[149px] flag-item rounded-full object-cover"
            alt="flag icon"
          />
        ))}
        <Image
          // key={index}
          src={"/white-flag.png"}
          width={179}
          height={179}
          className="h-[63px] lg:h-[149px] w-[63px] lg:w-[149px] flag-item rounded-full object-cover lg:hidden"
          alt="flag icon"
        />
        <Image
          // key={index}
          src={"/white-flag.png"}
          width={179}
          height={179}
          className="h-[63px] lg:h-[149px] w-[63px] lg:w-[149px] flag-item rounded-full object-cover lg:hidden"
          alt="flag icon"
        />
      </div>

      {/* Expanding right div (No left movement, only width expansion) */}
      <div
        ref={rightDivRef}
        className="h-[69px] lg:h-[152px] bg-[#F40E00] p-1 lg:p-1.5 rounded-l-full flex items-center justify-start overflow-hidden gap-x-20 min-w-[20%] max-w-[80%] right-div z-10 relative"
      >
        <div className="rounded-full bg-white flex items-center justify-center h-[63px] lg:h-[143px] w-[63px] lg:w-[143px]">
          <Image
            src={"/flag-red-arrow.png"}
            className="w-[28px] lg:w-[80px] h-[22px] lg:h-[63px]"
            alt="arrow icon"
            width={80}
            height={63}
          />
        </div>
        <h3 className="text-2xl lg:text-[55px] font-bold text-white flex-1 whitespace-nowrap absolute top-1/2 -translate-y-1/2 left-[38%] lg:left-[25%]">
          Our Global Presence
        </h3>
      </div>
    </section>
  );
};

export default FlagsSection;

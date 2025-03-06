"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const platforms = [
  {
    src: "/cost-effective.png",
    width: 20,
    height: 22,
    alt: "cost effective value proposition",
    title: "Cost Effective",
    icon: "/cost-effective-icon.png",
  },
  {
    src: "/startup-friendly.png",
    width: 16,
    height: 20,
    alt: "startup friendly value proposition",
    title: "Startup Friendly",
    icon: "/startup-friendly-icon.png",
  },
  {
    src: "/transparent-process.png",
    width: 20,
    height: 20,
    alt: "transparent process icon",
    title: "Transparent Process",
    icon: "/transparent-process-icon.png",
  },
  {
    src: "/quick-turnaround.png",
    width: 29,
    height: 20,
    alt: "quick turnaround icon",
    title: "quick turnaround",
    icon: "/quick-turnaround-icon.png",
  },
  {
    src: "/partner-first.png",
    width: 31,
    height: 20,
    alt: "partner first",
    title: "partner first",
    icon: "/partner-first-icon.png",
  },
  {
    src: "/global-talents.png",
    width: 19,
    height: 19,
    alt: "global talents icon",
    title: "global talents",
    icon: "/global-talents-icon-gray.png",
  },
  {
    src: "/cost-effective.png",
    width: 20,
    height: 24,
    alt: "cost effective value proposition",
    title: "Cost Effective",
    icon: "/cost-effective-icon.png",
  },
  {
    src: "/startup-friendly.png",
    width: 16,
    height: 20,
    alt: "startup friendly value proposition",
    title: "Startup Friendly",
    icon: "/startup-friendly-icon.png",
  },
  {
    src: "/transparent-process.png",
    width: 20,
    height: 20,
    alt: "transparent process icon",
    title: "Transparent Process",
    icon: "/transparent-process-icon.png",
  },
  {
    src: "/quick-turnaround.png",
    width: 29,
    height: 20,
    alt: "quick turnaround icon",
    title: "quick turnaround",
    icon: "/quick-turnaround-icon.png",
  },
  {
    src: "/partner-first.png",
    width: 31,
    height: 20,
    alt: "partner first",
    title: "partner first",
    icon: "/partner-first-icon.png",
  },
  {
    src: "/global-talents.png",
    width: 19,
    height: 19,
    alt: "global talents icon",
    title: "global talents",
    icon: "/global-talents-icon-gray.png",
  },
];

const HomePlatforms = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    gsap.to(marquee, {
      xPercent: -50, // Moves halfway to create a seamless loop
      duration: 30, // Adjust speed (larger = slower)
      ease: "linear",
      repeat: -1, // Infinite loop
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0), // Reset when reaching the end
      },
    });
  }, []);

  return (
    <section className="w-full py-3.5 overflow-hidden bg-white border-t-[1.5px] border-b-[1.5px] border-gray-400 relative -top-10 xl:-top-20 2xl:-top-24 z-30">
      <div
        className="flex items-center gap-x-6 lg:gap-x-10 w-max"
        ref={marqueeRef}
      >
        {[...platforms, ...platforms].map((platform, index) => {
          return (
            <>
              <div className="flex items-center justify-center gap-2">
                <Image
                  key={index}
                  src={platform?.icon}
                  width={platform?.width}
                  height={platform?.height}
                  alt={platform?.title}
                  className={`w-[13px] h-[13px] object-contain`}

                  // style={{ width: platform?.width, height: platform?.height }}
                />
                <strong className="uppercase font-bold text-[#545454] text-xs lg:text-[20px] opacity-60">
                  {platform?.title}
                </strong>
              </div>
              <div className="h-[16px] border-[1.5px] border-[#545454]" />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default HomePlatforms;

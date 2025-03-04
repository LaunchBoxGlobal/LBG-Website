"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const platforms = [
  {
    src: "/cost-effective.png",
    width: 240,
    height: 19,
    alt: "cost effective value proposition",
  },
  {
    src: "/startup-friendly.png",
    width: 240,
    height: 19,
    alt: "startup friendly value proposition",
  },
  {
    src: "/transparent-process.png",
    width: 240,
    height: 19,
    alt: "transparent process icon",
  },
  {
    src: "/quick-turnaround.png",
    width: 240,
    height: 19,
    alt: "quick turnaround icon",
  },
  {
    src: "/partner-first.png",
    width: 240,
    height: 19,
    alt: "partner first",
  },
  {
    src: "/global-talents.png",
    width: 240,
    height: 19,
    alt: "global talents icon",
  },
  {
    src: "/cost-effective.png",
    width: 240,
    height: 19,
    alt: "cost effective value proposition",
  },
  {
    src: "/startup-friendly.png",
    width: 240,
    height: 19,
    alt: "startup friendly value proposition",
  },
  {
    src: "/transparent-process.png",
    width: 240,
    height: 19,
    alt: "transparent process icon",
  },
  {
    src: "/quick-turnaround.png",
    width: 240,
    height: 19,
    alt: "quick turnaround icon",
  },
  {
    src: "/partner-first.png",
    width: 240,
    height: 19,
    alt: "partner first",
  },
  {
    src: "/global-talents.png",
    width: 240,
    height: 19,
    alt: "global talents icon",
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
    <section className="w-full py-3.5 overflow-hidden bg-white border-t-[1.5px] border-b-[1.5px] border-gray-400 relative -top-5 xl:-top-20 2xl:-top-24 z-30">
      <div className="flex items-center gap-x-6 w-max" ref={marqueeRef}>
        {[...platforms, ...platforms].map((platform, index) => {
          return (
            <>
              <Image
                key={index}
                src={platform.src}
                width={platform.width}
                height={platform.height}
                alt={platform.alt}
                className={`object-contain grayscale-img w-[90px] h-[18px] lg:w-[270px] lg:h-[22px]`}
                style={{ width: platform.width, height: platform.height }}
              />
              <div className="h-[16px] border-[1.5px] border-gray-500" />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default HomePlatforms;

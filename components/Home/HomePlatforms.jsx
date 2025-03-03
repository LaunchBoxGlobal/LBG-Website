"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const platforms = [
  {
    src: "/cost-effective.png",
    width: 180,
    height: 19,
    alt: "cost effective value proposition",
  },
  {
    src: "/startup-friendly.png",
    width: 180,
    height: 19,
    alt: "startup friendly value proposition",
  },
  {
    src: "/transparent-process.png",
    width: 195,
    height: 29,
    alt: "transparent process icon",
  },
  {
    src: "/quick-turnaround.png",
    width: 185,
    height: 22,
    alt: "quick turnaround icon",
  },
  {
    src: "/partner-first.png",
    width: 180,
    height: 19,
    alt: "partner first",
  },
  {
    src: "/global-talents.png",
    width: 180,
    height: 19,
    alt: "global talents icon",
  },
  {
    src: "/cost-effective.png",
    width: 180,
    height: 19,
    alt: "cost effective value proposition",
  },
  {
    src: "/startup-friendly.png",
    width: 180,
    height: 19,
    alt: "startup friendly value proposition",
  },
  {
    src: "/transparent-process.png",
    width: 195,
    height: 29,
    alt: "transparent process icon",
  },
  {
    src: "/quick-turnaround.png",
    width: 185,
    height: 22,
    alt: "quick turnaround icon",
  },
  {
    src: "/partner-first.png",
    width: 180,
    height: 19,
    alt: "partner first",
  },
  {
    src: "/global-talents.png",
    width: 180,
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
    <section className="w-full py-3 overflow-hidden bg-white border-t-2 border-b-2 relative -top-5 z-20">
      <div className="flex items-center gap-x-10 w-max" ref={marqueeRef}>
        {[...platforms, ...platforms].map((platform, index) => (
          <Image
            key={index}
            src={platform.src}
            width={platform.width}
            height={platform.height}
            alt={platform.alt}
            className={`object-contain grayscale-img`}
            style={{ width: platform.width, height: platform.height }}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePlatforms;

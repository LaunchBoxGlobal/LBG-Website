"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const platforms = [
  { src: "/glassdoor-icon.png", width: 178, height: 28, alt: "glassdoor icon" },
  { src: "/yelp-icon.png", width: 100, height: 27, alt: "yelp icon" },
  { src: "/goodfirms-icon.png", width: 182, height: 28, alt: "goodfirms icon" },
  { src: "/clutch-icon.png", width: 96.03, height: 28, alt: "clutch icon" },
  {
    src: "/techreviewer-icon.png",
    width: 209.86,
    height: 38,
    alt: "techreviewer icon",
  },
  {
    src: "/trustpilot-icon.png",
    width: 160,
    height: 18,
    alt: "trustpilot icon",
  },
  {
    src: "/reviews-icon.png",
    width: 162.58,
    height: 28.4,
    alt: "reviews icon",
  },
  { src: "/fiverr-icon.png", width: 92, height: 10.4, alt: "fiverr icon" },
  {
    src: "/sitejabber-icon.png",
    width: 174.9,
    height: 20,
    alt: "sitejabber icon",
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
    <section className="w-full py-3 overflow-hidden bg-white border-t-2 border-b-2 mt-10">
      <div className="flex items-center gap-x-10 w-max" ref={marqueeRef}>
        {[...platforms, ...platforms].map((platform, index) => (
          <Image
            key={index}
            src={platform.src}
            width={platform.width}
            height={platform.height}
            alt={platform.alt}
            className="grayscale hover:grayscale-0 transition-all duration-200"
          />
        ))}
      </div>
    </section>
  );
};

export default HomePlatforms;

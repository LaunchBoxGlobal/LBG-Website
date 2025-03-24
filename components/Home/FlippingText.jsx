"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const FlippingText = ({ phrases }) => {
  const [index, setIndex] = useState(0);
  const wordRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      if (!wordRef.current) return;

      const wordsArray = wordRef.current.children;

      // Fade Out Old Word
      gsap.to(wordsArray, {
        opacity: 0,
        duration: 1,
        ease: "power1.in",
        onComplete: () => {
          setIndex((prevIndex) => (prevIndex + 1) % phrases?.length);

          // Fade In & Slide-up Effect for Each Word
          gsap.fromTo(
            wordsArray,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power2.out",
              stagger: 0.15,
            }
          );
        },
      });
    };

    const interval = setInterval(animateText, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative h-24 md:h-16 lg:h-32 flex items-start lg:items-center justify-center flex-wrap overflow-hidden font-bold text-center w-[92%] lg:w-[100%] mx-auto mt-2 lg:px-0 leading-10 px-6">
      <div
        ref={wordRef}
        className="absolute flex flex-wrap justify-center items-center gap-x-2"
        style={{
          // fontSize: "40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Wrap all words normally */}
        {phrases[index]?.split(" ")?.map((word, i) => (
          <span
            key={i}
            className="mr-0 lg:mr-2 red-text text-[34px] md:text-4xl lg:text-[84px] 2xl:text-[100px] break-words"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FlippingText;

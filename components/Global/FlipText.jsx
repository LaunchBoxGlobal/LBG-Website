"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const FlipText = ({ phrases }) => {
  const [index, setIndex] = useState(0);
  const wordRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      if (!wordRef.current) return;

      const wordsArray = wordRef.current.children;

      gsap.to(wordsArray, {
        opacity: 0,
        duration: 1,
        ease: "power1.in",
        onComplete: () => {
          setIndex((prevIndex) => (prevIndex + 1) % phrases?.length);

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
    <span className="relative h-24 md:h-16 lg:h-24 flex items-start lg:items-center justify-start flex-wrap overflow-hidden font-bold text-center w-[92%] lg:w-[100%] mt-2 lg:px-0 leading-10">
      <span
        ref={wordRef}
        className="absolute flex flex-wrap justify-start items-center gap-x-2"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {phrases[index]?.split(" ")?.map((word, i) => (
          <span
            key={i}
            className="mr-0 lg:mr-2 red-text font-bold text-[34px] lg:text-[64px] 2xl:text-[100px] break-words"
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
};

export default FlipText;

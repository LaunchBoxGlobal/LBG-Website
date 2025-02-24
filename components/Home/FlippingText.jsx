"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const words = [
  "End-to-End Product Teams",
  "Agile Development Teams",
  "Elite Software Engineers",
  "Innovative UI/UX Designers",
  "Expert Project Managers",
  "Strategic Business Analysts",
  "Visionary Software Architects",
  "Certified Scrum Masters",
  "Precision-Driven QA Engineers",
  "Specialist Database Architects",
  "Creative Storyboard Artists",
  "Skilled Video Editors",
];

const FlippingText = () => {
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
          setIndex((prevIndex) => (prevIndex + 1) % words.length);

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

    const interval = setInterval(animateText, 2000); // Change word every 6 seconds

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative h-12 md:h-16 lg:h-32 flex items-center justify-center overflow-hidden text-3xl font-bold text-center w-[100%] mx-auto">
      <div
        ref={wordRef}
        className="absolute flex space-x-2"
        style={{ fontSize: "40px" }}
      >
        {words[index].split(" ").map((word, i) => (
          <span
            key={i}
            className="inline-block mr-0 lg:mr-2 red-text text-xl md:text-4xl lg:text-[80px] 2xl:text-[100px]"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FlippingText;

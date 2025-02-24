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
  "Certified SCRUM Masters",
  "Precision-Driven QA Engineers",
  "Specialist Database Architects",
  "Creative Storyboard Artists",
  "Skilled Video Editors",
];

const FlippingText2 = () => {
  const [index, setIndex] = useState(0);
  const wordRef = useRef(null);

  useEffect(() => {
    const flipAnimation = () => {
      if (!wordRef.current) return;

      gsap.to(wordRef.current, {
        rotationX: 90,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          gsap.fromTo(
            wordRef.current,
            { rotationX: -90, opacity: 0 },
            { rotationX: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
          );
        },
      });
    };

    const interval = setInterval(flipAnimation, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-20 flex items-center justify-center overflow-hidden text-3xl font-bold text-center">
      <span
        ref={wordRef}
        className="absolute red-text font-bold text-4xl lg:text-[64px]"
      >
        {words[index]}
      </span>
    </div>
  );
};

export default FlippingText2;

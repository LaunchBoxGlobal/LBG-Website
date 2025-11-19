import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function EmblaCarousel({ slides, color }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Helper function to get slide at any index with wrapping
  const getSlide = (offset) => {
    const index = (currentIndex + offset + slides.length) % slides.length;
    return slides[index];
  };

  return (
    <div className="flex justify-center items-center py-10 overflow-hidden">
      <div className="relative w-[100%] h-[150px] md:h-[500px]">
        {[-2, -1, 0, 1, 2].map((position) => {
          const isActive = position === 0;
          const slide = getSlide(position);
          
          return (
            <div
              key={position}
              className={`
                absolute top-0 left-1/2 -translate-x-1/2
                flex items-center justify-center rounded-2xl
                transition-all duration-1000 ease-in-out
                ${isActive ? "border-4  md:w-auto w-[250px] md:scale-105 shadow-xl z-10" : "z-0"}
              `}
              style={{
                transform: `
                  translateX(calc(-50% + ${position * 100}px))
                  translateY(${Math.abs(position) * 15}px)
                  rotate(${position * 6}deg)
                  scale(${1 - Math.abs(position) * 0.08})
                `,
                borderColor: isActive ? color : "transparent",
                // opacity: Math.abs(position) > 2 ? 0 : 1 - Math.abs(position) * 0.15,
                zIndex: 10 - Math.abs(position),
              }}
            >
              <Image
                src={slide}
                alt="image-card"
                width={700}
                height={700}
                className="object-contain rounded-2xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
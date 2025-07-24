"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const floatingText = [
  "right workflow, ",
  "smart execution, ",
  "long-term value, ",
  "winning strategy, ",
];

const SlidingFormText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === floatingText.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white w-full lg:w-[50%] flex flex-col items-center text-center lg:text-start lg:items-start justify-center">
      {/* Static heading */}
      <h2 className="text-[36px] lg:text-[60px] font-semibold leading-[1] z-10">
        Your app idea deserves
      </h2>

      {/* Animated heading */}
      <div className="relative w-full h-[60px] lg:h-[80px] overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: `-${currentIndex * 100}%`,
          }}
          transition={{
            x: { type: "spring", stiffness: 70, damping: 20 },
          }}
        >
          {floatingText.map((text, index) => (
            <span
              key={index}
              className={`min-w-full text-start whitespace-nowrap text-[36px] lg:text-[60px] font-semibold leading-[1] z-10 transition-colors duration-300 ${
                index === currentIndex
                  ? "text-white" // Center one is white
                  : "text-gray-400" // Sides are gray
              }`}
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SlidingFormText;

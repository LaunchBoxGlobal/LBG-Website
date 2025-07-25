"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const floatingText = [
  "right workflow,",
  "smart execution,",
  "long-term value,",
  "winning strategy,",
];

const SlidingFormText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [offsets, setOffsets] = useState([]);

  // Calculate offsets to center each phrase
  useEffect(() => {
    if (containerRef.current && itemRefs.current.length) {
      const containerWidth = containerRef.current.offsetWidth;
      const newOffsets = itemRefs.current.map((el) => {
        const itemWidth = el.offsetWidth;
        return (containerWidth - itemWidth) / 2; // Centering offset
      });
      setOffsets(newOffsets);
    }
  }, []);

  // Auto-change current phrase
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === floatingText.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white w-full lg:w-[50%] flex flex-col items-center text-center lg:text-start lg:items-start justify-center">
      {/* Static heading */}
      <h2 className="text-[36px] lg:text-[60px] font-semibold leading-[1] z-10">
        Your app idea deserves
      </h2>

      {/* Sliding text container */}
      <div
        ref={containerRef}
        className="relative w-full h-[60px] lg:h-[80px] max-w-[555px] overflow-hidden"
      >
        <motion.div
          className="flex gap-2"
          animate={{
            x: offsets.length
              ? -itemRefs.current
                  .slice(0, currentIndex)
                  .reduce((acc, el, i) => acc + el.offsetWidth + 24, 0) +
                offsets[currentIndex]
              : 0,
          }}
          transition={{
            x: { type: "spring", stiffness: 70, damping: 20 },
          }}
        >
          {floatingText.map((text, index) => (
            <span
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`whitespace-nowrap text-[36px] lg:text-[60px] font-semibold leading-[1] z-10 transition-colors duration-300 ${
                index === 3 && index === currentIndex && "pl-5"
              } ${index === currentIndex ? "text-white" : "text-gray-400"}`}
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

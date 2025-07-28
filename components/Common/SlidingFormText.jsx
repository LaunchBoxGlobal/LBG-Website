"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

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
  const controls = useAnimation();

  const extendedText = [...floatingText, ...floatingText]; // duplicated array

  // Calculate offsets
  useEffect(() => {
    if (containerRef.current && itemRefs.current.length) {
      const containerWidth = containerRef.current.offsetWidth;
      const newOffsets = itemRefs.current.map((el) => {
        const itemWidth = el.offsetWidth;
        return (containerWidth - itemWidth) / 2;
      });
      setOffsets(newOffsets);
    }
  }, []);

  // Animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate scroll
  useEffect(() => {
    if (!offsets.length || !itemRefs.current.length) return;

    const fullOffset =
      itemRefs.current
        .slice(0, currentIndex)
        .reduce((acc, el, i) => acc + (el?.offsetWidth || 0) + 24, 0) -
      (offsets[currentIndex % floatingText.length] || 0);

    controls.start({
      x: -fullOffset,
      transition: { type: "spring", stiffness: 70, damping: 20 },
    });

    // Reset if we've reached the end of duplicated items
    if (currentIndex === floatingText.length * 2 - 1) {
      setTimeout(() => {
        setCurrentIndex(floatingText.length); // jump back to middle
        controls.set({
          x:
            -itemRefs.current
              .slice(0, floatingText.length)
              .reduce((acc, el, i) => acc + (el?.offsetWidth || 0) + 24, 0) +
            (offsets[0] || 0),
        });
      }, 500); // slight delay to finish transition
    }
  }, [currentIndex, offsets]);

  return (
    <div className="text-white w-full lg:w-[50%] flex flex-col items-center text-center lg:text-start lg:items-start justify-center">
      <h2 className="text-[36px] lg:text-[60px] font-semibold leading-[1] z-10">
        Your app idea deserves
      </h2>

      <div
        ref={containerRef}
        className="relative w-full h-[60px] lg:h-[80px] max-w-[555px] overflow-hidden"
      >
        <motion.div
          className="flex gap-6"
          animate={controls}
          initial={{ x: 0 }}
        >
          {extendedText.map((text, index) => (
            <span
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`whitespace-nowrap text-[36px] lg:text-[60px] font-semibold leading-[1] z-10 ${
                index % floatingText.length ===
                currentIndex % floatingText.length
                  ? "text-white"
                  : "text-gray-400"
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

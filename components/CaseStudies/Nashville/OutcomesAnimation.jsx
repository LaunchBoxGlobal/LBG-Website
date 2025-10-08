"use client";
import { NASHVILLE_OUTCOMES_MOCKUPS } from "@/constants/case-studies/nashville/nashville-outcomes-mockups";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const OutcomesAnimation = () => {
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const resetX = -1280; // Adjust based on total scroll width
  const speed = 1; // Tweak speed as needed

  useAnimationFrame(() => {
    if (!isPaused) {
      const currentX = x.get();
      const nextX = currentX - speed;
      x.set(nextX <= resetX ? 0 : nextX);
    }
  });

  return (
    <div
      className="mt-10 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div style={{ x }} className="flex gap-0 w-max">
        {NASHVILLE_OUTCOMES_MOCKUPS?.map((platform, index) => (
          <img
            key={index}
            src={platform}
            width={297}
            height={612}
            loading="lazy"
            alt={"nashville wireframes mockup"}
            className="h-[612px] object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OutcomesAnimation;

"use client";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const OutcomesMarqueeColumn = ({ images, reverse = false, speed = 1 }) => {
  const y = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const resetY = -1280;

  useAnimationFrame(() => {
    if (!isPaused) {
      const currentY = y.get();
      const nextY = reverse ? currentY + speed : currentY - speed;
      y.set(nextY <= resetY ? 0 : nextY >= 0 ? resetY : nextY);
    }
  });

  return (
    <motion.div
      style={{ y }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="flex flex-col gap-3 w-[151px] midlg:w-[197px]"
    >
      {[...images, ...images].map((platform, index) => (
        <Image
          key={index}
          src={platform}
          width={311}
          height={675}
          alt={platform}
          className="w-full md:h-[300px] midlg:h-[400px] rounded-[20px]"
        />
      ))}
    </motion.div>
  );
};

export default OutcomesMarqueeColumn;

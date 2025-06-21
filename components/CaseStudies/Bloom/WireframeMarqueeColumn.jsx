"use client";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const WireframeMarqueeColumn = ({ images, reverse = false, speed = 0.5 }) => {
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
      className="flex flex-col gap-3 md:gap-6 lg:gap-14 w-[151px] midlg:w-[271px]"
    >
      {[...images, ...images].map((platform, index) => (
        <Image
          key={index}
          src={platform}
          width={311}
          height={675}
          alt={platform}
          className="w-full md:h-[300px] midlg:h-[525px] rounded-[20px] object-contain"
        />
      ))}
    </motion.div>
  );
};

export default WireframeMarqueeColumn;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function WireCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const imageCount = images.length;

  const next = () => setIndex((i) => (i + 1) % imageCount);
  const prev = () => setIndex((i) => (i - 1 + imageCount) % imageCount);

  const prevIdx = (index - 1 + imageCount) % imageCount;
  const nextIdx = (index + 1) % imageCount;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 1 },
    }),
  };

  return (
    <div className="relative p-10 max-w-7xl mx-auto flex justify-center items-center overflow-hidden select-none">
      {/* Left Preview */}
      <motion.div className="absolute left-[-5%] md:left-[12%] opacity-40 scale-75 pointer-events-none">
        <Image
          src={images[prevIdx]}
          alt="prev"
          width={450}
          height={450}
          className="rounded-xl"
        />
      </motion.div>

      {/* Right Preview */}
      <motion.div className="absolute right-[-5%] md:right-[12%] opacity-40 scale-75 pointer-events-none">
        <Image
          src={images[nextIdx]}
          alt="next"
          width={450}
          height={450}
          className="rounded-xl"
        />
      </motion.div>

      {/* Center with drag + autoplay*/}
      <div className="z-10 relative w-[650px] h-[650px] flex items-center">
        <AnimatePresence initial={false} custom={1}>
          <motion.div
            key={index}
            custom={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragSnapToOrigin={true}
            onDragEnd={(e, info) => {
              if (info.offset.x < -80) next();
              if (info.offset.x > 80) prev();
            }}
            className="absolute"
          >
            <Image
              src={images[index]}
              alt={`Wireframe ${index}`}
              width={650}
              height={650}
              className="rounded-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Autoplay interval */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {setTimeout(() => next(), 3500)}
      </motion.div>
    </div>
  );
}

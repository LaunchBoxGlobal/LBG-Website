"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const Character = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.75", "start 0.50"],
  });

  const words = value.split(" ");

  return (
    <p
      ref={element}
      className="w-full lg:w-[85%] mx-auto flex flex-wrap justify-center"
    >
      {words?.map((word, i) => {
        // const start = i / words.length;
        // const end = start + i / words.length;
        const start = i / words.length;
        const end = Math.min(1, start + 1 / words.length);
        return (
          <SingleWord key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </SingleWord>
        );
      })}
    </p>
  );
};

export default Character;

const SingleWord = ({ children, range, progress }) => {
  const characters = children?.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mr-[4px] relative">
      {characters.map((ch, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <SingleCharacter key={i} range={[start, end]} progress={progress}>
            {ch}
          </SingleCharacter>
        );
      })}
    </span>
  );
};

const SingleCharacter = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className="absolute opacity-10 text-[22px] lg:text-[33px] text-center lg:leading-[46px] text-gray-400 tracking-tight">
        {children}
      </span>
      <motion.span
        style={{
          opacity,
          transition: "opacity 0.5s ease-in-out",
        }}
        className="text-[22px] lg:text-[33px] text-center lg:leading-[46px] text-gray-400 tracking-tight"
      >
        {children}
      </motion.span>
    </span>
  );
};

export function TextMaskEffect({ value }) {
  const [isHovered, setIsHovered] = useState(false);
  const { x = 0, y = 0 } = useMousePosition(); // Default to 0 to prevent NaN errors
  const size = isHovered ? 200 : 40;

  return (
    <main className="main">
      <h2 className="red-text text-[25px] font-semibold">
        Building Apps That Work: Simple, Reliable, and User-Focused
      </h2>
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setTimeout(() => setIsHovered(false), 100)}
          className="text-[40px]"
        >
          {value}
        </p>
      </motion.div>

      <div className="maskBody">
        <p className="text-[40px]">{value}</p>
      </div>
    </main>
  );
}

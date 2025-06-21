"use client";
import React, { useRef, useState } from "react";
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
      <span className="absolute opacity-10 text-[22px] lg:text-[2.8vw] text-center lg:leading-[56px] text-gray-400 tracking-tight">
        {children}
      </span>
      <motion.span
        style={{
          opacity,
          transition: "opacity 1s ease-in-out",
        }}
        className="text-[22px] lg:text-[2.8vw] text-center lg:leading-[56px] text-gray-400 tracking-tight"
      >
        {children}
      </motion.span>
    </span>
  );
};

export function TextMaskEffect() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;

  return (
    <section className={"main"}>
      <h2
        className={
          "absolute left-1/2 -translate-x-1/2 text-xl lg:text-[25px] text-[#f40e00] font-semibold md:top-[8%] lg:top-[10%] xl:top-[10%] text-center"
        }
      >
        Building Apps That Work: Simple, Reliable, and User-Focused
      </h2>
      <motion.div
        className={"mask"}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Constructing apps that are simple, fast, and accessible. We specialize
          in Mobile App Development Services focusing on quality, design, and
          smooth deployment. With expertise in building apps people love to use.
          Every project is carefully planned to deliver smooth experiences for
          businesses. We solve real problems while keeping users first in every
          stage. We ensure the final product is polished, reliable, and easy to
          navigate.
        </p>
      </motion.div>

      <div className={"textBody"}>
        <p>
          Constructing apps that are simple, fast, and accessible. We specialize
          in Mobile App Development Services focusing on quality, design, and
          smooth deployment. With expertise in building apps people love to use.
          Every project is carefully planned to deliver smooth experiences for
          businesses. We solve real problems while keeping users first in every
          stage. We ensure the final product is polished, reliable, and easy to
          navigate.
        </p>
      </div>
    </section>
  );
}

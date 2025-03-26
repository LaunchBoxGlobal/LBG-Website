"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CursorImage = "/portfolio-cursor-image.png";

const PortfolioCard = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  image,
  setIsHovering,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Custom cursor state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  // const [isHovering, setIsHovering] = useState(false);

  // useEffect(() => {
  //   const moveCursor = (e) => {
  //     setCursorPos({ x: e.clientX, y: e.clientY });
  //   };

  //   if (isHovering) {
  //     window.addEventListener("mousemove", moveCursor);
  //   } else {
  //     window.removeEventListener("mousemove", moveCursor);
  //   }

  //   return () => {
  //     window.removeEventListener("mousemove", moveCursor);
  //   };
  // }, [isHovering]);

  return (
    <div
      ref={container}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={
        "group w-full h-[80vh] lg:h-[695px] flex flex-col gap-10 text-white items-center justify-center sticky top-0 z-0 cardContainer"
      }
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transformOrigin: "top",
        }}
        className={
          "w-full h-[300px] lg:h-[655px] flex flex-col relative top-[-25%] rounded-3xl"
        }
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-3xl group-hover:brightness-50 transition-all duration-300"
        />
        <div className="w-full h-full absolute inset-0 hidden group-hover:flex flex-col items-start justify-end gap-4 px-5 lg:px-14 py-6 lg:py-14 transition-all duration-300">
          <h3 className="text-2xl lg:text-[30px] font-bold text-white">
            {title}
          </h3>
          <p className="text-white text-sm lg:text-[18px] font-medium lg:w-[80%]">
            {description}
          </p>
        </div>
      </motion.div>
      {/* Custom Cursor */}
      {/* {isHovering && (
        <motion.img
          src={CursorImage}
          alt="Custom Cursor"
          className="fixed w-16 h-16 lg:w-[150px] lg:h-[150px] pointer-events-none z-50"
          style={{
            left: cursorPos.x - 32, // Centering cursor image
            top: cursorPos.y - 32,
          }}
        />
      )} */}
    </div>
  );
};

export default PortfolioCard;

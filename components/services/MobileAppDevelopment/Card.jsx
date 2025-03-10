"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const CursorImage = "/portfolio-cursor-image.png";

const Card = ({
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
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className={
        "cardContainer group w-full h-[80vh] lg:h-[100vh] flex flex-col gap-10 text-white items-center justify-center sticky top-0 z-10"
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
          "styles.card w-full h-[300px] lg:h-[655px] flex flex-col relative top-[-25%] rounded-3xl"
        }
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-3xl group-hover:brightness-50 transition-all duration-300"
        />
        <div className="w-full h-full absolute inset-0 hidden group-hover:flex items-end px-5 lg:px-14 py-6 transition-all duration-300">
          <p className="text-white text-[18px] lg:w-[80%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eum
            obcaecati quia earum esse, ipsam numquam nemo fugiat alias
            explicabo?
          </p>
        </div>
      </motion.div>

      <div className="w-[1040px] hidden lg:flex items-start justify-between bg-white text-black px-4">
        <p className="text-xl w-1/2 font-medium">{title}</p>
        <p className="text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Card;

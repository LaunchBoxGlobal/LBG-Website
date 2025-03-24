"use client";

import { useTransform, motion } from "framer-motion";

const Card = ({
  i,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
  image,
  setIsHovering,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className={
        "group w-full h-[70vh] lg:h-[700px] flex flex-col gap-10 text-white items-center justify-center sticky top-0 z-10"
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
          "w-full h-[300px] lg:h-[655px] flex flex-col relative top-[-25%] rounded-3xl cardContainer"
        }
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-3xl group-hover:brightness-50 transition-all duration-300"
        />
        <div className="w-full h-full absolute inset-0 hidden group-hover:flex flex-col items-start justify-end gap-4 px-5 lg:px-14 py-6 transition-all duration-300">
          <h3 className="text-2xl lg:text-[30px] font-bold text-white">
            {title}
          </h3>
          <p className="text-white text-xs lg:text-[18px] font-normal lg:w-[80%] lg:leading-6">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;

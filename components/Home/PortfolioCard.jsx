"use client";

import { motion, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const PortfolioCard = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  images = [],
  setIsHovering,
  alt_tag,
  total,
  activeIndex,
}) => {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useMotionValueEvent(activeIndex, "change", (latest) => {
    const idx = Math.round(latest);
    setIsActive(idx === i);
  });

  const y = useTransform(progress, range, [0, -1000]);
  const rotateX = useTransform(progress, range, [0, 100]);
  const translate = useTransform(progress, [0, 1], [0, -100]);

  return (
    <motion.div
      ref={container}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        y,
        rotateX,
        scale: targetScale,
        translateY: translate,
        zIndex: total - i,
        bottom: i * -40,
        transformPerspective: 1200,
      }}
      className={cn(
        "absolute w-[90%] md:w-[75%] min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh]",
        "flex flex-col justify-between rounded-3xl overflow-visible shadow-2xl",
        "transition-all ease-linear duration-300"
      )}
    >
      <div
        className="absolute rounded-2xl inset-0"
        style={{ backgroundColor: color || "#f9f9f9" }}
      />

      <div className="relative z-10 flex flex-col flex-1 justify-between p-6 md:p-12 text-white">
        <div>
          <div className="flex justify-between items-center w-full mb-4">
            <h3 className="text-2xl md:text-4xl font-bold">{title}</h3>
            <span className="text-lg md:text-2xl font-semibold opacity-90">
              ({String(i + 1).padStart(2, "0")})
            </span>
          </div>
          <p className="text-sm md:text-lg opacity-90 max-w-xl mb-6">
            {description}
          </p>
        </div>

        {/* Footer area (button + images) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 sm:gap-4 mt-auto w-full">
          <Link
            href={url}
            className={cn(
              "px-8 py-3 rounded-md text-sm md:text-base font-medium transition-all duration-300 text-center w-full sm:w-auto",
              i === total - 1
                ? "bg-white text-black hover:bg-black hover:text-white"
                : "bg-black text-white hover:bg-white hover:text-black"
            )}
          >
            Visit Now
          </Link>

          <div className="flex gap-3 md:gap-4 justify-center sm:justify-end flex-wrap">
            {images.slice(0, 2).map((img, index) => (
              <div
                key={index}
                className="relative w-28 h-20 sm:w-36 sm:h-24 md:w-64 md:h-40 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={img}
                  alt={alt_tag || `Preview ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;

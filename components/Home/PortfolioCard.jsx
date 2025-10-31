"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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
  image,
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

  // Watch the active index value
  useMotionValueEvent(activeIndex, "change", (latest) => {
    const idx = Math.round(latest);
    setIsActive(idx === i);
  });

  // Base upward movement
  const y = useTransform(progress, range, [0, -1000]);

  // Create rotation value that tilts backwards (negative rotation) as it goes up
  const rotateX = useTransform(progress, range, [0, 100]);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);
  const scale = useTransform(progress, [0, 1], scaleDimensions());
  const translate = useTransform(progress, [0, 1], [0, -100]);

  return (
    <motion.div
      ref={container}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        y,
        rotateX,
        scale:targetScale,
        translateY: translate,
        zIndex: total - i,
        bottom: i * -40,
        transformPerspective: 1200,
      }}
      className={cn(
        "absolute w-[90%] md:w-[75%] h-[80vh] flex flex-col justify-between rounded-3xl overflow-hidden shadow-2xl transition-all ease-linear duration-300"
      )}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: color || "#f9f9f9",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-[80vh] justify-start p-6 md:p-16 text-white">
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

      {/* Bottom Section */}
      <div className="relative z-10 flex items-end justify-between w-full px-6 md:px-12 pb-6 md:pb-10">
        <Link
          href={url}
          className={cn(
            "px-10 py-3 rounded-md text-sm md:text-base font-medium transition-all duration-300",
            i === total - 1
              ? "bg-white text-black hover:bg-black hover:text-white"
              : "bg-black text-white hover:bg-white hover:text-black"
          )}
        >
          Visit Now
        </Link>

        <div className="flex gap-4">
          {images.slice(0, 2).map((img, index) => (
            <div
              key={index}
              className="relative w-24 h-16 md:w-72 md:h-48 rounded-lg overflow-hidden shadow-md"
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
    </motion.div>
  );
};

export default PortfolioCard;
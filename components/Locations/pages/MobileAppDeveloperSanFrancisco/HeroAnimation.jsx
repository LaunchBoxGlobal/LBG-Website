"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

function HeroAnimation() {
  const [showShape, setShowShape] = useState(false);

  return (
    <div className="relative mt-10 flex justify-center items-center overflow-hidden">
      {/* Hero Image Comes from Bottom */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1], // smooth easing
        }}
        onAnimationComplete={() => setShowShape(true)}
        className="relative z-20"
      >
        <Image
          src={"/locations/software-dev-company-francisco/hero.png"}
          width={1000}
          height={10000}
          alt="hero"
          className="w-[80%] mx-auto"
        />
      </motion.div>

      {/* Animated Background Shape (appears after hero animates) */}
      {showShape && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1}}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            rotate: { repeat: Infinity, ease: "linear", duration: 30 },
          }}
          className="absolute z-10 -top-[30%] md:-top-[50%] -translate-x-1/2"
        >
          <Image
            src={"/locations/software-dev-company-francisco/shape.png"}
            width={1000}
            height={10000}
            alt="rotating background shape"
            className="w-full h-auto"
          />
        </motion.div>
      )}
    </div>
  );
}

export default HeroAnimation;

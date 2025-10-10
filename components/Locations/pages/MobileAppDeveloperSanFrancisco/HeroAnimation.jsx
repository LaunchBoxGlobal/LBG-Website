"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

function HeroAnimation() {
  const [showShape, setShowShape] = useState(false);
  const [showCards, setShowCards] = useState(false);

  return (
    <div className="relative mt-10 flex justify-center items-center overflow-hidden">
      {/* Hero Image Animation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        onAnimationComplete={() => {
          setShowShape(true);
          // Slight delay before showing cards
          setTimeout(() => setShowCards(true), 500);
        }}
        className="relative z-20"
      >
        <Image
          src={"/locations/mobile-app-company-francisco/hero.png"}
          width={1000}
          height={1000}
          alt="hero"
          className="w-[80%] mx-auto"
        />
      </motion.div>

      {/* Floating Cards (show after hero animation) */}
      {showCards && (
        <>
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -15, 0], // up-down loop
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto absolute left-[12%] z-30"
          >
            <Image
              src={"/locations/mobile-app-company-francisco/card.png"}
              width={200}
              height={100}
              alt="card"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto absolute right-[30%] top-10 z-30"
          >
            <Image
              src={"/locations/mobile-app-company-francisco/card1.png"}
              width={200}
              height={100}
              alt="card1"
            />
          </motion.div>
        </>
      )}

      {/* Animated Background Shape (appears after hero animates) */}
      {showShape && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
          }}
          className="absolute z-10 -top-[30%] md:-top-[60%] -translate-x-1/2"
        >
          <Image
            src={"/locations/mobile-app-company-francisco/shape.png"}
            width={1000}
            height={1000}
            alt="rotating background shape"
            className="w-full h-auto"
          />
        </motion.div>
      )}
    </div>
  );
}

export default HeroAnimation;

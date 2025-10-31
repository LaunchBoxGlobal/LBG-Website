"use client";

import React, { useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import Cursor from "../Global/Cursor";
import PortfolioCard from "./PortfolioCard";

const PortfolioParallexCards = ({ projects }) => {
  const [isCursorHovering, setIsCursorHovering] = useState(false);
  const container = useRef(null);

  // Scroll progress (0–1)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Smooth motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const total = projects.length - 1;

  // Compute active card index based on scroll position
  // Example: scroll 0.25 in 4 cards → active card 1
  const activeIndex = useTransform(smoothProgress, [0, 1], [0, total]);

  return (
    <section
      ref={container}
      className="relative w-full h-[500vh] flex items-end justify-center bg-white"
    >
      <div
        className="sticky bottom-20 w-full h-screen flex items-end justify-center"
        style={{ perspective: "1000px" }}
      >
        {projects.map((project, i) => {
          const targetScale = 1 - i * 0.05;
          const start = i / total;
          const end = (i + 1) / total;

          return (
            <PortfolioCard
              key={`p_${i}`}
              i={i}
              total={total}
              {...project}
              progress={smoothProgress}
              url={project.link}
              range={[start, end]}
              targetScale={targetScale}
              activeIndex={activeIndex} // 👈 pass active index
              setIsHovering={setIsCursorHovering}
            />
          );
        })}
      </div>

      <Cursor isHovering={isCursorHovering} />
    </section>
  );
};

export default PortfolioParallexCards;

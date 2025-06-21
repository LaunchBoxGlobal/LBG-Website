"use client";
import React from "react";
import { useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Cursor from "../Global/Cursor";
import PortfolioCard from "./PortfolioCard";

const PortfolioParallexCards = ({ projects }) => {
  const [isCursorHovering, setIsCursorHovering] = useState(false);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <section ref={container} className={"w-full relative mt-20 padding-x"}>
        {projects?.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <PortfolioCard
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              url={project?.link}
              setIsHovering={setIsCursorHovering}
            />
          );
        })}

        <Cursor isHovering={isCursorHovering} />
      </section>
    </>
  );
};

export default PortfolioParallexCards;

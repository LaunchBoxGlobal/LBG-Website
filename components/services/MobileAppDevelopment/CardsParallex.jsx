"use client";

import { projects } from "@/constants/mobile-app-development/Projects";
import Card from "./Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
// import Lenis from "lenis";

export default function CardsParallex() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-20">
        <h2 className="section-heading">
          Discover the Apps <br />
          that We’ve
          <span className="red-text"> Built</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] text-center">
          Explore real examples of apps we’ve made simple reliable and built to
          solve problems From startups to businesses see how our work delivers
          results that matter.
        </p>
      </section>
      <main
        ref={container}
        className={"styles.main w-full relative lg:mt-10 xl:mt-5 padding-x"}
      >
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </>
  );
}

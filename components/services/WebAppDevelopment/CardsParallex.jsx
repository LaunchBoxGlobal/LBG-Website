"use client";

import { projects } from "@/constants/mobile-app-development/Projects";
import Card from "./Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { WEB_APP_PROJECTS } from "@/constants/web-app-dvelopment/WebAppProjects";
// import Lenis from "lenis";

export default function CardsParallex() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // });

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-20">
        <h2 className="section-heading">
          See How We’ve Built Web <br className="lg:block hidden" /> Apps That{" "}
          <span className="red-text">Work</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] text-center">
          Explore real examples of web apps we’ve created using React, Node.js,
          and PostgreSQL. We build apps that are fast, reliable, and solve real
          problems.
        </p>
      </section>
      <main
        ref={container}
        className={"styles.main w-full relative lg:mt-[10vh] padding-x"}
      >
        {WEB_APP_PROJECTS.map((project, i) => {
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

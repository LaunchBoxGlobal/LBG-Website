"use client";
import React from "react";
import Card from "./Card";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/constants/mobile-app-development/Projects";

import "./style.css";

const MobileAppDevPortfolio = () => {
  return (
    <div class="container">
      <ul id="cards">
        <li class="card" id="card1">
          <div class="card-body">
            <h2>Card 1</h2>
          </div>
        </li>
        <li class="card" id="card2">
          <div class="card-body">
            <h2>Card 2</h2>
          </div>
        </li>
        <li class="card" id="card3">
          <div class="card-body">
            <h2>Card 3</h2>
          </div>
        </li>
        <li class="card" id="card4">
          <div class="card-body">
            <h2>Card 4</h2>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileAppDevPortfolio;

export function CardsParallex() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={container}
      className={"styles.main w-full relative border border-black"}
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
  );
}

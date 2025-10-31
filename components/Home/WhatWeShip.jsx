"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Branding that drives conversion & funding.",
    desc: "We clarify your positioning, define a distinctive tone of voice, and build a visual system that works across acquisition and product. Each sprint ships a robust logo, pragmatic brand guidelines, and a social kit so you can launch fast. The goal is simple: perceived value up.",
  },
  {
    title: "Product experiences users adopt & keep using.",
    desc: "We start from business goals, map the critical journeys, and prototype what actually moves the needle. Every sprint ships clear flows, a reusable UI library, and a dev-ready design. Expect time-to-value down, UX friction down, retention/NPS up.",
  },
  {
    title: "Web Design for growing teams & businesses.",
    desc: "We align messaging, page architecture, and UI. You get clear structure, sections, and scalable systems. The site loads fast, tells the right story, and drives action.",
  },
  {
    title: "Investor-proof decks that raise faster.",
    desc: "We craft the narrative that gets meetings and a precise ask. Design serves the story: readable numbers, rhythm across slides, and teaser versions for investors.",
  },
];

const WhatWeShip = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate each card going up + rotating
      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            yPercent: -100,
            rotateX: 45, // slight 3D backward tilt (change to rotateZ for flat spin)
            transformOrigin: "center bottom",
            scale: 0.96,
            opacity: 0.6,
            ease: "power1.out",
          },
          i
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-white overflow-hidden perspective-[1200px]"
    >
      {/* Title */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-10">
        <h2 className="text-5xl md:text-7xl font-semibold text-gray-900">
          What we ship.
        </h2>
        <p className="text-gray-500 text-lg mt-2">Our ways to move fast</p>
      </div>

      {/* Card stack */}
      <div className="relative w-full h-full mt-24">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute  left-0 w-full h-full flex items-center justify-center"
            style={{ zIndex: items.length - index, bottom: `${index * -40}px`, }}
          >
            <div className="max-w-3xl h-[500px] bg-gray-50 border border-gray-200 rounded-3xl shadow-lg p-10 mx-4 text-center">
              <h3 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeShip;

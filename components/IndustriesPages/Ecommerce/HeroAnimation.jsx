"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const HeroAnimation = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftItems = [
    // { label: "New Shoppers", img: "new-shoppers.png", width: 70, height: 70 },
    { label: "Visitors", img: "visitors.png", width: 80, height: 80 },
    // { label: "Cart Abandoners", img: "cart-abandoners.png", width: 75, height: 75 },
    { label: "Load", img: "l1.png", width: 80, height: 80 },
    { label: "Load", img: "l2.png", width: 65, height: 65 },
    { label: "Load", img: "l3.png", width: 65, height: 65 },
    { label: "Load", img: "l4.png", width: 65, height: 65 },
    { label: "Load", img: "l5.png", width: 65, height: 65 },
    { label: "Load", img: "l6.png", width: 65, height: 65 },
  ];

  const rightItems = [
    { label: "Successful Purchases", img: "r1.png", width: 110, height: 110 },
    { label: "Repeat Buyers", img: "r2.png", width: 100, height: 100 },
    { label: "Higher AOV", img: "r3.png", width: 105, height: 105 },
    { label: "Increased Conversions", img: "r4.png", width: 95, height: 95 },
    { label: "Boosted Retention", img: "r5.png", width: 115, height: 115 },
    { label: "Retention Plus", img: "r6.png", width: 110, height: 110 },
    { label: "Retention Pro", img: "r7.png", width: 108, height: 108 },
    { label: "Retention Elite", img: "r8.png", width: 112, height: 112 },
  ];

  // Random top and horizontal offsets
  const getEvenPositions = (count, side = "left") => {
    const start = 5;
    const end = 90; // extend vertical range a bit more
    const gap = (end - start) / count; // distribute evenly
    return Array(count)
      .fill(0)
      .map((_, i) => ({
        top: start + i * gap + Math.random() * 4, // a bit more random jitter
        delay: Math.random() * 3,
        offset: side === "left" ? Math.random() * 40 - 20 : Math.random() * 40 - 20,
      }));
  };
  const leftPositions = useMemo(() => getEvenPositions(leftItems.length, "left"), [leftItems.length]);
  const rightPositions = useMemo(() => getEvenPositions(rightItems.length, "right"), [rightItems.length]);

  useEffect(() => {
    // LEFT SIDE
    gsap.utils.toArray(".left-item").forEach((el, i) => {
      const pos = leftPositions[i];
      gsap.set(el, { top: `${pos.top}%`, right: `${pos.offset}%` });

      const tl = gsap.timeline({ repeat: -1, delay: pos.delay });
      tl.fromTo(
        el,
        { x: "-250%", opacity: 0,  rotation: -5 },
        { x: "0%", opacity: 1,  rotation: 0, duration: 3, ease: "none" }
      ).to(el, {
        x: "250%",
     
        // scale: 0.8,
        rotation: 5,
        duration: 3,
        ease: "none",
      });
    });

    // RIGHT SIDE (same direction as left)
    gsap.utils.toArray(".right-item").forEach((el, i) => {
      const pos = rightPositions[i];
      gsap.set(el, { top: `${pos.top}%`, left: `${pos.offset}%` });

      const tl = gsap.timeline({ repeat: -1, delay: pos.delay });
      tl.fromTo(
        el,
        { x: "-250%", opacity: 1,  rotation: -5 },
        { x: "0%", opacity: 1,  rotation: 0, duration: 3, ease: "none" }
      ).to(el, {
        x: "250%",
        opacity:0,
        rotation: 5,
        duration: 3,
        ease: "none",
      });
    });
  }, [leftPositions, rightPositions]);

  return (
    <div className="flex justify-center items-center min-h-[60vh] relative bg-white overflow-hidden">
      {/* Background */}
      <Image
        src="/industries/ecommerce/Subtract.png"
        alt="bg"
        width={1000}
        height={1000}
        className="z-10 opacity-70"
      />

      {/* LEFT SIDE */}
      <div
        ref={leftRef}
        className="absolute left-0 h-full w-1/2 flex items-center justify-end overflow-hidden"
      >
        <div className="relative w-full h-64">
          <div className="absolute left-[35%] top-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-white via-red-200 to-white blur-2xl opacity-70" />
          {leftItems.map((item, i) => (
            <div key={i} className="left-item z-30 absolute flex items-center gap-2 px-4 py-2">
              <img
                src={`/industries/ecommerce/icons/${item.img}`}
                alt={item.label}
                width={item.width}
                height={item.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CENTER DIVIDER */}
      <div className="w-4 absolute h-72 bg-gradient-to-b z-50 from-red-600 to-black rounded-full shadow-[0_0_30px_rgba(255,0,0,0.5)]"></div>

      {/* RIGHT SIDE */}
      <div
        ref={rightRef}
        className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-start overflow-hidden"
      >
        <div className="relative w-full h-56">
          <div className="absolute right-[35%] top-[0%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-white via-red-200 to-white blur-2xl opacity-70" />
          {rightItems.map((item, i) => (
            <div key={i} className="right-item z-30 absolute flex items-center gap-2 px-4 py-2">
              <img
                src={`/industries/ecommerce/icons/${item.img}`}
                alt={item.label}
                width={item.width}
                height={item.height}
                className="object-contain scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;

"use client";
import { CHALLENGES_AND_SOLUTIONS } from "@/constants/case-studies/nashville/challenges";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const Challenges = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center pb-20 midlg:pb-28">
      <h2 className="section-heading text-center">Challenges & Solutions</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        Building Now You Know Nashville wasn't easy. Students wanted cheap
        access to local spots, but we had to make the app valuable enough
        without physical offerings. The mobile app development process brought
        unexpected challenges. From payment issues to blending 11 categories,
        each problem taught us something. Most importantly, we had to prove an
        app was worth real money to broke students exploring the city. Here's
        what tested us most:
      </p>

      <div className="w-full flex flex-col gap-y-20 mt-10 lg:mt-14">
        {CHALLENGES_AND_SOLUTIONS?.map((c, i) => {
          const isEven = i % 2 === 0;
          return <Card key={i} c={c} i={i} isEven={isEven} />;
        })}
      </div>
    </section>
  );
};

export default Challenges;

export const Card = ({ c, i, isEven }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageInitialX = isEven ? -600 : 600;
  const textInitialX = isEven ? 600 : -600;
  return (
    <div ref={ref} className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* IMAGE: Swap sides based on index */}
      <motion.div
        initial={{ x: imageInitialX }}
        animate={inView ? { x: 0 } : { x: imageInitialX }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`relative ${isEven ? "md:order-1" : "md:order-2"} lg:px-8`}
      >
        <Image
          src={c?.image}
          width={324}
          height={572}
          alt={c?.title}
          loading="lazy"
          className="h-[320px] lg:h-[572px] object-contain z-20 relative"
        />
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            isEven ? "right-[0%]" : "right-0"
          }`}
        >
          <span className="text-[#407BA7] text-[200px] lg:text-[300px] font-bold z-0 opacity-20">
            0{i + 1}
          </span>
          <Image
            src={"/case-studies/nashville/challenges-left-arrow.png"}
            alt="challenges left arrow"
            width={162}
            height={172}
            loading="lazy"
            className={`absolute right-[5%] top-1/2 -translate-y-1/2 h-[172px] ${
              isEven ? "-rotate-6" : "-rotate-6"
            }`}
          />
        </div>
      </motion.div>

      {/* TEXT: Opposite order */}
      <motion.div
        initial={{ x: textInitialX }}
        animate={inView ? { x: 0 } : { x: textInitialX }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`flex flex-col items-center text-center lg:items-start lg:text-start justify-center gap-4 ${
          isEven ? "md:order-2" : "md:order-1"
        }`}
      >
        <h3 className="text-[22px] lg:text-[32px] font-bold">{c?.title}</h3>
        <p className="text-[#407BA7] text-[20px] font-bold">Problem</p>
        <p className="text-[20px]">{c?.problem}</p>
        <p className="text-[#000000] text-[20px] font-bold">Solution</p>
        <p className="text-[20px]">{c?.solution}</p>
      </motion.div>
    </div>
  );
};

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const Research = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="w-full padding-x flex flex-col items-center relative overflow-hidden">
      <Image
        src={"/case-studies/my-garage-outlet/brown-shadow.png"}
        alt="brown-shadow"
        width={736}
        height={736}
        className="absolute left-[-20%] top-0 z-0"
      />
      <h2 className="section-heading z-10">Research</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7 z-10">
        Here's how we made sure our mobile app development hit the mark:
      </p>
      <div ref={ref} className="w-full mt-10">
        <motion.div
          initial={{ scale: 0.7 }}
          animate={inView ? { scale: 1 } : { scale: 0.7 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <Image
            src={"/case-studies/my-garage-outlet/research-image.png"}
            width={1271}
            height={766}
            alt="research-image"
            className="object-contain z-20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Research;

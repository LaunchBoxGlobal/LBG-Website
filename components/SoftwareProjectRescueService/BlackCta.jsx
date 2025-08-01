"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const BlackCta = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="w-full padding-x py-20 relative">
      <div
        ref={ref}
        className="w-full bg-black rounded-[17px] text-white flex flex-col items-center justify-center text-center gap-4 p-20"
      >
        <motion.div
          initial={{ x: 80 }}
          animate={inView ? { x: 0 } : { x: 80 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-medium text-[20px]">
            Started solo with low code or vibe coding?
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -80 }}
          animate={inView ? { x: 0 } : { x: -80 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-bold text-[32px] lg:text-[50px] leading-[1] lg:w-[70%] mx-auto">
            We respect the effort and help{" "}
            <span className="text-[#FE8761]">transform it into</span> a
            scalable, <span className="text-[#FF3916]">launch-ready</span>{" "}
            product
          </h2>
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ x: 80 }}
          animate={inView ? { x: 0 } : { x: 80 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href={`/contact-us`}
            className="rounded-[7px] text-white bg-[#F40E00] text-lg font-bold py-5 px-8"
          >
            Handle It from Here
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlackCta;

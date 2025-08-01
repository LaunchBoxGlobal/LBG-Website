"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectRecovery = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={scrollRef} className="relative h-[200vh] bg-white w-full">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 py-16">
        <h2 className="text-6xl md:text-8xl leading-[1] font-bold text-center">
          Website Development Services
        </h2>
        <p className="text-center max-w-[80%] mx-auto text-lg leading-[1.4] mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          eligendi ab, aspernatur velit, explicabo saepe magni cupiditate
          assumenda facere libero hic doloremque vel eius. Fugit.
        </p>

        <div className="w-full overflow-hidden flex items-center justify-start mt-12">
          <motion.div style={{ x }} className="flex gap-6 px-20">
            {[...Array(10)].map((_, index) => (
              <div
                className="min-w-80 max-w-[320px] bg-gray-100 p-5 rounded-xl shadow-md"
                key={index}
              >
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Itaque accusantium ipsum, mollitia numquam cupiditate fugiat!
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectRecovery;

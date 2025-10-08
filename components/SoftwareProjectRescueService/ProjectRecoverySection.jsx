"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScrollingCards = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0.2%", "-68%"]);

  return (
    <section ref={scrollRef} className="relative h-[100vh] bg-white w-full">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 py-16">
        <h2 className="text-[8.6vw] md:text-[5.5vw] font-bold 2xl:font-extrabold lg:tracking-tight leading-[1]">
          Website Development Services
        </h2>
        <p className="text-base lg:text-[24px] 2xl:text-[30px] font-light leading-[1.2] text-center mx-auto lg:w-[70%] text-gray-400 mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          eligendi ab, aspernatur velit, explicabo saepe magni.
        </p>

        <div className="w-full mt-5">
          <img
            src="/new-project/project-recovery-section-lines-image.png"
            alt="lines"
            width={848}
            height={151}
            className="mx-auto"
          />
        </div>

        <div className="w-full overflow-hidden flex items-center justify-start mt-1">
          <motion.div style={{ x }} className="flex gap-6 px-20">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="min-w-[415px] max-w-[415px] h-[180px] bg-white relative overflow-hidden flex-shrink-0 flex justify-end items-start"
              >
                <div className="w-[40px] h-[40px] bg-white p-1 z-10 rounded-full absolute bottom-0 left-0">
                  <div className="bg-[#F40E00] w-full h-full rounded-full"></div>
                </div>
                <div className="bg-[#F6F6F6] w-[96%] h-[90%] rounded-[16px] p-5 lg:p-7">
                  <h3 className="text-[20px] font-semibold leading-none">
                    Non-Technical Entrepreneurs
                  </h3>
                  <p className="text-[20px] leading-[1.2]">
                    If you've built a promising AI-powered prototype, we'll help
                    you take it to launch.
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollingCards;

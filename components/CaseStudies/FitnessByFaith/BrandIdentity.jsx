"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const BrandIdentity = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <section className="w-full padding-x flex flex-col items-center overflow-hidden relative">
      <h2 className="section-heading z-10">Brand Identity</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7 z-10">
        Fitness by Faith with Laken blends uplifting sunrise colors with clean,
        modern shapes - like a gym buddy who motivates without yelling. The
        mobile app development team crafted this warm-but-strong vibe into every
        icon and screen, making workouts feel approachable yet purposeful.
      </p>

      <div ref={ref} className="w-full mt-10 lg:mt-20 z-10">
        <div className="relative flex items-center justify-end overflow-hidden p-7">
          <motion.div
            initial={{ x: 1000 }}
            animate={
              inView ? { x: 0, transform: "rotate(25deg)" } : { x: 1000 }
            }
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-[70px] h-[85px] md:w-[90px] md:h-[105px] lg:w-[160px] lg:h-[185px] rounded-xl lg:rounded-[35px] bg-[#FFC700] text-white flex items-end justify-center p-4 z-10"
          >
            <p className="text-xs md:text-base">#64B5AC</p>
          </motion.div>
          <motion.div
            initial={{ x: 800 }}
            animate={
              inView ? { x: 0, transform: "rotate(-45deg)" } : { x: 800 }
            }
            transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
            className="w-[70px] h-[85px] md:w-[90px] md:h-[105px] lg:w-[160px] lg:h-[185px] rounded-xl lg:rounded-[35px] bg-[#FF3D00] text-white flex items-end justify-center p-4 z-10"
          >
            <p className="text-xs md:text-base">#64B5AC</p>
          </motion.div>
          <motion.div
            initial={{ x: 600 }}
            animate={
              inView ? { x: 0, transform: "rotate(-20deg)" } : { x: 600 }
            }
            transition={{
              delay: 0.8,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="w-[70px] h-[85px] md:w-[90px] md:h-[105px] lg:w-[160px] lg:h-[185px] rounded-xl lg:rounded-[35px] bg-[#64B5AC] text-white flex items-end justify-center p-4"
          >
            <p className="text-xs md:text-base">#64B5AC</p>
          </motion.div>
        </div>
        <div className="text-center">
          <motion.div
            initial={{ y: 200 }}
            animate={inView ? { y: 0 } : { y: 200 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h3 className="text-[90px] lg:text-[190px] font-medium leading-none">
              Palettes
            </h3>
          </motion.div>
        </div>
        <div className="relative flex items-center justify-start overflow-hidden p-7">
          <motion.div
            initial={{ x: -600 }}
            animate={
              inView ? { x: 0, transform: "rotate(25deg)" } : { x: -600 }
            }
            transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
            className="w-[70px] h-[85px] md:w-[90px] md:h-[105px] lg:w-[160px] lg:h-[185px] rounded-xl lg:rounded-[35px] bg-[#000] text-white flex items-end justify-center p-4 z-10"
          >
            <p className="text-xs md:text-base">#64B5AC</p>
          </motion.div>
          <motion.div
            initial={{ x: -800 }}
            animate={
              inView ? { x: 0, transform: "rotate(45deg)" } : { x: -800 }
            }
            transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
            className="w-[70px] h-[85px] md:w-[90px] md:h-[105px] lg:w-[160px] lg:h-[185px] rounded-xl lg:rounded-[35px] bg-[#299FF4] text-white flex items-end justify-center p-4 z-0"
          >
            <p className="text-xs md:text-base">#64B5AC</p>
          </motion.div>
          <motion.div
            initial={{ x: -1000 }}
            animate={
              inView ? { x: 0, transform: "rotate(-20deg)" } : { x: -1000 }
            }
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-[70px] h-[85px] md:w-[90px] md:h-[105px] lg:w-[160px] lg:h-[185px] rounded-xl lg:rounded-[35px] bg-[#C847F5] text-white flex items-end justify-center p-4 z-10"
          >
            <p className="text-xs md:text-base">#64B5AC</p>
          </motion.div>
        </div>
      </div>

      <Image
        src={"/case-studies/fitness-by-faith/shadow-solutions.png"}
        alt="brand-identity-fonts"
        width={736}
        height={736}
        className="absolute left-0 top-[20%] z-0"
      />

      <FontsImage />
      <Icons />
    </section>
  );
};

export default BrandIdentity;

export const FontsImage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div ref={ref} className="w-full mt-10 lg:mt-14 relative hidden">
      <motion.div
        initial={{ transform: "rotate(-45deg)" }}
        animate={
          inView
            ? { transform: "rotate(0deg)" }
            : { transform: "rotate(-45deg)" }
        }
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="bg-[#64B5AC] rounded-full px-6 py-3 text-center absolute top-[29%] left-[15%] hidden lg:block"
      >
        <span className="text-white text-xl">Regular</span>
      </motion.div>
      <motion.div
        initial={{ transform: "rotate(-45deg)" }}
        animate={
          inView
            ? { transform: "rotate(0deg)" }
            : { transform: "rotate(-45deg)" }
        }
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="bg-[#64B5AC] rounded-full px-6 py-3 text-center absolute top-[49%] left-[38%] rotate-45 hidden lg:block"
      >
        <span className="text-white text-xl">Medium</span>
      </motion.div>
      <motion.div
        initial={{ transform: "rotate(-45deg)" }}
        animate={
          inView
            ? { transform: "rotate(0deg)" }
            : { transform: "rotate(-45deg)" }
        }
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="bg-[#64B5AC] rounded-full px-6 py-3 text-center absolute top-[29%] right-[15%] -rotate-45 hidden lg:block"
      >
        <span className="text-white text-xl">Bold</span>
      </motion.div>
      <Image
        src={"/case-studies/fitness-by-faith/brand-identity-fonts.png"}
        alt="brand-identity-fonts"
        width={1263}
        height={539}
        className="z-10"
      />
    </div>
  );
};

export const Icons = () => {
  return (
    <div className="w-full mt-10 lg:mt-14 h-[280px] md:h-[340px] lg:h-[634px] bg-[#F5F5F5] rounded-[26px] flex justify-center overflow-hidden relative">
      <Image
        src={"/case-studies/fitness-by-faith/icons-1.png"}
        alt="brand-identity-icons"
        width={513}
        height={785}
        className="h-[280px] md:h-[340px] lg:h-[634px] w-auto absolute -left-10 md:left-0 top-0 z-0 hover:scale-110 transition-all duration-500"
      />
      <Image
        src={"/case-studies/fitness-by-faith/icons-2.png"}
        alt="brand-identity-icons"
        width={513}
        height={785}
        className="h-[280px] md:h-[340px] lg:h-[634px] w-auto absolute z-10 -right-10 md:right-0 top-0 hover:scale-110 transition-all duration-500"
      />
    </div>
  );
};

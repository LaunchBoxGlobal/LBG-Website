"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const HeroAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div
      ref={ref}
      className="w-full lg:h-[457px] midlg:h-[557px] relative flex items-end justify-center xl:mt-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 z-0 left-1/2 -translate-x-1/2 w-full"
      >
        <Image
          src="/ionic-app-development/ionic-outlined-text.webp"
          width={1274}
          height={432}
          alt="Ionic outlined text"
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1274px"
          className=""
        />
      </motion.div>

      <div className="h-full w-full md:w-[70%] xl:w-[776px] lg:h-[457px] midlg:h-[557px] relative flex justify-center items-end">
        <motion.div
          initial={{ y: 450 }}
          animate={inView ? { y: 0 } : { y: 450 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 absolute -left-12 md:-left-10 lg:left-0 max-w-[264px] flex justify-start bottom-0"
        >
          <Image
            src="/ionic-app-development/hero-mockup-2.webp"
            alt="Ionic company showcasing hybrid mobile app with cross-platform UI components"
            width={264}
            height={587}
            priority
            sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 264px"
            className="object-contain h-[307px] lg:h-[407px] midlg:h-auto float-start"
          />
        </motion.div>

        <motion.div
          initial={{ y: 500 }}
          animate={inView ? { y: 0 } : { y: 500 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="z-20"
        >
          <Image
            src="/ionic-app-development/hero-mockup-1.webp"
            alt="Ionic company displaying hybrid mobile app interface with responsive design elements"
            width={326}
            height={661}
            priority // main hero image → LCP
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 326px"
            className="object-contain h-[357px] lg:h-[457px] midlg:h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ y: 500 }}
          animate={inView ? { y: 0 } : { y: 500 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 absolute -right-12 md:-right-10 lg:right-0"
        >
          <Image
            src="/ionic-app-development/hero-mockup-3.webp"
            alt="Ionic company demonstrating cross-platform mobile app with interactive UI components"
            width={264}
            height={587}
            priority
            sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 264px"
            className="object-contain h-[307px] lg:h-[407px] midlg:h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAnimation;

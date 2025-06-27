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
    <section ref={ref} className="w-full mt-10 relative padding-x">
      <section className="h-[260px] lg:h-[595px] w-full flex justify-center relative items-end mt-0">
        <motion.div
          initial={{ y: 600 }}
          animate={inView ? { y: 0 } : { y: 600 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute right-0 midlg:right-[3%] -bottom-6 lg:-bottom-4 z-20"
        >
          <Image
            src={"/locations/web-dev-company-new-jersey/hero-mockup-1.png"}
            width={710}
            height={679}
            alt="Web development company in New Jersey showcasing responsive e-commerce site interface"
            className="mx-auto md:h-[300px] lg:h-auto object-contain z-20"
          />
        </motion.div>
        <motion.div
          initial={{ y: 600 }}
          animate={inView ? { y: 0 } : { y: 600 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute left-[10%] midlg:left-[16%] -bottom-4 z-10 hidden lg:block"
        >
          <Image
            src={`/locations/web-dev-company-new-jersey/hero-mockup-2.png`}
            alt="Web development company in New Jersey displaying responsive business website with modern UI"
            width={636}
            height={909}
            className="z-10"
          />
        </motion.div>
        <motion.div
          initial={{ y: 600 }}
          animate={inView ? { y: 0 } : { y: 600 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute left-[1%] -bottom-4 z-0 hidden lg:block"
        >
          <Image
            src={`/locations/web-dev-company-new-jersey/hero-mockup-3.png`}
            alt="Web development company in New Jersey showcasing responsive dashboard with analytics interface"
            width={466}
            height={529}
            className=""
          />
        </motion.div>
      </section>
    </section>
  );
};

export default HeroAnimation;

// hero-mockup-1

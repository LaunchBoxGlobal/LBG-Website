"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[40vh] md:h-[60vh]  flex items-center justify-center overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex justify-center items-center w-full  md:p-20"
      >
        <Image
          src="/industries/ecommerce/hero.png"
          width={1000}
          height={1000}
          alt="Laptop mockup"
          className="drop-shadow-2xl z-0 w-[100%] sm:w-[70%]  lg:w-[60%] xl:w-[55%] 2xl:w-[50%] md:p-5 h-auto"
        />
        <motion.div
          initial={{ y: 50}}
          animate={{
            opacity: 1,
            y: [0, -20, 0],
          }}
          transition={{
            delay: 0.4,
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute  z-10 left-4 md:left-[25%] "
          style={{
           
            transform: "translateX(-50%)",
          }}
        >
          <Image
            src="/industries/ecommerce/hero1.png"
            width={300}
            height={300}
            alt="Mobile mockup"
            className="drop-shadow-xl w-[50%] py-8 md:w-[60%] lg:w-[80%] "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-white">

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex justify-center items-center"
      >
        <Image
          src="/industries/ecommerce/hero.png"
          width={800}
          height={800}
          alt="Laptop mockup"
          className="drop-shadow-2xl z-0"
        />

 <motion.div
  initial={{  y: 50 }}
  animate={{
    opacity: 1,
    y: [0, -20, 0], // Moves up then back down smoothly
  }}
  transition={{
    delay: 0.4,
    duration: 3, // Speed of one float cycle
    ease: "easeInOut",
    repeat: Infinity, // Infinite loop
  }}
  // whileHover={{ y: -10 }} // Slight lift on hover
  className="absolute z-10 left-2"
>
  <Image
    src="/industries/ecommerce/hero1.png"
    width={200}
    height={200}
    alt="Mobile mockup"
    className="drop-shadow-xl"
  />
</motion.div>

      </motion.div>


    </section>
  );
}

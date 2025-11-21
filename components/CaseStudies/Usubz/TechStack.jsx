
"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleUpHover = {
  whileHover: { scale: 1.1 },
  transition: { type: "spring", stiffness: 300 },
};

function TechStack() {
  return (
    <motion.div
      className="padding-x"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% is visible
    >
      <div className="flex flex-col md:flex-row justify-between items-center  gap-8">
        {/* Text Section */}
        <motion.div className="md:w-[40%] space-y-4" variants={fadeInUp}>
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#02437C] to-[#19DA89] bg-clip-text text-transparent">
            Tech Stack & Tools
          </h1>

          <p className="opacity-75">
            The design workflow for UsubZ relied on tools that kept the process
            fast, collaborative, and user-focused. We used Figma for wireframes
            and final UI, and FigJam for journey mapping and teamwork. Adobe
            Illustrator helped create visual assets and icons. Maze and
            UserTesting validated interactive prototypes and provided real user
            feedback. These tools ensured a precise, data-driven design process.
          </p>
        </motion.div>

        {/* Images Section */}
        <motion.div className="flex gap-4">
          {[
            { src: "/case-studies/usubz/Figma.png", alt: "Figma" },
            { src: "/case-studies/usubz/Photoshop.png", alt: "Photoshop" },
            { src: "/case-studies/usubz/Illustrator.png", alt: "Illustrator" },
          ].map((img, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={scaleUpHover.whileHover}
              transition={scaleUpHover.transition}
            >
              <Image src={img.src} alt={img.alt} width={120} height={120} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TechStack;

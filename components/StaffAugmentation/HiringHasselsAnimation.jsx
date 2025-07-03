"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const HiringHasselsAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="w-full relative overflow-hidden">
      <Image
        src={"/staff-augmentation/hiring-hassles-bg-mockup.png"}
        width={490}
        height={825}
        alt="hiring-hassles-red-mockup"
        className="object-contain z-0 relative"
      />

      <div
        ref={ref}
        className="flex h-[230px] w-[230px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10  items-center justify-center"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300/80 opacity-45"></span>
        <span className="animate-ping absolute inline-flex h-[80%] w-[80%] rounded-full bg-gray-300/80 opacity-60"></span>
        <span className="animate-ping absolute inline-flex h-[60%] w-[60%] rounded-full bg-gray-300/80 opacity-75"></span>
        <Image
          src={"/staff-augmentation/exclamation-mark-image.png"}
          alt="exclamation-mark-image"
          width={266}
          height={266}
          className="absolute inline-flex z-20"
        />
        {/* <span className="relative inline-flex rounded-full h-[100px] w-[100px] bg-sky-500"></span> */}
        {/* icons */}
        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-[30%] top-[-45%]"
        >
          <Image
            src={"/staff-augmentation/hiring-hassels-icon-1.png"}
            alt="hiring-hassels-icon-1"
            width={82}
            height={86}
            className="object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -left-10 top-[-20%]"
        >
          <Image
            src={"/staff-augmentation/hiring-hassels-icon-2.png"}
            alt="hiring-hassels-icon-2"
            width={62}
            height={72}
            className="object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[-10%] right-[-10%] z-10"
        >
          <Image
            src={"/staff-augmentation/hiring-hassels-icon-3.png"}
            alt="hiring-hassels-icon-3"
            width={121}
            height={133}
            className="object-contain z-10"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-[5%] right-[-30%] z-10"
        >
          <Image
            src={"/staff-augmentation/hiring-hassels-icon-4.png"}
            alt="hiring-hassels-icon-4"
            width={79}
            height={75}
            className="object-contain z-10"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 z-10"
        >
          <Image
            src={"/staff-augmentation/hiring-hassels-icon-5.png"}
            alt="hiring-hassels-icon-5"
            width={79}
            height={75}
            className="object-contain z-10"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-[10%] left-[-20%] z-10"
        >
          <Image
            src={"/staff-augmentation/hiring-hassels-icon-6.png"}
            alt="hiring-hassels-icon-6"
            width={153}
            height={153}
            className="object-contain z-10"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HiringHasselsAnimation;

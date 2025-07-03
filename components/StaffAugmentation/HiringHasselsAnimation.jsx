"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const HiringHasselsAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
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
        className="flex h-[430px] w-[430px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10  items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border border-gray-300 absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-50"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border border-gray-300 absolute inline-flex h-[80%] w-[80%] rounded-full bg-gray-100 opacity-60"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border border-gray-300 absolute inline-flex h-[60%] w-[60%] rounded-full bg-gray-100 opacity-75"
        ></motion.div>

        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inline-flex  z-20"
        >
          <Image
            src={"/staff-augmentation/exclamation-mark-image.png"}
            alt="exclamation-mark-image"
            width={266}
            height={266}
            className="z-20"
          />
        </motion.div>
        {/* <span className="relative inline-flex rounded-full h-[100px] w-[100px] bg-sky-500"></span> */}
        {/* icons */}
        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
          className="absolute left-[30%] top-[-5%]"
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
          transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
          className="absolute left-[10%] top-[15%]"
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
          transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
          className="absolute top-[25%] right-[10%] z-10"
        >
          <Image
            src={"/staff-augmentation/hiring-hassels-icon-3.png"}
            alt="hiring-hassels-icon-3"
            width={131}
            height={143}
            className="object-contain z-10"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={inView ? { scale: 1 } : { scale: 0.3 }}
          transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
          className="absolute bottom-[20%] right-[5%] z-10"
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
          transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
          className="absolute bottom-[-4%] left-1/2 -translate-x-1/2 z-10"
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
          transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
          className="absolute bottom-[22%] left-[12%] z-10"
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

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const platforms = [
  {
    src: "/cost-effective.png",
    width: 20,
    height: 22,
    alt: "cost effective value proposition",
    title: "Cost Effective",
    icon: "/cost-effective-icon.png",
  },
  {
    src: "/startup-friendly.png",
    width: 16,
    height: 20,
    alt: "startup friendly value proposition",
    title: "Startup Friendly",
    icon: "/startup-friendly-icon.png",
  },
  {
    src: "/transparent-process.png",
    width: 20,
    height: 20,
    alt: "transparent process icon",
    title: "Transparent Process",
    icon: "/transparent-process-icon.png",
  },
  {
    src: "/quick-turnaround.png",
    width: 29,
    height: 20,
    alt: "quick turnaround icon",
    title: "quick turnaround",
    icon: "/quick-turnaround-icon.png",
  },
  {
    src: "/partner-first.png",
    width: 31,
    height: 20,
    alt: "partner first",
    title: "partner first",
    icon: "/partner-first-icon.png",
  },
  {
    src: "/global-talents.png",
    width: 19,
    height: 19,
    alt: "global talents icon",
    title: "global talents",
    icon: "/global-talents-icon-gray.png",
  },
  {
    src: "/cost-effective.png",
    width: 20,
    height: 24,
    alt: "cost effective value proposition",
    title: "Cost Effective",
    icon: "/cost-effective-icon.png",
  },
  {
    src: "/startup-friendly.png",
    width: 16,
    height: 20,
    alt: "startup friendly value proposition",
    title: "Startup Friendly",
    icon: "/startup-friendly-icon.png",
  },
  {
    src: "/transparent-process.png",
    width: 20,
    height: 20,
    alt: "transparent process icon",
    title: "Transparent Process",
    icon: "/transparent-process-icon.png",
  },
  {
    src: "/quick-turnaround.png",
    width: 29,
    height: 20,
    alt: "quick turnaround icon",
    title: "quick turnaround",
    icon: "/quick-turnaround-icon.png",
  },
  {
    src: "/partner-first.png",
    width: 31,
    height: 20,
    alt: "partner first",
    title: "partner first",
    icon: "/partner-first-icon.png",
  },
  {
    src: "/global-talents.png",
    width: 19,
    height: 19,
    alt: "global talents icon",
    title: "global talents",
    icon: "/global-talents-icon-gray.png",
  },
];

const Platforms = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1280],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="w-full py-3.5 overflow-hidden bg-white border-t-[1.5px] border-b-[1.5px] border-gray-400 relative -top-10 xl:-top-20 2xl:-top-24 z-30">
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="flex gap-10"
      >
        {[...platforms, ...platforms].map((platform, index) => {
          return (
            <>
              <div className="flex w-[400px] mr-4 items-center justify-start gap-2">
                <Image
                  key={index}
                  src={platform?.icon}
                  width={platform?.width}
                  height={platform?.height}
                  alt={platform?.title}
                  className={`w-[20px] h-[18px] object-contain`}
                />
                <strong className="uppercase font-bold text-[#545454] text-xs lg:text-[20px] opacity-60 whitespace-nowrap">
                  {platform?.title}
                </strong>
              </div>
              <div className="h-[16px] border-[1.5px] border-[#545454]" />
            </>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Platforms;

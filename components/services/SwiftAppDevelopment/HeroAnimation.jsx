"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

const HeroAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    // margin: "-30% 0px -30% -40px",
  });
  return (
    <div ref={ref} className="w-full relative mt-0 mb-10 md:my-10">
      <Image
        src={"/swift/hero-bg-image.png"}
        width={1266}
        height={834}
        alt="swift hero bg image"
        className="z-0 h-[60vh] md:h-auto object-cover"
      />

      <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[698px] xl:h-[698px] orangeBorder p-10 rounded-full border-dashed absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <div className="w-[90%] h-[90%] orangeBg rounded-full absolute inset-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
        {/* swift-hero-mobile-mockups */}
        <motion.div
          className="w-full relative"
          initial={{ opacity: 0.4, scale: 0.4 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0.4, scale: 0.4 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={"/swift/swift-hero-mobile-mockups.png"}
            alt="swift-hero-mobile-mockups"
            width={648}
            height={714}
            className="relative -right-4"
          />
        </motion.div>
      </div>

      <div className="absolute left-[-2%] z-20 bottom-[20%] hidden lg:flex items-center justify-center w-[330px] h-[280px] rotate-12">
        {/* card-1 */}
        <Image
          src={"/swift/swift-hero-cursor-1.png"}
          alt="swift-hero-cursor-1"
          width={58}
          height={56}
          className="swift-orbiting-cursor"
        />
        <Image
          src={"/swift/hero-card-1.png"}
          alt="card-1"
          width={224}
          height={161}
          className=""
        />
      </div>

      {/* card-2 */}
      <Image
        src={"/swift/card-2.png"}
        alt="card-1"
        width={98}
        height={98}
        className="absolute left-[16%] z-20 top-[22%] hidden lg:block floatUpImage"
      />

      {/* card-3 */}
      <Image
        src={"/swift/card-3.png"}
        alt="card-1"
        width={138}
        height={138}
        className="absolute left-1/2 -translate-x-1/2 z-20 top-[-1.8%] hidden lg:block floatDownImage"
      />

      {/* card-4 */}
      <Image
        src={"/swift/card-4.png"}
        alt="card-1"
        width={128}
        height={128}
        className="absolute right-[15%] z-20 top-[15%] hidden lg:block floatUpImage"
      />

      {/* card-5 */}
      <Image
        src={"/swift/card-5.png"}
        alt="card-1"
        width={108}
        height={108}
        className="absolute right-[8.5%] z-20 top-[42%] hidden lg:block floatDownImage"
      />

      {/* card-6 */}
      <div className="absolute right-[1%] z-20 bottom-[20%] hidden lg:flex items-center justify-center w-[280px] h-[180px]">
        <Image
          src={"/swift/swift-cursor-2.png"}
          alt="swift-cursor-2"
          width={58}
          height={56}
          className="swift-orbiting-cursor-right"
        />
        <Image
          src={"/swift/swift-card-6.png"}
          alt="card-1"
          width={220}
          height={125}
          className=""
        />
      </div>
    </div>
  );
};

export default HeroAnimation;

"use client";
import { NASHVILLE_ICONS } from "@/constants/case-studies/nashville/nashville-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const BrandIdentity = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Brand Identity</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        Now You Know Nashville provides an advanced online platform that
        encapsulates the entertainment district's cultural character. Through
        the integration of contemporary functionality and traditional design
        features, the program offers a user-friendly interface. The development
        team included sophisticated musical themes, stylish navigation, and a
        carefully chosen color palette that was influenced by the local style.
        With this strategy, a unique interface that appeals to both residents
        and tourists is created while preserving a high-end brand experience.
      </p>
      <div className="w-full mt-10 lg:mt-14">
        <Image
          src={"/case-studies/brand-identity-fonts-mockup.png"}
          width={1267}
          height={816}
          alt="brand-identity-fonts-mockup"
          className="mx-auto"
        />
      </div>
      <div className="w-full mt-10 lg:my-14">
        <Image
          src={"/case-studies/nashville/nashville-colors-mockup.png"}
          width={1143}
          height={496}
          alt="nashville-colors-mockup"
          className="mx-auto"
        />
      </div>
      <div className="w-full mt-10 lg:mt-14 bg-white z-20 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-3">
        {NASHVILLE_ICONS?.map((icon, i) => {
          return <Card key={i} icon={icon} i={i} />;
        })}
        {/*  */}
      </div>
    </section>
  );
};
// nashville-icons-mockup

export default BrandIdentity;

export const Card = ({ icon, i }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.3 }}
      animate={inView && { scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="iconBox flex items-center justify-center p-5 rounded-xl min-h-[124px] max-h-[144px]"
    >
      <Image
        src={icon}
        key={i}
        width={50}
        height={50}
        alt="nashville icon"
        className="object-contain"
      />
    </motion.div>
  );
};

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="w-full relative overflow-hidden padding-x py-20">
      <div
        ref={ref}
        className="w-full border border-[#64B5AC73] cta-shadow relative rounded-[80px] flex items-center justify-start flex-col gap-5 min-h-[450px] lg:h-[540px]"
        style={{
          backgroundImage: "url('/case-studies/fitness-by-faith/cta-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ x: -70 }}
          animate={inView ? { x: 0 } : { x: -70 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-[6%] top-[5%] lg:top-[25%] hidden lg:block"
        >
          <img
            src={"/case-studies/fitness-by-faith/fitness-by-faith-cta-logo.svg"}
            alt="fitness-by-faith-cta-logo"
            width={129}
            height={119}
            loading="lazy"
            className=""
          />
        </motion.div>
        <motion.div
          initial={{ y: 100 }}
          animate={inView ? { y: 0 } : { y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-4"
        >
          <h2 className="z-10 text-center font-medium text-[45px] md:text-[60px] lg:text-[65px] midlg:text-[85px] leading-[1] tracking-tight mt-14">
            You’re One <br /> Conversation <br />
            <span className="fitnessText">Away!</span>
          </h2>
          <p className="mt-5 lg:text-lg xl:text-xl lg:w-1/2 text-center mx-auto">
            You’re one conversation away from a smarter way of building. Talk to
            us and discover how our process turns complexity into simplicity.
          </p>
        </motion.div>
        <motion.div
          className="mt-5"
          initial={{ scale: 0.5 }}
          animate={inView ? { scale: 1 } : { scale: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            href={"/contact-us"}
            className="fitnessBg text-white px-8 py-4 rounded-lg text-lg font-bold border-[#64B5AC] border"
          >
            Get A Free Consultation
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          animate={inView ? { x: 0 } : { x: 200 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -right-[10%] -rotate-0 h-[625px] top-[-7%] z-20"
        >
          <img
            src={"/case-studies/fitness-by-faith/cta-mobile-mockup.webp"}
            alt="cta-mobile-mockup"
            width={280}
            height={585}
            loading="lazy"
            className="h-[625px] z-20 w-auto hidden midlg:block"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

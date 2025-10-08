"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const BloomCta = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section ref={ref} className="w-full padding-x">
      <div className="w-full bg-black text-white relative overflow-hidden min-h-[386px] max-h-[400px] rounded-[17px] px-6 md:px-16 flex flex-col items-start gap-4 justify-center">
        <Image
          src={"/case-studies/bloom-cta-border-lines.png"}
          alt="bloom-cta-border-lines"
          width={2389}
          height={298}
          className="absolute inset-0 z-0"
        />
        <div className="w-full lg:w-[55%] flex flex-col items-start gap-4 z-10">
          <h2 className="text-[30px] md:text-[45px] xl:text-[60px] font-bold z-10 leading-[1.1]">
            <span className="text-[#C04DB2]">Your Idea</span> Deserves a Case
            Study Too!
          </h2>
          <p className="text-lg">
            The results you want are just a smart collaboration away. Let’s
            partner up and turn your goals into a standout success.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#C04DB2] text-white text-lg font-bold mt-4 rounded-[10px] py-[17px] px-[27px] z-10 ctaBtn"
          >
            Get a Free Consultation
          </Link>
        </div>
        <motion.div
          initial={{ y: 400 }}
          animate={inView ? { y: 0 } : { y: 400 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute right-0 bottom-0 w-[45%] hidden lg:block"
        >
          <Image
            src={"/case-studies/bloom-cta-mockup.png"}
            alt="bloom-cta-mockup"
            width={602}
            height={634}
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BloomCta;

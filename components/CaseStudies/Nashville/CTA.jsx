"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="w-full mb-28">
      <div
        ref={ref}
        className="w-full bg-black text-white relative overflow-hidden min-h-[386px] max-h-[400px] rounded-[17px] px-6 md:px-16 flex flex-col items-start gap-4 justify-center"
      >
        <Image
          src={"/case-studies/nashville/nashville-cta-lines.webp"}
          alt="nashville-cta-lines"
          width={2389}
          height={298}
          loading="lazy"
          className="absolute inset-0 z-0"
        />
        <div className="w-full lg:w-[55%] flex flex-col items-start gap-4 z-10">
          <h2 className="text-[30px] md:text-[45px] xl:text-[60px] font-bold z-10 leading-[1.1]">
            <span className="text-[#407BA7]">You</span> Could Be Our Next
            Success Story
          </h2>
          <p className="lg:text-xl">
            Got an app idea you’re ready to launch? Let’s team up and turn it
            into something worth showing off.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#407BA7] text-white text-lg font-bold mt-4 rounded-[10px] py-[17px] px-[27px] z-10"
          >
            Let’s Build Together
          </Link>
        </div>
        <motion.div
          initial={{ y: 300 }}
          animate={inView ? { y: 0 } : { y: 300 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute bottom-0 right-0 w-[45%] hidden lg:block"
        >
          <Image
            src={"/case-studies/nashville/nashville-cta-mockup.webp"}
            alt="nashville-cta-mockup"
            width={602}
            height={634}
            loading="lazy"
            className="h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

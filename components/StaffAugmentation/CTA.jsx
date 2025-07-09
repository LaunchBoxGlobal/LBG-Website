"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="w-full py-10 lg:py-20 midlg:py-32 xl:pb-40 xl:pt-80 bg-[#fff] padding-x overflow-hidden">
      <div
        ref={ref}
        className="w-full bg-[#F9F9F9] h-[543px] cta-container rounded-3xl flex items-end justify-between"
      >
        <div className="w-full lg:w-[60%] h-full flex flex-col items-start justify-center gap-5 p-7 lg:p-14">
          <h2 className="text-3xl lg:text-[55px] font-bold leading-[1.1] tracking-tight">
            Build Your Dream Team In <span className="red-text"> Minutes!</span>
          </h2>
          <p className="text-lg leading-[1.2]">
            Answer 8 quick questions about your project needs, and we'll match
            you with the perfect IT staff augmentation services solution. Get
            your custom team proposal within 24 hours.
          </p>
          <div className="mt-5">
            <Link
              href={`/contact-us`}
              className="red-bg rounded-[7px] text-white text-xs midlg:text-lg font-bold py-4 px-5"
            >
              Get Your Custom Team Plan in 24 Hours
            </Link>
          </div>
        </div>
        <div className="hidden lg:block overflow-hidden">
          <motion.div
            initial={{ y: 400 }}
            animate={inView ? { y: 0 } : { y: 400 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Image
              src={"/staff-augmentation/cta-mobile-mockup.webp"}
              alt="cta-mobile-mockup"
              width={620}
              height={787}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

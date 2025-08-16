"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const CTA = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  return (
    <section className="w-full padding-x relative overflow-hidden">
      <div className="w-full bg-black p-10 lg:p-20 rounded-[68px] text-white grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="flex flex-col items-start justify-center gap-3">
          <h2 className="font-semibold text-[35px] lg:text-[60px] xl:text-[70px] leading-[1]">
            Your Success Story starts here
          </h2>
          <p className="font-medium text-lg lg:text-[26px] leading-[1.2] mt-3">
            Let’s turn your project into our next standout case study, proven
            results, not just promises.
          </p>
          <div className="mt-5">
            <Link
              href={`/contact-us`}
              className="flex items-center gap-2 bg-[#FE0000] py-2 pl-2 pr-5 rounded-full w-fit"
            >
              <img
                src={`/case-studies/fit110/cta-icon.webp`}
                alt="cta-icon"
                width={61}
                height={61}
                loading="lazy"
                className="w-[41px] h-[41px] lg:w-[61px] lg:h-[61px]"
              />
              <span className="font-semibold text-lg lg:text-[26px] leading-[1]">
                Start with a free call
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <motion.div
            ref={ref1}
            initial={{ y: 100, scale: 0.4 }}
            animate={inView1 ? { y: 0, scale: 1 } : { y: 100, scale: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <img
              src={
                "/case-studies/sittner-trucking/jb-sittner-trucking-laptop-mockup.png"
              }
              alt="sittner-trucking/jb-sittner-trucking-laptop-mockup"
              width={731}
              height={547}
              loading="lazy"
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

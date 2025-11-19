"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CTABtn from "./CTABtn";

const CTA = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center ">
      <div className=" rounded-[50px] text-[#212121] bg-white p-4 md:p-14  py-20 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold  mb-6">
            Got a marketplace idea you’re excited about? 
          </h2>
          <p className="  text-lg  mb-8 max-w-lg mx-auto md:mx-0">
             Our team turns concepts into clean, high performing digital products with strategy, design and custom development. 
          </p>
         <CTABtn/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{once:true}}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/case-studies/jetezee/cta.png" 
            alt="Call to Action"
            width={500}
            height={400}
            className=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

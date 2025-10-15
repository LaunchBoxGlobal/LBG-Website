"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CTABtn from "./CTABtn";

const CTA = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center pb-20 midlg:pb-28">
      <div className=" rounded-[50px] bg-[#212121] text-white p-4 md:p-14  py-20 grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold  mb-6">
            Your next success story starts with a conversation.
          </h2>
          <p className="  text-lg  mb-8 max-w-lg mx-auto md:mx-0">
             A simple conversation could be the turning point for your business. Let’s talk today and start building the scalable eCommerce solution you’ve been imagining. 
          </p>
         <CTABtn/>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{once:true}}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/case-studies/Cta.png" // replace with your actual image path
            alt="Call to Action"
            width={500}
            height={400}
            className="rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

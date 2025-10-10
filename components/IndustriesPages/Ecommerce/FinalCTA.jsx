"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

function FinalCTA() {
  return (
    <section className="padding-x">
      <div className="bg-black items-center text-white rounded-[17px] w-full relative grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-hidden">
        {/* ===== Left Side ===== */}
        <ContactForm />

        {/* ===== Right Side with Floating Image ===== */}
        <div className="relative hidden  md:flex justify-center items-center">
          {/* Floating animation for the mobile image */}
          <motion.div
            animate={{
              y: [0, -40, 0], // moves up 20px, then back down
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 w-[80%]"
          >
            <Image
              src={"/industries/ecommerce/icons/mobiles.png"}
              alt="mobile"
              width={1050}
              height={1050}
              className="object-center"
            />
          </motion.div>

          {/* Background Gradient Image */}
          <Image
            src={"/industries/ecommerce/icons/grad.png"}
            alt="gradient"
            width={1250}
            height={1250}
            className="object-center w-[1250px] absolute top-0 z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;

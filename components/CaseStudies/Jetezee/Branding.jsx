"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Branding() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-24">
      {/* Top Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.h2
          className="section-heading font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Branding
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base sm:text-lg md:text-lg"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We crafted JetEzee’s brand identity to convey luxury, trust, and clarity.
        </motion.p>
      </div>

      {/* Main Image */}
      <div className="my-10 flex justify-center items-center">
        <Image
          src={"/case-studies/Jetezee/inter.png"}
          alt="inter-image"
          width={1000}
          height={1000}
          className="w-full max-w-full sm:max-w-xl md:max-w-4xl h-auto object-contain"
        />
      </div>

      {/* Color Palette Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full max-w-4xl mx-auto gap-6">
        <h1 className="font-bold text-xl ">Color Palette</h1>
        <p className="text-base  opacity-70 lg:w-1/2">
          We began with simple, black-and-white sketches to map out the user experience for both shoppers and administrators. After confirming the layout was intuitive, we brought the designs to life with a detailed, interactive prototype that looks and feels like the final product.
        </p>
      </div>

      {/* Colors Image */}
      <div className="flex justify-center items-center my-12">
        <Image
          src={"/case-studies/Jetezee/colors.png"}
          alt="colors-image"
          width={800}
          height={800}
          className="w-full max-w-full sm:max-w-lg md:max-w-4xl h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default Branding;

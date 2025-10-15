"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Wireframes = () => {
  const images = [
    "/case-studies/i1.png",
    "/case-studies/i2.png",
    "/case-studies/i3.png",
    "/case-studies/i4.png",
    "/case-studies/i5.png",
    "/case-studies/i6.png",
    
  ]; // replace these with your actual image paths

  return (
    <section className=" w-full padding-x py-20">
      <div className=" text-center">
        {/* Heading */}
        <motion.h2
          className="section-heading font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          viewport={{once:true}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Wireframes: Visuals Before Development
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-600 max-w-3xl text-xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Before we started the development process, we created both low-fidelity
          and high-fidelity wireframes to plan user flows and validate functionality
          early in detail. These acted as the blueprint for aligning design with
          usability across all platforms.
        </motion.p>

        {/* Wireframe Card */}
        <motion.div
          className="bg-gradient-to-r    from-[#ffffff] to-[#E9E4E3] rounded-[120px] p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{once:true}}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Subheading */}
          <motion.h3
            className="text-xl font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0 }}
            viewport={{once:true}}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mobile App
          </motion.h3>

          <p className="text-base  mb-8 md:px-12 md:w-[70%] mx-auto">
            Wireframes covered core journeys, including product listings, product
            detail pages, checkout, and order tracking. While making sure buyers
            had a clear experience from browsing to delivery.
          </p>

          {/* Wireframe Images */}
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 py-24">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="w-40 md:w-44 lg:w-48"
                initial={{ opacity: 0, y: 40 }}
                viewport={{once:true}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                whileHover={{y:-50}}
              >
                <Image
                  src={img}
                  width={500}
                  height={500}
                  alt={`Wireframe ${index + 1}`}
                  className=" "
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Wireframes;

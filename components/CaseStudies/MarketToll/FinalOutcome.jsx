"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const FinalOutcome = () => {
  const sections = [
    {
      title: "Mobile App",
      images: [
        "/case-studies/m1.png",
        "/case-studies/m2.png",
        "/case-studies/m3.png",
        "/case-studies/m4.png",
        "/case-studies/m5.png",
        "/case-studies/m6.png",
      ],
      gradient: "from-[#ffffff] to-[#0093E773] ",
    },
    {
      title: "Web App",
      images: [
        "/case-studies/p1.png",
        "/case-studies/p2.png",
        "/case-studies/p3.png",
        "/case-studies/p4.png",
      ],
      gradient: "from-[#0093E773] to-[#ffffff]",
    },
    {
      title: "Admin Dashboard",
      images: [
        "/case-studies/ip1.png",
        "/case-studies/ip2.png",
        "/case-studies/ip3.png",
        "/case-studies/ip4.png",
      ],
      gradient: "from-[#ffffff] to-[#0093E773]",
    },
  ];

  return (
    <section className="w-full padding-x py-20">
      <div className="text-center">
        {/* Heading */}
        <motion.h2
          className="section-heading font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Final Outcome
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-600 text-xl max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Marketplace grew from a niche idea into a scalable multi-vendor
          marketplace, seamlessly integrating Mobile, Web, and Admin Dashboard
          experiences. The platform not only enhanced user experience but also
          delivered measurable success and long-term impact.
        </motion.p>

        {/* Sections */}
        <div className="space-y-24">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`rounded-[80px] w-full py-12 bg-gradient-to-r ${section.gradient}`}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Subheading */}
              <motion.h3
                className="text-xl font-semibold text-gray-800 mb-8"
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {section.title}
              </motion.h3>

              {/* Image Row */}
              <div
                className="flex flex-wrap md:flex-nowrap py-14 gap-8 justify-center overflow-hidden"
              >
                {section.images.map((img, i) => (
                  <motion.div
                    key={i}
                    className={cn(
                      "flex-shrink-0",
                      index === 0 ? "w-40 md:w-44 lg:w-48" : "w-56 md:w-64 lg:w-96"
                    )}
                    initial={{ opacity: 0, y: 40 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0 }}
                    whileHover={{
                      y: -45,
                      transition: { type: "spring", stiffness: 200 },
                    }}
                  >
                    <Image
                      src={img}
                      width={1000}
                      height={1000}
                      alt={`${section.title} ${i + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalOutcome;
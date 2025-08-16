"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const colors = [
  {
    color: "#02EA4C",
    code: "02EA4C",
  },
  {
    color: "#0A8A33",
    code: "0A8A33",
  },
  {
    color: "#181818",
    code: "181818",
  },
  {
    color: "#CFCFCF",
    code: "CFCFCF",
  },
  {
    color: "#DFDFDF",
    code: "DFDFDF",
  },
  {
    color: "#F7F7F7",
    code: "F7F7F7",
  },
];

const Branding = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false });
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Crafting the Voice</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        The app’s UI reflected JB Sittner Trucking’s branding with bold colors,
        simple layouts, and intuitive icons. Consistency across platforms
        reinforced trust and ease of adoption for employees and admins.
      </p>

      <div ref={ref1} className="w-full mt-20">
        <motion.div
          initial={{ scale: 0.7 }}
          animate={inView1 ? { scale: 1 } : { scale: 0.7 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <img
            src={`/case-studies/sittner-trucking/branding-fonts-mockup.png`}
            alt="branding-fonts-mockup"
            width={733}
            height={332}
            className="mx-auto object-contain"
          />
        </motion.div>
      </div>

      <div
        ref={ref2}
        className="w-full mt-20 lg:mt-40 flex items-center justify-center"
      >
        {colors?.map((c, i) => {
          return (
            <motion.div
              key={i}
              style={{
                background: c?.color,
                zIndex: colors.length + i,
              }}
              initial={{ scale: 0.7 }}
              animate={inView2 ? { scale: 1 } : { scale: 0.7 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`w-[70px] h-[70px] md:w-[130px] md:h-[130px] midlg:w-[210px] midlg:h-[210px] rounded-full border-[5px] border-white relative ${
                i === 0 ? "ml-0" : "ml-[-20px] lg:ml:[-60px]"
              }`}
            >
              <div className="w-[45px] md:w-[93px] h-[20px] md:h-[38px] bg-black border-2 border-white absolute rounded-lg left-[-2%] bottom-[18%] flex items-center justify-center">
                <p className="text-white text-[9px] lg:text-lg">{c?.code}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Branding;

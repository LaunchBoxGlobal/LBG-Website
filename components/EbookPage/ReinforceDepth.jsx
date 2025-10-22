"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ReinforceDepth() {
  return (
    <section className="w-full py-20 padding-x flex justify-center items-center overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative flex justify-center">
          <motion.div
            initial={{ rotate: 0, y: 0, opacity: 1 }}
             whileInView={{ rotate: -6, y: 0, opacity: 1 }}
            transition={{ duration: .1 }}
           
            whileHover={{ rotate: -10,  }}
            className="bg-white shadow-lg rounded-2xl h-[400px] p-8 w-[280px] sm:w-[320px] absolute top-6 left-0"
          >
            <h4 className="text-gray-900 font-semibold text-sm mb-4">
              Growth Marketing Playbook
            </h4>
            <div className="grid grid-cols-2 gap-4 text-gray-900 mb-6">
              <div>
                <p className="text-3xl font-bold">
                  100<span className="text-[#F40E00]">+</span>
                </p>
                <p className="text-xs text-gray-500">Lorem ipsum dolor sit</p>
              </div>
              <div>
                <p className="text-3xl font-bold">240</p>
                <p className="text-xs text-gray-500">Lorem ipsum dolor sit</p>
              </div>
              <div>
                <p className="text-3xl font-bold">80</p>
                <p className="text-xs text-gray-500">Lorem ipsum dolor sit</p>
              </div>
              <div>
                <p className="text-3xl font-bold">
                  20<span className="text-[#F40E00]">+</span>
                </p>
                <p className="text-xs text-gray-500">Lorem ipsum dolor sit</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
              perferendis veniam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </motion.div>
          <motion.div
            initial={{ rotate: 0, y: 0, opacity: 1 }}
             whileInView={{ rotate: 8, y: 0, opacity: 1 }}
            transition={{ duration: .2 }}
           
            whileHover={{
              rotate: 10,
              y: -10,
              scale: 1.03,
              transition: { type: "spring", stiffness: 200 },
            }}
            className="bg-white shadow-xl rounded-2xl h-[450px] w-[280px] sm:w-[320px] relative z-10 translate-x-12 translate-y-12"
          >
            <div className="bg-[#F40E00] text-white p-4 rounded-t-2xl mb-4">
              <h4 className="font-semibold text-sm">
                Growth Marketing Playbook
              </h4>
              <p className="text-base font-semibold mt-2">
                “Retention is key for a good growth marketing strategy”
              </p>
            </div>
            <div className="p-5">
              <h5 className="font-semibold text-gray-900 mb-2 text-sm">
                How to increase your users retention
              </h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                tenetur eveniet, repellendus hic molestias voluptas aliquid in.
                Aspernatur dolorem, beatae odit sequi, itaque laboriosam id.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center text-left lg:pl-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Highlight tangible value <br /> and{" "}
            <span className="text-[#F40E00]">reinforce depth</span>
          </h2>

          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed max-w-md">
            With 100+ pages packed with actionable insights, startup frameworks,
            and visual breakdowns — this eBook is your complete roadmap from
            idea to launch.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8 text-gray-900 font-bold">
            <div>
              <p className="text-3xl">
                100<span className="text-[#F40E00]">+</span>
              </p>
              <p className="text-sm font-normal text-gray-600">Pages</p>
            </div>
            <div>
              <p className="text-3xl">
                36<span className="text-[#F40E00]">+</span>
              </p>
              <p className="text-sm font-normal text-gray-600">Strategies</p>
            </div>
            <div>
              <p className="text-3xl">
                18<span className="text-[#F40E00]">+</span>
              </p>
              <p className="text-sm font-normal text-gray-600">Templates</p>
            </div>
            <div>
              <p className="text-3xl">
                12<span className="text-[#F40E00]">+</span>
              </p>
              <p className="text-sm font-normal text-gray-600">Interviews</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-[#F40E00] hover:bg-[#d90d00] text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 w-fit"
          >
            Get the Free eBook
          </motion.button>
        </div>
      </div>
    </section>
  );
}

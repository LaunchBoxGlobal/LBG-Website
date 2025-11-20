"use client";
import { GiJourney } from "react-icons/gi";
import React from "react";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CiSearch ,CiPen} from "react-icons/ci";
import { IoBugOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
const steps = [
  {
    id: "01",
    title: "Research",
    desc: "Research the market and users to gain a deeper understanding of aviation and resale patterns.",
    icon: <CiSearch size={25} />,
  },
  {
    id: "02",
    title: "User Journeys",
    desc: "Key tasks are revealed through the organized paths for buyers, sellers, and administrators.",
    icon: <GiJourney size={25} />,
  },
  {
    id: "03",
    title: " Wireframes",
    desc: "Designed low-fidelity wireframes to outline the structure and navigation flow.",
    icon: <LiaNetworkWiredSolid size={25} />,
  },
  {
    id: "04",
    title: " Prototype",
    desc: "Created the high-fidelity interactive prototypes for web apps and Admin Dashboard. ",
    icon: <CiPen size={25} />,
  },
  {
    id: "05",
    title: "Testing",
    desc: "Tested usability and made the adjustments based on the user feedback.|",
    icon: <IoBugOutline size={25} />,
  },
];

function Built() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20  overflow-hidden relative">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="section-heading font-extrabold text-gray-900 leading-tight">
          Building From Vision to <br />{" "}
          <span className="text-[#E9B44C]">Functionality</span>
        </h2>
        <p className="text-gray-500 mt-4 text-base md:text-xl max-w-3xl mx-auto">
       To build a functional and engaging prototype for JetEzee, we utilized our Functionality First Prototyping Workflow, which combines research, wireframes, prototypes, and testing to ensure an intuitive experience for buyers, sellers, and admins alike. Our custom web app development services and user experience design services will guide you through every step of the process
        </p>
      </div>

      {/* Steps with dots between them */}
      <div className="flex flex-wrap padding-x xl:flex-nowrap justify-center items-center ">
        {steps.map((step, i) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <React.Fragment key={step.id}>
              {/* Step card */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 60 }}
                whileHover={{scale: 1.1}}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, delay: i * 0.15 },
                      }
                    : {}
                }
                className="flex flex-colitems-center my-4 text-center w-[220px]"
              >
                {/* <h1 className="text-4xl md:text-5xl font-bold opacity-20">{step.id}</h1> */}
                <div className="bg-[#E9B44C] relative   gap-3  w-[230px] text-white h-[230px] rounded-full flex flex-col items-center p-5">
                  <div className={cn("absolute border-4 border-[#E9B44C] w-[230px] h-[230px] rounded-full border-dashed " , i %2 ? "top-4":"-top-4")} />
                  <div className="w-12 h-12 flex justify-center items-center text-3xl rounded-full bg-white text-[#E9B44C]">
                    0{i + 1}
                  </div>
                  <h1 className="text-xl flex items-center gap-3"> <span>{step.icon}</span> {step.title}</h1>
                  <p className="text-sm">{step.desc}</p>
                </div>
                {/* <h3 className="font-semibold h-[40px] text-base md:text-lg mt-2">{step.title}</h3>
                <p className="text-gray-600 h-[100px] text-sm md:text-base mt-1 max-w-[190px]">
                  {step.desc}
                </p> */}
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Built;

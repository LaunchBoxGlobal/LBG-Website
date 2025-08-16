"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const Output = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: false });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: false });
  return (
    <section className="w-full overflow-hidden py-40 relative">
      <section className="w-full lg:w-[90%] 2xl:w-[80%] mx-auto relative px-6 lg:px-0">
        <img
          src={"/case-studies/sittner-trucking/output-section-lines.png"}
          alt="output-section-lines"
          width={846}
          height={2100}
          className="absolute left-1/2 -translate-x-1/2 top-[10%] midlg:top-[10%] z-10 hidden lg:block lg:w-[70%]"
        />
        <div ref={ref1} className="flex justify-center relative">
          <img
            src={"/case-studies/sittner-trucking/output-green-glow-mockup.png"}
            alt="output-green-glow-mockup"
            width={1280}
            height={647}
            className="mx-auto absolute left-1/2 -translate-x-1/2 z-0 top-20 lg:w-[80%]"
          />
          <motion.div
            className="z-30"
            initial={{ y: 50 }}
            animate={inView1 ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={
                "/case-studies/sittner-trucking/jb-sittner-trucking-login-screen-mockup.png"
              }
              alt="jb-sittner-trucking-login-screen-mockup"
              width={496}
              height={478}
              className="object-contain z-20 lg:w-[45%] mx-auto"
            />
          </motion.div>
        </div>

        <div
          ref={ref2}
          className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 mt-14 midlg:mt-20 z-20"
        >
          <motion.div
            className="z-30"
            initial={{ y: 50 }}
            animate={inView2 ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={`/case-studies/sittner-trucking/jb-sittner-trucking-dashboard-mockup.png`}
              alt="jb-sittner-trucking-dashboard-mockup"
              width={496}
              height={478}
              className="object-contain z-20 lg:w-[80%]"
            />
          </motion.div>
          <motion.div
            className="z-30 flex justify-center lg:justify-end"
            initial={{ y: 50 }}
            animate={inView2 ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={`/case-studies/sittner-trucking/jb-sittner-trucking-profile-screen-mockup.png`}
              alt="jb-sittner-trucking-profile-screen-mockup"
              width={496}
              height={478}
              className="object-contain z-20 lg:w-[80%]"
            />
          </motion.div>
        </div>

        <div ref={ref3} className="flex justify-center mt-14 midlg:mt-28 z-20">
          <motion.div
            className="z-30 mx-auto"
            initial={{ y: 50 }}
            animate={inView3 ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={
                "/case-studies/sittner-trucking/jb-sittner-trucking-edit-profile-screen-mockup.png"
              }
              alt="jb-sittner-trucking-edit-profile-screen-mockup"
              width={496}
              height={478}
              className="object-contain z-20 lg:w-[45%] mx-auto"
            />
          </motion.div>
        </div>

        <div
          ref={ref4}
          className="w-full flex justify-between flex-col lg:flex-row items-center gap-10 mt-14 midlg:mt-20 relative"
        >
          <motion.div
            className="z-30 inline-block"
            initial={{ y: 50 }}
            animate={inView4 ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={`/case-studies/sittner-trucking/jb-sittner-trucking-dashboard-mockup-2.png`}
              alt="jb-sittner-trucking-dashboard-mockup-2"
              width={496}
              height={478}
              className="object-contain z-20 lg:w-[80%]"
            />
          </motion.div>
          <motion.div
            className="z-30 flex justify-center lg:justify-end"
            initial={{ y: 50 }}
            animate={inView4 ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={`/case-studies/sittner-trucking/jb-sittner-trucking-schedule-message-screen-mockup.png`}
              alt="jb-sittner-trucking-schedule-message-screen-mockup"
              width={496}
              height={478}
              className="object-contain z-20 lg:w-[80%]"
            />
          </motion.div>
          <div className="sittner-glow-2 w-[30rem] h-[30rem] absolute -left-[20%] bottom-[-40%] opacity-20" />
          <div className="sittner-glow-2 w-[40rem] h-[40rem] absolute border -right-[25%] bottom-[10%] opacity-15" />
        </div>

        <div ref={ref5} className="flex justify-center mt-14 midlg:mt-20">
          <motion.div
            className="z-30"
            initial={{ y: 50 }}
            animate={inView5 ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={
                "/case-studies/sittner-trucking/jb-sittner-trucking-message-board-screen-mockup.png"
              }
              alt="jb-sittner-trucking-message-board-screen-mockup"
              width={496}
              height={478}
              className="object-contain z-20 lg:w-[45%] mx-auto"
            />
          </motion.div>
        </div>

        <div
          ref={ref6}
          className="w-full flex justify-between flex-col lg:flex-row items-center gap-10 mt-14 midlg:mt-20 relative"
        >
          <motion.div
            className="z-30"
            initial={{ y: 50 }}
            animate={inView6 ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={`/case-studies/sittner-trucking/jb-sittner-trucking-employees-list-screen-mockup.png`}
              alt="jb-sittner-trucking-employees-list-screen-mockup"
              width={496}
              height={478}
              className="object-contain z-20 lg:w-[80%]"
            />
          </motion.div>
          <motion.div
            className="z-30 flex justify-center lg:justify-end"
            initial={{ y: 50 }}
            animate={inView6 ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={`/case-studies/sittner-trucking/jb-sittner-trucking-edit-employee-screen-mockup.png`}
              alt="jb-sittner-trucking-edit-employee-screen-mockup"
              width={496}
              height={478}
              className="object-contain z-20 lg:w-[80%]"
            />
          </motion.div>

          <div className="sittner-glow-2 w-[40rem] h-[40rem] absolute border -right-[25%] bottom-[-20%] opacity-15" />
        </div>
      </section>
    </section>
  );
};

export default Output;

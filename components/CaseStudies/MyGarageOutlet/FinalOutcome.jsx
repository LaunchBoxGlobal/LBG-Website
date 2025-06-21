"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { useInView } from "react-intersection-observer";

const FinalOutcome = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  const imageAnimation = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full padding-x flex flex-col items-center relative overflow-hidden">
      <h2 className="section-heading z-10">Final Outcome</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7 z-10">
        When My Garage Outlet launched, we knew we'd built something special but
        didn't expect how quickly neighbors would embrace it. This mobile app
        development project transformed scattered driveway sales into organized
        community events, with sellers reporting 60% more visitors and buyers
        finding twice as many good deals nearby. The numbers spoke for
        themselves: over 15,000 sales posted in the first three months, with
        payment transactions completing successfully 98% of the time. But beyond
        stats, we watched the app become part of local routines. Saturday
        morning coffee with one hand, My Garage Outlet open in the other. As an
        online flea market, it succeeded where others felt too impersonal. Users
        loved features like the "treasure map" view of nearby sales and the
        simple three-step listing process. Most rewarding were the stories like
        the family who funded their adoption through sales or neighborhoods that
        turned listings into block parties. The app didn't just connect buyers
        and sellers; it brought back the human side of bargain hunting.
      </p>
      <div className="w-full mt-10 midlg:mt-20">
        <div className="w-full">
          <div className="bg-black w-[187px] lg:w-[267px] py-3 lg:py-0 lg:h-[77px] rounded-full flex items-center justify-center gap-2">
            <GoDotFill className="text-white text-lg" />{" "}
            <p className="text-white text-lg lg:text-[22px] font-semibold">
              Log in Progress
            </p>
          </div>
        </div>
        <motion.div
          ref={ref1}
          variants={imageAnimation}
          initial="initial"
          animate={inView1 ? "animate" : "initial"}
          className="w-full lg:pl-28 mt-20"
        >
          <Image
            src={"/case-studies/my-garage-outlet/outcomes-mockup-1.png"}
            alt="outcomes-mockup-1"
            width={605}
            height={796}
            className="object-contain"
          />
        </motion.div>
        <div className="w-full flex justify-end mt-10 lg:mt-20">
          <div className="bg-black w-[280px] lg:w-[375px] py-3 lg:py-0 lg:h-[77px] rounded-full flex items-center justify-center gap-2">
            <GoDotFill className="text-white text-lg" />{" "}
            <p className="text-white text-lg lg:text-[22px] font-semibold">
              Forget Password Process
            </p>
          </div>
        </div>
        <motion.div
          ref={ref2}
          variants={imageAnimation}
          initial="initial"
          animate={inView2 ? "animate" : "initial"}
          className="w-full mt-10 lg:mt-20"
        >
          <Image
            src={"/case-studies/my-garage-outlet/outcomes-mockup-2.png"}
            alt="outcomes-mockup-2"
            width={1477}
            height={812}
            className="object-contain"
          />
        </motion.div>
        <div className="w-full mt-10 lg:mt-20 flex justify-start">
          <div className="bg-black w-[180px] lg:w-[267] py-3 lg:py-0 lg:h-[77px] rounded-full flex items-center justify-center gap-2">
            <GoDotFill className="text-white text-lg" />{" "}
            <p className="text-white text-lg lg:text-[22px] font-semibold">
              Main Screens
            </p>
          </div>
        </div>
        <motion.div
          ref={ref3}
          variants={imageAnimation}
          initial="initial"
          animate={inView3 ? "animate" : "initial"}
          className="w-full mt-10 lg:mt-20"
        >
          <Image
            src={"/case-studies/my-garage-outlet/outcomes-mockup-3.png"}
            alt="outcomes-mockup-3"
            width={1477}
            height={812}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalOutcome;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const mockups = [
  "/case-studies/fitness-by-faith/outcomes-mockup-1.png",
  "/case-studies/fitness-by-faith/outcomes-mockup-2.png",
  "/case-studies/fitness-by-faith/outcomes-mockup-3.png",
  "/case-studies/fitness-by-faith/outcomes-mockup-4.png",
  "/case-studies/fitness-by-faith/outcomes-mockup-5.png",
  "/case-studies/fitness-by-faith/outcomes-mockup-6.png",
  "/case-studies/fitness-by-faith/outcomes-mockup-7.png",
  "/case-studies/fitness-by-faith/outcomes-mockup-8.png",
  "/case-studies/fitness-by-faith/outcomes-mockup-9.png",
];

const mockups_with_alt_tags = [
  {
    image: "/case-studies/fitness-by-faith/outcomes-mockup-1.png",
    alt_tag:
      "Fitness by Faith by Laken logo with bold inspirational fitness branding text",
  },
  {
    image: "/case-studies/fitness-by-faith/outcomes-mockup-2.png",
    alt_tag:
      "Fitness by Faith by Laken: Motivational fitness banner promoting healthy lifestyle transformation journey",
  },
  {
    image: "/case-studies/fitness-by-faith/outcomes-mockup-3.png",
    alt_tag:
      "Fitness by Faith by Laken: User login screen with email, password fields and sign-in options",
  },
  {
    image: "/case-studies/fitness-by-faith/outcomes-mockup-4.png",
    alt_tag:
      "Fitness by Faith by Laken: Profile setup for tracking gender, age, weight and measurements",
  },
  {
    image: "/case-studies/fitness-by-faith/outcomes-mockup-5.png",
    alt_tag:
      "Fitness by Faith by Laken: Shane's workout dashboard with yoga, cardio, and lifting options",
  },
  {
    image: "/case-studies/fitness-by-faith/outcomes-mockup-6.png",
    alt_tag:
      "Fitness by Faith by Laken: High-protein meal plans including Grilled Chicken Salad recipes",
  },
  {
    image: "/case-studies/fitness-by-faith/outcomes-mockup-7.png",
    alt_tag:
      "Fitness by Faith by Laken: Yoga workout dashboard with exercise options and sessions",
  },
  {
    image: "/case-studies/fitness-by-faith/outcomes-mockup-8.png",
    alt_tag:
      "Fitness by Faith by Laken: 20-minute biceps workout with swipe-up instructions",
  },
  {
    image: "/case-studies/fitness-by-faith/outcomes-mockup-9.png",
    alt_tag:
      "Fitness by Faith by Laken: Grilled Chicken Salad nutrition facts and ingredients list",
  },
];

const Outcome = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Final Outcome</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        Fitness by Faith with Laken became more than an app it turned into a
        true workout companion. Within six months, users completed over 50,000
        workouts, with 78% sticking to their plans longer than they ever had
        before. The enterprise mobile app development approach paid off when
        live sessions consistently filled up, and trainers reported clients
        making real progress. The meal plans surprised users by cooking 3x more
        healthy recipes after we added grocery lists. Payment headaches
        disappeared with the simpler system, and trial-to-paid conversions
        jumped 40%. But the real win? Seeing screenshots flood social media of
        people posing with their "Faith with Laken" workout checkmarks. Trainers
        love how easy it is to update plans, while users rave about the
        non-judgmental reminders. One mom even sent us a video of her kids doing
        the family-friendly workouts together. That's when we knew this wasn't
        just another fitness app. It became the encouraging voice people needed
        to keep moving, one faith-filled workout at a time.
      </p>

      <div className="w-full mt-10 lg:mt-20 flex flex-wrap items-start justify-center gap-10">
        {mockups_with_alt_tags?.map((m, i) => {
          return (
            <ImageMockup m={m?.image} key={i} i={i} alt_tag={m?.alt_tag} />
          );
        })}
      </div>
    </section>
  );
};

export default Outcome;

const ImageMockup = ({ m, i, alt_tag }) => {
  const { ref, inView } = useInView({ triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 100 }}
      animate={inView ? { y: 0 } : { y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src={m}
        width={348}
        height={522}
        alt={alt_tag}
        className={`${
          i === 0 || i === 2
            ? "lg:mt-32"
            : i === 4
            ? "lg:-mt-32"
            : i === 7
            ? "lg:-mt-32"
            : ""
        } object-contain w-[248px] xl:w-[348px]`}
      />
    </motion.div>
  );
};

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const Fit100InAction = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  return (
    <section className="w-full">
      <section className="w-full padding-x flex flex-col items-center">
        <h2 className="section-heading">Fit 110 in Action</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7">
          Fit 110 became more than just a fitness store. It became a place
          people actually enjoy shopping from. After weeks of adjusting every
          detail, the store now runs smoothly, loads fast, and guides visitors
          without confusion. The homepage helps users discover the right health
          gadgets and fitness tools, while product pages finally do justice to
          what’s being sold. Customers spend more time on site and explore more.
          It makes buying feel easy. Like a friend recommending gear, not a
          sales pitch. Most exciting? Their team now feels confident pushing
          into bigger fitness marketing campaigns. With clear navigation and
          built-in Health and wellness SEO, it’s a solid foundation for growth.
          The results aren’t just visible in numbers—they’re felt in trust,
          return visits, and happy customers.
        </p>
      </section>

      <section className="w-full mt-10 padding-x h-[739px] max-h-[739px] overflow-hidden relative pt-20">
        <motion.div
          ref={ref1}
          initial={{ rotate: "45deg" }}
          animate={inView1 ? { rotate: "0deg" } : { rotate: "45deg" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full"
        >
          <Image
            src={`/case-studies/fit110/fit110-in-action-new-mockup.webp`}
            alt="fit110-in-action-mockup"
            width={1644}
            height={1057}
            loading="lazy"
            className="mx-auto"
          />
        </motion.div>
        <Image
          src={"/case-studies/fit110/fit110-in-action-blur.webp"}
          alt="fit110-in-action-blur"
          width={1644}
          height={348}
          loading="lazy"
          className="absolute bottom-[-30%] z-10 left-1/2 -translate-x-1/2"
        />
      </section>
    </section>
  );
};

export default Fit100InAction;

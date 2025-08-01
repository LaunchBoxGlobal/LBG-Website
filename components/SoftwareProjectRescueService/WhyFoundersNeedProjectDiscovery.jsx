"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const WhyFoundersNeedProjectDiscovery = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // run animation only once when in view
  });

  // animation variants
  const logoVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.5 },
    visible: (delay) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="w-full relative padding-x py-20 midlg:pt-32 xl:pt-40 midlg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-6 flex-wrap"
    >
      <div className="w-full max-w-[620px] rounded-[21px] relative p-8 flex flex-col items-start justify-between lg:h-[709px] xl:h-[609px] border overflow-hidden">
        <Image
          src={"/new-project/project-discovery-services-bg-1.png"}
          alt="Main_bg.png"
          width={620}
          height={689}
          className="w-full h-full object-cover absolute inset-x-0 top-0 z-0"
        />
        <Image
          src={"/new-project/project-discovery-services-glow.png"}
          alt="project-discovery-services-glow-1"
          width={849}
          height={822}
          className="w-full h-full object-cover absolute inset-x-0 bottom-0 z-0"
        />

        <div className="w-full h-[236px] z-10 flex items-start justify-center relative overflow-hidden -bottom-4">
          {/* Copilot Logo */}
          <motion.img
            src="/new-project/copilot-logo.png"
            alt="copilot-logo"
            className="absolute top-[27%] left-[8%] z-0 w-[30%] max-w-[160px]"
            variants={logoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
          />

          {/* Bolt Logo */}
          <motion.img
            src="/new-project/bolt-logo.png"
            alt="bolt-logo"
            className="absolute top-[8%] left-[20%] z-10 w-[30%] max-w-[160px]"
            variants={logoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.4}
          />

          {/* ChatGPT Logo (Static) */}
          <img
            src="/new-project/chatgpt-logo.png"
            alt="chatgpt-logo"
            className="z-20 w-[30%] max-w-[160px]"
          />

          {/* Lovable Logo */}
          <motion.img
            src="/new-project/lovable-logo.png"
            alt="lovable-logo"
            className="absolute top-[8%] right-[20%] z-10 w-[30%] max-w-[160px]"
            variants={logoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.6}
          />

          {/* New Tech Logo */}
          <motion.img
            src="/new-project/new-tech-icon.png"
            alt="new tech logo"
            className="absolute top-[27%] right-[7%] z-0 w-[30%] max-w-[160px]"
            variants={logoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.8}
          />
        </div>

        <div className="w-full space-y-4">
          <h3 className="font-semibold text-[26px] leading-[1] z-10 relative">
            Why You Should Consider Project Recovery Services
          </h3>
          <p
            className="text-base lg:text-lg text-[#212121] relative z-10"
            style={{ lineHeight: "1.4rem" }}
          >
            Building apps with AI-based coding is exciting. Vibe coding tools
            like Cursor and Loveable make it incredibly easy to build a
            functional prototype of your vision quickly. You’ve made a great
            start, and that’s an achievement worth celebrating. But going from a
            great prototype to a secure and market-ready product often takes
            more than just speed. That’s where our project rescue and code
            rescue services step in. We refine your code, enhance features, and
            get your product ready for launch. Think of it as the expert touch
            your project deserves.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[620px] rounded-[21px] relative h-[120vh] lg:h-[709px] xl:h-[609px] border overflow-hidden flex flex-col items-start justify-between">
        <Image
          src="/new-project/what-founders-need-for-software-recovery-background-image.png"
          alt="what-founders-need-for-software-recovery-background-image"
          width={620}
          height={689}
          className="w-full h-full object-cover absolute inset-x-0 top-0 z-0"
        />
        <Image
          src="/new-project/what-founders-need-for-software-recovery-glow-image.png"
          alt="what-founders-need-for-software-recovery-glow-image"
          width={620}
          height={689}
          className="w-full h-[110%] object-cover absolute inset-x-0 top-0 z-0"
        />

        {/* Text Section */}
        <div className="w-full p-8 flex flex-col items-start justify-start gap-3">
          <h3 className="font-semibold text-[26px] leading-[1] relative z-10">
            What Founders Need for Software Project Recovery
          </h3>
          <p
            className="text-base lg:text-lg text-[#212121] relative z-10"
            style={{ lineHeight: "1.4rem" }}
          >
            Ai based coding has been fascinating for a lot of startups, since it
            feels possible to build what once felt out of reach. However, it’s
            common to pause with a half-built product, that’s simply part of the
            journey. That’s when you need our project rescue and code audit
            services. Effective mobile app, web app, and software project
            recovery services involve more than writing new code; they're also
            about assessing the issue and providing a strategy. With experience
            in project recovery,{" "}
            <Link href={`/services/web-app-development`} className="underline">
              web app
            </Link>
            ,{" "}
            <Link
              href={`/services/mobile-app-development`}
              className="underline"
            >
              mobile app
            </Link>
            , and{" "}
            <Link
              href={`/services/custom-software-development`}
              className="underline"
            >
              software development
            </Link>
            , we can help you rescue your half‑built project with a detailed
            code audit and rebuild it into a stable, functional product.
          </p>
        </div>

        {/* Animated Image */}
        <div className="w-full relative h-[284px]">
          <motion.img
            src="/new-project/what-founders-need-for-software-recovery-image.png"
            alt="what-founders-need-for-software-recovery-image"
            width={474}
            height={284}
            className="absolute bottom-0 inset-x-0 mx-auto z-10 object-contain"
            initial={{ y: 400, opacity: 0 }} // Start hidden below
            animate={inView ? { y: 0, opacity: 1 } : {}} // Slide up into view
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyFoundersNeedProjectDiscovery;

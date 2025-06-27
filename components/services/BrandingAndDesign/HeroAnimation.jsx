"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import "./styles.css";

const HeroAnimation = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-30% 0px -30% -40px",
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkmode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <section
      ref={ref}
      className="w-full h-[330px] md:h-[429px] xl:h-[529.23px] relative mx-auto flex justify-center items-end overflow-hidden"
    >
      <Image
        src={"/ecommerce-page-hero-borders-image.webp"}
        alt="ecommerce-page-hero-borders-image"
        width={980.18}
        height={509}
        priority
        className="absolute inset-0 z-0 left-1/2 -translate-x-1/2 bottom-0 h-full md:w-[70%] xl:w-[60%]"
      />
      {/* left image */}
      <motion.img
        initial={{ opacity: 1, x: "-50%", rotate: 0 }}
        animate={isInView ? { opacity: 1, x: "-50%", rotate: -15 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={
          isDarkMode
            ? "/branding-and-design-mockup-2-dark.png"
            : "/branding-and-design-mockup-2-light.png"
        }
        alt="Branding and design mockup displaying logo variations and visual identity exploration concepts"
        width={244.19}
        height={441.89}
        priority
        className="z-0 w-[160px] h-[309px] md:w-[27%] md:h-[389px] lg:w-[204px] xl:w-[224px] xl:h-[441px] absolute left-[34%] md:left-[30.5%] lg:left-[35.2%] midlg:left-[39%] xl:left-[39%] 2xl:left-[41.5%] md:bottom-[-9.5%] bottom-[-8%]"
      />
      {/* center image */}
      <motion.img
        initial={{ opacity: 1, x: "-50%" }}
        animate={isInView ? { opacity: 1, x: "-50%" } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={
          isDarkMode
            ? "/branding-and-design-hero-mockup-dark-1.webp"
            : "/branding-and-design-hero-mockup-1.webp"
        }
        alt="Branding and design mockup displaying logo concepts and visual identity development process"
        width={244.19}
        height={441.89}
        priority
        className="z-20 w-[160px] h-[309px] md:w-[27%] md:h-[389px] lg:w-[204px] xl:w-[224px] xl:h-[441px] absolute left-1/2 -translate-x-1/2 md:bottom-[-5%] bottom-[-0.68rem]"
      />
      {/* right image */}
      <motion.img
        initial={{ opacity: 1, x: "-50%", rotate: 0 }}
        animate={isInView ? { opacity: 1, x: "-50%", rotate: 15 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={
          isDarkMode
            ? "/branding-and-design-hero-mockup-dark-3.webp"
            : "/branding-and-design-hero-mockup-3.webp"
        }
        alt="Branding and design mockup showing final logo application on packaging and merchandise"
        width={244.19}
        height={441.89}
        priority
        className="z-0 w-[160px] h-[309px] right-[-15%] md:w-[27%] md:h-[389px] lg:w-[204px] xl:w-[224px] xl:h-[441px] absolute md:right-[4%] lg:right-[16%] midlg:right-[24%] xl:right-[24%] md:bottom-[-9.5%] bottom-[-8%] 2xl:right-[30%]"
      />

      {/* toggler */}
      <div
        className={`w-[257px] h-[55px] absolute left-1/2 -translate-x-1/2 z-30 bottom-[5%] flex items-center justify-center gap-3 rounded-2xl ${
          isDarkMode ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <p className={`text-xs font-semibold`}>Dark Mode Toggle Switch</p>
        <label class="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isDarkMode}
            onChange={toggleDarkmode}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#F40E00]"></div>
        </label>
      </div>

      <Image
        src={"/branding-and-design-right-card-1.webp"}
        alt="branding-and-design-right-card-1"
        width={203}
        height={139}
        className="absolute left-[5%] top-[10%] hidden lg:block w-[15%]"
      />

      <Image
        src={"/branding-and-design-leaderboard-card.webp"}
        alt="branding-and-design-leaderboard-card"
        width={203}
        height={139}
        className="absolute w-[18%] lg:left-[6%] xl:left-[10%] bottom-[20%] hidden lg:block"
      />

      {/* rating card */}
      <Image
        src={"/branding-and-design-hero-rating-card.webp"}
        alt="branding-and-design-hero-rating-card"
        width={309}
        height={88}
        className="lg:w-[160px] xl:w-[260px] lg:h-[58px] xl:h-[98px] absolute right-[2%] top-[15%] hidden lg:block"
      />

      <div className="w-[165px] h-[115px] absolute right-[7%] xl:right-[13%] bottom-[15%] hidden lg:flex items-center justify-center">
        <Image
          src={"/branding-and-design-tool-card.webp"}
          alt="branding-and-design-tool-card"
          width={109}
          height={54}
          className="w-[109px] h-[54px]"
        />
        {/* branding-and-design-cursor-image */}
        <Image
          src={"/branding-and-design-cursor-image.webp"}
          alt="branding-and-design-cursor-image"
          width={29}
          height={30}
          className="w-[29px] h-[20px] absolute bottom-0 right-0 design-and-branding-orbiting-cursor object-contain"
        />
      </div>
    </section>
  );
};

export default HeroAnimation;

// ecommerce-page-hero-orange-bg

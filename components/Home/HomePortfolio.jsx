"use client";
import React, { useEffect } from "react";
import ContactButton from "../Global/ContactButton";
import Image from "next/image";
import "../../styles/Portfolio.css";

const HomePortfolio = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".portfolio01, .portfolio02, .portfolio03, .portfolio04, .portfolio05"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0 } // Adjust to control when the animation triggers
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      className="w-full py-10 lg:py-20 relative overflow-hidden padding-x lg:min-h-[100vh] 2xl:min-h-[70vh] flex flex-col items-center justify-center gap-5"
      id="portfolio"
    >
      <h2 className="section-heading lg:leading-[80px] text-center">
        Our <span className="red-text">Portfolio</span>
      </h2>
      <p className="text-base lg:text-[24px] 2xl:text-[30px] w-full lg:w-2/3 mt-1 mb-2 mx-auto text-center lg:leading-[26px] 2xl:leading-[36px] text-gray-400 font-light">
        See the remarkable results achieved <br /> through our proven methods
      </p>
      {/* <div className="w-[220px] mt-2">
        <ContactButton text={"View More"} />
      </div> */}

      <Image
        src={"/portfolio01.png"}
        width={440}
        height={306}
        className="w-[440px] h-[306px] absolute z-20 portfolio01"
      />
      <Image
        src={"/portfolio02.png"}
        width={440}
        height={306}
        className="w-[400px] h-[276px] absolute z-10 portfolio02"
      />
      <Image
        src={"/portfolio03.png"}
        width={440}
        height={306}
        className="w-[400px] h-[276px] absolute z-10 portfolio03"
      />
      <Image
        src={"/portfolio04.png"}
        className="w-[400px] h-[276px] absolute z-10 portfolio04"
        width={440}
        height={306}
      />
      <Image
        src={"/portfolio05.png"}
        className="w-[400px] h-[276px] absolute z-10 portfolio05"
        width={440}
        height={306}
      />
    </section>
  );
};

export default HomePortfolio;

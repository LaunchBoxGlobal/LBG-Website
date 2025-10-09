"use client"
import { ECOMMERCE_DEVELOPMENT_OBSTACLES } from "@/constants/industries/ecommerce-industry-content/ecommerce-development-obstacles";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DevelopmentObstacles = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );


    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );


    const cards = cardsRef.current.filter(Boolean);

    gsap.set(cards, {
      opacity: 0,
      y: 60,
      scale: 0.95,
    });

    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay: index * 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

   
      const imageContainer = card.querySelector(".image-container");
      const title = card.querySelector(".card-title");
      const description = card.querySelector(".card-description");

      card.addEventListener("mouseenter", () => {
        gsap.to(imageContainer, {
          y: -12,
          rotation: 3,
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(card, {
          y: -10,
          boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(title, {
          scale: 1.05,
          duration: 0.3,
          ease: "back.out(1.2)",
        });
        gsap.to(description, {
          opacity: 0.7,
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(imageContainer, {
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(card, {
          y: 0,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(title, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(description, {
          opacity: 0.5,
          duration: 0.3,
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 ref={headingRef} className="section-heading lg:w-[90%] mx-auto">
          How We Overcome Ecommerce{" "}
          <span className="red-text">Development Obstacles</span>
        </h2>

        <p ref={paragraphRef} className="section-paragraph lg:w-[90%] mx-auto">
          Being an expert ecommerce mobile app development company, we help
          startups and businesses overcome every obstacle in their online store
          journey. Our expert team designs and implements solutions that ensure
          smooth, efficient, and high-performing ecommerce experiences that
          increase sales and enhance customer satisfaction.
        </p>
      </section>

      <div className="w-full flex items-center justify-center flex-wrap gap-8 mt-16">
        {ECOMMERCE_DEVELOPMENT_OBSTACLES?.map((t, i) => {
          return (
            <div
              ref={(el) => (cardsRef.current[i] = el)}
              className="w-full md:w-[45%] lg:w-[30%] bg-[#F6F6F6] rounded-[21px] px-7 pb-7 pt-10 flex flex-col items-center text-center gap-3 relative cursor-pointer transition-all duration-300"
              key={i}
            >
              <div className="w-full image-container">
                <img
                  src={t?.image}
                  alt={t?.alt_tag}
                  width={t?.width}
                  height={t?.height}
                  className="mx-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg text-nowrap leading-none mt-5 card-title">
                {t?.title}
              </h3>
              <p className="text-[15px] text-black/50 leading-[1.2] card-description">
                {t?.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DevelopmentObstacles;
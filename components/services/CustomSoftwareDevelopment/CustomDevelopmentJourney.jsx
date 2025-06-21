"use client";
import { PARTNET_WITH_US } from "@/constants/custom-software-development/PartnerWithUs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CustomDevelopmentJourney = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="w-full padding-x pt-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="red-text text-[25px] font-semibold">Partner With Us</h2>
        <h3 className="section-heading w-full">
          Your Perfect Software Solution{" "}
          <span className="red-text">Starts Here</span>
        </h3>
        <p className="section-paragraph lg:w-[85%]">
          Successful software isn’t just about development but solving real
          business challenges. Our custom software development solutions are
          tailored to your needs, ensuring a smooth process, efficient
          execution, and lasting impact.
        </p>
      </section>

      <section className="w-full my-10 lg:mt-16 lg:mb-28 flex flex-col lg:flex-row gap-y-10 items-center justify-center">
        {PARTNET_WITH_US.map((plan, i) => {
          // Determine if this card is hovered
          const isHovered = hoveredIndex === i;

          // Determine if the middle card should be red or white
          const isMiddle = i === 1;
          const middleShouldBeRed = hoveredIndex === null || hoveredIndex === 1;

          // Determine background color
          const bgColor = isMiddle
            ? middleShouldBeRed
              ? "bg-[#F40E00] text-white"
              : "bg-white text-black"
            : isHovered
            ? "bg-[#F40E00] text-white"
            : "bg-white text-black";

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-[90%] md:w-[60%] lg:w-[400px] h-[480px] rounded-[14px] custom-shadow flex flex-col items-center justify-center gap-6 group text-center p-10 relative transition-all duration-300 hover:scale-110 overflow-hidden ${
                i === 0
                  ? "lg:-rotate-6 z-10 lg:top-5 hover:rotate-0 hover:top-0"
                  : i === 2
                  ? "lg:rotate-6 z-10 lg:top-5 hover:rotate-0 hover:top-0"
                  : "z-20"
              } ${bgColor}`}
            >
              <Image
                src={"/custom-software-journey-card-texture-image.webp"}
                alt="custom-software-journey-card-texture-image"
                width={500}
                height={580}
                className="w-[150%] h-[150%] absolute inset-0 z-0 opacity-[0.02]"
              />
              {/* Title */}
              <h4 className="text-[25px] font-bold lg:leading-8">
                {plan?.title}
              </h4>

              {/* Description */}
              <p className="text-base">{plan?.description}</p>

              {/* Link Button */}
              <Link
                href="/contact-us"
                className={`w-[149px] z-10 h-[46px] py-4 rounded-full flex items-center justify-center font-semibold text-base transition-all duration-300 ${
                  bgColor.includes("bg-white")
                    ? "bg-[#F40E00] text-white hover:bg-[#F40E00]"
                    : "bg-white text-[#F40E00] hover:bg-white"
                }`}
              >
                Get In Touch!
              </Link>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default CustomDevelopmentJourney;

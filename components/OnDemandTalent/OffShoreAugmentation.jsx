"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { OFFSHORE_STAFF_AUGMENTATION } from "@/constants/on-demand-talent-content/offshore-staff-augmentation";

const OffShoreAugmentation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#F9F9F9] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Scale Faster with Offshore{" "}
          <span className="red-text">Staff Augmentation</span>
        </h2>
        <p className="section-paragraph lg:w-[90%] mx-auto">
          Scale your team exactly when needed with talent augmentation. Choose
          hourly, weekly, or monthly engagements that adapt to your workflow.
        </p>
      </section>

      <section className="w-full my-10 lg:mt-20 lg:mb-28 flex flex-col lg:flex-row gap-y-10 items-center justify-center">
        {OFFSHORE_STAFF_AUGMENTATION.map((plan, i) => {
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
                className={`w-[200px] z-10 h-[46px] py-4 rounded-full flex items-center justify-center font-semibold text-base transition-all duration-300 ${
                  bgColor.includes("bg-white")
                    ? "bg-[#F40E00] text-white hover:bg-[#F40E00]"
                    : "bg-white text-[#F40E00] hover:bg-white"
                }`}
              >
                {plan?.ctaText}
              </Link>

              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg font-semibold group-hover:text-white transition-all duration-300 ">
                {plan?.phrase}
              </p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default OffShoreAugmentation;

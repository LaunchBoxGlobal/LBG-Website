"use client";
import React, { useState } from "react";
import CustomerReviewCard from "../Global/CustomerReviewCard";
import { REVIEWS } from "@/constants/Reviews";
import CustomerReviewsMobileVersion from "../Global/CustomerReviewsMobileVersion";

const HomeCustomerReviews = () => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleIsHovered = () => {
    setIsHovered((prev) => !prev);
  };
  return (
    <section
      className="w-full h-auto pt-20 lg:pt-0 lg:h-screen relative flex flex-col items-center gap-y-10 justify-start overflow-hidden padding-x"
      id="testimonials"
      // onMouseEnter={() => toggleIsHovered()}
      // onMouseLeave={() => toggleIsHovered()}
    >
      {/* Centered Heading */}
      <h2 className="section-heading text-center static lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 z-0">
        Success Stories From <br /> Our{" "}
        <span className="red-text">Clients</span>
      </h2>

      <div className="w-full lg:hidden h-[300px]">
        <CustomerReviewsMobileVersion />
      </div>

      {/* Sliding Animation Container */}
      <div className="relative w-full h-full overflow-hidden hidden lg:block">
        <div className={`flex flex-col items-center gap-6 animate-slide`}>
          {REVIEWS?.map((review, index) => (
            <div
              className={`relative ${
                index % 2 === 0 ? "left-[30%]" : "right-[30%]"
              }`}
              style={{}}
            >
              <CustomerReviewCard index={1} key={index} text={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframe Animation */}
      <style>
        {`
          @keyframes slideUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }

          .animate-slide {
            animation: slideUp 10s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HomeCustomerReviews;

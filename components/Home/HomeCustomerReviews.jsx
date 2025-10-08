"use client";
import React, { useState } from "react";
import CustomerReviewCard from "../Global/CustomerReviewCard";
import { REVIEWS } from "@/constants/Reviews";
import CustomerReviewsMobileVersion from "../Global/CustomerReviewsMobileVersion";

const HomeCustomerReviews = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="w-full h-auto pt-20 lg:pt-0 lg:h-screen relative flex flex-col items-center gap-y-10 justify-start overflow-hidden padding-x"
      id="testimonials"
    >
      <h2 className="section-heading text-center static lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 z-10">
        Success Stories From <br className="hidden lg:block" /> Our{" "}
        <span className="red-text">Clients</span>
      </h2>

      <div className="w-full lg:hidden h-[350px]">
        <CustomerReviewsMobileVersion />
      </div>

      <div className="relative w-full h-full overflow-hidden hidden lg:block">
        <div className={`flex flex-col items-center gap-6`}>
          {REVIEWS?.map((review, index) => (
            <div
              key={index}
              className={`relative animate-slide ${
                index % 2 === 0 ? "left-[30%]" : "right-[30%]"
              }`}
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
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
            100% { transform: translateY(-350%); }
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

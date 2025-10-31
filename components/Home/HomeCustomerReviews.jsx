"use client";
import React, { useState } from "react";
import CustomerReviewCard from "../Global/CustomerReviewCard";
import { REVIEWS } from "@/constants/Reviews";
import CustomerReviewsMobileVersion from "../Global/CustomerReviewsMobileVersion";
import Image from "next/image";

const HomeCustomerReviews = () => {
  return (
    <section className="w-full  padding-x" id="testimonials">
      <h2 className="section-heading font-bold text-center capitalize">
        Success Stories from <br /> our{" "}
        <span className="text-[#f40e00]">client</span>
      </h2>
      <p className="text-[#212121] text-center text-3xl max-w-4xl py-4 opacity-50 mx-auto">
        We follow a structured and client focused development process to ensure
        the successful delivery of high quality software solutions. Our workflow
        includes:
      </p>
      <div className="flex flex-wrap gap-6 py-6 justify-center">
        {REVIEWS.slice(0,6).map((r, idx) => (
          <div key={idx}>
            <div className="group flex flex-col bg-[#F2F2F2] p-4 w-[350px] hover:text-white items-center gap-3 h-[320px] rounded-2xl hover:bg-[#f40e00] hover:rotate-2 transition-all ease-linear">
              <div className="flex flex-col items-center">
                <Image
                  src={r.image}
                  alt="image"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h4 className="text-sm">{r.author}</h4>
                <h6 className="text-xs">{r.designation}</h6>
              </div>

              <p className="text-base text-center">{r.text}</p>
              <div>
                <svg
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-300 group-hover:[&>rect]:stroke-white group-hover:[&>path]:fill-white"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="56"
                    height="56"
                    rx="28"
                    stroke="#E30000"
                  />
                  <path
                    d="M18 37.5C18 36.4091 18 35.3182 18 34.2273C18 33.0909 18 31.9773 18 30.8864C18 27.3864 18.5238 24.6364 19.5714 22.6364C20.619 20.6364 22.4524 19.5909 25.0714 19.5L26.4286 22.1591C24.9524 22.2955 23.9286 22.9773 23.3571 24.2045C22.8333 25.3864 22.5714 27.2727 22.5714 29.8636H26.3571V37.5H18ZM30.5714 37.5C30.5714 36.4091 30.5714 35.3182 30.5714 34.2273C30.5714 33.0909 30.5714 31.9773 30.5714 30.8864C30.5714 27.3864 31.0952 24.6364 32.1429 22.6364C33.1905 20.6364 35.0238 19.5909 37.6429 19.5L39 22.1591C37.5238 22.2955 36.5 22.9773 35.9286 24.2045C35.4048 25.3864 35.1429 27.2727 35.1429 29.8636H38.9286V37.5H30.5714Z"
                    fill="#FF0000"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCustomerReviews;

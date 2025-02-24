"use client";
import React from "react";
import CustomerReviewCard from "../Global/CustomerReviewCard";

const HomeCustomerReviews = () => {
  return (
    <section className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden padding-x">
      <h2 className="section-heading text-center z-10">
        Success Stories From <br /> Our{" "}
        <span className="red-text">Clients</span>
      </h2>

      <section className="w-full mt-10 grid grid-cols-3 gap-6">
        <CustomerReviewCard
          text={
            "The entire process, from design to development, went smoothly. Thanks to their knowledge, our app is now operating without a glitch"
          }
        />
        <CustomerReviewCard
          text={
            "Highly recommend! They created a user-friendly app that our consumers adore, understood our goal, and offered insightful advice."
          }
        />
        <CustomerReviewCard
          text={
            "The Launchbox Global team was outstanding! Fast response, honest communication, and an excellent end result"
          }
        />
      </section>
    </section>
  );
};

export default HomeCustomerReviews;

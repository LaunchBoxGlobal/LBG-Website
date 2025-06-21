import React from "react";
import SolutionsAnimation from "./SolutionsAnimation";

const Solutions = () => {
  return (
    <section className="w-full">
      <section className="w-full padding-x flex flex-col items-center">
        <h2 className="section-heading">Problems & Solutions</h2>
        <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
          We rolled up our sleeves and built solutions that actually helped real
          church members. Through thoughtful mobile app development, we turned
          each challenge into a feature that made spiritual growth simpler.
          Here's how we fixed things:
        </p>
      </section>
      <SolutionsAnimation />
    </section>
  );
};

export default Solutions;

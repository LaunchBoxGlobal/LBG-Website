import React from "react";
import WireframesAnimation from "./WireframesAnimation";

const Wireframes = () => {
  return (
    <section className="w-full">
      <section className="w-full padding-x flex flex-col items-center">
        <h2 className="section-heading">Wireframes</h2>
        <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
          We sketched every screen by hand first, from the music venue listings
          to payment flows, ensuring visitors could navigate Nashville's spots
          effortlessly. Our enterprise mobile app development process then
          transformed these into clean, intuitive digital layouts.
        </p>
      </section>
      <WireframesAnimation />
    </section>
  );
};

export default Wireframes;

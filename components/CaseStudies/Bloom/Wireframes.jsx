import React from "react";
import WireframesAnimation from "./WireframesAnimation";

const Wireframes = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Wireframes</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        We sketched every screen by hand first from the devotional reader to
        event signups - making sure busy church members could find what they
        needed fast. Our enterprise mobile app development process then turned
        these rough drawings into pixel-perfect layouts that felt familiar and
        easy to navigate.
      </p>

      <WireframesAnimation />
    </section>
  );
};

export default Wireframes;

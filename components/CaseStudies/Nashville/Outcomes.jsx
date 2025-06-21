import React from "react";
import OutcomesAnimation from "./OutcomesAnimation";
import CTA from "./CTA";
import OtherCaseStudies from "../Bloom/OtherCaseStudies";

const Outcomes = () => {
  return (
    <section className="w-full">
      <section className="w-full padding-x flex flex-col items-center pb-20">
        <h2 className="section-heading">Final Outcome</h2>
        <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
          Now You Know Nashville became the digital compass visitors actually
          use. Within months, the app guided thousands through Music City's
          hidden gems from back alley blues joints to biscuit spots only locals
          knew. The mobile app development process paid off when we saw tourists
          confidently navigating the city, phones in hand, unlocking premium
          content after falling for the free categories. Restaurants reported
          more foot traffic from app users. Venues saw longer stays thanks to
          smooth ticket bookings. But the real win? Watching college students
          ditch generic travel guides for our curated picks. The payment
          system's 3% fee kept costs low while the app earned its keep. Most
          telling? The "share location" feature got used constantly - friends
          meeting at spots, couples saving date night ideas. For our team,
          seeing crowds at lesser-known app-featured venues proved we'd built
          something special. This wasn't just another city guide; it became
          Nashville's digital backstage pass.
        </p>

        <OutcomesAnimation />
      </section>
      <div className="mt-10 w-full padding-x">
        <CTA />
      </div>
      <div className="w-full mt-10">
        <OtherCaseStudies />
      </div>
    </section>
  );
};

export default Outcomes;

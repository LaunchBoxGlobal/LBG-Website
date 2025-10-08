import FooterBadges from "@/components/Global/FooterBadges";
import React from "react";

const ShowcasingExpertise = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full lg:w-[80%] text-center">
          Showcasing Our <span className="red-text">Expertise and Impact</span>
        </h2>

        <section className="w-full mt-10 lg:mt-12">
          <FooterBadges />
        </section>
      </section>
    </section>
  );
};

export default ShowcasingExpertise;

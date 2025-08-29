import React from "react";
import "./Styles.css";

const About = () => {
  return (
    <section className="w-full py-10 lg:pt-32 lg:pb-20 flex flex-col items-center gap-6 padding-x">
      <h2
        className={
          "text-xl lg:text-[25px] text-[#f40e00] font-semibold text-center"
        }
      >
        Our Brand Story
      </h2>
      <p className="text-[22px] lg:text-[2.8vw] text-center lg:leading-[56px] text-gray-400 tracking-tight">
        Every great business deserves a story that people remember. So, our
        branding and design team goes beyond visuals. We shape identities that
        connect deeply with your audience. We offer everything your business
        needs, including unique logos and unified color palettes. We focus on
        creating experiences through our design and branding services that spark
        recognition and build trust. We combine creativity with strategy and
        bring marketing & branding together to ensure your business leaves a
        lasting impact. We are here for you, whether you need to refresh your
        identity or need help with brand promotion. We design solutions that
        engage and stay unforgettable.
      </p>
    </section>
  );
};

export default About;

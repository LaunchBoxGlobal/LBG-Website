import React from "react";
import Hero from "./Hero";
import "./style.css";
import Timeline from "./Timeline";
import Process from "./Process";
import Research from "./Research";
import Challenges from "./Challenges";
import Branding from "./Branding";
import Tech from "./Tech";
import MarketingSection from "./MarketingSection";
import Fit100InAction from "./Fit110InAction";
import CTA from "./CTA";
import OtherCaseStudies from "../Bloom/OtherCaseStudies";

const Fit110Page = () => {
  return (
    <main className="w-full overflow-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-36">
      <Hero />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Process />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Research />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Challenges />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Branding />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Tech />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <MarketingSection />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Fit100InAction />
      <CTA />
      <OtherCaseStudies />
    </main>
  );
};

export default Fit110Page;

// marketing-section-lines

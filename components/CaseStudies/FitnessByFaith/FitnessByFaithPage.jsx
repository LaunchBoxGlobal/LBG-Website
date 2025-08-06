import React from "react";
import "./style.css";
import Hero from "./Hero";
import WorkApproach from "./WorkApproach";
import Solutions from "./Solutions";
import Research from "./Research";
import Userflow from "./Userflow";
import BrandIdentity from "./BrandIdentity";
import Outcome from "./Outcome";
import CTA from "./CTA";
import OtherCaseStudies from "../Bloom/OtherCaseStudies";
import Banner2 from "./Banner2";
import Admin from "./Admin";

const FitnessByFaithPage = () => {
  return (
    <main className="w-full overflow-x-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-36">
      <Hero />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <WorkApproach />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Solutions />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Research />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Userflow />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <BrandIdentity />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Banner2 />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Admin />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Outcome />
      <CTA />
      <OtherCaseStudies />
    </main>
  );
};

export default FitnessByFaithPage;

import React from "react";
import Hero from "./Hero";
import "./style.css";
import HowWeDidIt from "./HowWeDidIt";
import ProblemsAndSolutions from "./ProblemsAndSolutions";
import Research from "./Research";
import Mockups from "./Mockups";
import Branding from "./Branding";
import MeasuringSuccess from "./MeasuringSuccess";
import Output from "./Output";
import CTA from "./CTA";
import OtherCaseStudies from "../Bloom/OtherCaseStudies";

const SittnerTruckingPage = () => {
  return (
    <main className="w-full overflow-x-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-28">
      <Hero />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <HowWeDidIt />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Research />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <ProblemsAndSolutions />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Mockups />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Branding />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <MeasuringSuccess />

      <Output />
      {/* <div className="w-full padding-x">
        <div className="w-full border" />
      </div> */}
      <CTA />
      <section className="w-full mt-10">
        <OtherCaseStudies />
      </section>
    </main>
  );
};

export default SittnerTruckingPage;

import React from "react";
import Hero from "./Hero";
// import ResearchJourney from "./ResearchJourney";
// import ProblemSolution from "./ProblemSolution";
// import Wireframes from "./Wireframes";
// import FinalOutcome from "./FinalOutcome";
// import CTA from "./CTA";
import OtherCaseStudies from "./OtherCaseStudies";
import Challenge from "./Challenge";
import Objectives from "./Objectives";
import Research from "./Research";
import Strategy from "./Strategy";
import Design from "./Design";
import TechStack from "./TechStack";
import FinalOutcome from "./FinalOutcome";
import CTA from "./CTA";

// import Branding from './Branding';
function UsubzPage() {
  return (
    <main
      className="w-full"
    >
      <div className="bg-[linear-gradient(to_right,#d4f2e3,#ffffff,#d4f2e3)]   overflow-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-36">
      <Hero />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Challenge />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Objectives />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Research />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Strategy />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Design />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <TechStack />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <FinalOutcome />
      </div>
      <CTA />
      {/*  <ProblemSolution />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Wireframes/>
       <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Branding/>
       <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
  <FinalOutcome/>
  <CTA/>
  <OtherCaseStudies/> */}
      {/* <Timeline/> */}
      {/* <div className="w-full padding-x">
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
      <CTA />*/}
      <OtherCaseStudies />
    </main>
  );
}

export default UsubzPage;
